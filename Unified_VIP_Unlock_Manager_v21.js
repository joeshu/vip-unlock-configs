/*
 * ==========================================
 * Unified VIP Unlock Manager v21.2.8 - QX NE 终极修复版
 * 修复：QX NE 脚本实例隔离，使用共享存储
 * ==========================================

 [rewrite_local]
 # 三联中读 - 所有 VIP 接口
 ^https://apis\.lifeweek\.com\.cn/(vip/loadMyVipV2|user/newindex\.do|api/magazine/detail) url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
 # Vvebo - 订阅验证转发
 ^https:\/\/fluxapi\.vvebo\.vip\/v1\/purchase\/iap\/subscription url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
 # iAppDaily - 余额查询接口
 ^https:\/\/api\.iappdaily\.com\/my\/balance url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
 ^https?:\/\/(?:api[23]\.tophub\.(?:xyz|today|app)|tophub(?:2)?\.(?:tophubdata\.com|idaily\.today|remai\.today|iappdaiy\.com|ipadown\.com))\/account\/sync url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
 # gps - GPS工具箱
 ^https:\/\/service\.gpstool\.com\/app\/index\/getUserInfo url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
 ^https?:\/\/mapi\.kouyuxingqiu\.com\/api\/v2 url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
 # mhlz - 魔幻粒子
 ^https?:\/\/ss\.landintheair\.com\/storage\/ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
 # v2ex - V2EX去广告
 ^https?:\/\/.*v2ex\.com\/(?!(?:.*(?:api|login|cdn-cgi|verify|auth|captch|\.(js|css|jpg|jpeg|png|webp|gif|zip|woff|woff2|m3u8|mp4|mov|m4v|avi|mkv|flv|rmvb|wmv|rm|asf|asx|mp3|json|ico|otf|ttf)))).+$ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
 # foday - 复游会
 ^https?:\/\/apis\.folidaymall\.com\/online\/capi\/component\/getPageComponents url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
 # qiujingapp - 球竞APP
 ^https?:\/\/gateway-api\.yizhilive\.com\/api\/v2\/index\/carouses\/(3|6|8|11)(\?.*)?$ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
 ^https?:\/\/gateway-api\.yizhilive\.com\/api\/v3\/index\/all\?.*position=2.*$ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
 # Keep - 课程/会员
 ^https?:\/\/(api|kit)\.gotokeep\.com\/(nuocha|gerudo|athena|nuocha\/plans|suit\/v5\/smart|kprime\/v4\/suit\/sales)\/ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
 # bqwz - 标枪王者
 ^https?:\/\/javelin\.mandrillvr\.com\/api\/data\/get_game_data url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
 # bxkt - 伴学课堂
 ^https?:\/\/api\.banxueketang\.com\/api\/classpal\/app\/v1 url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
 # tv - 影视去广告
 ^https?:\/\/(yzy0916|yz1018|yz250907|yz0320|cfvip)\..+\.com\/(v2|v1)\/api\/(basic\/init|home\/firstScreen|adInfo\/getPageAd|home\/body) url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
 ^https?:\/\/(yz\w{4,6}|cfvip)\..+\.com\/(v2|v1)\/api\/(adInfo|vodInfo)\/(getPageAd|getTextAd|getSearchAd|getVodBodyAd|getVodPauseAd|getUserCenterAd) url reject-dict
 ^https?:\/\/(yz\w{4,6}|cfvip)\..+\.com\/(v2|v1)\/api\/(home\/notice|gameCenter\/gameDetailList) url reject-dict
 # 成语来解压
 ^https?:\/\/yr-game-api\.feigo\.fun\/api\/user\/get-game-user-value url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
 # 星际使命
 ^https?:\/\/star\.jvplay\.cn\/v2\/storage url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
 # wohome - 联通智家
 ^https:\/\/iotpservice\.smartont\.net\/wohome\/dispatcher url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
 # 思朗月影视
 ^https?:\/\/theater-api\.sylangyue\.xyz\/api\/user\/info url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
 # mingcalc - 明计算
 ^https?:\/\/jsq\.mingcalc\.cn\/XMGetMeCount\.ashx url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
 # qmjyzc - 全民解压找茬
 ^https?:\/\/res5\.haotgame\.com\/cu03\/static\/OpenDoors\/Res\/data\/levels\/\d+\.json url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
 # KaDa 阅读
 ^https://service\.hhdd\.com/book2 url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
 # 伴鱼绘本 - VIP解锁
 ^https://picturebook\.ipalfish\.com/pfapi/ugc/picturebook/profile/get url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
 [mitm]
 hostname = 59.82.99.78, *.ipalfish.com, service.hhdd.com, apis.lifeweek.com.cn, fluxapi.vvebo.vip, res5.haotgame.com, jsq.mingcalc.cn, theater-api.sylangyue.xyz, api.iappdaily.com, api2.tophub.today, api2.tophub.app, api3.tophub.xyz, api3.tophub.today, api3.tophub.app, tophub.tophubdata.com, tophub2.tophubdata.com, tophub.idaily.today, tophub2.idaily.today, tophub.remai.today, tophub.iappdaiy.com, tophub.ipadown.com,service.gpstool.com, mapi.kouyuxingqiu.com, ss.landintheair.com, *.v2ex.com, apis.folidaymall.com, gateway-api.yizhilive.com, pagead*.googlesyndication.com, api.gotokeep.com, kit.gotokeep.com, *.gotokeep.*, 120.53.74.*, 162.14.5.*, 42.187.199.*, 101.42.124.*, javelin.mandrillvr.com,api.banxueketang.com, yzy0916.*.com, yz1018.*.com, yz250907.*.com, yz0320.*.com, cfvip.*.com,yr-game-api.feigo.fun,star.jvplay.cn,iotpservice.smartont.net
 */

'use strict';

// ==========================================
// 0. 环境修复
// ==========================================
if (typeof console === 'undefined') {
    globalThis.console = { log: () => {} };
}

// ==========================================
// 1. 配置
// ==========================================
const CONFIG = {
    REMOTE_BASE: 'https://joeshu.github.io/vip-unlock-configs',
    CONFIG_CACHE_TTL: 24 * 60 * 60 * 1000,  // 24小时
    MAX_BODY_SIZE: 5 * 1024 * 1024,
    MAX_PROCESSORS_PER_REQUEST: 30,
    TIMEOUT: 10,
    DEBUG: true
};

const META = {
    name: 'UnifiedVIP',
    version: '21.2.8-qx-ne-final'
};

// ==========================================
// 2. 平台检测 (QX Only)
// ==========================================
const Platform = {
    isQX: true
};

// ==========================================
// 3. 日志系统
// ==========================================
const Logger = (() => {
    const isDebug = CONFIG.DEBUG === true;
    if (!isDebug) {
        return {
            info: () => {},
            error: () => {},
            debug: () => {},
            warn: () => {},
            perf: () => {}
        };
    }

    const now = () => {
        const d = new Date();
        return `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}:${String(d.getSeconds()).padStart(2,'0')}`;
    };

    return {
        info: (tag, msg) => console.log(`[${META.name}][${now()}][INFO][${tag}] ${msg}`),
        error: (tag, msg) => console.log(`[${META.name}][${now()}][ERROR][${tag}] ${msg}`),
        debug: (tag, msg) => console.log(`[${META.name}][${now()}][DEBUG][${tag}] ${msg}`),
        warn: (tag, msg) => console.log(`[${META.name}][${now()}][WARN][${tag}] ${msg}`),
        perf: (tag, startTime) => {
            const elapsed = Date.now() - startTime;
            console.log(`[${META.name}][${now()}][PERF][${tag}] ${elapsed}ms`);
        }
    };
})();

// ==========================================
// 4. Storage - QX NE 兼容版
// ==========================================
const Storage = {
    // 尝试使用 $sharedStorage (QX 1.0.0+)
    _useShared: typeof $sharedStorage !== 'undefined',
    
    readManifest: () => {
        try {
            let body = null, time = null, version = null, domainIndex = null, fallbackPatterns = null;
            
            if (Storage._useShared) {
                body = $sharedStorage.get('manifest_body_v21');
                time = $sharedStorage.get('manifest_time_v21');
                version = $sharedStorage.get('manifest_version_v21');
                domainIndex = $sharedStorage.get('manifest_domain_index_v21');
                fallbackPatterns = $sharedStorage.get('manifest_fallback_v21');
                Logger.debug('Storage', 'Using $sharedStorage');
            } else {
                // 尝试 $prefs (已知在 NE 版有问题)
                body = $prefs.valueForKey('manifest_body_v21');
                time = $prefs.valueForKey('manifest_time_v21');
                version = $prefs.valueForKey('manifest_version_v21');
                domainIndex = $prefs.valueForKey('manifest_domain_index_v21');
                fallbackPatterns = $prefs.valueForKey('manifest_fallback_v21');
                Logger.debug('Storage', 'Using $prefs (may not work in NE)');
            }
            
            const hasData = !!(body && time && version);
            Logger.debug('Storage', `readManifest: hasData=${hasData}`);
            
            return {
                body: body || null,
                time: time || null,
                version: version || null,
                domainIndex: domainIndex || null,
                fallbackPatterns: fallbackPatterns || null
            };
        } catch (e) {
            Logger.error('Storage', `readManifest error: ${e.message}`);
            return { body: null, time: null, version: null, domainIndex: null, fallbackPatterns: null };
        }
    },

    writeManifest: (body, time, version, domainIndex, fallbackPatterns) => {
        try {
            if (!body || !time || !version) {
                Logger.error('Storage', 'writeManifest: missing params');
                return false;
            }
            
            const timeStr = String(time);
            
            if (Storage._useShared) {
                $sharedStorage.set('manifest_body_v21', body);
                $sharedStorage.set('manifest_time_v21', timeStr);
                $sharedStorage.set('manifest_version_v21', version);
                if (domainIndex) $sharedStorage.set('manifest_domain_index_v21', JSON.stringify(domainIndex));
                if (fallbackPatterns) $sharedStorage.set('manifest_fallback_v21', JSON.stringify(fallbackPatterns));
            } else {
                $prefs.setValueForKey('manifest_body_v21', body);
                $prefs.setValueForKey('manifest_time_v21', timeStr);
                $prefs.setValueForKey('manifest_version_v21', version);
                if (domainIndex) $prefs.setValueForKey('manifest_domain_index_v21', JSON.stringify(domainIndex));
                if (fallbackPatterns) $prefs.setValueForKey('manifest_fallback_v21', JSON.stringify(fallbackPatterns));
            }
            
            Logger.info('Storage', `Manifest cached: v${version}`);
            return true;
        } catch (e) {
            Logger.error('Storage', `writeManifest error: ${e.message}`);
            return false;
        }
    },

    readConfig: (configId) => {
        try {
            const key = `vip_cfg_v21_${configId}`;
            if (Storage._useShared) {
                return $sharedStorage.get(key);
            }
            return $prefs.valueForKey(key);
        } catch (e) {
            Logger.error('Storage', `readConfig error: ${e.message}`);
            return null;
        }
    },
    
    writeConfig: (configId, value) => {
        try {
            const key = `vip_cfg_v21_${configId}`;
            if (Storage._useShared) {
                $sharedStorage.set(key, value);
            } else {
                $prefs.setValueForKey(key, value);
            }
            return true;
        } catch (e) {
            Logger.error('Storage', `writeConfig error: ${e.message}`);
            return false;
        }
    },

    read: (key) => {
        try { 
            if (Storage._useShared) return $sharedStorage.get(key);
            return $prefs.valueForKey(key);
        } catch (e) { return null; }
    },
    
    write: (key, value) => {
        try { 
            if (Storage._useShared) {
                $sharedStorage.set(key, value);
                return true;
            }
            $prefs.setValueForKey(key, value);
            return true;
        } catch (e) { return false; }
    },
    
    remove: (key) => {
        try { 
            if (Storage._useShared) {
                $sharedStorage.set(key, '');
                return true;
            }
            $prefs.removeValueForKey(key);
            return true;
        } catch (e) { return false; }
    }
};

// ==========================================
// 5. HTTP 客户端 (QX Only)
// ==========================================
const HTTP = {
    get: (url, timeout = CONFIG.TIMEOUT * 1000) => new Promise((resolve, reject) => {
        const timer = setTimeout(() => reject(new Error('Timeout')), timeout);

        $task.fetch({
            url,
            method: 'GET',
            timeout: Math.ceil(timeout / 1000)
        }).then(
            res => {
                clearTimeout(timer);
                resolve({
                    body: res.body || '',
                    statusCode: res.statusCode || 200,
                    headers: res.headers || {}
                });
            },
            err => {
                clearTimeout(timer);
                reject(new Error(String(err)));
            }
        );
    }),

    post: (options, timeout = CONFIG.TIMEOUT * 1000) => new Promise((resolve, reject) => {
        const timer = setTimeout(() => reject(new Error('Timeout')), timeout);

        $task.fetch({
            url: options.url,
            method: 'POST',
            headers: options.headers || {},
            body: options.body || '',
            timeout: Math.ceil(timeout / 1000)
        }).then(
            res => {
                clearTimeout(timer);
                resolve({
                    body: res.body || '',
                    statusCode: res.statusCode || 200,
                    headers: res.headers || {}
                });
            },
            err => {
                clearTimeout(timer);
                reject(new Error(String(err)));
            }
        );
    })
};

// ==========================================
// 6. 工具函数
// ==========================================
const Utils = {
    safeJsonParse: (str, defaultVal = null) => {
        try { return JSON.parse(str); } catch (e) { return defaultVal; }
    },

    safeJsonStringify: (obj) => {
        try { return JSON.stringify(obj); } catch (e) { return '{}'; }
    },

    getPath: (obj, path) => {
        if (!path || !obj) return undefined;
        const parts = path.split('.');
        let current = obj;
        for (const part of parts) {
            if (current == null) return undefined;
            const match = part.match(/^([^\[\]]+)\[(\d+)\]$/);
            if (match) {
                current = current[match[1]] && current[match[1]][parseInt(match[2])];
            } else {
                current = current[part];
            }
        }
        return current;
    },

    setPath: (obj, path, value) => {
        if (!path || !obj) return obj;
        const parts = path.split('.');
        let current = obj;
        for (let i = 0; i < parts.length - 1; i++) {
            const part = parts[i];
            const next = parts[i + 1];
            const match = part.match(/^([^\[\]]+)\[(\d+)\]$/);
            const isNextArray = /^\[.*\]$/.test(next);

            if (match) {
                const arr = current[match[1]] || (current[match[1]] = []);
                current = arr[parseInt(match[2])] || (arr[parseInt(match[2])] = isNextArray ? [] : {});
            } else {
                current = current[part] || (current[part] = isNextArray ? [] : {});
            }
        }

        const last = parts[parts.length - 1];
        const lastMatch = last.match(/^([^\[\]]+)\[(\d+)\]$/);
        if (lastMatch) {
            const arr = current[lastMatch[1]] || (current[lastMatch[1]] = []);
            arr[parseInt(lastMatch[2])] = value;
        } else {
            current[last] = value;
        }
        return obj;
    },

    simpleHash: (str) => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = ((hash << 5) - hash) + str.charCodeAt(i);
            hash = hash & hash;
        }
        return Math.abs(hash).toString(16);
    },

    formatObject: (obj, separator = '\n') => {
        if (!obj || typeof obj !== 'object') return '';
        const lines = [];
        let index = 1;
        for (const key in obj) {
            lines.push(`${index}、${obj[key]}`);
            index++;
        }
        return lines.join(separator);
    },

    resolveTemplate: (str, obj) => {
        if (typeof str !== 'string') return str;
        if (!str.includes('{{')) return str;

        return str.replace(/\{\{([^}]+)\}\}/g, (match, path) => {
            const trimmedPath = path.trim();
            const value = Utils.getPath(obj, trimmedPath);
            return value !== undefined ? value : match;
        });
    },

    extractHostname: (url) => {
        try {
            const match = url.match(/^https?:\/\/([^\/]+)/i);
            return match ? match[1].toLowerCase() : null;
        } catch (e) {
            return null;
        }
    }
};

// ==========================================
// 7. 正则缓存池
// ==========================================
const RegexPool = (() => {
    const cache = new Map();
    const MAX_SIZE = 200;

    return {
        get: (pattern, flags = '') => {
            const key = `${pattern}|||${flags}`;
            if (cache.has(key)) return cache.get(key);

            try {
                const regex = new RegExp(pattern, flags);
                if (cache.size >= MAX_SIZE) {
                    const firstKey = cache.keys().next().value;
                    cache.delete(firstKey);
                }
                cache.set(key, regex);
                return regex;
            } catch (e) {
                Logger.error('RegexPool', `Invalid pattern: ${pattern}`);
                return /(?!)/;
            }
        },

        clear: () => cache.clear()
    };
})();

// ==========================================
// 8. 处理器工厂
// ==========================================
function createProcessorFactory(requestId) {
    return {
        setFields: (params) => (obj, env) => {
            const fields = params.fields || {};
            for (const path in fields) {
                let value = fields[path];
                if (typeof value === 'string' && value.includes('{{')) {
                    value = Utils.resolveTemplate(value, obj);
                }
                Utils.setPath(obj, path, value);
            }
            return obj;
        },

        mapArray: (params) => (obj, env) => {
            const arr = Utils.getPath(obj, params.path);
            if (!Array.isArray(arr)) return obj;
            const fields = params.fields || {};

            for (const item of arr) {
                if (!item) continue;
                for (const path in fields) {
                    let value = fields[path];
                    if (typeof value === 'string' && value.includes('{{')) {
                        value = Utils.resolveTemplate(value, item);
                    }
                    Utils.setPath(item, path, value);
                }
            }
            return obj;
        },

        filterArray: (params) => (obj, env) => {
            const arr = Utils.getPath(obj, params.path);
            if (!Array.isArray(arr)) return obj;
            const excludeSet = new Set(params.excludeKeys || []);
            Utils.setPath(obj, params.path, arr.filter(item => !excludeSet.has(item && item[params.keyField])));
            return obj;
        },

        clearArray: (params) => (obj, env) => {
            const arr = Utils.getPath(obj, params.path);
            if (Array.isArray(arr)) arr.length = 0;
            return obj;
        },

        deleteFields: (params) => (obj, env) => {
            for (const path of params.paths || []) {
                const parts = path.split('.');
                let current = obj;
                for (let i = 0; i < parts.length - 1; i++) {
                    current = current && current[parts[i]];
                    if (!current) break;
                }
                if (current) delete current[parts[parts.length - 1]];
            }
            return obj;
        },

        sliceArray: (params) => (obj, env) => {
            const arr = Utils.getPath(obj, params.path);
            if (Array.isArray(arr) && arr.length > params.keepCount) {
                Utils.setPath(obj, params.path, arr.slice(0, params.keepCount));
            }
            return obj;
        },

        shiftArray: (params) => (obj, env) => {
            const arr = Utils.getPath(obj, params.path);
            if (Array.isArray(arr) && arr.length > 0) arr.shift();
            return obj;
        },

        processByKeyPrefix: (params) => (obj, env) => {
            const target = Utils.getPath(obj, params.objPath);
            if (!target || typeof target !== 'object') return obj;
            const rules = Object.entries(params.prefixRules || {});
            for (const key in target) {
                const value = target[key];
                if (!value || typeof value !== 'object') continue;
                for (const [prefix, handler] of rules) {
                    if (prefix !== '*' && key.startsWith(prefix)) {
                        Object.assign(value, handler);
                        break;
                    }
                }
            }
            return obj;
        },

        notify: (params) => (obj, env) => {
            const title = params.title || 'UnifiedVIP';
            let subtitle = params.subtitle || '';
            let message = params.message || '';

            if (params.subtitleField) {
                subtitle = Utils.getPath(obj, params.subtitleField) || subtitle;
            }

            if (params.template) {
                message = params.template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
                    return Utils.getPath(obj, key) || match;
                });
            }

            if (params.messageField) {
                const fieldData = Utils.getPath(obj, params.messageField);
                if (fieldData) {
                    if (typeof fieldData === 'object') {
                        message = Utils.formatObject(fieldData, params.separator || '\n');
                    } else {
                        message = String(fieldData);
                    }
                }
            }

            if (params.prefix) {
                message = params.prefix + message;
            }

            const maxLen = params.maxLength || 500;
            if (message.length > maxLen) {
                message = message.substring(0, maxLen) + '...';
            }

            $notify(title, subtitle, message, params.options || {});

            if (params.markField) {
                Utils.setPath(obj, params.markField, true);
            }

            return obj;
        },

        compose: (params, compile) => {
            const steps = params.steps || [];
            if (steps.length > CONFIG.MAX_PROCESSORS_PER_REQUEST) {
                throw new Error(`Too many processors: ${steps.length}`);
            }
            const processors = steps.map(step => compile(step));

            return (obj, env) => {
                let result = obj;
                for (let i = 0; i < processors.length; i++) {
                    if (!result) break;
                    result = processors[i](result, env);
                }
                return result;
            };
        },

        when: (params, compile) => {
            const conditionFn = (obj, env) => {
                const url = env && env.getUrl ? env.getUrl() : '';
                switch (params.condition) {
                    case "empty":
                        const data = Utils.getPath(obj, params.check || 'data');
                        return !data || Object.keys(data).length === 0;
                    case "pathMatch":
                        return params.path && url.includes(params.path);
                    case "queryMatch":
                        const match = url.match(RegexPool.get(`[?&]${params.param}=([^&]+)`));
                        return match && decodeURIComponent(match[1]) === params.value;
                    case "includes":
                        const checkData = Utils.getPath(obj, params.check || 'data');
                        return Array.isArray(checkData) ? checkData.includes(params.value) : String(checkData).includes(params.value);
                    case "isObject":
                        return typeof obj.data === 'object' && !Array.isArray(obj.data);
                    case "isArray":
                        return Array.isArray(obj.data);
                    default:
                        return false;
                }
            };

            const thenProcessor = params.then ? compile(params.then) : null;
            const elseProcessor = params.else ? compile(params.else) : null;

            return (obj, env) => {
                const conditionMet = conditionFn(obj, env);
                if (conditionMet && thenProcessor) {
                    return thenProcessor(obj, env);
                } else if (!conditionMet && elseProcessor) {
                    return elseProcessor(obj, env);
                }
                return obj;
            };
        },

        sceneDispatcher: (params, compile) => {
            const scenes = (params.scenes || []).map(s => ({
                matchFn: (obj, env) => {
                    const url = env && env.getUrl ? env.getUrl() : '';
                    switch (s.when) {
                        case "pathMatch": return s.path && url.includes(s.path);
                        case "queryMatch":
                            const m = url.match(RegexPool.get(`[?&]${s.param}=([^&]+)`));
                            return m && decodeURIComponent(m[1]) === s.value;
                        case "includes":
                            const d = Utils.getPath(obj, s.check || 'data');
                            return Array.isArray(d) ? d.includes(s.value) : String(d).includes(s.value);
                        case "empty":
                            const ed = Utils.getPath(obj, s.check || 'data');
                            return !ed || Object.keys(ed).length === 0;
                        case "isObject": return typeof obj.data === 'object' && !Array.isArray(obj.data);
                        case "isArray": return Array.isArray(obj.data);
                        default: return false;
                    }
                },
                then: compile(s.then)
            }));

            return (obj, env) => {
                for (const scene of scenes) {
                    if (scene.matchFn(obj, env)) {
                        return scene.then(obj, env);
                    }
                }
                return obj;
            };
        }
    };
}

// ==========================================
// 9. 处理器编译器
// ==========================================
function createCompiler(factory) {
    const cache = new Map();

    return function compileProcessor(def) {
        if (!def || !def.processor) return null;

        const cacheKey = Utils.simpleHash(Utils.safeJsonStringify(def));
        if (cache.has(cacheKey)) {
            return cache.get(cacheKey);
        }

        const processorFactory = factory[def.processor];
        if (!processorFactory) return null;

        const processor = processorFactory(def.params, compileProcessor);
        if (processor) cache.set(cacheKey, processor);
        return processor;
    };
}

// ==========================================
// 10. Manifest 加载器（共享存储版）
// ==========================================
class SimpleManifestLoader {
    constructor(requestId) {
        this._requestId = requestId;
        this._domainMap = null;
        this._fallbackPatterns = null;
        this._manifest = null;
    }

    _extractDomainKeys(patternStr) {
        const keys = new Set();
        if (!patternStr || typeof patternStr !== 'string') return Array.from(keys);

        let normalized = patternStr.replace(/\\\./g, '.');
        const domainMatches = normalized.match(/[a-z0-9-]+(?:\.[a-z0-9-]+)*\.[a-z]{2,}/gi);
        
        if (domainMatches) {
            domainMatches.forEach(domain => {
                const clean = domain.toLowerCase();
                if (clean.includes('.') && clean.length > 3 && 
                    !clean.includes('*') && !clean.includes('?') &&
                    !clean.includes('+') && !clean.includes('(') && !clean.includes(')')) {
                    keys.add(clean);
                }
            });
        }

        return Array.from(keys);
    }

    _buildDomainIndex(configs) {
        const index = {};
        const fallback = [];

        for (const [id, info] of Object.entries(configs)) {
            if (!info || !info.urlPattern) continue;

            const keys = this._extractDomainKeys(info.urlPattern);
            const entry = {
                id,
                pattern: info.urlPattern,
                mode: info.mode || 'json',
                name: info.name || id
            };

            if (keys.length === 0) {
                fallback.push(entry);
            } else {
                keys.forEach(key => {
                    if (!index[key]) index[key] = [];
                    index[key].push(entry);
                });
            }
        }

        return { index, fallback };
    }

    async load() {
        const startTime = Date.now();
        const now = Date.now();
        const cached = Storage.readManifest();

        let manifest = null;
        let useCache = false;

        // 检查缓存有效性
        if (cached.body && cached.time && cached.version) {
            const cachedTime = parseInt(cached.time);
            if (!isNaN(cachedTime)) {
                const age = now - cachedTime;
                Logger.debug('ManifestLoader', `Cache age: ${Math.round(age/1000)}s`);
                
                if (age < CONFIG.CONFIG_CACHE_TTL) {
                    manifest = Utils.safeJsonParse(cached.body);
                    if (manifest?.configs) {
                        useCache = true;
                        Logger.info('ManifestLoader', `Using cache v${cached.version}, age=${Math.round(age/1000)}s`);
                        
                        // 恢复域名索引
                        if (cached.domainIndex && cached.fallbackPatterns) {
                            try {
                                this._domainMap = Utils.safeJsonParse(cached.domainIndex);
                                this._fallbackPatterns = Utils.safeJsonParse(cached.fallbackPatterns);
                            } catch (e) {
                                Logger.warn('ManifestLoader', 'Index parse failed, rebuilding');
                                const { index, fallback } = this._buildDomainIndex(manifest.configs);
                                this._domainMap = index;
                                this._fallbackPatterns = fallback;
                            }
                        } else {
                            const { index, fallback } = this._buildDomainIndex(manifest.configs);
                            this._domainMap = index;
                            this._fallbackPatterns = fallback;
                        }
                    }
                } else {
                    Logger.info('ManifestLoader', `Cache expired (${Math.round(age/1000)}s)`);
                }
            }
        }

        // 需要下载
        if (!useCache) {
            try {
                const url = `${CONFIG.REMOTE_BASE}/manifest.json?t=${now}`;
                Logger.info('ManifestLoader', `Downloading: ${url}`);

                const res = await HTTP.get(url);
                if (res.statusCode !== 200 || !res.body) {
                    throw new Error(`HTTP ${res.statusCode}`);
                }

                manifest = Utils.safeJsonParse(res.body);
                if (!manifest?.configs) {
                    throw new Error('Invalid manifest');
                }

                // 构建索引
                const { index, fallback } = this._buildDomainIndex(manifest.configs);
                this._domainMap = index;
                this._fallbackPatterns = fallback;

                // 保存缓存
                Storage.writeManifest(
                    res.body,
                    now,
                    manifest.version || '1.0',
                    index,
                    fallback
                );
                
                Logger.info('ManifestLoader', `Downloaded v${manifest.version}, ${Object.keys(index).length} domains`);

            } catch (e) {
                Logger.error('ManifestLoader', `Download failed: ${e.message}`);

                // 使用过期缓存作为后备
                if (cached.body) {
                    manifest = Utils.safeJsonParse(cached.body);
                    if (manifest?.configs) {
                        Logger.warn('ManifestLoader', 'Using stale cache');
                        const { index, fallback } = this._buildDomainIndex(manifest.configs);
                        this._domainMap = index;
                        this._fallbackPatterns = fallback;
                        useCache = true;
                    }
                }

                if (!useCache) {
                    return this._createEmptyManifest();
                }
            }
        }

        this._manifest = manifest;
        Logger.perf('ManifestLoader', startTime);
        return this._createManifestProxy(manifest);
    }

    _findMatch(url) {
        const hostname = Utils.extractHostname(url);
        if (!hostname) return this._fallbackFind(url);

        Logger.debug('FindMatch', `Looking for: ${hostname}`);

        let candidates = this._domainMap[hostname];
        
        if (!candidates && hostname.includes('.')) {
            const parts = hostname.split('.');
            for (let i = 1; i < parts.length - 1; i++) {
                const parentDomain = parts.slice(i).join('.');
                candidates = this._domainMap[parentDomain];
                if (candidates) {
                    Logger.debug('FindMatch', `Found parent: ${parentDomain}`);
                    break;
                }
            }
        }

        if (candidates) {
            for (const entry of candidates) {
                try {
                    const regex = RegexPool.get(entry.pattern);
                    if (regex.test(url)) {
                        Logger.info('FindMatch', `Hit: ${entry.id} (${entry.name})`);
                        return entry;
                    }
                } catch (e) {
                    Logger.error('FindMatch', `Regex error: ${e.message}`);
                }
            }
        }

        return this._fallbackFind(url);
    }

    _fallbackFind(url) {
        for (const entry of this._fallbackPatterns) {
            try {
                const regex = RegexPool.get(entry.pattern);
                if (regex.test(url)) {
                    Logger.info('FindMatch', `Fallback: ${entry.id}`);
                    return entry;
                }
            } catch (e) {}
        }
        return null;
    }

    _createManifestProxy(manifest) {
        return {
            configs: manifest.configs || {},
            findMatch: (url) => this._findMatch(url)
        };
    }

    _createEmptyManifest() {
        return { configs: {}, findMatch: () => null };
    }
}

// ==========================================
// 11. 配置加载器（共享存储版）
// ==========================================
class SimpleConfigLoader {
    constructor(requestId) {
        this._requestId = requestId;
    }

    async load(configId) {
        // 检查缓存
        const cached = Storage.readConfig(configId);
        if (cached) {
            try {
                const config = Utils.safeJsonParse(cached);
                if (config && config.processor) {
                    Logger.info('ConfigLoader', `${configId} cache hit`);
                    return this._prepareConfig(config);
                }
            } catch (e) {
                Logger.warn('ConfigLoader', `${configId} cache parse failed`);
            }
        }

        // 下载
        Logger.info('ConfigLoader', `${configId} fetching...`);
        const url = `${CONFIG.REMOTE_BASE}/configs/${configId}.json?t=${Date.now()}`;

        try {
            const res = await HTTP.get(url);
            if (res.statusCode !== 200 || !res.body) {
                throw new Error(`HTTP ${res.statusCode}`);
            }

            Storage.writeConfig(configId, res.body);
            Logger.info('ConfigLoader', `${configId} downloaded`);

            return this._prepareConfig(Utils.safeJsonParse(res.body));

        } catch (e) {
            Logger.error('ConfigLoader', `${configId} failed: ${e.message}`);
            throw e;
        }
    }

    _prepareConfig(raw) {
        const config = Object.assign({}, raw);

        if (config.mode === 'forward' || config.mode === 'remote') {
            return config;
        }

        if (raw.regexReplacements) {
            config._regexReplacements = raw.regexReplacements.map(r => ({
                pattern: RegexPool.get(r.pattern, r.flags || 'g'),
                replacement: r.replacement
            }));
        }

        if (raw.gameResources) {
            config._gameResources = raw.gameResources.map(r => ({
                field: r.field,
                value: r.value,
                pattern: RegexPool.get(`"${r.field}":\\d+`, 'g')
            }));
        }

        return config;
    }
}

// ==========================================
// 12. 环境
// ==========================================
class Environment {
    constructor(name) {
        this.name = name;
        this.isQX = Platform.isQX;
        this.isSurge = Platform.isSurge;
        this.isLoon = Platform.isLoon;

        this.response = (typeof $response !== 'undefined') ? $response : {};
        this.request = (typeof $request !== 'undefined') ? $request : {};

        if (this.isQX && typeof this.request === 'string') {
            this.request = { url: this.request };
        }

        if (!this.request.url && this.response?.request?.url) {
            this.request = this.response.request;
        }
    }

    getUrl() {
        let url = this.response?.url || this.request?.url || '';
        if (this.isQX && typeof $request === 'string') {
            url = $request;
        }
        return url.toString();
    }

    getBody() {
        return this.response?.body || '';
    }

    getHeaders() {
        return this.response?.headers || this.request?.headers || {};
    }

    getRequestHeaders() {
        return this.request?.headers || {};
    }

    getRequestBody() {
        return this.request?.body || '';
    }

    done(result) {
        if (typeof $done === 'function') {
            $done(result);
        } else {
            console.log('[DONE]', result);
        }
    }
}

// ==========================================
// 13. VIP引擎
// ==========================================
class VipEngine {
    constructor(env, requestId) {
        this.env = env;
        this._requestId = requestId;
    }

    async process(body, config) {
        if (!body) return { body: '{}' };

        const bodySize = typeof body === 'string' ? body.length : Utils.safeJsonStringify(body).length;
        if (bodySize > CONFIG.MAX_BODY_SIZE) {
            Logger.info('VipEngine', `Body too large (${bodySize} bytes), skipping`);
            return { body: typeof body === 'string' ? body : Utils.safeJsonStringify(body) };
        }

        switch (config.mode) {
            case 'forward':
                return await this._processForward(config);
            case 'remote':
                return await this._processRemote(config);
            case 'json':
                return this._processJson(body, config);
            case 'regex':
                return this._processRegex(body, config);
            case 'game':
                return this._processGame(body, config);
            case 'hybrid':
                return this._processHybrid(body, config);
            case 'html':
                return this._processHtml(body, config);
            default:
                return { body };
        }
    }

    async _processForward(config) {
        const statusTexts = config.statusTexts;
        if (!statusTexts) {
            return {
                status: 'HTTP/1.1 500 Internal Server Error',
                headers: { 'content-type': 'application/json' },
                body: '{"error":"Invalid forward configuration"}'
            };
        }

        const requestHeaders = this.env.getRequestHeaders();
        const forwardHeaders = {};

        if (config.forwardHeaders && typeof config.forwardHeaders === 'object') {
            for (const [key, value] of Object.entries(config.forwardHeaders)) {
                if (typeof value === 'string' && value.startsWith('{{') && value.endsWith('}}')) {
                    const headerName = value.slice(2, -2).toLowerCase();
                    forwardHeaders[key] = requestHeaders[headerName] || '';
                } else {
                    forwardHeaders[key] = value;
                }
            }
        }

        const options = {
            url: config.forwardUrl,
            method: config.method || 'POST',
            headers: forwardHeaders,
            body: this.env.getRequestBody(),
            timeout: config.timeout || 10000
        };

        Logger.info('Forward', `Forwarding to ${options.url}`);

        try {
            const response = await HTTP.post(options);
            const statusCode = response.statusCode || 200;
            const statusText = statusTexts[String(statusCode)] || 'Unknown';

            const responseHeaders = {};
            if (config.responseHeaders && typeof config.responseHeaders === 'object') {
                Object.assign(responseHeaders, config.responseHeaders);
            }

            return {
                status: `HTTP/1.1 ${statusCode} ${statusText}`,
                headers: responseHeaders,
                body: response.body
            };
        } catch (e) {
            Logger.error('Forward', `Failed: ${e.message}`);
            const errorCode = 500;
            const errorText = statusTexts[String(errorCode)] || 'Internal Server Error';

            return {
                status: `HTTP/1.1 ${errorCode} ${errorText}`,
                headers: config.responseHeaders ? {...config.responseHeaders} : {},
                body: Utils.safeJsonStringify({
                    error: 'Request failed',
                    message: e.message,
                    timestamp: new Date().toISOString()
                })
            };
        }
    }

    async _processRemote(config) {
        if (!config.remoteUrl) {
            Logger.error('Remote', 'Missing remoteUrl');
            return {};
        }

        try {
            const response = await HTTP.get(config.remoteUrl, config.timeout || 10000);

            if (response.statusCode !== 200 || !response.body) {
                return {};
            }

            if (config.validateJson !== false) {
                try {
                    JSON.parse(response.body);
                } catch (e) {
                    return {};
                }
            }

            const responseHeaders = {};

            if (config.preserveHeaders && Array.isArray(config.preserveHeaders)) {
                const originalHeaders = (typeof $response !== 'undefined' && $response) ?
                    $response.headers : {};
                for (const key of config.preserveHeaders) {
                    if (originalHeaders[key]) {
                        responseHeaders[key] = originalHeaders[key];
                    }
                }
            }

            if (config.forceHeaders && typeof config.forceHeaders === 'object') {
                Object.assign(responseHeaders, config.forceHeaders);
            }

            if (!responseHeaders['Content-Type'] && !responseHeaders['content-type']) {
                responseHeaders['Content-Type'] = 'application/json; charset=utf-8';
            }

            Logger.info('Remote', `Success: ${response.body.length} bytes`);
            return { headers: responseHeaders, body: response.body };

        } catch (e) {
            Logger.error('Remote', `Error: ${e.message}`);
            return {};
        }
    }

    _processJson(body, config) {
        let obj = Utils.safeJsonParse(body);
        if (!obj) return { body };

        const factory = createProcessorFactory(this._requestId);
        const compile = createCompiler(factory);
        const processor = config.processor ? compile(config.processor) : null;

        if (typeof processor === 'function') {
            try {
                obj = processor(obj, this.env);
                Logger.info('VipEngine', `${config.name || 'VIP'} unlocked`);
            } catch (e) {
                Logger.error('VipEngine', `Processor error: ${e.message}`);
            }
        }

        return { body: Utils.safeJsonStringify(obj) };
    }

    _processRegex(body, config) {
        let modified = body;
        const replacements = config._regexReplacements || config.regexReplacements || [];
        for (const rule of replacements) {
            try {
                modified = modified.replace(rule.pattern, rule.replacement);
            } catch (e) {
                Logger.error('Regex', `Replace failed: ${e.message}`);
            }
        }
        return { body: modified };
    }

    _processGame(body, config) {
        let modified = body;
        const resources = config._gameResources || config.gameResources || [];
        for (const res of resources) {
            try {
                modified = modified.replace(res.pattern, `"${res.field}":${res.value}`);
            } catch (e) {}
        }
        return { body: modified };
    }

    _processHybrid(body, config) {
        let result = this._processJson(body, config);
        if (config._regexReplacements || config.regexReplacements) {
            result = this._processRegex(result.body, config);
        }
        return result;
    }

    _processHtml(body, config) {
        let modified = body;
        for (const rule of config.htmlReplacements || []) {
            try {
                const regex = RegexPool.get(rule.pattern, rule.flags || 'i');
                modified = modified.replace(regex, rule.replacement);
            } catch (e) {
                Logger.error('Html', `Replace failed: ${e.message}`);
            }
        }
        return { body: modified };
    }
}

// ==========================================
// 14. 主函数
// ==========================================
async function main() {
    const requestId = Math.random().toString(36).substr(2, 6).toUpperCase();
    const mainStart = Date.now();

    try {
        const env = new Environment(META.name);
        const url = env.getUrl();
        const body = env.getBody();

        if (!url) {
            Logger.warn('Main', 'No URL detected');
            return env.done({ body: body || '{}' });
        }

        const bodySize = body?.length || 0;
        if (bodySize === 0) {
            Logger.debug('Main', 'Empty body');
            return env.done({ body: '{}' });
        }

        Logger.info('Main', `${requestId} | ${url.replace(/\?.*$/, '').substring(0, 60)} | ${bodySize} bytes`);

        const mLoader = new SimpleManifestLoader(requestId);
        const manifest = await mLoader.load();

        const matchEntry = manifest.findMatch(url);
        if (!matchEntry) {
            Logger.info('Main', 'No rule matched');
            return env.done({ body: body });
        }

        Logger.info('Main', `Matched: ${matchEntry.id} [${matchEntry.mode}]`);

        const cLoader = new SimpleConfigLoader(requestId);
        const config = await cLoader.load(matchEntry.id);
        config.name = config.name || matchEntry.name;
        config.mode = config.mode || matchEntry.mode;

        const engine = new VipEngine(env, requestId);
        const result = await engine.process(body, config);

        Logger.perf('MainTotal', mainStart);
        Logger.info('Main', `${requestId} completed [${config.mode}]`);
        env.done(result);

    } catch (e) {
        Logger.error('Main', `${requestId} failed: ${e.message}`);
        const fallbackBody = (typeof $response !== 'undefined' && $response?.body) ? $response.body : '{}';
        if (typeof $done === 'function') {
            $done({ body: fallbackBody });
        }
    }
}

main();
