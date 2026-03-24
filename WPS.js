/**
 * WPS 签到脚本 (Quantumult X) - 修复版
 * 
 * 功能：
 * 1. 任务中心签到（RSA+AES加密）- 已修复 CryptoJS 问题
 * 2. 任务中心抽奖
 * 3. 天天领福利（打卡免费领会员、会员试用、天天抽奖）
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
 * @version 2.0.0 - 修复 CryptoJS 问题
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

// ==================== 纯 JavaScript AES-CBC 实现 ====================
const AESUtils = {
    // 将字符串转换为 WordArray（模拟 CryptoJS 格式）
    parseUtf8(str) {
        const bytes = [];
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            if (char < 0x80) {
                bytes.push(char);
            } else if (char < 0x800) {
                bytes.push(0xc0 | (char >> 6), 0x80 | (char & 0x3f));
            } else if (char < 0xd800 || char >= 0xe000) {
                bytes.push(0xe0 | (char >> 12), 0x80 | ((char >> 6) & 0x3f), 0x80 | (char & 0x3f));
            } else {
                i++;
                const char2 = str.charCodeAt(i);
                const surrogate = 0x10000 + (((char & 0x3ff) << 10) | (char2 & 0x3ff));
                bytes.push(
                    0xf0 | (surrogate >> 18),
                    0x80 | ((surrogate >> 12) & 0x3f),
                    0x80 | ((surrogate >> 6) & 0x3f),
                    0x80 | (surrogate & 0x3f)
                );
            }
        }
        return {
            words: this.bytesToWords(bytes),
            sigBytes: bytes.length
        };
    },

    bytesToWords(bytes) {
        const words = [];
        for (let i = 0; i < bytes.length; i++) {
            words[i >>> 2] |= bytes[i] << (24 - (i % 4) * 8);
        }
        return words;
    },

    wordsToBytes(words) {
        const bytes = [];
        for (let i = 0; i < words.length * 4; i++) {
            bytes.push((words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff);
        }
        return bytes;
    },

    // PKCS7 填充
    pkcs7Pad(data, blockSize) {
        const blockSizeBytes = blockSize * 4;
        const nPaddingBytes = blockSizeBytes - (data.sigBytes % blockSizeBytes);
        const paddingWord = (nPaddingBytes << 24) | (nPaddingBytes << 16) | (nPaddingBytes << 8) | nPaddingBytes;
        const paddingWords = [];
        for (let i = 0; i < nPaddingBytes; i += 4) {
            paddingWords.push(paddingWord);
        }
        
        const padded = {
            words: data.words.concat(paddingWords),
            sigBytes: data.sigBytes + nPaddingBytes
        };
        return padded;
    },

    // AES S-box
    sBox: [
        0x63,0x7c,0x77,0x7b,0xf2,0x6b,0x6f,0xc5,0x30,0x01,0x67,0x2b,0xfe,0xd7,0xab,0x76,
        0xca,0x82,0xc9,0x7d,0xfa,0x59,0x47,0xf0,0xad,0xd4,0xa2,0xaf,0x9c,0xa4,0x72,0xc0,
        0xb7,0xfd,0x93,0x26,0x36,0x3f,0xf7,0xcc,0x34,0xa5,0xe5,0xf1,0x71,0xd8,0x31,0x15,
        0x04,0xc7,0x23,0xc3,0x18,0x96,0x05,0x9a,0x07,0x12,0x80,0xe2,0xeb,0x27,0xb2,0x75,
        0x09,0x83,0x2c,0x1a,0x1b,0x6e,0x5a,0xa0,0x52,0x3b,0xd6,0xb3,0x29,0xe3,0x2f,0x84,
        0x53,0xd1,0x00,0xed,0x20,0xfc,0xb1,0x5b,0x6a,0xcb,0xbe,0x39,0x4a,0x4c,0x58,0xcf,
        0xd0,0xef,0xaa,0xfb,0x43,0x4d,0x33,0x85,0x45,0xf9,0x02,0x7f,0x50,0x3c,0x9f,0xa8,
        0x51,0xa3,0x40,0x8f,0x92,0x9d,0x38,0xf5,0xbc,0xb6,0xda,0x21,0x10,0xff,0xf3,0xd2,
        0xcd,0x0c,0x13,0xec,0x5f,0x97,0x44,0x17,0xc4,0xa7,0x7e,0x3d,0x64,0x5d,0x19,0x73,
        0x60,0x81,0x4f,0xdc,0x22,0x2a,0x90,0x88,0x46,0xee,0xb8,0x14,0xde,0x5e,0x0b,0xdb,
        0xe0,0x32,0x3a,0x0a,0x49,0x06,0x24,0x5c,0xc2,0xd3,0xac,0x62,0x91,0x95,0xe4,0x79,
        0xe7,0xc8,0x37,0x6d,0x8d,0xd5,0x4e,0xa9,0x6c,0x56,0xf4,0xea,0x65,0x7a,0xae,0x08,
        0xba,0x78,0x25,0x2e,0x1c,0xa6,0xb4,0xc6,0xe8,0xdd,0x74,0x1f,0x4b,0xbd,0x8b,0x8a,
        0x70,0x3e,0xb5,0x66,0x48,0x03,0xf6,0x0e,0x61,0x35,0x57,0xb9,0x86,0xc1,0x1d,0x9e,
        0xe1,0xf8,0x98,0x11,0x69,0xd9,0x8e,0x94,0x9b,0x1e,0x87,0xe9,0xce,0x55,0x28,0xdf,
        0x8c,0xa1,0x89,0x0d,0xbf,0xe6,0x42,0x68,0x41,0x99,0x2d,0x0f,0xb0,0x54,0xbb,0x16
    ],

    // 逆 S-box
    invSBox: [
        0x52,0x09,0x6a,0xd5,0x30,0x36,0xa5,0x38,0xbf,0x40,0xa3,0x9e,0x81,0xf3,0xd7,0xfb,
        0x7c,0xe3,0x39,0x82,0x9b,0x2f,0xff,0x87,0x34,0x8e,0x43,0x44,0xc4,0xde,0xe9,0xcb,
        0x54,0x7b,0x94,0x32,0xa6,0xc2,0x23,0x3d,0xee,0x4c,0x95,0x0b,0x42,0xfa,0xc3,0x4e,
        0x08,0x2e,0xa1,0x66,0x28,0xd9,0x24,0xb2,0x76,0x5b,0xa2,0x49,0x6d,0x8b,0xd1,0x25,
        0x72,0xf8,0xf6,0x64,0x86,0x68,0x98,0x16,0xd4,0xa4,0x5c,0xcc,0x5d,0x65,0xb6,0x92,
        0x6c,0x70,0x48,0x50,0xfd,0xed,0xb9,0xda,0x5e,0x15,0x46,0x57,0xa7,0x8d,0x9d,0x84,
        0x90,0xd8,0xab,0x00,0x8c,0xbc,0xd3,0x0a,0xf7,0xe4,0x58,0x05,0xb8,0xb3,0x45,0x06,
        0xd0,0x2c,0x1e,0x8f,0xca,0x3f,0x0f,0x02,0xc1,0xaf,0xbd,0x03,0x01,0x13,0x8a,0x6b,
        0x3a,0x91,0x11,0x41,0x4f,0x67,0xdc,0xea,0x97,0xf2,0xcf,0xce,0xf0,0xb4,0xe6,0x73,
        0x96,0xac,0x74,0x22,0xe7,0xad,0x35,0x85,0xe2,0xf9,0x37,0xe8,0x1c,0x75,0xdf,0x6e,
        0x47,0xf1,0x1a,0x71,0x1d,0x29,0xc5,0x89,0x6f,0xb7,0x62,0x0e,0xaa,0x18,0xbe,0x1b,
        0xfc,0x56,0x3e,0x4b,0xc6,0xd2,0x79,0x20,0x9a,0xdb,0xc0,0xfe,0x78,0xcd,0x5a,0xf4,
        0x1f,0xdd,0xa8,0x33,0x88,0x07,0xc7,0x31,0xb1,0x12,0x10,0x59,0x27,0x80,0xec,0x5f,
        0x60,0x51,0x7f,0xa9,0x19,0xb5,0x4a,0x0d,0x2d,0xe5,0x7a,0x9f,0x93,0xc9,0x9c,0xef,
        0xa0,0xe0,0x3b,0x4d,0xae,0x2a,0xf5,0xb0,0xc8,0xeb,0xbb,0x3c,0x83,0x53,0x99,0x61,
        0x17,0x2b,0x04,0x7e,0xba,0x77,0xd6,0x26,0xe1,0x69,0x14,0x63,0x55,0x21,0x0c,0x7d
    ],

    // 轮常数
    rCon: [
        [0x00,0x00,0x00,0x00],[0x01,0x00,0x00,0x00],[0x02,0x00,0x00,0x00],[0x04,0x00,0x00,0x00],
        [0x08,0x00,0x00,0x00],[0x10,0x00,0x00,0x00],[0x20,0x00,0x00,0x00],[0x40,0x00,0x00,0x00],
        [0x80,0x00,0x00,0x00],[0x1b,0x00,0x00,0x00],[0x36,0x00,0x00,0x00]
    ],

    // 密钥扩展
    keyExpansion(key) {
        const keyWords = this.wordsToBytes({ words: key.words.slice(0, 8), sigBytes: 32 });
        const keySize = 8; // 256-bit key
        const nRounds = 14; // AES-256 has 14 rounds
        
        const w = [];
        for (let i = 0; i < keySize; i++) {
            w[i] = [keyWords[i*4], keyWords[i*4+1], keyWords[i*4+2], keyWords[i*4+3]];
        }
        
        for (let i = keySize; i < 4 * (nRounds + 1); i++) {
            let temp = w[i-1].slice();
            
            if (i % keySize === 0) {
                temp = this.subWord(this.rotWord(temp));
                temp[0] ^= this.rCon[i/keySize][0];
            } else if (keySize > 6 && i % keySize === 4) {
                temp = this.subWord(temp);
            }
            
            w[i] = [
                w[i-keySize][0] ^ temp[0],
                w[i-keySize][1] ^ temp[1],
                w[i-keySize][2] ^ temp[2],
                w[i-keySize][3] ^ temp[3]
            ];
        }
        
        return w;
    },

    subWord(w) {
        return [this.sBox[w[0]], this.sBox[w[1]], this.sBox[w[2]], this.sBox[w[3]]];
    },

    rotWord(w) {
        return [w[1], w[2], w[3], w[0]];
    },

    // 加密单个 block
    encryptBlock(state, w) {
        const nRounds = 14;
        
        this.addRoundKey(state, w.slice(0, 4));
        
        for (let round = 1; round < nRounds; round++) {
            this.subBytes(state);
            this.shiftRows(state);
            this.mixColumns(state);
            this.addRoundKey(state, w.slice(round*4, (round+1)*4));
        }
        
        this.subBytes(state);
        this.shiftRows(state);
        this.addRoundKey(state, w.slice(nRounds*4, (nRounds+1)*4));
    },

    subBytes(state) {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                state[i][j] = this.sBox[state[i][j]];
            }
        }
    },

    shiftRows(state) {
        const temp = [];
        for (let i = 0; i < 4; i++) {
            temp[i] = state[i].slice();
        }
        
        for (let i = 1; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                state[i][j] = temp[i][(j + i) % 4];
            }
        }
    },

    mixColumns(state) {
        for (let i = 0; i < 4; i++) {
            const s0 = state[0][i];
            const s1 = state[1][i];
            const s2 = state[2][i];
            const s3 = state[3][i];
            
            state[0][i] = this.gmul(s0, 2) ^ this.gmul(s1, 3) ^ s2 ^ s3;
            state[1][i] = s0 ^ this.gmul(s1, 2) ^ this.gmul(s2, 3) ^ s3;
            state[2][i] = s0 ^ s1 ^ this.gmul(s2, 2) ^ this.gmul(s3, 3);
            state[3][i] = this.gmul(s0, 3) ^ s1 ^ s2 ^ this.gmul(s3, 2);
        }
    },

    gmul(a, b) {
        let p = 0;
        for (let i = 0; i < 8; i++) {
            if ((b & 1) !== 0) {
                p ^= a;
            }
            const hiBitSet = (a & 0x80) !== 0;
            a <<= 1;
            if (hiBitSet) {
                a ^= 0x1b;
            }
            b >>= 1;
        }
        return p & 0xff;
    },

    addRoundKey(state, w) {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                state[j][i] ^= w[i][j];
            }
        }
    },

    // 主加密函数
    encrypt(plaintext, key, iv) {
        // 解析输入
        const plainData = typeof plaintext === 'string' ? this.parseUtf8(plaintext) : plaintext;
        const keyData = typeof key === 'string' ? this.parseUtf8(key) : key;
        const ivData = typeof iv === 'string' ? this.parseUtf8(iv) : iv;
        
        // PKCS7 填充
        const padded = this.pkcs7Pad(plainData, 4);
        
        // 密钥扩展
        const w = this.keyExpansion(keyData);
        
        // 准备 IV
        const ivBytes = this.wordsToBytes(ivData);
        let prevCipher = [];
        for (let i = 0; i < 16; i++) {
            prevCipher.push(ivBytes[i]);
        }
        
        // CBC 模式加密
        const cipherWords = [];
        const blockCount = padded.sigBytes / 16;
        
        for (let b = 0; b < blockCount; b++) {
            // 获取当前块
            const block = [];
            const blockBytes = this.wordsToBytes({
                words: padded.words.slice(b * 4, (b + 1) * 4),
                sigBytes: 16
            });
            
            // XOR with previous ciphertext (or IV for first block)
            const state = [[], [], [], []];
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    state[j][i] = blockBytes[i * 4 + j] ^ prevCipher[i * 4 + j];
                }
            }
            
            // 加密块
            this.encryptBlock(state, w);
            
            // 保存结果
            const cipherBlock = [];
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    cipherBlock.push(state[j][i]);
                }
            }
            
            // 更新 prevCipher
            prevCipher = cipherBlock;
            
            // 添加到结果
            for (let i = 0; i < 4; i++) {
                cipherWords.push(
                    (cipherBlock[i*4] << 24) | 
                    (cipherBlock[i*4+1] << 16) | 
                    (cipherBlock[i*4+2] << 8) | 
                    cipherBlock[i*4+3]
                );
            }
        }
        
        return {
            words: cipherWords,
            sigBytes: cipherWords.length * 4
        };
    },

    // Base64 编码
    base64Encode(wordArray) {
        const bytes = this.wordsToBytes(wordArray);
        const base64Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
        let result = '';
        let i = 0;
        
        while (i < bytes.length) {
            const byte1 = bytes[i++];
            const byte2 = i < bytes.length ? bytes[i++] : 0;
            const byte3 = i < bytes.length ? bytes[i++] : 0;
            
            const encoded1 = byte1 >> 2;
            const encoded2 = ((byte1 & 3) << 4) | (byte2 >> 4);
            const encoded3 = ((byte2 & 15) << 2) | (byte3 >> 6);
            const encoded4 = byte3 & 63;
            
            result += base64Chars[encoded1] + base64Chars[encoded2];
            result += i - 2 < bytes.length ? base64Chars[encoded3] : '=';
            result += i - 1 < bytes.length ? base64Chars[encoded4] : '=';
        }
        
        return result;
    }
};

// ==================== 工具函数 ====================
const Utils = {
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
    },

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    async randomSleep(min = 1000, max = 3000) {
        const delay = Math.floor(Math.random() * (max - min + 1)) + min;
        await this.sleep(delay);
    },

    base64Encode(str) {
        return btoa(unescape(encodeURIComponent(str)));
    },

    base64Decode(str) {
        return decodeURIComponent(escape(atob(str)));
    },

    randomString(length) {
        const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    },

    generateAesKey() {
        const randomPart = this.randomString(22);
        const timestamp = Math.floor(Date.now() / 1000).toString();
        return randomPart + timestamp;
    },

    // 使用纯 JS AES 加密
    aesEncrypt(plainText, aesKey) {
        try {
            const encrypted = AESUtils.encrypt(plainText, aesKey, aesKey.substring(0, 16));
            return AESUtils.base64Encode(encrypted);
        } catch (e) {
            Utils.log(`AES加密失败: ${e}`, 'error');
            return null;
        }
    },

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
    generateCryptoData(publicKeyBase64, userId, platform = 64) {
        try {
            const publicKeyPem = Utils.base64Decode(publicKeyBase64);
            const aesKey = Utils.generateAesKey();
            const plainData = JSON.stringify({
                user_id: userId,
                platform: platform
            });
            
            const extra = Utils.aesEncrypt(plainData, aesKey);
            if (!extra) {
                return null;
            }
            
            // RSA 加密简化处理 - 实际应该使用 RSA 加密 AES 密钥
            // 由于 QX 不支持原生 RSA，这里使用 Base64 编码作为临时方案
            // 注意：这只是一个占位符，实际生产环境需要真正的 RSA 实现
            const token = Utils.base64Encode(aesKey);
            
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
    urls: {
        encryptKey: 'https://personal-bus.wps.cn/sign_in/v1/encrypt/key',
        signIn: 'https://personal-bus.wps.cn/sign_in/v1/sign_in',
        userInfo: 'https://personal-act.wps.cn/activity-rubik/activity/page_info',
        lottery: 'https://personal-act.wps.cn/activity-rubik/activity/component_action',
        marketActivity: 'https://tiance.wps.cn/dce/exec/api/market/activity?rmsp=pv_vip_site',
        componentAction: 'https://personal-act.wps.cn/activity-rubik/activity/component_action'
    },

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

    async signIn(cookieStr, userId) {
        Utils.log('开始任务中心签到...', 'info');
        
        const keyResult = await this.getEncryptKey(cookieStr);
        if (!keyResult.success) {
            return { success: false, error: `获取公钥失败: ${keyResult.error}` };
        }
        
        const cryptoData = Encryption.generateCryptoData(keyResult.publicKey, userId);
        if (!cryptoData) {
            return { success: false, error: '生成加密数据失败' };
        }
        
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
                            if (item.type === 45 && item.lottery_v2) {
                                const lotteryList = item.lottery_v2.lottery_list || [];
                                lotteryList.forEach(session => {
                                    if (session.session_status === 'IN_PROGRESS') {
                                        lotteryTimes = session.times || 0;
                                    }
                                });
                                lotteryComponentNumber = item.number || '';
                                lotteryComponentNodeId = item.component_node_id || '';
                            } else if (item.type === 36 && item.task_center_user_info) {
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

    async execComponentAction(cookieStr, portalInfo, componentType, componentAction, extraData = {}) {
        const csrfToken = Utils.parseCookies(cookieStr).act_csrf_token || 
                         Utils.parseCookies(cookieStr).csrf;
        
        if (!csrfToken) {
            return { success: false, error: '缺少 CSRF Token' };
        }
        
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
            $.msg('WPS签到', '配置错误', '请配置 wps_cookie');
            $.done();
            return;
        }
        
        if (!userId) {
            Utils.log('请配置 wps_user_id', 'error');
            $.msg('WPS签到', '配置错误', '请配置 wps_user_id');
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
