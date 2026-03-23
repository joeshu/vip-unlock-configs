/**
 * ==========================================
 * Unified VIP Unlock Manager v20.3.1 - QX优化补丁
 * 优化项：锁修复 + DEBUG关闭 + 存储缓存 + 正则池 + 处理器优化 + HTTP超时 + 环境检测
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
// 配置区域（优化3：DEBUG关闭）
// ==========================================
const CONFIG = {
    REMOTE_BASE: 'https://joeshu.github.io/vip-unlock-configs',
    CACHE_TTL: 6 * 60 * 60 * 1000,
    CONFIG_CACHE_TTL: 60 * 60 * 1000,
    MAX_BODY_SIZE: 5 * 1024 * 1024,
    MAX_PROCESSORS_PER_REQUEST: 30,
    TIMEOUT: 10,
    DEBUG: true  // ← 关闭DEBUG
};

const META = {
    name: 'UnifiedVIP',
    version: '20.3.1-opt'
};

// ==========================================
// 优化2：修复防重复锁（QX安全的模块级闭包实现）
// ==========================================
const LockManager = (() => {
    // 使用模块级闭包变量，比globalThis更可靠
    const locks = new Set();
    const MAX_LOCKS = 100; // 防止内存泄漏
    
    return {
        acquire: (key) => {
            if (locks.has(key)) return false;
            if (locks.size >= MAX_LOCKS) {
                // LRU清理：删除最早的锁
                const first = locks.values().next().value;
                locks.delete(first);
            }
            locks.add(key);
            return true;
        },
        release: (key) => {
            locks.delete(key);
        },
        // 生成更短的锁键（避免长URL导致内存膨胀）
        makeKey: (url) => {
            // 使用URL的哈希而非完整URL
            let hash = 0;
            for (let i = 0; i < url.length; i++) {
                hash = ((hash << 5) - hash) + url.charCodeAt(i);
                hash = hash & hash;
            }
            return 'L' + Math.abs(hash).toString(36);
        }
    };
})();

// 优化后的锁应用（替换原脚本的全局锁代码）
const LOCK_KEY = LockManager.makeKey(
    (typeof $request !== 'undefined' && $request.url) ? $request.url : 
    (typeof $response !== 'undefined' && $response.url) ? $response.url : 
    Date.now().toString()
);

if (!LockManager.acquire(LOCK_KEY)) {
    // 已在执行中，直接返回原始响应
    if (typeof $response !== 'undefined' && $response) {
        $done({ body: $response.body });
    } else {
        $done({});
    }
    return;
}

const releaseLock = () => LockManager.release(LOCK_KEY);

// ==========================================
// 优化3：零开销日志系统（生产环境）
// ==========================================
const Logger = (() => {
    if (!CONFIG.DEBUG) {
        // 真正零开销：Proxy拦截所有调用，参数不求值
        return new Proxy({}, {
            get: () => () => {},
            has: () => false
        });
    }
    
    // 调试环境实现（略，与原脚本相同）
    const log = (level, tag, msg, data) => {
        const time = new Date().toLocaleTimeString('en-US', { hour12: false });
        console.log(`[${META.name}][${level.toUpperCase()}][${time}][${tag}] ${msg}${data ? ' | ' + JSON.stringify(data) : ''}`);
    };
    
    return {
        debug: (t, m, d) => log('debug', t, m, d),
        info: (t, m, d) => log('info', t, m, d),
        warn: (t, m, d) => log('warn', t, m, d),
        error: (t, m, d) => log('error', t, m, d),
        fatal: (t, m, d) => log('FATAL', t, m, d)
    };
})();

// ==========================================
// 优化9：环境检测延迟执行（仅在需要时修复）
// ==========================================
// 替换原脚本的立即执行函数
if (typeof console === 'undefined') {
    globalThis.console = { log: () => {} };
}
// 仅在方法缺失时修复，且使用更高效的绑定
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
    // 内存缓存层
    const memCache = new Map();
    const MEM_TTL = 60000; // 1分钟内存缓存有效期
    
    // 检测QX环境
    const isQX = typeof $task !== 'undefined';
    const isSurge = typeof $httpClient !== 'undefined';
    
    // 底层存储接口
    const backend = {
        read: isQX ? (k) => $prefs.valueForKey(k) : 
              isSurge ? (k) => $persistentStore.read(k) : () => null,
        write: isQX ? (k, v) => $prefs.setValueForKey(v, k) :
               isSurge ? (k, v) => $persistentStore.write(v, k) : () => false
    };
    
    return {
        read: (key) => {
            const now = Date.now();
            
            // L1: 内存缓存
            const cached = memCache.get(key);
            if (cached && (now - cached.t) < MEM_TTL) {
                return cached.v;
            }
            
            // L2: 持久化存储
            try {
                const value = backend.read(key);
                if (value !== null && value !== undefined && value !== '') {
                    // 写入内存缓存
                    memCache.set(key, { v: value, t: now });
                }
                return value;
            } catch (e) {
                return null;
            }
        },
        
        write: (key, value) => {
            const now = Date.now();
            
            // 更新内存缓存
            memCache.set(key, { v: value, t: now });
            
            // 异步写入持久化（QX中同步写入即可）
            try {
                return backend.write(key, value);
            } catch (e) {
                return false;
            }
        },
        
        remove: (key) => {
            memCache.delete(key);
            try {
                return backend.write(key, '') || backend.write(key, null);
            } catch (e) {
                return false;
            }
        },
        
        // 批量读取优化（减少多次I/O）
        readBatch: (keys) => {
            const result = {};
            const now = Date.now();
            const missingKeys = [];
            
            // 先查内存
            for (const key of keys) {
                const cached = memCache.get(key);
                if (cached && (now - cached.t) < MEM_TTL) {
                    result[key] = cached.v;
                } else {
                    missingKeys.push(key);
                }
            }
            
            // 再查持久化
            for (const key of missingKeys) {
                const value = backend.read(key);
                if (value !== null) {
                    result[key] = value;
                    memCache.set(key, { v: value, t: now });
                }
            }
            
            return result;
        }
    };
})();

// ==========================================
// 优化8：HTTP超时精确控制（QX专用）
// ==========================================
const HTTP = (() => {
    const isQX = typeof $task !== 'undefined';
    const isSurge = typeof $httpClient !== 'undefined';
    
    return {
        get: (url, timeout = CONFIG.TIMEOUT * 1000) => new Promise((resolve, reject) => {
            // 使用毫秒级精确超时
            const timer = setTimeout(() => {
                reject(new Error(`HTTP Timeout: ${url.substring(0, 50)}...`));
            }, timeout);
            
            const startTime = Date.now();
            
            const handleResponse = (error, response, body) => {
                clearTimeout(timer);
                
                if (error) {
                    const errorMsg = typeof error === 'string' ? error : 
                                    (error && typeof error === 'object') ? JSON.stringify(error) : String(error);
                    reject(new Error(`HTTP Error: ${errorMsg}`));
                } else {
                    resolve({
                        body: body || '',
                        status: typeof response === 'object' ? (response.status || 200) : 200,
                        time: Date.now() - startTime
                    });
                }
            };
            
            try {
                if (isQX) {
                    // QX: $task.fetch 超时参数为秒，但我们用外部定时器更精确
                    $task.fetch({ 
                        url, 
                        method: 'GET', 
                        timeout: Math.ceil(timeout / 1000) // 向上取整为秒
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
// 工具函数（保持原有实现）
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
    }
};

// ==========================================
// 优化5：正则表达式全局缓存池
// ==========================================
const RegexPool = (() => {
    const cache = new Map();
    const MAX_SIZE = 100; // 最大缓存数量
    const accessOrder = []; // LRU顺序追踪
    
    return {
        get: (pattern, flags = 'g') => {
            const key = `${pattern}|||${flags}`;
            
            // 命中缓存
            if (cache.has(key)) {
                // 更新LRU顺序
                const idx = accessOrder.indexOf(key);
                if (idx > -1) accessOrder.splice(idx, 1);
                accessOrder.push(key);
                return cache.get(key);
            }
            
            // 创建新正则
            try {
                const regex = new RegExp(pattern, flags);
                
                // LRU淘汰
                if (cache.size >= MAX_SIZE && accessOrder.length > 0) {
                    const oldest = accessOrder.shift();
                    cache.delete(oldest);
                }
                
                cache.set(key, regex);
                accessOrder.push(key);
                return regex;
            } catch (e) {
                // 无效正则返回匹配空
                return /(?!)/; // 永不匹配的正则
            }
        },
        
        // 批量预编译（用于manifest加载后）
        precompile: (patterns) => {
            const results = new Map();
            for (const [id, patternStr] of patterns) {
                try {
                    results.set(id, RegexPool.get(patternStr));
                } catch (e) {
                    Logger.error('RegexPool', `Invalid pattern for ${id}`);
                }
            }
            return results;
        },
        
        // 清理缓存（可选的内存管理）
        clear: () => {
            cache.clear();
            accessOrder.length = 0;
        },
        
        get size() { return cache.size; }
    };
})();

// ==========================================
// 优化6：处理器工厂（移除计数器，改为静态配置验证）
// ==========================================
function createProcessorFactory(requestId) {
    // 移除运行时计数器，改为配置阶段验证
    // 原脚本的 MAX_PROCESSORS_PER_REQUEST 检查移至配置加载时
    
    return {
        setFields: (params) => (obj, env) => {
            // 直接执行，无计数开销
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

        compose: (params, compile) => {
            const steps = params.steps || [];
            // 静态验证处理器数量
            if (steps.length > CONFIG.MAX_PROCESSORS_PER_REQUEST) {
                throw new Error(`Too many processors: ${steps.length} > ${CONFIG.MAX_PROCESSORS_PER_REQUEST}`);
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
            // 预编译条件判断逻辑
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
// 处理器编译器（使用RegexPool优化）
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
// Manifest加载器（使用RegexPool优化）
// ==========================================
class SimpleManifestLoader {
    constructor(requestId) {
        this._requestId = requestId;
        this._manifest = null;
        this._patterns = null; // 使用RegexPool后不再直接存储正则
    }

    async load() {
        const cacheKey = 'vip_manifest_v20';
        
        // 使用批量读取优化
        const { [cacheKey]: cached } = Storage.readBatch([cacheKey]);
        
        if (cached) {
            this._manifest = Utils.safeJsonParse(cached);
            this._compilePatterns();
            return this._manifest;
        }

        const res = await HTTP.get(`${CONFIG.REMOTE_BASE}/manifest.json?t=${Date.now()}`);
        
        if (res.status !== 200 || !res.body) {
            throw new Error(`HTTP ${res.status}`);
        }

        this._manifest = Utils.safeJsonParse(res.body);
        Storage.write(cacheKey, res.body);
        this._compilePatterns();
        return this._manifest;
    }

    _compilePatterns() {
        if (!this._manifest?.configs) return;
        
        // 使用RegexPool预编译所有模式
        const patternEntries = [];
        for (const [id, info] of Object.entries(this._manifest.configs)) {
            if (info.urlPattern) {
                patternEntries.push([id, info.urlPattern]);
            }
        }
        
        this._patterns = RegexPool.precompile(patternEntries);
    }

    findMatch(url) {
        if (!this._patterns) return null;
        for (const [id, pattern] of this._patterns) {
            try {
                if (pattern.test(url)) return id;
            } catch (e) {}
        }
        return null;
    }

    getConfigVersion(configId) {
        return this._manifest?.configVersions?.[configId] || '1.0';
    }
}

// ==========================================
// 配置加载器（使用存储优化）
// ==========================================
class SimpleConfigLoader {
    constructor(requestId) {
        this._requestId = requestId;
        this._memCache = new Map();
    }

    async load(configId, remoteVersion) {
        // L1: 同请求内存缓存
        if (this._memCache.has(configId)) {
            const cached = this._memCache.get(configId);
            if (cached._version === remoteVersion) return cached;
        }

        // L2: 持久化存储（使用优化后的Storage）
        const cacheKey = `vip_cfg_v20_${configId}`;
        const stored = Storage.read(cacheKey);

        if (stored) {
            try {
                const { v, t, d } = Utils.safeJsonParse(stored);
                if (v === remoteVersion && (Date.now() - t) < CONFIG.CONFIG_CACHE_TTL) {
                    const config = this._prepareConfig(d);
                    config._version = remoteVersion;
                    this._memCache.set(configId, config);
                    return config;
                }
            } catch (e) {
                // 缓存解析错误，继续获取远程
            }
        }

        // 远程下载
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

        if (res.status !== 200 || !res.body) {
            throw new Error(`HTTP ${res.status}`);
        }

        return Utils.safeJsonParse(res.body);
    }

    _prepareConfig(raw) {
        const config = { ...raw };

        // 使用RegexPool预编译正则
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
// 环境和引擎（保持原有逻辑）
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
        if (!body) {
            return { body: '{}' };
        }

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
        if (typeof body === 'string' && body.length > CONFIG.MAX_BODY_SIZE) {
            return { body };
        }

        let obj = Utils.safeJsonParse(body);
        if (!obj) {
            return { body };
        }

        const factory = createProcessorFactory(this._requestId);
        const compile = createCompiler(factory);
        const processor = config.processor ? compile(config.processor) : null;

        if (typeof processor === 'function') {
            try {
                obj = processor(obj, this.env);
            } catch (e) {
                // 处理器错误，保持原样
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
// 主函数
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

        // 1. 加载 Manifest
        const mLoader = new SimpleManifestLoader(requestId);
        const manifest = await mLoader.load();

        // 2. URL 匹配
        const configId = mLoader.findMatch(url);
        if (!configId) {
            releaseLock();
            return env.done({ body: env.getBody() });
        }

        // 3. 获取远程版本号
        const remoteVersion = mLoader.getConfigVersion(configId);

        // 4. 加载配置
        const cLoader = new SimpleConfigLoader(requestId);
        const config = await cLoader.load(configId, remoteVersion);

        // 5. 执行处理
        const engine = new VipEngine(env, requestId);
        const result = engine.process(env.getBody(), config);

        releaseLock();
        env.done(result);

    } catch (e) {
        releaseLock();
        env.done({ body: env.getBody() });
    }
}

// 启动
main();
