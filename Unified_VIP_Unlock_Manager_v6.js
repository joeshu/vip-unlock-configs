/**
 * ==========================================
* Unified VIP Unlock Manager v20.3.2 - QX平衡优化版（最终修复版）
 * 优化项：锁修复 + DEBUG关闭 + 存储缓存 + 正则池 + 处理器优化 + HTTP超时 + 环境检测
 * QX 兼容优化版 - 放弃跨请求缓存，专注单次性能
 * 特性：高性能锁（读多写少）+ 无锁去重切换
 * Unified VIP Unlock Manager v20.3.2 - QX扩展版（支持通知）
 * 新增：notify 处理器，支持系统通知
  * Unified VIP Unlock Manager v20.3.2 - QX强制刷新版
 * 临时修改：强制跳过缓存，重新下载 manifest
 * ==========================================
 [rewrite_local]
 # iAppDaily - 余额查询接口（JSON模式-声明式字段设置）
 ^https:\/\/api\.iappdaily\.com\/my\/balance url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v6.js
 ^https?:\/\/(?:api[23]\.tophub\.(?:xyz|today|app)|tophub(?:2)?\.(?:tophubdata\.com|idaily\.today|remai\.today|iappdaiy\.com|ipadown\.com))\/account\/sync url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v6.js
 # gps - GPS工具箱（JSON模式-声明式字段设置）
 ^https:\/\/service\.gpstool\.com\/app\/index\/getUserInfo url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v6.js
 ^https?:\/\/mapi\.kouyuxingqiu\.com\/api\/v2 url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v6.js
 # mhlz - 魔幻粒子（JSON模式-声明式前缀处理）
 ^https?:\/\/ss\.landintheair\.com\/storage\/ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v6.js
 # v2ex - V2EX去广告（HTML替换模式）
 ^https?:\/\/.*v2ex\.com\/(?!(?:.*(?:api|login|cdn-cgi|verify|auth|captch|\.(js|css|jpg|jpeg|png|webp|gif|zip|woff|woff2|m3u8|mp4|mov|m4v|avi|mkv|flv|rmvb|wmv|rm|asf|asx|mp3|json|ico|otf|ttf)))).+$ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v6.js
 # foday - 复游会去广告（多路径模式-声明式过滤）
 ^https?:\/\/apis\.folidaymall\.com\/online\/capi\/component\/getPageComponents url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v6.js
 # qiujingapp - 球竞APP去广告（多路径模式-声明式清空）
 ^https?:\/\/gateway-api\.yizhilive\.com\/api\/v2\/index\/carouses\/(3|6|8|11)(\?.*)?$ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v6.js
 ^https?:\/\/gateway-api\.yizhilive\.com\/api\/v3\/index\/all\?.*position=2.*$ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v6.js
 # Keep - 课程/会员接口（正则替换模式）
 ^https?:\/\/(api|kit)\.gotokeep\.com\/(nuocha|gerudo|athena|nuocha\/plans|suit\/v5\/smart|kprime\/v4\/suit\/sales)\/ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v6.js
 # bqwz - 标枪王者游戏数据接口（游戏数值模式）
 ^https?:\/\/javelin\.mandrillvr\.com\/api\/data\/get_game_data url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v6.js
 # bxkt - 伴学课堂接口（混合模式-声明式组合）
 ^https?:\/\/api\.banxueketang\.com\/api\/classpal\/app\/v1 url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v6.js
 # tv - 影视去广告接口（多路径模式-完全声明式）
 ^https?:\/\/(yzy0916|yz1018|yz250907|yz0320|cfvip)\..+\.com\/(v2|v1)\/api\/(basic\/init|home\/firstScreen|adInfo\/getPageAd|home\/body) url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v6.js
 ^https?:\/\/(yz\w{4,6}|cfvip)\..+\.com\/(v2|v1)\/api\/(adInfo|vodInfo)\/(getPageAd|getTextAd|getSearchAd|getVodBodyAd|getVodPauseAd|getUserCenterAd) url reject-dict
 ^https?:\/\/(yz\w{4,6}|cfvip)\..+\.com\/(v2|v1)\/api\/(home\/notice|gameCenter\/gameDetailList) url reject-dict
 # 成语来解压 - 微信小程序无限金币（游戏数值模式）
 ^https?:\/\/yr-game-api\.feigo\.fun\/api\/user\/get-game-user-value url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v6.js
 # 星际使命 - 微信小程序游戏数据修改（JSON声明式处理器-完全重构）
 ^https?:\/\/star\.jvplay\.cn\/v2\/storage url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v6.js
# wohome - 联通智家去广告（条件删除模式）
 ^https:\/\/iotpservice\.smartont\.net\/wohome\/dispatcher url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v6.js
# 思朗月影视 - 用户信息VIP解锁
^https?:\/\/theater-api\.sylangyue\.xyz\/api\/user\/info url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v6.js
 # mingcalc - 明计算会员解锁
^https?:\/\/jsq\.mingcalc\.cn\/XMGetMeCount\.ashx url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v6.js
 # qmjyzc - 全民解压找茬关卡辅助
^https?:\/\/res5\.haotgame\.com\/cu03\/static\/OpenDoors\/Res\/data\/levels\/\d+\.json url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v6.js
 [mitm]
 hostname =res5.haotgame.com, jsq.mingcalc.cn, theater-api.sylangyue.xyz, api.iappdaily.com, api2.tophub.today, api2.tophub.app, api3.tophub.xyz, api3.tophub.today, api3.tophub.app, tophub.tophubdata.com, tophub2.tophubdata.com, tophub.idaily.today, tophub2.idaily.today, tophub.remai.today, tophub.iappdaiy.com, tophub.ipadown.com,service.gpstool.com, mapi.kouyuxingqiu.com, ss.landintheair.com, *.v2ex.com, apis.folidaymall.com, gateway-api.yizhilive.com, pagead*.googlesyndication.com, api.gotokeep.com, kit.gotokeep.com, *.gotokeep.*, 120.53.74.*, 162.14.5.*, 42.187.199.*, 101.42.124.*, javelin.mandrillvr.com,api.banxueketang.com, yzy0916.*.com, yz1018.*.com, yz250907.*.com, yz0320.*.com, cfvip.*.com,yr-game-api.feigo.fun,star.jvplay.cn,iotpservice.smartont.net
*/
'use strict';

// ==========================================
// 0. 最基础环境修复
// ==========================================
if (typeof console === 'undefined') {
    globalThis.console = { log: () => {} };
}

// ==========================================
// 1. 配置
// ==========================================
const CONFIG = {
    REMOTE_BASE: 'https://joeshu.github.io/vip-unlock-configs',
    CACHE_TTL: 6 * 60 * 60 * 1000,
    CONFIG_CACHE_TTL: 60 * 60 * 1000,
    MAX_BODY_SIZE: 5 * 1024 * 1024,
    MAX_PROCESSORS_PER_REQUEST: 30,
    TIMEOUT: 10,
    DEBUG: true,
    USE_DISTRIBUTED_LOCK: false,// true=分布式锁（强一致性）, false=内存去重（高性能）
    LOCK_TTL: 3000,
    LOCAL_CACHE_TTL: 100,
    DEDUP_WINDOW: 500,
    
    // ==========================================
    // 强制刷新开关（临时启用）
    // ==========================================
    FORCE_REFRESH_MANIFEST: true,  // ← 设为 true 强制刷新，验证成功后改回 false
    MANIFEST_VERSION: '20.3.2'     // ← 与 manifest.json 中的 version 一致
};

const META = {
    name: 'UnifiedVIP',
    version: '20.3.1-notify'
};

// ==========================================
// 2. 平台检测
// ==========================================
const Platform = {
    isQX: typeof $task !== 'undefined',
    isLoon: typeof $loon !== 'undefined',
    isSurge: typeof $httpClient !== 'undefined' && typeof $loon === 'undefined',
    isStash: typeof $stash !== 'undefined',
    
    getName() {
        if (this.isQX) return 'QX';
        if (this.isLoon) return 'Loon';
        if (this.isSurge) return 'Surge';
        if (this.isStash) return 'Stash';
        return 'Unknown';
    }
};

// ==========================================
// 3. 简易日志
// ==========================================
const SimpleLog = (level, tag, msg, data) => {
    try {
        const now = new Date();
        const time = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
        const dataStr = data ? ` | ${typeof data === 'object' ? JSON.stringify(data) : data}` : '';
        console.log(`[${META.name}][${level.toUpperCase()}][${time}][${tag}] ${msg}${dataStr}`);
    } catch (e) {}
};

// ==========================================
// 4. 通知系统
// ==========================================
const Notify = (() => {
    const send = (title, subtitle, message, options = {}) => {
        try {
            if (Platform.isQX) {
                $notify(title, subtitle, message, options);
                return true;
            } else if (Platform.isLoon) {
                const url = options['open-url'] || options.url;
                if (url) {
                    $notification.post(title, subtitle, message, url);
                } else {
                    $notification.post(title, subtitle, message);
                }
                return true;
            } else if (Platform.isSurge || Platform.isStash) {
                $notification.post(title, subtitle, message, options);
                return true;
            }
            return false;
        } catch (e) {
            SimpleLog('error', 'Notify', 'Send failed', e.message);
            return false;
        }
    };

    return {
        send,
        sendFromConfig: (config, data) => {
            const title = config.title || 'UnifiedVIP';
            let subtitle = config.subtitle || '';
            let message = config.message || '';
            
            if (config.subtitleField) {
                subtitle = Utils.getPath(data, config.subtitleField) || subtitle;
            }
            
            if (config.template && data) {
                message = config.template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
                    return Utils.getPath(data, key) || match;
                });
            }
            
            if (config.messageField) {
                const fieldData = Utils.getPath(data, config.messageField);
                if (fieldData) {
                    if (typeof fieldData === 'object') {
                        message = Utils.formatObject(fieldData, config.separator || '\n');
                    } else {
                        message = String(fieldData);
                    }
                }
            }
            
            if (config.prefix) {
                message = config.prefix + message;
            }
            
            const maxLen = config.maxLength || 500;
            if (message.length > maxLen) {
                message = message.substring(0, maxLen) + '...';
            }
            
            return send(title, subtitle, message, config.options || {});
        }
    };
})();

// ==========================================
// 5. 平衡锁实现
// ==========================================
const BalancedLock = (() => {
    const LOCK_PREFIX = '_vip_lock_';
    const localCache = new Map();
    const recentUrls = new Map();
    
    const distributedAcquire = (key) => {
        const now = Date.now();
        
        const cached = localCache.get(key);
        if (cached && (now - cached) < CONFIG.LOCAL_CACHE_TTL) {
            SimpleLog('debug', 'Lock', 'L1 reject (recent local)');
            return false;
        }
        
        if (Platform.isQX) {
            try {
                const lockKey = LOCK_PREFIX + key;
                const existing = $prefs.valueForKey(lockKey);
                
                if (existing) {
                    const lockTime = parseInt(existing);
                    if (now - lockTime < CONFIG.LOCK_TTL) {
                        SimpleLog('debug', 'Lock', 'L2 reject (distributed locked)');
                        localCache.set(key, now - CONFIG.LOCAL_CACHE_TTL + 50);
                        return false;
                    }
                }
                
                $prefs.setValueForKey(now.toString(), lockKey);
                SimpleLog('debug', 'Lock', 'L2 acquired (distributed)');
                
            } catch (e) {
                SimpleLog('warn', 'Lock', 'Distributed lock failed, fallback to local', e.message);
            }
        }
        
        localCache.set(key, now);
        return true;
    };
    
    const distributedRelease = (key) => {
        localCache.delete(key);
        if (Platform.isQX) {
            try {
                $prefs.setValueForKey('', LOCK_PREFIX + key);
                SimpleLog('debug', 'Lock', 'Released (distributed)');
            } catch (e) {}
        }
    };
    
    const memoryAcquire = (url) => {
        const now = Date.now();
        const key = url.split('?')[0];
        
        const lastSeen = recentUrls.get(key);
        if (lastSeen && (now - lastSeen) < CONFIG.DEDUP_WINDOW) {
            SimpleLog('debug', 'Lock', `Memory reject (seen ${now - lastSeen}ms ago)`);
            return false;
        }
        
        recentUrls.set(key, now);
        
        if (recentUrls.size > 50) {
            const cutoff = now - CONFIG.DEDUP_WINDOW;
            for (const [k, v] of recentUrls) {
                if (v < cutoff) recentUrls.delete(k);
            }
        }
        
        return true;
    };
    
    return {
        acquire: (key, url) => {
            if (CONFIG.USE_DISTRIBUTED_LOCK) {
                return distributedAcquire(key);
            } else {
                return memoryAcquire(url);
            }
        },
        release: (key) => {
            if (CONFIG.USE_DISTRIBUTED_LOCK) {
                distributedRelease(key);
            }
        },
        makeKey: (url) => {
            const cleanUrl = url.split('?')[0];
            let hash = 0;
            for (let i = 0; i < cleanUrl.length; i++) {
                hash = ((hash << 5) - hash) + cleanUrl.charCodeAt(i);
                hash = hash & hash;
            }
            return Math.abs(hash).toString(36).substring(0, 10);
        },
        getMode: () => CONFIG.USE_DISTRIBUTED_LOCK ? 'distributed' : 'memory'
    };
})();

// ==========================================
// 6. 获取锁
// ==========================================
const URL = (typeof $request !== 'undefined' && $request.url) ? $request.url : 
            (typeof $response !== 'undefined' && $response.url) ? $response.url : '';

const LOCK_KEY = BalancedLock.makeKey(URL);

SimpleLog('info', 'Lock', `Mode: ${BalancedLock.getMode()}, Key: ${LOCK_KEY}`);

if (!BalancedLock.acquire(LOCK_KEY, URL)) {
    SimpleLog('info', 'Lock', 'Duplicate request, skipping');
    if (typeof $response !== 'undefined' && $response) {
        $done({ body: $response.body });
    } else {
        $done({});
    }
    return;
}

const releaseLock = () => {
    BalancedLock.release(LOCK_KEY);
    SimpleLog('debug', 'Lock', 'Released');
};

// ==========================================
// 7. 完整日志系统
// ==========================================
const Logger = (() => {
    const isDebug = CONFIG.DEBUG === true;
    
    if (!isDebug) {
        return new Proxy({}, {
            get: () => () => {}
        });
    }
    
    const log = (level, tag, msg, data) => {
        const now = new Date();
        const time = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}.${String(now.getMilliseconds()).padStart(3,'0')}`;
        const prefix = `[${META.name}][${level.toUpperCase()}][${time}]`;
        const tagStr = tag ? `[${tag}]` : '';
        
        let dataStr = '';
        if (data !== undefined && data !== null) {
            if (data instanceof Error) {
                dataStr = ` | Error: ${data.message}`;
            } else if (typeof data === 'object') {
                try {
                    dataStr = ` | ${JSON.stringify(data)}`;
                } catch (e) {
                    dataStr = ' | [Object]';
                }
            } else {
                dataStr = ` | ${data}`;
            }
        }
        
        console.log(`${prefix}${tagStr} ${msg}${dataStr}`);
    };
    
    return {
        debug: (tag, msg, data) => log('debug', tag, msg, data),
        info: (tag, msg, data) => log('info', tag, msg, data),
        warn: (tag, msg, data) => log('warn', tag, msg, data),
        error: (tag, msg, data) => log('error', tag, msg, data),
        fatal: (tag, msg, data) => log('FATAL', tag, msg, data),
        _isSilent: false
    };
})();

Logger.info('Init', `Platform: ${Platform.getName()}, Logger ready`);
Logger.info('Config', `FORCE_REFRESH_MANIFEST: ${CONFIG.FORCE_REFRESH_MANIFEST}, MANIFEST_VERSION: ${CONFIG.MANIFEST_VERSION}`);

// ==========================================
// 8. 环境修复补充
// ==========================================
const _log = console.log.bind(console);
['error', 'warn', 'debug', 'info'].forEach(method => {
    if (typeof console[method] !== 'function') {
        console[method] = (...args) => _log(`[${method.toUpperCase()}]`, ...args);
    }
});

// ==========================================
// 9. 存储优化
// ==========================================
const Storage = (() => {
    const memCache = new Map();
    const MEM_TTL = 60000;
    
    const backend = {
        read: Platform.isQX ? (k) => $prefs.valueForKey(k) : 
              Platform.isSurge ? (k) => $persistentStore.read(k) : () => null,
        write: Platform.isQX ? (k, v) => $prefs.setValueForKey(v, k) :
               Platform.isSurge ? (k, v) => $persistentStore.write(v, k) : () => false,
        remove: Platform.isQX ? (k) => $prefs.removeValueForKey(k) :
                Platform.isSurge ? (k) => { try { $persistentStore.write(null, k); return true; } catch(e) { return false; } } : () => false
    };
    
    return {
        read: (key) => {
            const now = Date.now();
            const cached = memCache.get(key);
            if (cached && (now - cached.t) < MEM_TTL) {
                return cached.v;
            }
            
            try {
                const value = backend.read(key);
                if (value !== null && value !== undefined && value !== '') {
                    memCache.set(key, { v: value, t: now });
                }
                return value;
            } catch (e) {
                return null;
            }
        },
        
        write: (key, value) => {
            const now = Date.now();
            memCache.set(key, { v: value, t: now });
            try {
                return backend.write(key, value);
            } catch (e) {
                return false;
            }
        },
        
        remove: (key) => {
            memCache.delete(key);
            try {
                return backend.remove(key);
            } catch (e) {
                return false;
            }
        },
        
        readBatch: (keys) => {
            const result = {};
            const now = Date.now();
            
            for (const key of keys) {
                const cached = memCache.get(key);
                if (cached && (now - cached.t) < MEM_TTL) {
                    result[key] = cached.v;
                } else {
                    const value = backend.read(key);
                    if (value !== null) {
                        result[key] = value;
                        memCache.set(key, { v: value, t: now });
                    }
                }
            }
            
            return result;
        }
    };
})();

// ==========================================
// 10. HTTP客户端
// ==========================================
const HTTP = (() => {
    return {
        get: (url, timeout = CONFIG.TIMEOUT * 1000) => new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                reject(new Error('Timeout'));
            }, timeout);
            
            const handleResponse = (error, response, body) => {
                clearTimeout(timer);
                
                if (error) {
                    reject(new Error(String(error)));
                } else {
                    resolve({
                        body: body || '',
                        status: typeof response === 'object' ? (response.status || 200) : 200
                    });
                }
            };
            
            try {
                if (Platform.isQX) {
                    $task.fetch({ 
                        url, 
                        method: 'GET', 
                        timeout: Math.ceil(timeout / 1000)
                    }).then(
                        res => handleResponse(null, { status: res.statusCode }, res.body),
                        err => handleResponse(err, null, null)
                    );
                } else if (Platform.isSurge) {
                    $httpClient.get({ url, timeout: timeout / 1000 }, handleResponse);
                } else if (typeof $http !== 'undefined') {
                    $http.get(url, handleResponse);
                } else {
                    clearTimeout(timer);
                    reject(new Error('No HTTP client'));
                }
            } catch (e) {
                clearTimeout(timer);
                reject(e);
            }
        })
    };
})();

// ==========================================
// 11. 工具函数
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
            const match = part.match(/^([^\[]+)\[(\d+)\]$/);
            current = match ? (current[match[1]]?.[parseInt(match[2])]) : current[part];
        }
        return current;
    },
    setPath: (obj, path, value) => {
        if (!path || !obj) return obj;
        const parts = path.split('.');
        let current = obj;
        for (let i = 0; i < parts.length - 1; i++) {
            const part = parts[i], next = parts[i + 1];
            const match = part.match(/^([^\[]+)\[(\d+)\]$/);
            const isNextArray = /^\[.*\]$/.test(next);
            if (match) {
                const arr = current[match[1]] || (current[match[1]] = []);
                current = arr[parseInt(match[2])] || (arr[parseInt(match[2])] = isNextArray ? [] : {});
            } else {
                current = current[part] || (current[part] = isNextArray ? [] : {});
            }
        }
        const last = parts[parts.length - 1];
        const lastMatch = last.match(/^([^\[]+)\[(\d+)\]$/);
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
    }
};

// ==========================================
// 12. 正则缓存池
// ==========================================
const RegexPool = (() => {
    const cache = new Map();
    const MAX_SIZE = 100;
    const accessOrder = [];
    
    return {
        get: (pattern, flags = 'g') => {
            const key = `${pattern}|||${flags}`;
            
            if (cache.has(key)) {
                const idx = accessOrder.indexOf(key);
                if (idx > -1) accessOrder.splice(idx, 1);
                accessOrder.push(key);
                return cache.get(key);
            }
            
            try {
                const regex = new RegExp(pattern, flags);
                
                if (cache.size >= MAX_SIZE && accessOrder.length > 0) {
                    const oldest = accessOrder.shift();
                    cache.delete(oldest);
                }
                
                cache.set(key, regex);
                accessOrder.push(key);
                return regex;
            } catch (e) {
                return /(?!)/;
            }
        },
        
        precompile: (patterns) => {
            const results = new Map();
            for (const [id, patternStr] of patterns) {
                try {
                    results.set(id, RegexPool.get(patternStr));
                } catch (e) {}
            }
            return results;
        },
        
        get size() { return cache.size; }
    };
})();

// ==========================================
// 13. 处理器工厂（含 notify）
// ==========================================
function createProcessorFactory(requestId) {
    return {
        setFields: (params) => (obj, env) => {
            const fields = params.fields || {};
            for (const path in fields) {
                Utils.setPath(obj, path, fields[path]);
            }
            return obj;
        },

        mapArray: (params) => (obj, env) => {
            const arr = Utils.getPath(obj, params.path);
            if (!Array.isArray(arr)) return obj;
            const fields = params.fields || {};
            for (const item of arr) {
                if (item) Object.assign(item, fields);
            }
            return obj;
        },

        filterArray: (params) => (obj, env) => {
            const arr = Utils.getPath(obj, params.path);
            if (!Array.isArray(arr)) return obj;
            const excludeSet = new Set(params.excludeKeys || []);
            Utils.setPath(obj, params.path, arr.filter(item => !excludeSet.has(item?.[params.keyField])));
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
                    current = current?.[parts[i]];
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
            
            const success = Notify.send(title, subtitle, message, params.options || {});
            Logger.info('Notify', `Sent: ${success ? 'success' : 'failed'}, title="${title}", length=${message.length}`);
            
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
                const url = env?.getUrl?.() || '';
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
                    const url = env?.getUrl?.() || '';
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
// 14. 处理器编译器
// ==========================================
function createCompiler(factory) {
    const cache = new Map();
    
    return function compileProcessor(def) {
        if (!def || !def.processor) return null;
        
        const cacheKey = Utils.simpleHash(JSON.stringify(def));
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
// 15. Manifest加载器（强制刷新版）
// ==========================================
class SimpleManifestLoader {
    constructor(requestId) {
        this._requestId = requestId;
        this._manifest = null;
        this._patterns = null;
    }

    async load() {
        const cacheKey = 'vip_manifest_v20';
        
        // ==========================================
        // 强制刷新逻辑
        // ==========================================
        if (CONFIG.FORCE_REFRESH_MANIFEST) {
            Logger.info('ManifestLoader', 'FORCE_REFRESH enabled, clearing cache...');
            
            // 删除存储中的 manifest 缓存
            const removed = Storage.remove(cacheKey);
            Logger.info('ManifestLoader', `Cache removed: ${removed}`);
            
            // 同时删除所有配置缓存（可选）
            const configKeys = [
                'vip_cfg_v20_iappdaily',
                'vip_cfg_v20_tophub',
                'vip_cfg_v20_sylangyue',
                'vip_cfg_v20_gps',
                'vip_cfg_v20_kyxq',
                'vip_cfg_v20_mhlz',
                'vip_cfg_v20_xjsm',
                'vip_cfg_v20_v2ex',
                'vip_cfg_v20_foday',
                'vip_cfg_v20_qiujingapp',
                'vip_cfg_v20_tv',
                'vip_cfg_v20_keep',
                'vip_cfg_v20_bqwz',
                'vip_cfg_v20_cyljy',
                'vip_cfg_v20_bxkt',
                'vip_cfg_v20_wohome',
                'vip_cfg_v20_qmjyzc',
                'vip_cfg_v20_mingcalc'
            ];
            
            configKeys.forEach(key => {
                Storage.remove(key);
            });
            Logger.info('ManifestLoader', `Cleared ${configKeys.length} config caches`);
        }
        
        // 尝试读取缓存（如果强制刷新，这里会 miss）
        const { [cacheKey]: cached } = Storage.readBatch([cacheKey]);
        
        if (cached && !CONFIG.FORCE_REFRESH_MANIFEST) {
            this._manifest = Utils.safeJsonParse(cached);
            this._compilePatterns();
            Logger.info('ManifestLoader', `L1 cache hit, ${this._patterns.size} patterns`);
            return this._manifest;
        }

        // 远程下载（带版本号参数防止 CDN 缓存）
        Logger.info('ManifestLoader', 'Fetching remote...');
        const url = `${CONFIG.REMOTE_BASE}/manifest.json?v=${CONFIG.MANIFEST_VERSION}&t=${Date.now()}`;
        Logger.info('ManifestLoader', `URL: ${url.substring(0, 80)}...`);
        
        const res = await HTTP.get(url);
        
        if (res.status !== 200 || !res.body) {
            throw new Error(`HTTP ${res.status}`);
        }

        this._manifest = Utils.safeJsonParse(res.body);
        
        // 验证版本
        if (this._manifest.version !== CONFIG.MANIFEST_VERSION) {
            Logger.warn('ManifestLoader', `Version mismatch: expected ${CONFIG.MANIFEST_VERSION}, got ${this._manifest.version}`);
        }
        
        // 保存到缓存
        Storage.write(cacheKey, res.body);
        this._compilePatterns();
        
        Logger.info('ManifestLoader', `Remote loaded, ${this._patterns.size} patterns, version: ${this._manifest.version}`);
        
        // 如果强制刷新，重置开关（可选，建议验证成功后手动改回 false）
        // if (CONFIG.FORCE_REFRESH_MANIFEST) {
        //     Logger.info('ManifestLoader', 'Reset FORCE_REFRESH_MANIFEST to false recommended');
        // }
        
        return this._manifest;
    }

    _compilePatterns() {
        if (!this._manifest?.configs) {
            Logger.error('ManifestLoader', 'No configs found in manifest');
            return;
        }
        
        const patternEntries = [];
        for (const [id, info] of Object.entries(this._manifest.configs)) {
            if (info.urlPattern) {
                patternEntries.push([id, info.urlPattern]);
            }
        }
        
        this._patterns = RegexPool.precompile(patternEntries);
        Logger.debug('ManifestLoader', `Compiled ${this._patterns.size} patterns`);
        
        // 列出所有 pattern 用于调试
        if (CONFIG.DEBUG) {
            for (const [id, pattern] of this._patterns) {
                Logger.debug('ManifestLoader', `Pattern: ${id} = ${pattern.source.substring(0, 50)}...`);
            }
        }
    }

    findMatch(url) {
        if (!this._patterns) {
            Logger.error('ManifestLoader', 'No patterns compiled');
            return null;
        }
        
        Logger.debug('ManifestLoader', `Matching URL: ${url.substring(0, 80)}...`);
        
        for (const [id, pattern] of this._patterns) {
            try {
                if (pattern.test(url)) {
                    Logger.info('ManifestLoader', `Matched: ${id}`);
                    return id;
                }
            } catch (e) {
                Logger.error('ManifestLoader', `Regex error for ${id}: ${e.message}`);
            }
        }
        
        Logger.warn('ManifestLoader', 'No pattern matched');
        return null;
    }

    getConfigVersion(configId) {
        const version = this._manifest?.configVersions?.[configId] || '1.0';
        Logger.debug('ManifestLoader', `Version for ${configId}: ${version}`);
        return version;
    }
}

// ==========================================
// 16. 配置加载器
// ==========================================
class SimpleConfigLoader {
    constructor(requestId) {
        this._requestId = requestId;
        this._memCache = new Map();
    }

    async load(configId, remoteVersion) {
        if (this._memCache.has(configId)) {
            const cached = this._memCache.get(configId);
            if (cached._version === remoteVersion) {
                Logger.info('ConfigLoader', `${configId} L1 hit`);
                return cached;
            }
        }

        const cacheKey = `vip_cfg_v20_${configId}`;
        const stored = Storage.read(cacheKey);

        if (stored) {
            try {
                const { v, t, d } = Utils.safeJsonParse(stored);
                if (v === remoteVersion && (Date.now() - t) < CONFIG.CONFIG_CACHE_TTL) {
                    const config = this._prepareConfig(d);
                    config._version = remoteVersion;
                    this._memCache.set(configId, config);
                    Logger.info('ConfigLoader', `${configId} L2 hit v${remoteVersion}`);
                    return config;
                }
            } catch (e) {}
        }

        Logger.info('ConfigLoader', `${configId} fetching remote...`);
        const fresh = await this._fetch(configId);
        
        Storage.write(cacheKey, Utils.safeJsonStringify({
            v: remoteVersion,
            t: Date.now(),
            d: fresh
        }));

        const config = this._prepareConfig(fresh);
        config._version = remoteVersion;
        this._memCache.set(configId, config);
        return config;
    }

    async _fetch(configId) {
        const url = `${CONFIG.REMOTE_BASE}/configs/${configId}.json?t=${Date.now()}`;
        const res = await HTTP.get(url);
        if (res.status !== 200 || !res.body) throw new Error(`HTTP ${res.status}`);
        return Utils.safeJsonParse(res.body);
    }

    _prepareConfig(raw) {
        const config = { ...raw };

        if (raw.urlPattern) {
            config.urlPattern = RegexPool.get(raw.urlPattern);
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
// 17. 环境和引擎
// ==========================================
class Environment {
    constructor(name) {
        this.name = name;
        this.isQX = Platform.isQX;
        this.isSurge = Platform.isSurge;
        this.isLoon = Platform.isLoon;
        this.response = typeof $response !== 'undefined' ? $response : {};
        this.request = typeof $request !== 'undefined' ? $request : {};

        if (!this.request.url && this.response.request?.url) {
            this.request = this.response.request;
        }
    }

    getUrl() {
        let url = this.response?.url || this.request?.url || '';
        if (this.isQX && typeof $request === 'string') url = $request;
        return url.toString();
    }

    getBody() {
        return this.response?.body || '';
    }

    done(result) {
        if (typeof $done === 'function') $done(result);
        else console.log('[DONE]', result);
    }
}

class VipEngine {
    constructor(env, requestId) {
        this.env = env;
        this._requestId = requestId;
    }

    process(body, config) {
        if (!body) return { body: '{}' };

        const bodySize = typeof body === 'string' ? body.length : JSON.stringify(body).length;
        if (bodySize > CONFIG.MAX_BODY_SIZE) {
            return { body: typeof body === 'string' ? body : JSON.stringify(body) };
        }

        switch (config.mode) {
            case 'json':
                return this.processJson(body, config);
            case 'regex':
                return this.processRegex(body, config);
            case 'game':
                return this.processGame(body, config);
            case 'hybrid':
                return this.processHybrid(body, config);
            case 'html':
                return this.processHtml(body, config);
            default:
                return { body };
        }
    }

    processJson(body, config) {
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
                Logger.error('VipEngine', 'Processor error', e);
            }
        }

        return { body: Utils.safeJsonStringify(obj) };
    }

    processRegex(body, config) {
        let modified = body;
        const replacements = config._regexReplacements || config.regexReplacements || [];
        for (const rule of replacements) {
            try {
                modified = modified.replace(rule.pattern, rule.replacement);
            } catch (e) {}
        }
        return { body: modified };
    }

    processGame(body, config) {
        let modified = body;
        const resources = config._gameResources || config.gameResources || [];
        for (const res of resources) {
            try {
                modified = modified.replace(res.pattern, `"${res.field}":${res.value}`);
            } catch (e) {}
        }
        return { body: modified };
    }

    processHybrid(body, config) {
        let result = this.processJson(body, config);
        if (config._regexReplacements || config.regexReplacements) {
            result = this.processRegex(result.body, config);
        }
        return result;
    }

    processHtml(body, config) {
        let modified = body;
        for (const rule of config.htmlReplacements || []) {
            try {
                const regex = RegexPool.get(rule.pattern, rule.flags || 'i');
                modified = modified.replace(regex, rule.replacement);
            } catch (e) {}
        }
        return { body: modified };
    }
}

// ==========================================
// 18. 主函数
// ==========================================
async function main() {
    const requestId = Math.random().toString(36).substr(2, 6).toUpperCase();
    
    const env = new Environment(META.name);

    try {
        const url = env.getUrl();
        if (!url) {
            releaseLock();
            return env.done({ body: env.getBody() });
        }

        Logger.info('Main', `${requestId} | ${url.replace(/\?.*$/, '').substring(0, 60)}`);

        const mLoader = new SimpleManifestLoader(requestId);
        const manifest = await mLoader.load();

        const configId = mLoader.findMatch(url);
        if (!configId) {
            Logger.info('Main', 'No rule matched');
            releaseLock();
            return env.done({ body: env.getBody() });
        }

        const remoteVersion = mLoader.getConfigVersion(configId);

        const cLoader = new SimpleConfigLoader(requestId);
        const config = await cLoader.load(configId, remoteVersion);

        const engine = new VipEngine(env, requestId);
        const result = engine.process(env.getBody(), config);

        Logger.info('Main', `${requestId} completed`);
        releaseLock();
        env.done(result);

    } catch (e) {
        Logger.error('Main', `${requestId} failed: ${e.message}`);
        releaseLock();
        env.done({ body: env.getBody() });
    }
}

main();
