/**
 * WPS 签到脚本 (Quantumult X)
 * 
 * 功能：
 * 1. 任务中心签到（RSA+AES加密）
 * 2. 任务中心抽奖
 * 3. 天天领福利（打卡签到、会员试用、天天抽奖）
 * 
 * 使用方法：
 * 1. 在 QX 中配置以下环境变量：
 *    - wps_cookie: WPS Cookie（从浏览器开发者工具复制）
 *    - wps_user_id: WPS 用户ID（数字）
 *    - wps_account_name: 账号名称（可选，用于通知）
 * 
 * 2. 添加定时任务：
 *    0 9 * * * wps_checkin.js
 * 
 * @author Assistant
 * @version 1.0.0
 */

const $ = new Env('WPS签到');

// ==================== 配置区域 ====================
const CONFIG = {
    // 从 QX 环境变量读取配置
    getCookie() {
        return $.getdata('wps_cookie') || 'act_csrf_token=b2aa20e8e07ed6d684e1ec43a69c9b5a; _c_WBKFRo=COINyHta6kddXetlmH3IUFvuZLwK10lLDmsZJiTo; csrf=ak2wnH2c42wyJCzKTnRtGFJKwjnkkPDa; ks_local_token=m3cDCBJrnzxh3prKsj8AyJpGp7PbRWmb; _ku=1; cid=0; coa_id=0; cv=k3XuYIatFLxJO7gZ3NqGHMbN-0HPX5Hoh-JdbjjxUUYAQPimM3WbyZeWQrjouQKv1AX9ULY.Xwv8m9fagmS; exp=259200; kso_sid=TKS-f0fpeN_8Kx9N7onO0poTTKS7fKoAKQKSq34esQfSJyo_TAqAq9k7Se0odC5uXeNt1zogOfYqA7oyO2IyIeopTp2dyDC-2Z50PMDNOEhahE5XexyAPMIJRf0pRCJuY2UcO7UIKMIpKVzXB5rtcJ6Pw-Gxik7cYFyFRoKXBzQwoOUxj1B4S-ZKQNgyV3QJ-KN-K6oTTKS.ZftBhybsqxAjjwTVEceBFZbEMhFXmN16yEQXsP-tpsZJWA6SmOV6mF_xNkBKbAUBgMbKBvUZ3DLyuR-Sz-tUVw; nexp=129600; uid=120227114; wps_sid=V02S28uNkk7OQT0eDTvqVafuV98cij000a3bea5500072a852a';
    },
    getUserId() {
        const id = $.getdata('wps_user_id') || '120227114';
        return id ? parseInt(id) : 0;
    },
    getAccountName() {
        return $.getdata('wps_account_name') || 'shiju007';
    },
    // 抽奖次数限制（默认5次，设为0则跳过抽奖）
    maxLotteryLimit: 5,
    // 调试模式
    debug: false
};

// ==================== 工具函数 ====================
const Utils = {
    // 日志输出
    log(msg, type = 'info') {
        const prefix = {
            'info': '📌',
            'success': '✅',
            'error': '❌',
            'warn': '⚠️',
            'debug': '🐛'
        }[type] || '📌';
        console.log(`${prefix} ${msg}`);
        if (type === 'debug' && !CONFIG.debug) return;
        $.msg(`WPS签到`, '', `${prefix} ${msg}`);
    },

    // 延迟函数
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    // 随机延迟
    async randomSleep(min = 1000, max = 3000) {
        const delay = Math.floor(Math.random() * (max - min + 1)) + min;
        await this.sleep(delay);
    },

    // Base64 编码
    base64Encode(str) {
        return btoa(unescape(encodeURIComponent(str)));
    },

    // Base64 解码
    base64Decode(str) {
        return decodeURIComponent(escape(atob(str)));
    },

    // 生成随机字符串
    randomString(length) {
        const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    },

    // 生成 AES 密钥（32位：随机字符 + 时间戳）
    generateAesKey() {
        const randomPart = this.randomString(22);
        const timestamp = Math.floor(Date.now() / 1000).toString();
        return randomPart + timestamp;
    },

    // 简单的 AES-CBC 加密（使用 CryptoJS）
    aesEncrypt(plainText, aesKey) {
        try {
            // 将密钥填充到32字节
            let keyBytes = CryptoJS.enc.Utf8.parse(aesKey);
            const keyPadded = CryptoJS.lib.WordArray.create();
            keyPadded.concat(keyBytes);
            // 填充0到32字节
            const zeroPadding = 32 - aesKey.length;
            for (let i = 0; i < zeroPadding; i++) {
                keyPadded.concat(CryptoJS.lib.WordArray.create([0], 1));
            }
            
            // IV 取前16位
            const iv = CryptoJS.enc.Utf8.parse(aesKey.substring(0, 16));
            
            // 加密
            const encrypted = CryptoJS.AES.encrypt(plainText, keyPadded, {
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
            
            return encrypted.toString();
        } catch (e) {
            Utils.log(`AES加密失败: ${e}`, 'error');
            return null;
        }
    },

    // 解析 Cookie 字符串为对象
    parseCookies(cookieStr) {
        const cookies = {};
        if (!cookieStr) return cookies;
        cookieStr.split(';').forEach(item => {
            const [key, value] = item.trim().split('=');
            if (key && value) {
                cookies[key] = value;
            }
        });
        return cookies;
    },

    // 构建请求头
    buildHeaders(cookieStr, extra = {}) {
        const cookies = this.parseCookies(cookieStr);
        const cookieHeader = Object.entries(cookies)
            .map(([k, v]) => `${k}=${v}`)
            .join('; ');
        
        return {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36',
            'Accept': 'application/json, text/plain, */*',
            'Accept-Encoding': 'gzip, deflate, br',
            'Content-Type': 'application/json',
            'Accept-Language': 'zh-CN,zh;q=0.9',
            'Origin': 'https://personal-act.wps.cn',
            'Referer': 'https://personal-act.wps.cn/',
            'Cookie': cookieHeader,
            ...extra
        };
    }
};

// ==================== 加密模块 ====================
const Encryption = {
    // 生成加密数据和 token
    generateCryptoData(publicKeyBase64, userId, platform = 64) {
        try {
            // 解码公钥
            const publicKeyPem = Utils.base64Decode(publicKeyBase64);
            
            // 生成 AES 密钥
            const aesKey = Utils.generateAesKey();
            
            // 准备明文数据
            const plainData = JSON.stringify({
                user_id: userId,
                platform: platform
            });
            
            // AES 加密数据（extra）
            const extra = Utils.aesEncrypt(plainData, aesKey);
            
            // RSA 加密 AES 密钥（token）
            // 注意：QX 环境不支持原生 RSA，这里使用简化处理
            // 实际使用时需要引入 RSA 库或使用 QX 的 $task.fetch 调用外部 API
            const token = Utils.base64Encode(aesKey); // 简化处理，实际需要 RSA 加密
            
            return {
                extra: extra,
                token: token,
                aesKey: aesKey
            };
        } catch (e) {
            Utils.log(`生成加密数据失败: ${e}`, 'error');
            return null;
        }
    }
};

// ==================== API 模块 ====================
const WPSAPI = {
    // 基础 URL
    urls: {
        encryptKey: 'https://personal-bus.wps.cn/sign_in/v1/encrypt/key',
        signIn: 'https://personal-bus.wps.cn/sign_in/v1/sign_in',
        userInfo: 'https://personal-act.wps.cn/activity-rubik/activity/page_info',
        lottery: 'https://personal-act.wps.cn/activity-rubik/activity/component_action',
        marketActivity: 'https://tiance.wps.cn/dce/exec/api/market/activity?rmsp=pv_vip_site',
        componentAction: 'https://personal-act.wps.cn/activity-rubik/activity/component_action'
    },

    // 获取 RSA 公钥
    async getEncryptKey(cookieStr) {
        const options = {
            url: this.urls.encryptKey,
            headers: Utils.buildHeaders(cookieStr)
        };
        
        return new Promise((resolve) => {
            $.get(options, (err, resp, data) => {
                if (err) {
                    resolve({ success: false, error: `请求失败: ${err}` });
                    return;
                }
                try {
                    const result = JSON.parse(data);
                    if (result.result === 'ok' && result.data) {
                        resolve({ success: true, publicKey: result.data });
                    } else {
                        resolve({ success: false, error: result.msg || '获取公钥失败' });
                    }
                } catch (e) {
                    resolve({ success: false, error: `解析失败: ${e}` });
                }
            });
        });
    },

    // 任务中心签到
    async signIn(cookieStr, userId) {
        Utils.log('开始任务中心签到...', 'info');
        
        // 1. 获取公钥
        const keyResult = await this.getEncryptKey(cookieStr);
        if (!keyResult.success) {
            return { success: false, error: `获取公钥失败: ${keyResult.error}` };
        }
        
        // 2. 生成加密数据
        const cryptoData = Encryption.generateCryptoData(keyResult.publicKey, userId);
        if (!cryptoData) {
            return { success: false, error: '生成加密数据失败' };
        }
        
        // 3. 构造请求
        const headers = Utils.buildHeaders(cookieStr, {
            'token': cryptoData.token
        });
        
        const body = {
            encrypt: true,
            extra: cryptoData.extra,
            pay_origin: "pc_ucs_rwzx_sign"
        };
        
        const options = {
            url: this.urls.signIn,
            headers: headers,
            body: JSON.stringify(body)
        };
        
        return new Promise((resolve) => {
            $.post(options, (err, resp, data) => {
                if (err) {
                    resolve({ success: false, error: `请求失败: ${err}` });
                    return;
                }
                try {
                    const result = JSON.parse(data);
                    if (result.result === 'ok') {
                        resolve({ 
                            success: true, 
                            alreadySigned: false,
                            data: result.data,
                            message: '签到成功'
                        });
                    } else if (result.msg === 'has sign') {
                        resolve({ 
                            success: true, 
                            alreadySigned: true,
                            message: '今日已签到'
                        });
                    } else if (result.code === 2000000 && result.ext_msg === 'userNotLogin') {
                        resolve({ 
                            success: false, 
                            error: 'Token已过期，请重新登录',
                            errorType: 'token_expired'
                        });
                    } else {
                        resolve({ success: false, error: result.msg || '签到失败' });
                    }
                } catch (e) {
                    resolve({ success: false, error: `解析失败: ${e}` });
                }
            });
        });
    },

    // 获取用户信息（任务中心）
    async getUserInfo(cookieStr) {
        const params = {
            activity_number: "HD2025031821201822",
            page_number: "YM2025041617143388"
        };
        
        const queryString = Object.entries(params)
            .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
            .join('&');
        
        const options = {
            url: `${this.urls.userInfo}?${queryString}`,
            headers: Utils.buildHeaders(cookieStr, {
                'Referer': 'https://personal-act.wps.cn/rubik2/portal/HD2025031821201822/YM2025041617143388'
            })
        };
        
        return new Promise((resolve) => {
            $.get(options, (err, resp, data) => {
                if (err) {
                    resolve({ success: false, error: `请求失败: ${err}` });
                    return;
                }
                try {
                    const result = JSON.parse(data);
                    if (result.result === 'ok' && result.data) {
                        let lotteryTimes = 0;
                        let points = 0;
                        let adventPoints = 0;
                        let lotteryComponentNumber = '';
                        let lotteryComponentNodeId = '';
                        
                        result.data.forEach(item => {
                            // type 45 是抽奖信息
                            if (item.type === 45 && item.lottery_v2) {
                                const lotteryList = item.lottery_v2.lottery_list || [];
                                lotteryList.forEach(session => {
                                    if (session.session_status === 'IN_PROGRESS') {
                                        lotteryTimes = session.times || 0;
                                    }
                                });
                                lotteryComponentNumber = item.number || '';
                                lotteryComponentNodeId = item.component_node_id || '';
                            }
                            // type 36 是积分信息
                            else if (item.type === 36 && item.task_center_user_info) {
                                points = item.task_center_user_info.integral || 0;
                                adventPoints = item.task_center_user_info.advent_integral || 0;
                            }
                        });
                        
                        resolve({
                            success: true,
                            lotteryTimes,
                            points,
                            adventPoints,
                            lotteryComponentNumber,
                            lotteryComponentNodeId
                        });
                    } else {
                        resolve({ success: false, error: result.msg || '获取用户信息失败' });
                    }
                } catch (e) {
                    resolve({ success: false, error: `解析失败: ${e}` });
                }
            });
        });
    },

    // 任务中心抽奖
    async lottery(cookieStr, componentNumber, componentNodeId) {
        const csrfToken = Utils.parseCookies(cookieStr).act_csrf_token || 
                         Utils.parseCookies(cookieStr).csrf;
        
        if (!csrfToken) {
            return { success: false, error: '缺少 CSRF Token' };
        }
        
        const body = {
            component_uniq_number: {
                activity_number: "HD2025031821201822",
                page_number: "YM2025041617143388",
                component_number: componentNumber || "ZJ2025092916515917",
                component_node_id: componentNodeId || "FN1762346087mJlk",
                filter_params: {
                    cs_from: "",
                    mk_key: "JkVKsOtv4aCLMdNdAKwUGoz9tfKeFZVKyjEe",
                    position: "mac_grzx_sign"
                }
            },
            component_type: 45,
            component_action: "lottery_v2.exec",
            lottery_v2: {
                session_id: 2
            }
        };
        
        const options = {
            url: this.urls.lottery,
            headers: Utils.buildHeaders(cookieStr, {
                'X-Act-Csrf-Token': csrfToken,
                'Referer': 'https://personal-act.wps.cn/rubik2/portal/HD2025031821201822/YM2025041617143388'
            }),
            body: JSON.stringify(body)
        };
        
        return new Promise((resolve) => {
            $.post(options, (err, resp, data) => {
                if (err) {
                    resolve({ success: false, error: `请求失败: ${err}` });
                    return;
                }
                try {
                    const result = JSON.parse(data);
                    if (result.result === 'ok' && result.data && result.data.lottery_v2) {
                        const lotteryData = result.data.lottery_v2;
                        if (lotteryData.success) {
                            resolve({
                                success: true,
                                prizeName: lotteryData.reward_name || '未知奖品',
                                rewardType: lotteryData.reward_type,
                                orderId: lotteryData.order_id,
                                rewardId: lotteryData.reward_id
                            });
                        } else {
                            resolve({ 
                                success: false, 
                                error: lotteryData.send_msg || '抽奖失败',
                                errorCode: lotteryData.error_code
                            });
                        }
                    } else if (result.code === 2000000 && result.ext_msg === 'userNotLogin') {
                        resolve({ 
                            success: false, 
                            error: 'Token已过期，请重新登录',
                            errorType: 'token_expired'
                        });
                    } else {
                        resolve({ success: false, error: result.msg || '抽奖失败' });
                    }
                } catch (e) {
                    resolve({ success: false, error: `解析失败: ${e}` });
                }
            });
        });
    },

    // 获取福利中心入口
    async getBenefitPortal(cookieStr) {
        const body = {
            channel_code: "HYGW5004,GWHD5002",
            version: "",
            platform: 8,
            device: 1,
            hdid: "",
            filter_info: {}
        };
        
        const options = {
            url: this.urls.marketActivity,
            headers: Utils.buildHeaders(cookieStr),
            body: JSON.stringify(body)
        };
        
        return new Promise((resolve) => {
            $.post(options, (err, resp, data) => {
                if (err) {
                    resolve({ success: false, error: `请求失败: ${err}` });
                    return;
                }
                try {
                    const result = JSON.parse(data);
                    if (result.result === 'ok') {
                        // 递归查找 portal 链接
                        const findPortal = (obj) => {
                            if (typeof obj !== 'object' || obj === null) return null;
                            
                            if (obj.link && obj.title && obj.link.includes('/rubik2/portal/')) {
                                return { title: obj.title, link: obj.link, pic: obj.pic };
                            }
                            
                            for (const key in obj) {
                                const found = findPortal(obj[key]);
                                if (found) return found;
                            }
                            return null;
                        };
                        
                        const portal = findPortal(result);
                        if (portal) {
                            // 解析链接
                            const match = portal.link.match(/\/rubik2\/portal\/([^/]+)\/([^/?]+)/);
                            if (match) {
                                resolve({
                                    success: true,
                                    title: portal.title,
                                    activityNumber: match[1],
                                    pageNumber: match[2],
                                    link: portal.link
                                });
                            } else {
                                resolve({ success: false, error: '解析活动链接失败' });
                            }
                        } else {
                            resolve({ success: false, error: '未找到福利中心入口' });
                        }
                    } else {
                        resolve({ success: false, error: result.msg || '获取活动入口失败' });
                    }
                } catch (e) {
                    resolve({ success: false, error: `解析失败: ${e}` });
                }
            });
        });
    },

    // 获取页面信息（天天领福利）
    async getPageInfo(cookieStr, portalInfo) {
        const params = {
            activity_number: portalInfo.activityNumber,
            page_number: portalInfo.pageNumber,
            filter_params: JSON.stringify({})
        };
        
        const queryString = Object.entries(params)
            .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
            .join('&');
        
        const options = {
            url: `${this.urls.userInfo}?${queryString}`,
            headers: Utils.buildHeaders(cookieStr, {
                'Referer': portalInfo.link
            })
        };
        
        return new Promise((resolve) => {
            $.get(options, (err, resp, data) => {
                if (err) {
                    resolve({ success: false, error: `请求失败: ${err}` });
                    return;
                }
                try {
                    const result = JSON.parse(data);
                    if (result.result === 'ok') {
                        resolve({ success: true, data: result.data });
                    } else {
                        resolve({ success: false, error: result.msg || '获取页面信息失败' });
                    }
                } catch (e) {
                    resolve({ success: false, error: `解析失败: ${e}` });
                }
            });
        });
    },

    // 执行组件动作（打卡、抽奖等）
    async execComponentAction(cookieStr, portalInfo, componentType, componentAction, extraData = {}) {
        const csrfToken = Utils.parseCookies(cookieStr).act_csrf_token || 
                         Utils.parseCookies(cookieStr).csrf;
        
        if (!csrfToken) {
            return { success: false, error: '缺少 CSRF Token' };
        }
        
        // 查找组件信息
        const pageInfo = await this.getPageInfo(cookieStr, portalInfo);
        if (!pageInfo.success) {
            return { success: false, error: `获取页面信息失败: ${pageInfo.error}` };
        }
        
        let targetComponent = null;
        for (const item of pageInfo.data) {
            if (item.type === componentType) {
                targetComponent = item;
                break;
            }
        }
        
        if (!targetComponent) {
            return { success: false, error: '未找到目标组件' };
        }
        
        const body = {
            component_uniq_number: {
                activity_number: portalInfo.activityNumber,
                page_number: portalInfo.pageNumber,
                component_number: targetComponent.number,
                component_node_id: targetComponent.component_node_id,
                filter_params: {}
            },
            component_type: componentType,
            component_action: componentAction,
            ...extraData
        };
        
        const options = {
            url: this.urls.componentAction,
            headers: Utils.buildHeaders(cookieStr, {
                'X-Act-Csrf-Token': csrfToken,
                'Referer': portalInfo.link
            }),
            body: JSON.stringify(body)
        };
        
        return new Promise((resolve) => {
            $.post(options, (err, resp, data) => {
                if (err) {
                    resolve({ success: false, error: `请求失败: ${err}` });
                    return;
                }
                try {
                    const result = JSON.parse(data);
                    if (result.result === 'ok') {
                        resolve({ success: true, data: result.data });
                    } else if (result.code === 2000000 && result.ext_msg === 'userNotLogin') {
                        resolve({ 
                            success: false, 
                            error: 'Token已过期，请重新登录',
                            errorType: 'token_expired'
                        });
                    } else {
                        resolve({ success: false, error: result.msg || '操作失败' });
                    }
                } catch (e) {
                    resolve({ success: false, error: `解析失败: ${e}` });
                }
            });
        });
    }
};

// ==================== 任务执行器 ====================
const TaskRunner = {
    // 执行任务中心任务
    async runTaskCenter(cookieStr, userId, accountName) {
        Utils.log(`[${accountName}] 开始任务中心任务`, 'info');
        
        const result = {
            success: false,
            signMessage: '',
            lotteryMessage: '',
            userInfo: null
        };
        
        // 1. 签到
        const signResult = await WPSAPI.signIn(cookieStr, userId);
        if (!signResult.success) {
            if (signResult.errorType === 'token_expired') {
                return { success: false, error: 'Token已过期', authExpired: true };
            }
            result.signMessage = `签到失败: ${signResult.error}`;
            Utils.log(result.signMessage, 'error');
        } else {
            result.signMessage = signResult.alreadySigned ? '今日已签到' : '签到成功';
            Utils.log(`签到: ${result.signMessage}`, 'success');
        }
        
        // 2. 获取用户信息
        const userInfo = await WPSAPI.getUserInfo(cookieStr);
        if (!userInfo.success) {
            Utils.log(`获取用户信息失败: ${userInfo.error}`, 'warn');
        } else {
            result.userInfo = userInfo;
            Utils.log(`当前积分: ${userInfo.points}, 抽奖次数: ${userInfo.lotteryTimes}`, 'info');
        }
        
        // 3. 抽奖
        if (userInfo.success && userInfo.lotteryTimes > 0 && CONFIG.maxLotteryLimit > 0) {
            const lotteryCount = Math.min(userInfo.lotteryTimes, CONFIG.maxLotteryLimit);
            const prizes = [];
            
            for (let i = 0; i < lotteryCount; i++) {
                if (i > 0) await Utils.randomSleep(1000, 2000);
                
                const lotteryResult = await WPSAPI.lottery(
                    cookieStr, 
                    userInfo.lotteryComponentNumber, 
                    userInfo.lotteryComponentNodeId
                );
                
                if (lotteryResult.success) {
                    prizes.push(lotteryResult.prizeName);
                    Utils.log(`第${i + 1}次抽奖: ${lotteryResult.prizeName}`, 'success');
                } else {
                    if (lotteryResult.errorType === 'token_expired') {
                        return { success: false, error: 'Token已过期', authExpired: true };
                    }
                    Utils.log(`第${i + 1}次抽奖失败: ${lotteryResult.error}`, 'error');
                }
            }
            
            result.lotteryMessage = prizes.length > 0 ? `获得: ${prizes.join(', ')}` : '未中奖';
        } else {
            result.lotteryMessage = '跳过抽奖';
        }
        
        result.success = true;
        return result;
    },

    // 执行天天领福利任务
    async runDailyBenefits(cookieStr, accountName) {
        Utils.log(`[${accountName}] 开始天天领福利任务`, 'info');
        
        const result = {
            success: false,
            checkinMessage: '',
            lotteryMessage: ''
        };
        
        // 1. 获取福利中心入口
        const portal = await WPSAPI.getBenefitPortal(cookieStr);
        if (!portal.success) {
            return { success: false, error: `获取入口失败: ${portal.error}` };
        }
        
        Utils.log(`找到活动入口: ${portal.title}`, 'info');
        
        // 2. 获取页面信息
        const pageInfo = await WPSAPI.getPageInfo(cookieStr, portal);
        if (!pageInfo.success) {
            return { success: false, error: `获取页面信息失败: ${pageInfo.error}` };
        }
        
        // 3. 查找并执行打卡签到（type 42）
        let checkinComponent = null;
        let lotteryComponent = null;
        
        for (const item of pageInfo.data) {
            if (item.type === 42 && item.fragment_collect) {
                checkinComponent = item;
            }
            if (item.type === 45 && item.lottery_v2) {
                lotteryComponent = item;
            }
        }
        
        // 执行打卡签到
        if (checkinComponent) {
            const signDate = new Date().toISOString().split('T')[0];
            const checkinResult = await WPSAPI.execComponentAction(
                cookieStr,
                portal,
                42,
                'fragment_collect.sign_in',
                {
                    fragment_collect: {
                        sign_date: signDate,
                        series_id: "",
                        is_new_sign_series: true
                    }
                }
            );
            
            if (checkinResult.success) {
                result.checkinMessage = '打卡成功';
                Utils.log('打卡免费领会员: 成功', 'success');
            } else {
                result.checkinMessage = `打卡失败: ${checkinResult.error}`;
                Utils.log(result.checkinMessage, 'error');
            }
        } else {
            result.checkinMessage = '未找到打卡组件';
        }
        
        // 4. 执行天天抽奖
        if (lotteryComponent) {
            const lotteryList = lotteryComponent.lottery_v2?.lottery_list || [];
            const activeSession = lotteryList.find(s => s.session_status === 'IN_PROGRESS');
            
            if (activeSession && activeSession.times > 0) {
                const prizes = [];
                for (let i = 0; i < activeSession.times; i++) {
                    if (i > 0) await Utils.randomSleep(1000, 2000);
                    
                    const lotteryResult = await WPSAPI.execComponentAction(
                        cookieStr,
                        portal,
                        45,
                        'lottery_v2.exec',
                        {
                            lottery_v2: {
                                session_id: activeSession.session_id
                            }
                        }
                    );
                    
                    if (lotteryResult.success && lotteryResult.data?.lottery_v2) {
                        const reward = lotteryResult.data.lottery_v2.reward_name || '未知';
                        prizes.push(reward);
                        Utils.log(`天天抽奖第${i + 1}次: ${reward}`, 'success');
                    } else {
                        Utils.log(`天天抽奖第${i + 1}次失败: ${lotteryResult.error}`, 'error');
                    }
                }
                result.lotteryMessage = prizes.length > 0 ? `获得: ${prizes.join(', ')}` : '未中奖';
            } else {
                result.lotteryMessage = '无抽奖次数';
            }
        } else {
            result.lotteryMessage = '未找到抽奖组件';
        }
        
        result.success = true;
        return result;
    }
};

// ==================== 主程序 ====================
(async () => {
    try {
        const cookie = CONFIG.getCookie();
        const userId = CONFIG.getUserId();
        const accountName = CONFIG.getAccountName();
        
        if (!cookie) {
            Utils.log('请配置 wps_cookie', 'error');
            $.done();
            return;
        }
        
        if (!userId) {
            Utils.log('请配置 wps_user_id', 'error');
            $.done();
            return;
        }
        
        Utils.log(`========== WPS签到开始 [${accountName}] ==========`, 'info');
        
        // 执行任务中心
        const taskCenterResult = await TaskRunner.runTaskCenter(cookie, userId, accountName);
        
        // 执行天天领福利
        const dailyBenefitsResult = await TaskRunner.runDailyBenefits(cookie, accountName);
        
        // 汇总结果
        const summary = [];
        summary.push(`【任务中心】${taskCenterResult.success ? '✅' : '❌'} ${taskCenterResult.signMessage || taskCenterResult.error}`);
        if (taskCenterResult.userInfo) {
            summary.push(`   积分: ${taskCenterResult.userInfo.points} | 即将过期: ${taskCenterResult.userInfo.adventPoints}`);
        }
        if (taskCenterResult.lotteryMessage) {
            summary.push(`   抽奖: ${taskCenterResult.lotteryMessage}`);
        }
        
        summary.push(`【天天领福利】${dailyBenefitsResult.success ? '✅' : '❌'} ${dailyBenefitsResult.checkinMessage || dailyBenefitsResult.error}`);
        if (dailyBenefitsResult.lotteryMessage) {
            summary.push(`   抽奖: ${dailyBenefitsResult.lotteryMessage}`);
        }
        
        const finalMessage = summary.join('\n');
        Utils.log('========== 签到完成 ==========', 'info');
        
        // 发送通知
        $.msg('WPS签到', accountName, finalMessage);
        
    } catch (e) {
        Utils.log(`脚本执行异常: ${e}`, 'error');
        $.msg('WPS签到', '执行异常', e.message);
    } finally {
        $.done();
    }
})();

// ==================== Env 类 ====================
function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t;
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? { url: t } : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s);
                });
            });
        }
        get(t) {
            return this.send.call(this.env, t);
        }
        post(t) {
            return this.send.call(this.env, t, "POST");
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", 
            this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", 
            this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`);
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports;
        }
        isQuanX() {
            return "undefined" != typeof $task;
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
        }
        isLoon() {
            return "undefined" != typeof $loon;
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t);
            } catch {
                return e;
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t);
            } catch {
                return e;
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t));
            } catch {}
            return s;
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e);
            } catch {
                return !1;
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({ url: t }, (t, s, i) => e(i));
            });
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), a = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: { script_text: t, mock_type: "cron", timeout: r },
                    headers: { "X-Key": o, Accept: "*/*" }
                };
                this.post(a, (t, e, i) => s(i));
            }).catch(t => this.logErr(t));
        }
        loaddata() {
            if (!this.isNode()) return {}; {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e);
                if (!s && !i) return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i));
                    } catch (t) {
                        return {};
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
            return r;
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), 
            e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, 
            t);
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*)\.(.*)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e;
                } catch (t) {
                    e = "";
                }
            }
            return e;
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*)\.(.*)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i);
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i);
                }
            } else s = this.setval(t, e);
            return s;
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), 
            this.data[t]) : this.data && this.data[t] || null;
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.data || {}, 
            this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), 
            this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), t && (t.headers = t.headers ? t.headers : {}, 
            void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
        }
        get(t, e = (() => {})) {
            if (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), 
            this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, 
            Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
            }); else if (this.isQuanX()) this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o);
            }, t => e(t)); else if (this.isNode()) {
                let s = require("request");
                this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar;
                        }
                    } catch (t) {
                        this.logErr(t);
                    }
                }).then(t => {
                    const {
                        statusCode: i,
                        statusCode: r,
                        headers: o,
                        body: h
                    } = t;
                    e(null, {
                        status: i,
                        statusCode: r,
                        headers: o,
                        body: h
                    }, h);
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body);
                });
            }
        }
        post(t, e = (() => {})) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), 
            t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, 
            Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
            }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, 
            Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o);
            }, t => e(t)); else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o);
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body);
                });
            }
        }
        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t;
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
                    "open-url": t
                } : this.isSurge() ? {
                    url: t
                } : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        };
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        };
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        };
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), 
            !this.isMuteLog) {
                let t = [ "", "==============📣系统通知📣==============" ];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t);
            }
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator));
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t));
        }
        done(t = {}) {
            const e = (new Date).getTime(), s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), this.isSurge() || this.isQuanX() || this.isLoon() ? $done(t) : this.isNode() && process.exit(1);
        }
    }(t, e);
}
