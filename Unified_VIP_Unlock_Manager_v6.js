/**
 * ==========================================
 * Unified VIP Unlock Manager v20.3.1 - QX优化补丁
 * 优化项：锁修复 + DEBUG关闭 + 存储缓存 + 正则池 + 处理器优化 + HTTP超时 + 环境检测
  * 新增：Manifest内存缓存（60秒零I/O）
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
 [mitm]
 hostname = theater-api.sylangyue.xyz, api.iappdaily.com, api2.tophub.today, api2.tophub.app, api3.tophub.xyz, api3.tophub.today, api3.tophub.app, tophub.tophubdata.com, tophub2.tophubdata.com, tophub.idaily.today, tophub2.idaily.today, tophub.remai.today, tophub.iappdaiy.com, tophub.ipadown.com,service.gpstool.com, mapi.kouyuxingqiu.com, ss.landintheair.com, *.v2ex.com, apis.folidaymall.com, gateway-api.yizhilive.com, pagead*.googlesyndication.com, api.gotokeep.com, kit.gotokeep.com, *.gotokeep.*, 120.53.74.*, 162.14.5.*, 42.187.199.*, 101.42.124.*, javelin.mandrillvr.com,api.banxueketang.com, yzy0916.*.com, yz1018.*.com, yz250907.*.com, yz0320.*.com, cfvip.*.com,yr-game-api.feigo.fun,star.jvplay.cn,iotpservice.smartont.net
*/
'use strict';

// ==========================================
// 配置区域
// ==========================================
const CONFIG = {
    REMOTE_BASE: 'https://joeshu.github.io/vip-unlock-configs',
    CACHE_TTL: 6 * 60 * 60 * 1000,
    CONFIG_CACHE_TTL: 60 * 60 * 1000,
    MAX_BODY_SIZE: 5 * 1024 * 1024,
    MAX_PROCESSORS_PER_REQUEST: 30,
    TIMEOUT: 10,
    DEBUG: true
};

const META = {
    name: 'UnifiedVIP',
    version: '20.3.1-opt'
};

// ==========================================
// 新增：Manifest内存缓存（跨请求零I/O）
// ==========================================
const ManifestCache = (() => {
    let manifest = null;
    let patterns = null;
    let lastLoad = 0;
    const MEM_TTL = 180000; // 180秒内存缓存
    
    return {
        get: () => {
            if (manifest && (Date.now() - lastLoad) < MEM_TTL) {
                Logger.debug('ManifestCache', `Hit: ${(Date.now() - lastLoad)}ms old`);
                return { manifest, patterns };
            }
            return null;
        },
        set: (m, p) => {
            manifest = m;
            patterns = p;
            lastLoad = Date.now();
            Logger.debug('ManifestCache', 'Updated');
        },
        clear: () => {
            manifest = null;
            patterns = null;
            lastLoad = 0;
        },
        getStats: () => ({
            hasData: !!manifest,
            age: lastLoad ? Date.now() - lastLoad : 0,
            patternCount: patterns?.size || 0
        })
    };
})();

// ==========================================
// 优化2：修复防重复锁
// ==========================================
const LockManager = (() => {
    const locks = new Set();
    const MAX_LOCKS = 100;
    
    return {
        acquire: (key) => {
            if (locks.has(key)) return false;
            if (locks.size >= MAX_LOCKS) {
                const first = locks.values().next().value;
                locks.delete(first);
            }
            locks.add(key);
            return true;
        },
        release: (key) => {
            locks.delete(key);
        },
        makeKey: (url) => {
            let hash = 0;
            for (let i = 0; i < url.length; i++) {
                hash = ((hash << 5) - hash) + url.charCodeAt(i);
                hash = hash & hash;
            }
            return 'L' + Math.abs(hash).toString(36);
        }
    };
})();

const LOCK_KEY = LockManager.makeKey(
    (typeof $request !== 'undefined' && $request.url) ? $request.url : 
    (typeof $response !== 'undefined' && $response.url) ? $response.url : 
    Date.now().toString()
);

if (!LockManager.acquire(LOCK_KEY)) {
    if (typeof $response !== 'undefined' && $response) {
        $done({ body: $response.body });
    } else {
        $done({});
    }
    return;
}

const releaseLock = () => LockManager.release(LOCK_KEY);

// ==========================================
// 修复：DEBUG=true时日志正常工作
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
        const time = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
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

// ==========================================
// 优化9：环境检测延迟执行
// ==========================================
if (typeof console === 'undefined') {
    globalThis.console = { log: () => {} };
}
const _log = console.log.bind(console);
['error', 'warn', 'debug', 'info'].forEach(method => {
    if (typeof console[method] !== 'function') {
        console[method] = (...args) => _log(`[${method.toUpperCase()}]`, ...args);
    }
});

// ==========================================
// 优化4：QX存储优化（内存缓存层）
// ==========================================
const Storage = (() => {
    const memCache = new Map();
    const MEM_TTL = 60000;
    const isQX = typeof $task !== 'undefined';
    const isSurge = typeof $httpClient !== 'undefined';
    
    const backend = {
        read: isQX ? (k) => $prefs.valueForKey(k) : 
              isSurge ? (k) => $persistentStore.read(k) : () => null,
        write: isQX ? (k, v) => $prefs.setValueForKey(v, k) :
               isSurge ? (k, v) => $persistentStore.write(v, k) : () => false
    };
    
    return {
        read: (key) => {
            const now = Date.now();
            const cached = memCache.get(key);
            if (cached && (now - cached.t) < MEM_TTL) {
                Logger.debug('Storage', `Memory hit: ${key}`);
                return cached.v;
            }
            
            try {
                const value = backend.read(key);
                if (value !== null && value !== undefined && value !== '') {
                    memCache.set(key, { v: value, t: now });
                    Logger.debug('Storage', `Disk hit: ${key}`);
                } else {
                    Logger.debug('Storage', `Miss: ${key}`);
                }
                return value;
            } catch (e) {
                Logger.error('Storage', `Read error: ${key}`, e);
                return null;
            }
        },
        
        write: (key, value) => {
            const now = Date.now();
            memCache.set(key, { v: value, t: now });
            Logger.debug('Storage', `Write: ${key}`);
            
            try {
                return backend.write(key, value);
            } catch (e) {
                Logger.error('Storage', `Write error: ${key}`, e);
                return false;
            }
        },
        
        remove: (key) => {
            memCache.delete(key);
            Logger.debug('Storage', `Remove: ${key}`);
            try {
                return backend.write(key, '') || backend.write(key, null);
            } catch (e) {
                return false;
            }
        },
        
        readBatch: (keys) => {
            const result = {};
            const now = Date.now();
            const missingKeys = [];
            
            for (const key of keys) {
                const cached = memCache.get(key);
                if (cached && (now - cached.t) < MEM_TTL) {
                    result[key] = cached.v;
                    Logger.debug('Storage', `Batch memory hit: ${key}`);
                } else {
                    missingKeys.push(key);
                }
            }
            
            for (const key of missingKeys) {
                const value = backend.read(key);
                if (value !== null) {
                    result[key] = value;
                    memCache.set(key, { v: value, t: now });
                    Logger.debug('Storage', `Batch disk hit: ${key}`);
                }
            }
            
            return result;
        }
    };
})();

// ==========================================
// 优化8：HTTP超时精确控制
// ==========================================
const HTTP = (() => {
    const isQX = typeof $task !== 'undefined';
    const isSurge = typeof $httpClient !== 'undefined';
    
    return {
        get: (url, timeout = CONFIG.TIMEOUT * 1000) => new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                Logger.error('HTTP', `Timeout: ${url.substring(0, 50)}...`);
                reject(new Error(`HTTP Timeout: ${url.substring(0, 50)}...`));
            }, timeout);
            
            const startTime = Date.now();
            Logger.debug('HTTP', `Request: ${url.substring(0, 80)}...`);
            
            const handleResponse = (error, response, body) => {
                clearTimeout(timer);
                
                if (error) {
                    const errorMsg = typeof error === 'string' ? error : 
                                    (error && typeof error === 'object') ? JSON.stringify(error) : String(error);
                    Logger.error('HTTP', `Error: ${errorMsg}`);
                    reject(new Error(`HTTP Error: ${errorMsg}`));
                } else {
                    const time = Date.now() - startTime;
                    const status = typeof response === 'object' ? (response.status || 200) : 200;
                    Logger.debug('HTTP', `Response: ${status} in ${time}ms`);
                    resolve({
                        body: body || '',
                        status: status,
                        time: time
                    });
                }
            };
            
            try {
                if (isQX) {
                    $task.fetch({ 
                        url, 
                        method: 'GET', 
                        timeout: Math.ceil(timeout / 1000)
                    }).then(
                        res => handleResponse(null, { status: res.statusCode }, res.body),
                        err => handleResponse(err, null, null)
                    );
                } else if (isSurge) {
                    $httpClient.get({ url, timeout: timeout / 1000 }, handleResponse);
                } else if (typeof $http !== 'undefined') {
                    $http.get(url, handleResponse);
                } else {
                    clearTimeout(timer);
                    reject(new Error('No HTTP client available'));
                }
            } catch (e) {
                clearTimeout(timer);
                reject(new Error(`HTTP Setup: ${e.message}`));
            }
        })
    };
})();

// ==========================================
// 工具函数
// ==========================================
const Utils = {
    safeJsonParse: (str, defaultVal = null) => {
        try { return JSON.parse(str); } catch (e) { 
            Logger.debug('Utils', 'JSON parse failed', e.message);
            return defaultVal; 
        }
    },
    safeJsonStringify: (obj) => {
        try { return JSON.stringify(obj); } catch (e) { 
            Logger.error('Utils', 'JSON stringify failed', e);
            return '{}'; 
        }
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
    }
};

// ==========================================
// 优化5：正则表达式全局缓存池
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
                Logger.debug('RegexPool', `Hit: ${pattern.substring(0, 30)}...`);
                return cache.get(key);
            }
            
            try {
                const regex = new RegExp(pattern, flags);
                
                if (cache.size >= MAX_SIZE && accessOrder.length > 0) {
                    const oldest = accessOrder.shift();
                    cache.delete(oldest);
                    Logger.debug('RegexPool', 'LRU eviction');
                }
                
                cache.set(key, regex);
                accessOrder.push(key);
                Logger.debug('RegexPool', `Compiled: ${pattern.substring(0, 30)}...`, `Pool size: ${cache.size}`);
                return regex;
            } catch (e) {
                Logger.error('RegexPool', `Invalid pattern: ${pattern}`, e);
                return /(?!)/;
            }
        },
        
        precompile: (patterns) => {
            const results = new Map();
            for (const [id, patternStr] of patterns) {
                try {
                    results.set(id, RegexPool.get(patternStr));
                } catch (e) {
                    Logger.error('RegexPool', `Failed for ${id}`, e);
                }
            }
            return results;
        },
        
        clear: () => {
            cache.clear();
            accessOrder.length = 0;
            Logger.info('RegexPool', 'Cleared');
        },
        
        get size() { return cache.size; }
    };
})();

// ==========================================
// 优化6：处理器工厂（移除计数器）
// ==========================================
function createProcessorFactory(requestId) {
    Logger.debug('ProcessorFactory', `Created for request ${requestId}`);
    
    return {
        setFields: (params) => (obj, env) => {
            const fields = params.fields || {};
            let modified = 0;
            for (const path in fields) {
                Utils.setPath(obj, path, fields[path]);
                modified++;
            }
            Logger.debug('setFields', `Modified ${modified} fields`);
            return obj;
        },

        mapArray: (params) => (obj, env) => {
            const arr = Utils.getPath(obj, params.path);
            if (!Array.isArray(arr)) {
                Logger.debug('mapArray', `${params.path} is not array`);
                return obj;
            }
            const fields = params.fields || {};
            let count = 0;
            for (const item of arr) {
                if (item) {
                    Object.assign(item, fields);
                    count++;
                }
            }
            Logger.debug('mapArray', `Processed ${count} items`);
            return obj;
        },

        filterArray: (params) => (obj, env) => {
            const arr = Utils.getPath(obj, params.path);
            if (!Array.isArray(arr)) return obj;
            const originalLength = arr.length;
            const excludeSet = new Set(params.excludeKeys || []);
            const filtered = arr.filter(item => !excludeSet.has(item?.[params.keyField]));
            Utils.setPath(obj, params.path, filtered);
            Logger.debug('filterArray', `${params.path}: ${originalLength} → ${filtered.length}`);
            return obj;
        },

        clearArray: (params) => (obj, env) => {
            const arr = Utils.getPath(obj, params.path);
            if (Array.isArray(arr)) {
                const count = arr.length;
                arr.length = 0;
                Logger.debug('clearArray', `Cleared ${count} items from ${params.logName || params.path}`);
            }
            return obj;
        },

        deleteFields: (params) => (obj, env) => {
            let deleted = 0;
            for (const path of params.paths || []) {
                const parts = path.split('.');
                let current = obj;
                for (let i = 0; i < parts.length - 1; i++) {
                    current = current?.[parts[i]];
                    if (!current) break;
                }
                if (current) {
                    delete current[parts[parts.length - 1]];
                    deleted++;
                }
            }
            Logger.debug('deleteFields', `Deleted ${deleted} fields`);
            return obj;
        },

        sliceArray: (params) => (obj, env) => {
            const arr = Utils.getPath(obj, params.path);
            if (Array.isArray(arr) && arr.length > params.keepCount) {
                const original = arr.length;
                Utils.setPath(obj, params.path, arr.slice(0, params.keepCount));
                Logger.debug('sliceArray', `${params.path}: ${original} → ${params.keepCount}`);
            }
            return obj;
        },

        shiftArray: (params) => (obj, env) => {
            const arr = Utils.getPath(obj, params.path);
            if (Array.isArray(arr) && arr.length > 0) {
                arr.shift();
                Logger.debug('shiftArray', `Shifted ${params.logName || params.path}`);
            }
            return obj;
        },

        processByKeyPrefix: (params) => (obj, env) => {
            const target = Utils.getPath(obj, params.objPath);
            if (!target || typeof target !== 'object') return obj;
            let modified = 0;
            const rules = Object.entries(params.prefixRules || {});
            for (const key in target) {
                const value = target[key];
                if (!value || typeof value !== 'object') continue;
                for (const [prefix, handler] of rules) {
                    if (prefix !== '*' && key.startsWith(prefix)) {
                        Object.assign(value, handler);
                        modified++;
                        break;
                    }
                }
            }
            Logger.debug('processByKeyPrefix', `Processed ${modified} items`);
            return obj;
        },

        compose: (params, compile) => {
            const steps = params.steps || [];
            if (steps.length > CONFIG.MAX_PROCESSORS_PER_REQUEST) {
                Logger.error('compose', `Too many steps: ${steps.length}`);
                throw new Error(`Too many processors: ${steps.length} > ${CONFIG.MAX_PROCESSORS_PER_REQUEST}`);
            }
            const processors = steps.map(step => compile(step));
            Logger.debug('compose', `Composed ${processors.length} steps`);
            
            return (obj, env) => {
                let result = obj;
                for (let i = 0; i < processors.length; i++) {
                    if (!result) break;
                    Logger.debug('compose', `Step ${i + 1}/${processors.length}`);
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
                Logger.debug('when', `Condition "${params.condition}" = ${conditionMet}`);
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
                name: s.name,
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
            
            Logger.debug('sceneDispatcher', `Loaded ${scenes.length} scenes`);
            
            return (obj, env) => {
                for (const scene of scenes) {
                    if (scene.matchFn(obj, env)) {
                        Logger.debug('sceneDispatcher', `Matched: ${scene.name}`);
                        return scene.then(obj, env);
                    }
                }
                Logger.debug('sceneDispatcher', 'No scene matched');
                return obj;
            };
        }
    };
}

// ==========================================
// 处理器编译器
// ==========================================
function createCompiler(factory) {
    const cache = new Map();
    
    return function compileProcessor(def) {
        if (!def || !def.processor) return null;
        
        const cacheKey = Utils.simpleHash(JSON.stringify(def));
        if (cache.has(cacheKey)) {
            Logger.debug('Compiler', `Cache hit: ${def.processor}`);
            return cache.get(cacheKey);
        }
        
        const processorFactory = factory[def.processor];
        if (!processorFactory) {
            Logger.error('Compiler', `Unknown processor: ${def.processor}`);
            return null;
        }
        
        const processor = processorFactory(def.params, compileProcessor);
        if (processor) {
            cache.set(cacheKey, processor);
            Logger.debug('Compiler', `Compiled: ${def.processor}`);
        }
        return processor;
    };
}

// ==========================================
// 优化版Manifest加载器（新增ManifestCache）
// ==========================================
class SimpleManifestLoader {
    constructor(requestId) {
        this._requestId = requestId;
        this._manifest = null;
        this._patterns = null;
        Logger.debug('ManifestLoader', `Created: ${requestId}`);
    }

    async load() {
        // P0: 内存缓存（零I/O，60秒内）
        const memCached = ManifestCache.get();
        if (memCached) {
            this._manifest = memCached.manifest;
            this._patterns = memCached.patterns;
            Logger.info('ManifestLoader', `L0 memory cache hit (0 I/O), ${this._patterns.size} patterns ready`);
            return this._manifest;
        }

        // P1: 持久化存储
        const cacheKey = 'vip_manifest_v20';
        Logger.debug('ManifestLoader', 'L0 miss, checking storage...');
        const { [cacheKey]: cached } = Storage.readBatch([cacheKey]);
        
        if (cached) {
            Logger.info('ManifestLoader', 'L1 storage hit');
            this._manifest = Utils.safeJsonParse(cached);
            this._compilePatterns();
            // 写入内存缓存供后续请求使用
            ManifestCache.set(this._manifest, this._patterns);
            return this._manifest;
        }

        // P2: 远程加载
        Logger.info('ManifestLoader', 'L1 miss, fetching remote...');
        const res = await HTTP.get(`${CONFIG.REMOTE_BASE}/manifest.json?t=${Date.now()}`);
        
        if (res.status !== 200 || !res.body) {
            throw new Error(`HTTP ${res.status}`);
        }

        this._manifest = Utils.safeJsonParse(res.body);
        Storage.write(cacheKey, res.body);
        this._compilePatterns();
        
        // 写入内存缓存
        ManifestCache.set(this._manifest, this._patterns);
        Logger.info('ManifestLoader', `Remote loaded, ${this._patterns.size} patterns cached`);
        
        return this._manifest;
    }

    _compilePatterns() {
        if (!this._manifest?.configs) return;
        
        const patternEntries = [];
        for (const [id, info] of Object.entries(this._manifest.configs)) {
            if (info.urlPattern) {
                patternEntries.push([id, info.urlPattern]);
            }
        }
        
        this._patterns = RegexPool.precompile(patternEntries);
        Logger.debug('ManifestLoader', `Compiled ${this._patterns.size} patterns`);
    }

    findMatch(url) {
        if (!this._patterns) return null;
        for (const [id, pattern] of this._patterns) {
            try {
                if (pattern.test(url)) {
                    Logger.debug('ManifestLoader', `Matched: ${id}`);
                    return id;
                }
            } catch (e) {
                Logger.error('ManifestLoader', `Regex error for ${id}`, e);
            }
        }
        return null;
    }

    getConfigVersion(configId) {
        return this._manifest?.configVersions?.[configId] || '1.0';
    }
}

// ==========================================
// 配置加载器
// ==========================================
class SimpleConfigLoader {
    constructor(requestId) {
        this._requestId = requestId;
        this._memCache = new Map();
        Logger.debug('ConfigLoader', `Created: ${requestId}`);
    }

    async load(configId, remoteVersion) {
        Logger.debug('ConfigLoader', `Loading ${configId} v${remoteVersion}...`);
        
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
                    Logger.info('ConfigLoader', `${configId} L2 hit v${remoteVersion}`);
                    const config = this._prepareConfig(d);
                    config._version = remoteVersion;
                    this._memCache.set(configId, config);
                    return config;
                } else {
                    Logger.debug('ConfigLoader', `${configId} cache expired or version mismatch`);
                }
            } catch (e) {
                Logger.warn('ConfigLoader', `${configId} cache parse error`, e);
            }
        }

        Logger.info('ConfigLoader', `${configId} fetching remote v${remoteVersion}...`);
        const fresh = await this._fetch(configId);
        
        Storage.write(cacheKey, Utils.safeJsonStringify({
            v: remoteVersion,
            t: Date.now(),
            d: fresh
        }));

        const config = this._prepareConfig(fresh);
        config._version = remoteVersion;
        this._memCache.set(configId, config);
        Logger.info('ConfigLoader', `${configId} loaded and cached`);
        return config;
    }

    async _fetch(configId) {
        const url = `${CONFIG.REMOTE_BASE}/configs/${configId}.json?t=${Date.now()}`;
        const res = await HTTP.get(url);

        if (res.status !== 200 || !res.body) {
            throw new Error(`HTTP ${res.status}`);
        }

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

        Logger.debug('ConfigLoader', `Prepared config with ${config._regexReplacements?.length || 0} regex, ${config._gameResources?.length || 0} game rules`);
        return config;
    }
}

// ==========================================
// 环境和引擎
// ==========================================
class Environment {
    constructor(name) {
        this.name = name;
        this.isQX = typeof $task !== 'undefined';
        this.isSurge = typeof $httpClient !== 'undefined' && !this.isQX;
        this.isLoon = typeof $loon !== 'undefined';
        this.response = typeof $response !== 'undefined' ? $response : {};
        this.request = typeof $request !== 'undefined' ? $request : {};

        if (!this.request.url && this.response.request?.url) {
            this.request = this.response.request;
        }
        Logger.debug('Environment', `Created: ${name}, Platform: ${this.isQX ? 'QX' : this.isSurge ? 'Surge' : 'Other'}`);
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
        Logger.debug('Environment', `Done: ${result?.status || 'ok'}`);
        if (typeof $done === 'function') $done(result);
        else console.log('[DONE]', result);
    }
}

class VipEngine {
    constructor(env, requestId) {
        this.env = env;
        this._requestId = requestId;
        Logger.debug('VipEngine', `Created: ${requestId}`);
    }

    process(body, config) {
        if (!body) {
            Logger.warn('VipEngine', 'Empty body');
            return { body: '{}' };
        }

        const bodySize = typeof body === 'string' ? body.length : JSON.stringify(body).length;
        if (bodySize > CONFIG.MAX_BODY_SIZE) {
            Logger.warn('VipEngine', `Body too large: ${(bodySize/1024/1024).toFixed(2)}MB`);
            return { body: typeof body === 'string' ? body : JSON.stringify(body) };
        }

        Logger.debug('VipEngine', `Processing mode: ${config.mode}, size: ${bodySize} bytes`);

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
                Logger.warn('VipEngine', `Unknown mode: ${config.mode}`);
                return { body };
        }
    }

    processJson(body, config) {
        if (typeof body === 'string' && body.length > CONFIG.MAX_BODY_SIZE) {
            Logger.warn('VipEngine', 'JSON body too large');
            return { body };
        }

        let obj = Utils.safeJsonParse(body);
        if (!obj) {
            Logger.error('VipEngine', 'Failed to parse JSON');
            return { body };
        }

        const factory = createProcessorFactory(this._requestId);
        const compile = createCompiler(factory);
        const processor = config.processor ? compile(config.processor) : null;

        if (typeof processor === 'function') {
            try {
                obj = processor(obj, this.env);
                Logger.info('VipEngine', `${config.name || 'VIP'} unlocked successfully`);
            } catch (e) {
                Logger.error('VipEngine', 'Processor error', e);
            }
        } else {
            Logger.debug('VipEngine', 'No custom processor');
        }

        return { body: Utils.safeJsonStringify(obj) };
    }

    processRegex(body, config) {
        let modified = body;
        let count = 0;
        
        const replacements = config._regexReplacements || config.regexReplacements || [];
        for (const rule of replacements) {
            try {
                const original = modified;
                modified = modified.replace(rule.pattern, rule.replacement);
                if (original !== modified) count++;
            } catch (e) {
                Logger.error('VipEngine', 'Regex replace error', e);
            }
        }

        Logger.debug('VipEngine', `Regex replaced ${count}/${replacements.length} patterns`);
        return { body: modified };
    }

    processGame(body, config) {
        let modified = body;
        let count = 0;
        
        const resources = config._gameResources || config.gameResources || [];
        for (const res of resources) {
            try {
                const original = modified;
                modified = modified.replace(res.pattern, `"${res.field}":${res.value}`);
                if (original !== modified) count++;
            } catch (e) {
                Logger.error('VipEngine', 'Game resource error', e);
            }
        }

        Logger.debug('VipEngine', `Game resources modified: ${count}/${resources.length}`);
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
        let count = 0;

        for (const rule of config.htmlReplacements || []) {
            try {
                const regex = RegexPool.get(rule.pattern, rule.flags || 'i');
                const original = modified;
                modified = modified.replace(regex, rule.replacement);
                if (original !== modified) count++;
            } catch (e) {
                Logger.error('VipEngine', 'HTML replace error', e);
            }
        }

        Logger.debug('VipEngine', `HTML replaced ${count} patterns`);
        return { body: modified };
    }
}

// ==========================================
// 主函数
// ==========================================
async function main() {
    const requestId = Math.random().toString(36).substr(2, 6).toUpperCase();
    Logger.info('Main', `=== Request ${requestId} started ===`);
    
    const env = new Environment(META.name);

    try {
        const url = env.getUrl();
        if (!url) {
            Logger.fatal('Main', 'No URL in request');
            releaseLock();
            return env.done({ body: env.getBody() });
        }

        Logger.info('Main', `Processing: ${url.replace(/\?.*$/, '').substring(0, 60)}...`);

        const mLoader = new SimpleManifestLoader(requestId);
        const manifest = await mLoader.load();

        const configId = mLoader.findMatch(url);
        if (!configId) {
            Logger.info('Main', 'No rule matched, passing through');
            releaseLock();
            return env.done({ body: env.getBody() });
        }
        Logger.info('Main', `Matched config: ${configId}`);

        const remoteVersion = mLoader.getConfigVersion(configId);

        const cLoader = new SimpleConfigLoader(requestId);
        const config = await cLoader.load(configId, remoteVersion);

        const engine = new VipEngine(env, requestId);
        const result = engine.process(env.getBody(), config);

        Logger.info('Main', `=== Request ${requestId} completed ===`);
        releaseLock();
        env.done(result);

    } catch (e) {
        Logger.fatal('Main', `Request ${requestId} failed`, e);
        releaseLock();
        env.done({ body: env.getBody() });
    }
}

// 启动
main();
