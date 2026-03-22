/**
 * ==========================================
 * Unified VIP Unlock Manager v20.2.7
 * 统一 VIP 解锁管理器 - 优化版（正则缓存 + 性能统计 + LRU）
 * @version 20.2.7
 * @description 包含正则预编译缓存、处理器耗时统计、统一LRU管理
 * ==========================================

[rewrite_local]
 # iAppDaily - 余额查询接口（JSON模式-声明式字段设置）
 ^https:\/\/api\.iappdaily\.com\/my\/balance url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v3.js
 ^https?:\/\/(?:api[23]\.tophub\.(?:xyz|today|app)|tophub(?:2)?\.(?:tophubdata\.com|idaily\.today|remai\.today|iappdaiy\.com|ipadown\.com))\/account\/sync url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v3.js
 # gps - GPS工具箱（JSON模式-声明式字段设置）
 ^https:\/\/service\.gpstool\.com\/app\/index\/getUserInfo url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v3.js
 ^https?:\/\/mapi\.kouyuxingqiu\.com\/api\/v2 url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v3.js
 # mhlz - 魔幻粒子（JSON模式-声明式前缀处理）
 ^https?:\/\/ss\.landintheair\.com\/storage\/ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v3.js
 # v2ex - V2EX去广告（HTML替换模式）
 ^https?:\/\/.*v2ex\.com\/(?!(?:.*(?:api|login|cdn-cgi|verify|auth|captch|\.(js|css|jpg|jpeg|png|webp|gif|zip|woff|woff2|m3u8|mp4|mov|m4v|avi|mkv|flv|rmvb|wmv|rm|asf|asx|mp3|json|ico|otf|ttf)))).+$ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v3.js
 # foday - 复游会去广告（多路径模式-声明式过滤）
 ^https?:\/\/apis\.folidaymall\.com\/online\/capi\/component\/getPageComponents url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v3.js
 # qiujingapp - 球竞APP去广告（多路径模式-声明式清空）
 ^https?:\/\/gateway-api\.yizhilive\.com\/api\/v2\/index\/carouses\/(3|6|8|11)(\?.*)?$ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v3.js
 ^https?:\/\/gateway-api\.yizhilive\.com\/api\/v3\/index\/all\?.*position=2.*$ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v3.js
 # Keep - 课程/会员接口（正则替换模式）
 ^https?:\/\/(api|kit)\.gotokeep\.com\/(nuocha|gerudo|athena|nuocha\/plans|suit\/v5\/smart|kprime\/v4\/suit\/sales)\/ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v3.js
 # bqwz - 标枪王者游戏数据接口（游戏数值模式）
 ^https?:\/\/javelin\.mandrillvr\.com\/api\/data\/get_game_data url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v3.js
 # bxkt - 伴学课堂接口（混合模式-声明式组合）
 ^https?:\/\/api\.banxueketang\.com\/api\/classpal\/app\/v1 url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v3.js
 # tv - 影视去广告接口（多路径模式-完全声明式）
 ^https?:\/\/(yzy0916|yz1018|yz250907|yz0320|cfvip)\..+\.com\/(v2|v1)\/api\/(basic\/init|home\/firstScreen|adInfo\/getPageAd|home\/body) url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v3.js
 ^https?:\/\/(yz\w{4,6}|cfvip)\..+\.com\/(v2|v1)\/api\/(adInfo|vodInfo)\/(getPageAd|getTextAd|getSearchAd|getVodBodyAd|getVodPauseAd|getUserCenterAd) url reject-dict
 ^https?:\/\/(yz\w{4,6}|cfvip)\..+\.com\/(v2|v1)\/api\/(home\/notice|gameCenter\/gameDetailList) url reject-dict
 # 成语来解压 - 微信小程序无限金币（游戏数值模式）
 ^https?:\/\/yr-game-api\.feigo\.fun\/api\/user\/get-game-user-value url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v3.js
 # 星际使命 - 微信小程序游戏数据修改（JSON声明式处理器-完全重构）
 ^https?:\/\/star\.jvplay\.cn\/v2\/storage url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v3.js
# wohome - 联通智家去广告（条件删除模式）
 ^https:\/\/iotpservice\.smartont\.net\/wohome\/dispatcher url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v3.js
# 思朗月影视 - 用户信息VIP解锁
^https?:\/\/theater-api\.sylangyue\.xyz\/api\/user\/info url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v3.js
 [mitm]
 hostname = theater-api.sylangyue.xyz, api.iappdaily.com, api2.tophub.today, api2.tophub.app, api3.tophub.xyz, api3.tophub.today, api3.tophub.app, tophub.tophubdata.com, tophub2.tophubdata.com, tophub.idaily.today, tophub2.idaily.today, tophub.remai.today, tophub.iappdaiy.com, tophub.ipadown.com,service.gpstool.com, mapi.kouyuxingqiu.com, ss.landintheair.com, *.v2ex.com, apis.folidaymall.com, gateway-api.yizhilive.com, pagead*.googlesyndication.com, api.gotokeep.com, kit.gotokeep.com, *.gotokeep.*, 120.53.74.*, 162.14.5.*, 42.187.199.*, 101.42.124.*, javelin.mandrillvr.com,api.banxueketang.com, yzy0916.*.com, yz1018.*.com, yz250907.*.com, yz0320.*.com, cfvip.*.com,yr-game-api.feigo.fun,star.jvplay.cn,iotpservice.smartont.net
*/

'use strict';

// ==========================================
// 优化1: LRU 缓存管理（统一所有缓存）
// ==========================================
class LRUCache {
    constructor(maxSize, name = 'Cache') {
        this.max = maxSize;
        this.cache = new Map();
        this.name = name;
        this.stats = { hits: 0, misses: 0, evictions: 0 };
    }

    get(key) {
        if (!this.cache.has(key)) {
            this.stats.misses++;
            return undefined;
        }
        // 移动到末尾（最新使用）
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        this.stats.hits++;
        return value;
    }

    set(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size >= this.max) {
            // 淘汰最久未使用
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
            this.stats.evictions++;
            Logger.debug(this.name, `LRU evicted: ${firstKey.substring(0, 20)}...`);
        }
        this.cache.set(key, value);
    }

    has(key) {
        return this.cache.has(key);
    }

    get size() {
        return this.cache.size;
    }

    getStats() {
        const hitRate = this.stats.hits + this.stats.misses > 0 
            ? (this.stats.hits / (this.stats.hits + this.stats.misses) * 100).toFixed(1) 
            : 0;
        return {
            ...this.stats,
            size: this.cache.size,
            hitRate: `${hitRate}%`
        };
    }

    clear() {
        this.cache.clear();
        this.stats = { hits: 0, misses: 0, evictions: 0 };
    }
}

// ==========================================
// 优化9: 性能统计工具
// ==========================================
const PerfStats = {
    data: new Map(),
    enabled: false,

    enable() {
        this.enabled = true;
    },

    start(id, detail = '') {
        if (!this.enabled) return null;
        return { 
            id, 
            detail,
            startTime: Date.now(),
            subMarkers: []
        };
    },

    startSub(marker, subId) {
        if (!this.enabled || !marker) return null;
        const subMarker = { id: subId, startTime: Date.now() };
        marker.subMarkers.push(subMarker);
        return subMarker;
    },

    endSub(marker, subMarker, success = true) {
        if (!this.enabled || !marker || !subMarker) return;
        const duration = Date.now() - subMarker.startTime;
        subMarker.duration = duration;
        subMarker.success = success;
    },

    end(marker, success = true) {
        if (!this.enabled || !marker) return 0;
        const duration = Date.now() - marker.startTime;
        const key = marker.id;
        
        if (!this.data.has(key)) {
            this.data.set(key, { 
                count: 0, 
                total: 0, 
                max: 0, 
                min: Infinity, 
                errors: 0,
                subStats: new Map()
            });
        }
        
        const stat = this.data.get(key);
        stat.count++;
        stat.total += duration;
        stat.max = Math.max(stat.max, duration);
        stat.min = Math.min(stat.min, duration);
        if (!success) stat.errors++;

        // 统计子标记
        for (const sub of marker.subMarkers || []) {
            if (!stat.subStats.has(sub.id)) {
                stat.subStats.set(sub.id, { count: 0, total: 0, max: 0 });
            }
            const subStat = stat.subStats.get(sub.id);
            subStat.count++;
            subStat.total += sub.duration || 0;
            subStat.max = Math.max(subStat.max, sub.duration || 0);
        }

        return duration;
    },

    report() {
        if (!this.enabled || this.data.size === 0) return;
        
        const lines = ['\n╔════════════════════════════════════════════════════════╗'];
        lines.push('║           Performance Report (v20.2.7)                 ║');
        lines.push('╠════════════════════════════════════════════════════════╣');
        
        // 按总耗时排序
        const sorted = [...this.data.entries()].sort((a, b) => b[1].total - a[1].total);
        
        for (const [key, stat] of sorted) {
            const avg = (stat.total / stat.count).toFixed(2);
            const total = stat.total.toFixed(2);
            lines.push(`║ ${key.padEnd(20)} │ avg=${avg.padStart(6)}ms │ total=${total.padStart(8)}ms │ n=${stat.count}`);
            lines.push(`║                      │ max=${stat.max.toFixed(2).padStart(6)}ms │ min=${stat.min === Infinity ? 'N/A' : stat.min.toFixed(2).padStart(6)}ms │ err=${stat.errors}`);
            
            // 子统计
            if (stat.subStats.size > 0) {
                for (const [subKey, subStat] of stat.subStats) {
                    const subAvg = (subStat.total / subStat.count).toFixed(2);
                    lines.push(`║   └─ ${subKey.padEnd(16)} │ avg=${subAvg.padStart(6)}ms │ max=${subStat.max.toFixed(2).padStart(6)}ms │ n=${subStat.count}`);
                }
            }
        }
        
        lines.push('╚════════════════════════════════════════════════════════╝');
        Logger.stats('Perf', lines.join('\n'));
    },

    reset() {
        this.data.clear();
    }
};

// ==========================================
// 防重复执行锁
// ==========================================
const EXECUTION_KEY = '__UnifiedVIP_executing_' + (typeof $request !== 'undefined' ? ($request.url || Date.now()) : Date.now());
try {
    if (globalThis[EXECUTION_KEY]) {
        if (typeof $response !== 'undefined' && $response) {
            $done({ body: $response.body });
        } else {
            $done({});
        }
        return;
    }
    globalThis[EXECUTION_KEY] = true;
} catch (e) {}

const releaseLock = () => {
    try {
        delete globalThis[EXECUTION_KEY];
    } catch (e) {}
};

// ==========================================
// 配置区域
// ==========================================
const CONFIG = {
    REMOTE_BASE: 'https://joeshu.github.io/vip-unlock-configs',
    CACHE_TTL: 6 * 60 * 60 * 1000,
    CONFIG_CACHE_TTL: 60 * 60 * 1000,
    PRELOAD_ENABLED: true,
    PRELOAD_CONCURRENT: 3,
    DOMAIN_INDEX_ENABLED: true,
    LAZY_COMPILE: true,
    HOT_RELOAD: true,
    DEBUG: true,
    TIMEOUT: 10,
    PERF_STATS: true  // 新增：性能统计开关
};

const META = {
    name: 'UnifiedVIP',
    version: '20.2.7'
};

// ==========================================
// 日志系统
// ==========================================
const Logger = (() => {
    const isDebug = CONFIG.DEBUG === true;
    const noop = () => {};
    
    const log = (level, tag, msg, data) => {
        const now = new Date();
        const time = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
        const prefix = `[${META.name}][${level.toUpperCase()}][${time}]`;
        const tagStr = tag ? `[${tag}]` : '';
        const dataStr = data ? ` | ${typeof data === 'object' ? JSON.stringify(data) : data}` : '';
        console.log(`${prefix}${tagStr} ${msg}${dataStr}`);
    };
    
    const fatal = (tag, msg, err) => {
        const errorMsg = err ? `${msg}: ${err.message || err}` : msg;
        log('FATAL', tag, errorMsg);
    };
    
    if (!isDebug) {
        return {
            debug: noop,
            info: noop,
            warn: noop,
            stats: noop,
            error: noop,
            fatal: fatal,
            _isSilent: true
        };
    }
    
    return {
        debug: (tag, msg, data) => log('debug', tag, msg, data),
        info: (tag, msg, data) => log('info', tag, msg, data),
        warn: (tag, msg, data) => log('warn', tag, msg, data),
        stats: (msg, data) => log('STATS', '', msg, data),
        error: (tag, msg, data) => log('error', tag, msg, data),
        fatal: fatal,
        _isSilent: false
    };
})();

// 启用性能统计
if (CONFIG.PERF_STATS) {
    PerfStats.enable();
}

// ==========================================
// 环境修复
// ==========================================
(function fixEnvironment() {
    if (typeof console === 'undefined') globalThis.console = { log: () => {} };
    const _log = console.log.bind(console);
    ['error', 'warn', 'debug', 'info'].forEach(method => {
        if (typeof console[method] !== 'function') {
            console[method] = (...args) => _log(`[${method.toUpperCase()}]`, ...args);
        }
    });
})();

// ==========================================
// HTTP 请求
// ==========================================
const HTTP = {
    get: (url, timeout = CONFIG.TIMEOUT) => new Promise((resolve, reject) => {
        const startTime = Date.now();
        const handleResponse = (error, response, body) => {
            if (error) {
                reject(new Error(`HTTP Error: ${error}`));
            } else {
                resolve({
                    body: body || '',
                    status: typeof response === 'object' ? (response.status || 200) : 200,
                    time: Date.now() - startTime
                });
            }
        };

        try {
            if (typeof $task !== 'undefined') {
                $task.fetch({ url, method: 'GET', timeout }).then(
                    res => handleResponse(null, { status: res.statusCode }, res.body),
                    err => handleResponse(err, null, null)
                );
            } else if (typeof $httpClient !== 'undefined') {
                $httpClient.get({ url, timeout }, handleResponse);
            } else if (typeof $http !== 'undefined') {
                $http.get(url, handleResponse);
            } else {
                reject(new Error('No HTTP client'));
            }
        } catch (e) {
            reject(new Error(`HTTP Setup: ${e.message}`));
        }
    })
};

// ==========================================
// 存储
// ==========================================
const Storage = {
    read: (key) => {
        try {
            if (typeof $prefs !== 'undefined') return $prefs.valueForKey(key);
            if (typeof $persistentStore !== 'undefined') return $persistentStore.read(key);
        } catch (e) {}
        return null;
    },
    write: (key, value) => {
        try {
            if (typeof $prefs !== 'undefined') return $prefs.setValueForKey(value, key);
            if (typeof $persistentStore !== 'undefined') return $persistentStore.write(value, key);
        } catch (e) {}
        return false;
    },
    remove: (key) => Storage.write(key, null)
};

// ==========================================
// 工具函数
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
        return path.split('.').reduce((current, part) => {
            if (current === null || current === undefined) return undefined;
            const match = part.match(/^([^\\[]+)\\[(\\d+)\\]$/);
            if (match) {
                const arr = current[match[1]];
                return Array.isArray(arr) ? arr[parseInt(match[2])] : undefined;
            }
            return current[part];
        }, obj);
    },
    setPath: (obj, path, value) => {
        if (!path || !obj) return obj;
        const parts = path.split('.');
        let current = obj;

        for (let i = 0; i < parts.length - 1; i++) {
            const part = parts[i];
            const nextPart = parts[i + 1];
            const match = part.match(/^([^\\[]+)\\[(\\d+)\\]$/);

            if (match) {
                const arrName = match[1];
                const arrIndex = parseInt(match[2]);
                if (!(arrName in current) || !Array.isArray(current[arrName])) {
                    current[arrName] = [];
                }
                while (current[arrName].length <= arrIndex) current[arrName].push({});
                if (i === parts.length - 2) {
                    current[arrName][arrIndex] = value;
                    return obj;
                } else {
                    current = current[arrName][arrIndex];
                }
            } else {
                const isNextArray = /^[^\\[]+\\[\\d+\\]$/.test(nextPart);
                if (!(part in current) || current[part] === null) {
                    current[part] = isNextArray ? [] : {};
                }
                current = current[part];
            }
        }

        const lastPart = parts[parts.length - 1];
        const lastMatch = lastPart.match(/^([^\\[]+)\\[(\\d+)\\]$/);

        if (lastMatch) {
            const arrName = lastMatch[1];
            const arrIndex = parseInt(lastMatch[2]);
            if (!Array.isArray(current[arrName])) current[arrName] = [];
            while (current[arrName].length <= arrIndex) current[arrName].push(null);
            current[arrName][arrIndex] = value;
        } else {
            current[lastPart] = value;
        }
        return obj;
    },
    simpleHash: (str) => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return hash.toString(16);
    }
};

// ==========================================
// 优化2: 正则预编译缓存
// ==========================================
const RegexCache = new LRUCache(500, 'RegexCache');

function getCachedRegex(pattern, flags = '') {
    const key = `${pattern}#${flags}`;
    let regex = RegexCache.get(key);
    
    if (!regex) {
        try {
            regex = new RegExp(pattern, flags);
            RegexCache.set(key, regex);
            Logger.debug('Regex', `Compiled: ${pattern.substring(0, 40)}...`);
        } catch (e) {
            Logger.error('Regex', `Invalid pattern: ${pattern}, error: ${e.message}`);
            regex = /.*/;  // 降级方案
        }
    }
    
    return regex;
}

// ==========================================
// 处理器工厂（注入性能统计）
// ==========================================
const ProcessorFactory = {
    setFields: (params) => (obj, env) => {
        const marker = PerfStats.start('setFields');
        let modified = 0;
        
        for (const [path, value] of Object.entries(params.fields || {})) {
            Utils.setPath(obj, path, value);
            modified++;
        }
        
        const duration = PerfStats.end(marker, true);
        Logger.debug('Processor', `SetFields modified ${modified} fields in ${duration.toFixed(2)}ms`);
        return obj;
    },
    
    mapArray: (params) => (obj, env) => {
        const marker = PerfStats.start('mapArray', `path=${params.path}`);
        const arr = Utils.getPath(obj, params.path);
        
        if (!Array.isArray(arr)) {
            PerfStats.end(marker, false);
            Logger.debug('Processor', `${params.path} is not an array`);
            return obj;
        }
        
        let modified = 0;
        const itemMarker = PerfStats.startSub(marker, 'itemProcessing');
        
        arr.forEach((item, index) => {
            if (!item) return;
            const subMarker = PerfStats.startSub(itemMarker, `item[${index}]`);
            for (const [field, value] of Object.entries(params.fields || {})) {
                if (item[field] !== undefined || value !== undefined) {
                    item[field] = value;
                }
                modified++;
            }
            PerfStats.endSub(itemMarker, subMarker, true);
        });
        
        PerfStats.endSub(marker, itemMarker, true);
        const duration = PerfStats.end(marker, true);
        Logger.debug('Processor', `MapArray processed ${modified} items in ${duration.toFixed(2)}ms`);
        return obj;
    },
    
    filterArray: (params) => (obj, env) => {
        const marker = PerfStats.start('filterArray', `path=${params.path}`);
        const arr = Utils.getPath(obj, params.path);
        
        if (!Array.isArray(arr)) {
            PerfStats.end(marker, false);
            return obj;
        }
        
        const originalLength = arr.length;
        // 使用 Set 优化（已是 O(1)）
        const excludeSet = new Set(params.excludeKeys || []);
        const filterMarker = PerfStats.startSub(marker, 'filterLoop');
        
        const filtered = arr.filter(item => !excludeSet.has(item[params.keyField]));
        
        PerfStats.endSub(marker, filterMarker, true);
        Utils.setPath(obj, params.path, filtered);
        
        const duration = PerfStats.end(marker, true);
        Logger.debug('Processor', `Filtered ${params.path}: ${originalLength} → ${filtered.length} in ${duration.toFixed(2)}ms`);
        return obj;
    },
    
    clearArray: (params) => (obj, env) => {
        const marker = PerfStats.start('clearArray');
        const arr = Utils.getPath(obj, params.path);
        
        if (Array.isArray(arr)) {
            const count = arr.length;
            arr.length = 0;
            const duration = PerfStats.end(marker, true);
            Logger.debug('Processor', `Cleared ${params.logName || params.path}: ${count} items in ${duration.toFixed(2)}ms`);
        } else {
            PerfStats.end(marker, false);
        }
        return obj;
    },
    
    deleteFields: (params) => (obj, env) => {
        const marker = PerfStats.start('deleteFields');
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
        
        const duration = PerfStats.end(marker, true);
        Logger.debug('Processor', `Deleted ${deleted} fields in ${duration.toFixed(2)}ms`);
        return obj;
    },
    
    sliceArray: (params) => (obj, env) => {
        const marker = PerfStats.start('sliceArray');
        const arr = Utils.getPath(obj, params.path);
        
        if (Array.isArray(arr) && arr.length > params.keepCount) {
            Utils.setPath(obj, params.path, arr.slice(0, params.keepCount));
            const duration = PerfStats.end(marker, true);
            Logger.debug('Processor', `Sliced ${params.path}: ${arr.length} → ${params.keepCount} in ${duration.toFixed(2)}ms`);
        } else {
            PerfStats.end(marker, false);
        }
        return obj;
    },
    
    shiftArray: (params) => (obj, env) => {
        const marker = PerfStats.start('shiftArray');
        const arr = Utils.getPath(obj, params.path);
        
        if (Array.isArray(arr) && arr.length > 0) {
            arr.shift();
            const duration = PerfStats.end(marker, true);
            Logger.debug('Processor', `Shifted ${params.logName || params.path} in ${duration.toFixed(2)}ms`);
        } else {
            PerfStats.end(marker, false);
        }
        return obj;
    },
    
    processByKeyPrefix: (params) => (obj, env) => {
        const marker = PerfStats.start('processByKeyPrefix');
        const target = Utils.getPath(obj, params.objPath);
        
        if (!target || typeof target !== 'object') {
            PerfStats.end(marker, false);
            return obj;
        }
        
        let modified = 0;
        for (const [key, value] of Object.entries(target)) {
            for (const [prefix, handler] of Object.entries(params.prefixRules || {})) {
                if (prefix === '*') continue;
                if (key.startsWith(prefix)) {
                    Object.assign(value, handler);
                    modified++;
                    break;
                }
            }
        }
        
        const duration = PerfStats.end(marker, true);
        Logger.debug('Processor', `Processed ${modified} items by key prefix in ${duration.toFixed(2)}ms`);
        return obj;
    },
    
    compose: (params, compile) => {
        const processors = (params.steps || []).map((step, idx) => ({
            name: step.processor || `step${idx}`,
            fn: compile(step)
        }));
        
        return (obj, env) => {
            const marker = PerfStats.start('compose', `${processors.length} steps`);
            let result = obj;
            
            for (let i = 0; i < processors.length; i++) {
                if (!result) break;
                const stepMarker = PerfStats.startSub(marker, processors[i].name);
                Logger.debug('Compose', `Step ${i + 1}/${processors.length}: ${processors[i].name}`);
                result = processors[i].fn(result, env);
                PerfStats.endSub(marker, stepMarker, !!result);
            }
            
            const duration = PerfStats.end(marker, true);
            Logger.debug('Compose', `Completed ${processors.length} steps in ${duration.toFixed(2)}ms`);
            return result;
        };
    },
    
    when: (params, compile) => {
        return (obj, env) => {
            const marker = PerfStats.start('when', `condition=${params.condition}`);
            
            try {
                let conditionMet = false;
                const data = Utils.getPath(obj, params.check || 'data');
                const url = env?.getUrl?.() || '';
                
                const evalMarker = PerfStats.startSub(marker, 'conditionEval');
                
                switch (params.condition) {
                    case "empty":
                        conditionMet = !data || Object.keys(data).length === 0;
                        break;
                    case "hasKey":
                        const arr = Utils.getPath(obj, params.path);
                        conditionMet = Array.isArray(arr) && arr.some(item => item?.key === params.key);
                        break;
                    case "pathMatch":
                        conditionMet = params.path && url.includes(params.path);
                        break;
                    case "queryMatch":
                        const match = url.match(new RegExp(`[?&]${params.param}=([^&]+)`));
                        conditionMet = match && decodeURIComponent(match[1]) === params.value;
                        break;
                    case "includes":
                        conditionMet = Array.isArray(data) ? data.includes(params.value) : String(data).includes(params.value);
                        break;
                    case "inSet":
                        const valueSet = new Set(params.values || []);
                        const checkValue = Utils.getPath(obj, params.check || 'data');
                        conditionMet = valueSet.has(checkValue);
                        break;
                    case "isObject":
                        conditionMet = typeof data === 'object' && !Array.isArray(data) && data !== null;
                        break;
                    case "isArray":
                        conditionMet = Array.isArray(data);
                        break;
                    default:
                        if (typeof params.condition === 'function') {
                            conditionMet = params.condition(obj);
                        }
                }
                
                PerfStats.endSub(marker, evalMarker, true);
                Logger.debug('When', `Condition "${params.condition}" = ${conditionMet}`);
                
                const execMarker = PerfStats.startSub(marker, conditionMet ? 'then' : 'else');
                let result;
                
                if (conditionMet && params.then) {
                    result = compile(params.then)(obj, env);
                } else if (!conditionMet && params.else) {
                    result = compile(params.else)(obj, env);
                } else {
                    result = obj;
                }
                
                PerfStats.endSub(marker, execMarker, true);
                const duration = PerfStats.end(marker, true);
                Logger.debug('When', `Executed in ${duration.toFixed(2)}ms`);
                
                return result;
            } catch (e) {
                PerfStats.end(marker, false);
                Logger.debug('When', `Error: ${e.message}`);
                return obj;
            }
        };
    },
    
    sceneDispatcher: (params, compile) => {
        const scenes = (params.scenes || []).map(s => ({
            name: s.name,
            when: s.when,
            path: s.path,
            param: s.param,
            value: s.value,
            check: s.check,
            key: s.key,
            values: s.values,
            then: compile(s.then)
        }));
        
        return (obj, env) => {
            const marker = PerfStats.start('sceneDispatcher', `${scenes.length} scenes`);
            const url = env?.getUrl?.() || '';
            
            for (const scene of scenes) {
                const sceneMarker = PerfStats.startSub(marker, `scene:${scene.name}`);
                
                try {
                    let matched = false;
                    
                    switch (scene.when) {
                        case "isObject":
                            matched = typeof obj.data === 'object' && !Array.isArray(obj.data);
                            break;
                        case "isArray":
                            matched = Array.isArray(obj.data);
                            break;
                        case "pathMatch":
                            matched = scene.path && url.includes(scene.path);
                            break;
                        case "queryMatch":
                            const match = url.match(new RegExp(`[?&]${scene.param}=([^&]+)`));
                            matched = match && decodeURIComponent(match[1]) === scene.value;
                            break;
                        case "includes":
                            const data = Utils.getPath(obj, scene.check || 'data');
                            matched = Array.isArray(data) 
                                ? data.includes(scene.value) 
                                : String(data).includes(scene.value);
                            break;
                        case "inSet":
                            const checkValue = Utils.getPath(obj, scene.check || 'data');
                            const valueSet = new Set(scene.values || []);
                            matched = valueSet.has(checkValue);
                            break;
                        case "empty":
                            const checkData = Utils.getPath(obj, scene.check || 'data');
                            matched = !checkData || Object.keys(checkData).length === 0;
                            break;
                        case "hasKey":
                            const arr = Utils.getPath(obj, scene.path);
                            matched = Array.isArray(arr) && arr.some(item => item?.key === scene.key);
                            break;
                        default:
                            if (typeof scene.when === 'function') {
                                matched = scene.when(obj);
                            }
                    }
                    
                    if (matched) {
                        Logger.debug('Scene', `Matched: ${scene.name}`);
                        const execMarker = PerfStats.startSub(sceneMarker, 'execute');
                        const result = scene.then(obj, env);
                        PerfStats.endSub(sceneMarker, execMarker, true);
                        PerfStats.endSub(marker, sceneMarker, true);
                        
                        const duration = PerfStats.end(marker, true);
                        Logger.debug('Scene', `Executed ${scene.name} in ${duration.toFixed(2)}ms`);
                        return result;
                    }
                    
                    PerfStats.endSub(marker, sceneMarker, false);
                } catch (e) {
                    Logger.debug('Scene', `Error in ${scene.name}: ${e.message}`);
                    PerfStats.endSub(marker, sceneMarker, false);
                }
            }
            
            const duration = PerfStats.end(marker, true);
            Logger.debug('Scene', `No scene matched after ${scenes.length} checks in ${duration.toFixed(2)}ms`);
            return obj;
        };
    }
};

// ==========================================
// 优化1: 使用 LRUCache 替换原有 Map
// ==========================================
const ProcessorCompileCache = new LRUCache(200, 'ProcessorCompile');
const ConfigProcessorCache = new LRUCache(100, 'ConfigProcessor');

function compileProcessor(def) {
    if (!def || !def.processor) return null;

    if (CONFIG.LAZY_COMPILE) {
        const cacheKey = Utils.simpleHash(JSON.stringify(def));
        let processor = ProcessorCompileCache.get(cacheKey);
        if (processor) {
            Logger.debug('Compile', `Cache hit: ${def.processor}`);
            return processor;
        }
    }

    const factory = ProcessorFactory[def.processor];
    if (!factory) {
        Logger.error('Compile', `Unknown processor: ${def.processor}`);
        return null;
    }
    
    const compileMarker = PerfStats.start('compileProcessor', def.processor);
    const processor = factory(def.params, compileProcessor);
    PerfStats.end(compileMarker, !!processor);

    if (CONFIG.LAZY_COMPILE && processor) {
        const cacheKey = Utils.simpleHash(JSON.stringify(def));
        ProcessorCompileCache.set(cacheKey, processor);
        Logger.debug('Compile', `Compiled and cached: ${def.processor}, cache size: ${ProcessorCompileCache.size}`);
    }

    return processor;
}

function getConfigProcessor(config) {
    if (!config || !config.processor || config.mode !== 'json') return null;
    
    const configId = config.id || Utils.simpleHash(JSON.stringify(config));
    
    let processor = ConfigProcessorCache.get(configId);
    if (processor) {
        Logger.debug('Cache', `Config processor cache hit: ${configId}`);
        return processor;
    }
    
    const marker = PerfStats.start('getConfigProcessor', configId);
    processor = compileProcessor(config.processor);
    if (processor) {
        ConfigProcessorCache.set(configId, processor);
        Logger.debug('Cache', `Compiled config processor for ${configId}, cache size: ${ConfigProcessorCache.size}`);
    }
    PerfStats.end(marker, !!processor);
    
    return processor;
}

// ==========================================
// 运行时加载器（使用正则缓存）
// ==========================================
class RuntimeLoader {
    constructor() {
        this.cache = new Map();
        this.manifest = null;
        this.patterns = new Map();
        this.domainIndex = new Map();
        this.accessStats = new Map();
        this._manifestMemCache = null;
        this._manifestCacheTime = 0;
        this._configMemCache = new LRUCache(100, 'ConfigMem');  // 优化1: LRU
        this._preloading = new Set();
    }

    _isMemCacheValid(cacheTime, ttl = CONFIG.CONFIG_CACHE_TTL) {
        return cacheTime && (Date.now() - cacheTime < ttl);
    }

    _getMemConfigCache(configId) {
        const item = this._configMemCache.get(configId);
        if (item) {
            Logger.debug('Loader', `Memory cache hit: ${configId}`);
            return item.data;
        }
        return null;
    }

    _setMemConfigCache(configId, data) {
        this._configMemCache.set(configId, { data, time: Date.now() });
    }

    async loadManifest(force = false) {
        const marker = PerfStats.start('loadManifest');
        const cacheKey = 'vip_manifest_v20';
        const cacheTimeKey = `${cacheKey}_time`;

        if (!force && this._manifestMemCache && this._isMemCacheValid(this._manifestCacheTime, CONFIG.CACHE_TTL)) {
            Logger.debug('Loader', 'Using memory cached manifest');
            PerfStats.end(marker, true);
            return this._manifestMemCache;
        }

        if (!force) {
            const cached = Storage.read(cacheKey);
            const cacheTime = parseInt(Storage.read(cacheTimeKey) || '0');
            if (cached && this._isMemCacheValid(cacheTime, CONFIG.CACHE_TTL)) {
                this.manifest = Utils.safeJsonParse(cached);
                if (this.manifest) {
                    this._manifestMemCache = this.manifest;
                    this._manifestCacheTime = Date.now();
                    this.compilePatterns();
                    Logger.debug('Loader', 'Using storage cached manifest');
                    PerfStats.end(marker, true);
                    return this.manifest;
                }
            }
        }

        const url = `${CONFIG.REMOTE_BASE}/manifest.json?t=${Date.now()}`;
        Logger.debug('Loader', 'Fetching manifest...');

        try {
            const res = await HTTP.get(url);
            if (res.status === 200 && res.body) {
                this.manifest = Utils.safeJsonParse(res.body);
                if (this.manifest) {
                    Storage.write(cacheKey, res.body);
                    Storage.write(cacheTimeKey, Date.now().toString());
                    this._manifestMemCache = this.manifest;
                    this._manifestCacheTime = Date.now();
                    this.compilePatterns();
                    Logger.debug('Loader', `Manifest updated: ${Object.keys(this.manifest.configs).length} apps`);
                    PerfStats.end(marker, true);
                    return this.manifest;
                }
            }
            throw new Error(`HTTP ${res.status}`);
        } catch (e) {
            Logger.fatal('Loader', 'Manifest fetch failed', e);
            const expired = Storage.read(cacheKey);
            if (expired) {
                this.manifest = Utils.safeJsonParse(expired);
                this._manifestMemCache = this.manifest;
                this._manifestCacheTime = Date.now();
                this.compilePatterns();
                PerfStats.end(marker, true);
                return this.manifest;
            }
            PerfStats.end(marker, false);
            throw e;
        }
    }

    compilePatterns() {
        const marker = PerfStats.start('compilePatterns');
        this.patterns.clear();
        this.domainIndex.clear();

        if (!this.manifest || !this.manifest.configs) {
            PerfStats.end(marker, false);
            return;
        }

        for (const [id, info] of Object.entries(this.manifest.configs)) {
            try {
                if (info.urlPattern) {
                    // 优化2: 使用正则缓存
                    const regex = getCachedRegex(info.urlPattern);
                    this.patterns.set(id, regex);

                    if (CONFIG.DOMAIN_INDEX_ENABLED) {
                        const domainMatch = info.urlPattern.match(/(?:\^?https?\?:\\\/\\\/)?([^\\\/\\s]+)/);
                        if (domainMatch) {
                            const domain = domainMatch[1]
                                .replace(/\\\./g, '.')
                                .replace(/\\d\+\\??/g, '*')
                                .replace(/\\[.*?\\]/g, '*');
                            if (!this.domainIndex.has(domain)) {
                                this.domainIndex.set(domain, []);
                            }
                            this.domainIndex.get(domain).push(id);
                        }
                    }
                }
            } catch (e) {
                Logger.error('Loader', `Invalid regex for ${id}: ${e.message}`);
            }
        }

        Logger.debug('Loader', `Compiled ${this.patterns.size} patterns, ${this.domainIndex.size} domains`);
        PerfStats.end(marker, true);
    }

    findMatch(url) {
        const marker = PerfStats.start('findMatch');
        let candidates = [];

        if (CONFIG.DOMAIN_INDEX_ENABLED) {
            try {
                const urlObj = new URL(url);
                const hostname = urlObj.hostname;

                candidates = this.domainIndex.get(hostname) || [];

                if (candidates.length === 0) {
                    const parts = hostname.split('.');
                    for (let i = 1; i < parts.length; i++) {
                        const wildcard = `*.${parts.slice(i).join('.')}`;
                        if (this.domainIndex.has(wildcard)) {
                            candidates = this.domainIndex.get(wildcard);
                            break;
                        }
                    }
                }
            } catch (e) {}
        }

        // 快速路径
        for (const id of candidates) {
            try {
                if (this.patterns.get(id).test(url)) {
                    this._updateAccessStats(id);
                    this._triggerPreload(candidates.filter(cid => cid !== id));
                    PerfStats.end(marker, true);
                    return id;
                }
            } catch (e) {
                Logger.debug('Loader', `Pattern test error: ${id}`);
            }
        }

        // 慢速路径
        for (const [id, pattern] of this.patterns) {
            if (!candidates.includes(id)) {
                try {
                    if (pattern.test(url)) {
                        this._updateAccessStats(id);
                        PerfStats.end(marker, true);
                        return id;
                    }
                } catch (e) {}
            }
        }

        PerfStats.end(marker, false);
        return null;
    }

    _updateAccessStats(configId) {
        const stats = this.accessStats.get(configId) || { count: 0, lastAccess: 0 };
        stats.count++;
        stats.lastAccess = Date.now();
        this.accessStats.set(configId, stats);
    }

    _triggerPreload(configIds) {
        if (!CONFIG.PRELOAD_ENABLED) return;

        const sortedIds = configIds
            .filter(id => !this._getMemConfigCache(id) && !this._preloading.has(id))
            .sort((a, b) => {
                const statsA = this.accessStats.get(a) || { count: 0 };
                const statsB = this.accessStats.get(b) || { count: 0 };
                return statsB.count - statsA.count;
            })
            .slice(0, CONFIG.PRELOAD_CONCURRENT);

        for (const id of sortedIds) {
            this._preloading.add(id);
            setTimeout(() => {
                this.loadConfig(id).finally(() => {
                    this._preloading.delete(id);
                });
            }, 100);
        }
    }

    async loadConfig(configId, force = false) {
        const marker = PerfStats.start('loadConfig', configId);
        
        if (!force && CONFIG.HOT_RELOAD && this.manifest?.configVersions?.[configId]) {
            const remoteVersion = this.manifest.configVersions[configId];
            const cachedVersion = Storage.read(`vip_cfg_version_${configId}`);
            if (cachedVersion !== remoteVersion) {
                force = true;
                Logger.debug('Loader', `Version changed for ${configId}`);
            }
        }

        if (!force) {
            const memCache = this._getMemConfigCache(configId);
            if (memCache) {
                PerfStats.end(marker, true);
                return memCache;
            }
        }

        const cacheKey = `vip_cfg_v20_${configId}`;
        const cacheTimeKey = `${cacheKey}_time`;

        if (!force) {
            const cached = Storage.read(cacheKey);
            const cacheTime = parseInt(Storage.read(cacheTimeKey) || '0');
            if (cached && this._isMemCacheValid(cacheTime)) {
                const config = this.prepareConfig(Utils.safeJsonParse(cached));
                this._setMemConfigCache(configId, config);
                Logger.debug('Loader', `Storage cache: ${configId}`);
                PerfStats.end(marker, true);
                return config;
            }
        }

        const url = `${CONFIG.REMOTE_BASE}/configs/${configId}.json?t=${Date.now()}`;
        Logger.debug('Loader', `Fetching: ${configId}`);

        try {
            const res = await HTTP.get(url);
            if (res.status === 200 && res.body) {
                Storage.write(cacheKey, res.body);
                Storage.write(cacheTimeKey, Date.now().toString());

                if (this.manifest?.configVersions?.[configId]) {
                    Storage.write(`vip_cfg_version_${configId}`, this.manifest.configVersions[configId]);
                }

                const config = this.prepareConfig(Utils.safeJsonParse(res.body));
                this._setMemConfigCache(configId, config);
                Logger.debug('Loader', `Config updated: ${configId}`);
                PerfStats.end(marker, true);
                return config;
            }
            throw new Error(`HTTP ${res.status}`);
        } catch (e) {
            Logger.fatal('Loader', `Config fetch failed: ${configId}`, e);
            const expired = Storage.read(cacheKey);
            if (expired) {
                const config = this.prepareConfig(Utils.safeJsonParse(expired));
                this._setMemConfigCache(configId, config);
                PerfStats.end(marker, true);
                return config;
            }
            PerfStats.end(marker, false);
            throw e;
        }
    }

    prepareConfig(raw) {
        const marker = PerfStats.start('prepareConfig');
        const config = { ...raw };
        
        if (raw.urlPattern) {
            // 优化2: 使用正则缓存
            config.urlPattern = getCachedRegex(raw.urlPattern);
        }

        if (raw.regexReplacements) {
            config.regexReplacements = raw.regexReplacements.map(r => ({
                pattern: getCachedRegex(r.pattern, r.flags || 'g'),
                replacement: r.replacement
            }));
        }

        PerfStats.end(marker, true);
        return config;
    }

    getStats() {
        return {
            manifest: this.manifest ? Object.keys(this.manifest.configs).length : 0,
            cached: this.cache.size,
            memCached: this._configMemCache.size,
            domains: this.domainIndex.size,
            // 优化1: 输出缓存统计
            lruStats: {
                processor: ProcessorCompileCache.getStats(),
                configProcessor: ConfigProcessorCache.getStats(),
                configMem: this._configMemCache.getStats(),
                regex: RegexCache.getStats()
            }
        };
    }
}

// ==========================================
// 环境和引擎（注入性能统计）
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
    constructor(env) {
        this.env = env;
    }
    
    process(body, config) {
        const marker = PerfStats.start('VipEngine.process', config.mode);
        
        if (!body) {
            Logger.debug('Engine', 'Empty body');
            PerfStats.end(marker, false);
            return { body: '{}' };
        }

        let result;
        switch (config.mode) {
            case 'json':
                result = this.processJson(body, config);
                break;
            case 'regex':
                result = this.processRegex(body, config);
                break;
            case 'game':
                result = this.processGame(body, config);
                break;
            case 'hybrid':
                result = this.processHybrid(body, config);
                break;
            case 'html':
                result = this.processHtml(body, config);
                break;
            default:
                Logger.debug('Engine', `Unknown mode: ${config.mode}`);
                result = { body };
        }
        
        PerfStats.end(marker, true);
        return result;
    }
    
    processJson(body, config) {
        const marker = PerfStats.start('processJson', config.name);
        let obj = Utils.safeJsonParse(body);
        
        if (!obj) {
            Logger.fatal('Engine', 'Failed to parse JSON');
            PerfStats.end(marker, false);
            return { body };
        }
        
        const processorMarker = PerfStats.start('getConfigProcessor');
        const customProcessor = getConfigProcessor(config);
        PerfStats.end(processorMarker, !!customProcessor);
        
        if (typeof customProcessor === 'function') {
            try {
                const execMarker = PerfStats.start('executeProcessor');
                obj = customProcessor(obj, this.env);
                PerfStats.end(execMarker, true);
                Logger.debug('Engine', `${config.name} VIP unlocked`);
            } catch (e) {
                Logger.fatal('Engine', `Processor error`, e);
                PerfStats.end(execMarker, false);
            }
        } else {
            Logger.debug('Engine', 'No custom processor');
        }
        
        const result = { body: Utils.safeJsonStringify(obj) };
        PerfStats.end(marker, true);
        return result;
    }
    
    processRegex(body, config) {
        const marker = PerfStats.start('processRegex');
        let modified = body;
        let count = 0;
        
        const execMarker = PerfStats.start('regexReplacements');
        for (const rule of config.regexReplacements || []) {
            try {
                const original = modified;
                modified = modified.replace(rule.pattern, rule.replacement);
                if (original !== modified) count++;
            } catch (e) {}
        }
        PerfStats.end(execMarker, true);
        
        Logger.debug('Engine', `Regex replaced ${count} patterns`);
        PerfStats.end(marker, true);
        return { body: modified };
    }
    
    processGame(body, config) {
        const marker = PerfStats.start('processGame');
        let modified = body;
        let count = 0;
        
        for (const res of config.gameResources || []) {
            try {
                const pattern = new RegExp(`"${res.field}":\\d+`, 'g');
                const original = modified;
                modified = modified.replace(pattern, `"${res.field}":${res.value}`);
                if (original !== modified) count++;
            } catch (e) {}
        }
        
        Logger.debug('Engine', `Game resources modified: ${count}`);
        PerfStats.end(marker, true);
        return { body: modified };
    }
    
    processHybrid(body, config) {
        let result = this.processJson(body, config);
        if (config.regexReplacements) {
            result = this.processRegex(result.body, config);
        }
        return result;
    }
    
    processHtml(body, config) {
        const marker = PerfStats.start('processHtml');
        let modified = body;
        let count = 0;
        
        for (const rule of config.htmlReplacements || []) {
            try {
                const regex = new RegExp(rule.pattern, rule.flags || 'i');
                const original = modified;
                modified = modified.replace(regex, rule.replacement);
                if (original !== modified) count++;
            } catch (e) {}
        }
        
        Logger.debug('Engine', `HTML replaced ${count} patterns`);
        PerfStats.end(marker, true);
        return { body: modified };
    }
}

// ==========================================
// 主函数（输出完整性能报告）
// ==========================================
async function main() {
    const mainMarker = PerfStats.start('main');
    const env = new Environment(META.name);
    
    try {
        const url = env.getUrl();
        if (!url) {
            Logger.fatal('Main', 'No URL in request');
            releaseLock();
            PerfStats.end(mainMarker, false);
            return env.done({});
        }
        
        Logger.debug('Request', `Processing ${url.replace(/\?.*$/, '').substring(0, 50)}...`);

        const loader = new RuntimeLoader();

        let manifest;
        try {
            manifest = await loader.loadManifest();
        } catch (e) {
            Logger.fatal('Main', 'Manifest failed', e);
            releaseLock();
            PerfStats.end(mainMarker, false);
            return env.done({ body: env.getBody() });
        }

        const configId = loader.findMatch(url);
        if (!configId) {
            Logger.debug('Main', 'No rule matched');
            releaseLock();
            PerfStats.end(mainMarker, false);
            return env.done({ body: env.getBody() });
        }

        let config;
        try {
            config = await loader.loadConfig(configId);
        } catch (e) {
            Logger.fatal('Main', 'Config failed', e);
            releaseLock();
            PerfStats.end(mainMarker, false);
            return env.done({ body: env.getBody() });
        }

        const engine = new VipEngine(env);
        const result = engine.process(env.getBody(), config);

        Logger.debug('Main', 'Completed');
        
        // 优化9: 输出性能报告和缓存统计
        if (CONFIG.DEBUG || CONFIG.PERF_STATS) {
            PerfStats.end(mainMarker, true);
            PerfStats.report();
            
            const stats = loader.getStats();
            Logger.stats('CacheStats', stats.lruStats);
        } else {
            PerfStats.end(mainMarker, true);
        }
        
        releaseLock();
        env.done(result);

    } catch (e) {
        Logger.fatal('Main', 'Fatal error', e);
        PerfStats.end(mainMarker, false);
        releaseLock();
        env.done({ body: env.getBody() });
    }
}
main();
