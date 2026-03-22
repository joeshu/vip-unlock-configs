/**
 * ==========================================
 * Unified VIP Unlock Manager v20.2.6-final-A4
 * 统一 VIP 解锁管理器 - P0-1正则缓存优化版
 * @version 20.2.6-final-A4
 * @description 正则编译缓存 + 请求隔离 + 响应体保护
 * ==========================================
[rewrite_local]
 # iAppDaily - 余额查询接口（JSON模式-声明式字段设置）
 ^https:\/\/api\.iappdaily\.com\/my\/balance url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v4.js
 ^https?:\/\/(?:api[23]\.tophub\.(?:xyz|today|app)|tophub(?:2)?\.(?:tophubdata\.com|idaily\.today|remai\.today|iappdaiy\.com|ipadown\.com))\/account\/sync url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v4.js
 # gps - GPS工具箱（JSON模式-声明式字段设置）
 ^https:\/\/service\.gpstool\.com\/app\/index\/getUserInfo url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v4.js
 ^https?:\/\/mapi\.kouyuxingqiu\.com\/api\/v2 url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v4.js
 # mhlz - 魔幻粒子（JSON模式-声明式前缀处理）
 ^https?:\/\/ss\.landintheair\.com\/storage\/ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v4.js
 # v2ex - V2EX去广告（HTML替换模式）
 ^https?:\/\/.*v2ex\.com\/(?!(?:.*(?:api|login|cdn-cgi|verify|auth|captch|\.(js|css|jpg|jpeg|png|webp|gif|zip|woff|woff2|m3u8|mp4|mov|m4v|avi|mkv|flv|rmvb|wmv|rm|asf|asx|mp3|json|ico|otf|ttf)))).+$ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v4.js
 # foday - 复游会去广告（多路径模式-声明式过滤）
 ^https?:\/\/apis\.folidaymall\.com\/online\/capi\/component\/getPageComponents url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v4.js
 # qiujingapp - 球竞APP去广告（多路径模式-声明式清空）
 ^https?:\/\/gateway-api\.yizhilive\.com\/api\/v2\/index\/carouses\/(3|6|8|11)(\?.*)?$ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v4.js
 ^https?:\/\/gateway-api\.yizhilive\.com\/api\/v3\/index\/all\?.*position=2.*$ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v4.js
 # Keep - 课程/会员接口（正则替换模式）
 ^https?:\/\/(api|kit)\.gotokeep\.com\/(nuocha|gerudo|athena|nuocha\/plans|suit\/v5\/smart|kprime\/v4\/suit\/sales)\/ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v4.js
 # bqwz - 标枪王者游戏数据接口（游戏数值模式）
 ^https?:\/\/javelin\.mandrillvr\.com\/api\/data\/get_game_data url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v4.js
 # bxkt - 伴学课堂接口（混合模式-声明式组合）
 ^https?:\/\/api\.banxueketang\.com\/api\/classpal\/app\/v1 url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v4.js
 # tv - 影视去广告接口（多路径模式-完全声明式）
 ^https?:\/\/(yzy0916|yz1018|yz250907|yz0320|cfvip)\..+\.com\/(v2|v1)\/api\/(basic\/init|home\/firstScreen|adInfo\/getPageAd|home\/body) url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v4.js
 ^https?:\/\/(yz\w{4,6}|cfvip)\..+\.com\/(v2|v1)\/api\/(adInfo|vodInfo)\/(getPageAd|getTextAd|getSearchAd|getVodBodyAd|getVodPauseAd|getUserCenterAd) url reject-dict
 ^https?:\/\/(yz\w{4,6}|cfvip)\..+\.com\/(v2|v1)\/api\/(home\/notice|gameCenter\/gameDetailList) url reject-dict
 # 成语来解压 - 微信小程序无限金币（游戏数值模式）
 ^https?:\/\/yr-game-api\.feigo\.fun\/api\/user\/get-game-user-value url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v4.js
 # 星际使命 - 微信小程序游戏数据修改（JSON声明式处理器-完全重构）
 ^https?:\/\/star\.jvplay\.cn\/v2\/storage url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v4.js
# wohome - 联通智家去广告（条件删除模式）
 ^https:\/\/iotpservice\.smartont\.net\/wohome\/dispatcher url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v4.js
# 思朗月影视 - 用户信息VIP解锁
^https?:\/\/theater-api\.sylangyue\.xyz\/api\/user\/info url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v4.js
 [mitm]
 hostname = theater-api.sylangyue.xyz, api.iappdaily.com, api2.tophub.today, api2.tophub.app, api3.tophub.xyz, api3.tophub.today, api3.tophub.app, tophub.tophubdata.com, tophub2.tophubdata.com, tophub.idaily.today, tophub2.idaily.today, tophub.remai.today, tophub.iappdaiy.com, tophub.ipadown.com,service.gpstool.com, mapi.kouyuxingqiu.com, ss.landintheair.com, *.v2ex.com, apis.folidaymall.com, gateway-api.yizhilive.com, pagead*.googlesyndication.com, api.gotokeep.com, kit.gotokeep.com, *.gotokeep.*, 120.53.74.*, 162.14.5.*, 42.187.199.*, 101.42.124.*, javelin.mandrillvr.com,api.banxueketang.com, yzy0916.*.com, yz1018.*.com, yz250907.*.com, yz0320.*.com, cfvip.*.com,yr-game-api.feigo.fun,star.jvplay.cn,iotpservice.smartont.net
*/

'use strict';

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
 PRELOAD_ENABLED: false,
 DOMAIN_INDEX_ENABLED: true,
 LAZY_COMPILE: true,
 HOT_RELOAD: true,
 DEBUG: true,
 TIMEOUT: 10,
 MAX_BODY_SIZE: 5 * 1024 * 1024,
 MAX_PROCESSORS_PER_REQUEST: 30
};

const META = {
 name: 'UnifiedVIP',
 version: '20.2.6-final-A4'
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
 let dataStr = '';
 if (data) {
 if (data instanceof Error) {
 dataStr = ` | Error: ${data.message}`;
 } else if (typeof data === 'object') {
 try {
 dataStr = ` | ${JSON.stringify(data)}`;
 } catch (e) {
 dataStr = ` | [Object]`;
 }
 } else {
 dataStr = ` | ${data}`;
 }
 }
 console.log(`${prefix}${tagStr} ${msg}${dataStr}`);
 };

 const fatal = (tag, msg, err) => {
 const errorMsg = err ? `${msg}: ${err.message || String(err)}` : msg;
 log('FATAL', tag, errorMsg, err);
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
 let errorMsg;
 if (typeof error === 'string') {
 errorMsg = error;
 } else if (error && typeof error === 'object') {
 try {
 errorMsg = JSON.stringify(error);
 } catch (e) {
 errorMsg = String(error);
 }
 } else {
 errorMsg = String(error);
 }
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
 reject(new Error('No HTTP client available'));
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
// P0-1: 正则编译缓存系统（核心优化）
// ==========================================
const RegexCache = {
  _key: 'vip_regex_cache_v4',
  _maxAge: 6 * 60 * 60 * 1000, // 6小时，与CONFIG.CACHE_TTL一致
  
  // 生成缓存键（基于manifest内容哈希）
  _getCacheKey(manifest) {
    if (!manifest || !manifest.configs) return null;
    // 使用配置数量和版本信息生成键
    const configIds = Object.keys(manifest.configs).sort().join(',');
    const versions = Object.entries(manifest.configVersions || {})
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([k, v]) => `${k}:${v}`)
      .join(',');
    return Utils.simpleHash(configIds + versions);
  },
  
  // 加载缓存
  load(manifest) {
    try {
      const cacheKey = this._getCacheKey(manifest);
      if (!cacheKey) return null;
      
      const stored = Storage.read(this._key);
      if (!stored) return null;
      
      const data = Utils.safeJsonParse(stored);
      if (!data || data.cacheKey !== cacheKey) {
        Logger.debug('RegexCache', `Cache miss: key mismatch or expired`);
        return null;
      }
      
      // 检查时间戳
      if (Date.now() - data.timestamp > this._maxAge) {
        Logger.debug('RegexCache', `Cache expired: ${(Date.now() - data.timestamp) / 1000}s old`);
        return null;
      }
      
      // 重建 RegExp 对象
      const patterns = new Map();
      for (const [id, regexData] of Object.entries(data.patterns || {})) {
        try {
          patterns.set(id, new RegExp(regexData.source, regexData.flags));
        } catch (e) {
          Logger.debug('RegexCache', `Failed to restore regex: ${id}`);
        }
      }
      
      // 重建 domainIndex
      const domainIndex = new Map();
      for (const [domain, ids] of Object.entries(data.domainIndex || {})) {
        domainIndex.set(domain, ids);
      }
      
      Logger.debug('RegexCache', `Loaded ${patterns.size} patterns, ${domainIndex.size} domains`);
      return { patterns, domainIndex, timestamp: data.timestamp };
    } catch (e) {
      Logger.debug('RegexCache', `Load failed: ${e.message}`);
      return null;
    }
  },
  
  // 保存缓存
  save(patterns, domainIndex, manifest) {
    try {
      const cacheKey = this._getCacheKey(manifest);
      if (!cacheKey) return;
      
      // 序列化 RegExp
      const serializablePatterns = {};
      for (const [id, regex] of patterns) {
        serializablePatterns[id] = {
          source: regex.source,
          flags: regex.flags
        };
      }
      
      // 序列化 domainIndex
      const serializableDomainIndex = {};
      for (const [domain, ids] of domainIndex) {
        serializableDomainIndex[domain] = ids;
      }
      
      const data = {
        cacheKey,
        timestamp: Date.now(),
        patterns: serializablePatterns,
        domainIndex: serializableDomainIndex
      };
      
      Storage.write(this._key, Utils.safeJsonStringify(data));
      Logger.debug('RegexCache', `Saved ${patterns.size} patterns to cache`);
    } catch (e) {
      Logger.debug('RegexCache', `Save failed: ${e.message}`);
    }
  },
  
  // 清除缓存
  clear() {
    Storage.remove(this._key);
    Logger.debug('RegexCache', 'Cleared');
  }
};

// ==========================================
// 处理器工厂（请求级隔离）
// ==========================================
function createProcessorFactory(requestId) {
 let processorCount = 0;
 
 const checkLimit = () => {
 processorCount++;
 if (processorCount > CONFIG.MAX_PROCESSORS_PER_REQUEST) {
 throw new Error(`Processor limit exceeded: ${processorCount}`);
 }
 };

 return {
 setFields: (params) => (obj, env) => {
 checkLimit();
 let modified = 0;
 for (const [path, value] of Object.entries(params.fields || {})) {
 Utils.setPath(obj, path, value);
 modified++;
 }
 Logger.debug('Processor', `[${requestId}] SetFields modified ${modified} fields`);
 return obj;
 },
 mapArray: (params) => (obj, env) => {
 checkLimit();
 const arr = Utils.getPath(obj, params.path);
 if (!Array.isArray(arr)) {
 Logger.debug('Processor', `[${requestId}] ${params.path} is not an array`);
 return obj;
 }
 let modified = 0;
 for (let i = 0; i < arr.length; i++) {
 const item = arr[i];
 if (!item) continue;
 for (const [field, value] of Object.entries(params.fields || {})) {
 if (item[field] !== undefined || value !== undefined) {
 item[field] = value;
 }
 modified++;
 }
 }
 Logger.debug('Processor', `[${requestId}] MapArray processed ${modified} items`);
 return obj;
 },
 filterArray: (params) => (obj, env) => {
 checkLimit();
 const arr = Utils.getPath(obj, params.path);
 if (!Array.isArray(arr)) return obj;
 const originalLength = arr.length;
 const excludeSet = new Set(params.excludeKeys || []);
 const filtered = new Array(arr.length);
 let idx = 0;
 for (let i = 0; i < arr.length; i++) {
 if (!excludeSet.has(arr[i][params.keyField])) {
 filtered[idx++] = arr[i];
 }
 }
 filtered.length = idx;
 Utils.setPath(obj, params.path, filtered);
 Logger.debug('Processor', `[${requestId}] Filtered ${params.path}: ${originalLength} → ${filtered.length}`);
 return obj;
 },
 clearArray: (params) => (obj, env) => {
 checkLimit();
 const arr = Utils.getPath(obj, params.path);
 if (Array.isArray(arr)) {
 const count = arr.length;
 arr.length = 0;
 Logger.debug('Processor', `[${requestId}] Cleared ${params.logName || params.path}: ${count} items`);
 }
 return obj;
 },
 deleteFields: (params) => (obj, env) => {
 checkLimit();
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
 Logger.debug('Processor', `[${requestId}] Deleted ${deleted} fields`);
 return obj;
 },
 sliceArray: (params) => (obj, env) => {
 checkLimit();
 const arr = Utils.getPath(obj, params.path);
 if (Array.isArray(arr) && arr.length > params.keepCount) {
 Utils.setPath(obj, params.path, arr.slice(0, params.keepCount));
 Logger.debug('Processor', `[${requestId}] Sliced ${params.path}: ${arr.length} → ${params.keepCount}`);
 }
 return obj;
 },
 shiftArray: (params) => (obj, env) => {
 checkLimit();
 const arr = Utils.getPath(obj, params.path);
 if (Array.isArray(arr) && arr.length > 0) {
 arr.shift();
 Logger.debug('Processor', `[${requestId}] Shifted ${params.logName || params.path}`);
 }
 return obj;
 },
 processByKeyPrefix: (params) => (obj, env) => {
 checkLimit();
 const target = Utils.getPath(obj, params.objPath);
 if (!target || typeof target !== 'object') return obj;
 let modified = 0;
 const rules = Object.entries(params.prefixRules || {});
 for (const [key, value] of Object.entries(target)) {
 for (const [prefix, handler] of rules) {
 if (prefix === '*') continue;
 if (key.startsWith(prefix)) {
 Object.assign(value, handler);
 modified++;
 break;
 }
 }
 }
 Logger.debug('Processor', `[${requestId}] Processed ${modified} items by key prefix`);
 return obj;
 },
 compose: (params, compile) => {
 checkLimit();
 const steps = params.steps || [];
 if (steps.length > 10) {
 Logger.warn('Compose', `[${requestId}] Too many steps: ${steps.length}`);
 }
 const processors = steps.map(step => compile(step));
 return (obj, env) => {
 let result = obj;
 for (let i = 0; i < processors.length; i++) {
 if (!result) break;
 Logger.debug('Compose', `[${requestId}] Step ${i + 1}/${processors.length}`);
 result = processors[i](result, env);
 }
 return result;
 };
 },
 when: (params, compile) => {
 checkLimit();
 return (obj, env) => {
 try {
 let conditionMet = false;
 const data = Utils.getPath(obj, params.check || 'data');
 const url = env?.getUrl?.() || '';

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

 Logger.debug('When', `[${requestId}] Condition "${params.condition}" = ${conditionMet}`);

 if (conditionMet && params.then) {
 return compile(params.then)(obj, env);
 } else if (!conditionMet && params.else) {
 return compile(params.else)(obj, env);
 }
 } catch (e) {
 Logger.debug('When', `[${requestId}] Error: ${e.message}`);
 }
 return obj;
 };
 },
 sceneDispatcher: (params, compile) => {
 checkLimit();
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
 const url = env?.getUrl?.() || '';

 for (const scene of scenes) {
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
 Logger.debug('Scene', `[${requestId}] Matched: ${scene.name}`);
 return scene.then(obj, env);
 }
 } catch (e) {
 Logger.debug('Scene', `[${requestId}] Error in ${scene.name}: ${e.message}`);
 }
 }

 Logger.debug('Scene', `[${requestId}] No scene matched`);
 return obj;
 };
 }
 };
}

// ==========================================
// 处理器编译（请求级隔离）
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
 if (!processorFactory) {
 Logger.debug('Compile', `Unknown processor: ${def.processor}`);
 return null;
 }
 
 const processor = processorFactory(def.params, compileProcessor);
 if (processor) {
 cache.set(cacheKey, processor);
 }
 return processor;
 };
}

// ==========================================
// 运行时加载器（P0-1: 集成正则缓存）
// ==========================================
class RuntimeLoader {
 constructor(requestId) {
 this._requestId = requestId;
 this.cache = new Map();
 this.manifest = null;
 
 // P0-1: 尝试从缓存加载正则
 const cachedRegex = RegexCache.load(null); // 先尝试加载，manifest后验证
 this.patterns = cachedRegex?.patterns || new Map();
 this.domainIndex = cachedRegex?.domainIndex || new Map();
 this._regexCached = cachedRegex !== null;
 
 this.accessStats = new Map();
 this._manifestMemCache = null;
 this._manifestCacheTime = 0;
 this._configMemCache = new Map();
 
 Logger.debug('Loader', `[${requestId}] Created loader instance${this._regexCached ? ' (regex cached)' : ''}`);
 }

 _isMemCacheValid(cacheTime, ttl = CONFIG.CONFIG_CACHE_TTL) {
 return cacheTime && (Date.now() - cacheTime < ttl);
 }

 _getMemConfigCache(configId) {
 const item = this._configMemCache.get(configId);
 if (item && this._isMemCacheValid(item.time)) {
 Logger.debug('Loader', `[${this._requestId}] Memory cache hit: ${configId}`);
 return item.data;
 }
 return null;
 }

 _setMemConfigCache(configId, data) {
 this._configMemCache.set(configId, { data, time: Date.now() });
 if (this._configMemCache.size > 10) {
 const firstKey = this._configMemCache.keys().next().value;
 this._configMemCache.delete(firstKey);
 Logger.debug('Cache', `[${this._requestId}] Trimmed mem cache`);
 }
 }

 async loadManifest(force = false) {
 const cacheKey = 'vip_manifest_v20';
 const cacheTimeKey = `${cacheKey}_time`;

 if (!force && this._manifestMemCache && this._isMemCacheValid(this._manifestCacheTime, CONFIG.CACHE_TTL)) {
 Logger.debug('Loader', `[${this._requestId}] Using memory cached manifest`);
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
 
 // P0-1: 验证正则缓存是否匹配当前manifest
 if (this._regexCached) {
 const validationCache = RegexCache.load(this.manifest);
 if (validationCache) {
 // 缓存有效，直接使用
 Logger.debug('Loader', `[${this._requestId}] Regex cache validated`);
 this.patterns = validationCache.patterns;
 this.domainIndex = validationCache.domainIndex;
 } else {
 // 缓存失效，需要重新编译
 Logger.debug('Loader', `[${this._requestId}] Regex cache invalid, recompiling`);
 this.patterns = new Map();
 this.domainIndex = new Map();
 this._regexCached = false;
 this.compilePatterns();
 }
 } else {
 this.compilePatterns();
 }
 
 return this.manifest;
 }
 }
 }

 const url = `${CONFIG.REMOTE_BASE}/manifest.json?t=${Date.now()}`;
 Logger.debug('Loader', `[${this._requestId}] Fetching manifest...`);

 try {
 const res = await HTTP.get(url);
 if (res.status === 200 && res.body) {
 this.manifest = Utils.safeJsonParse(res.body);
 if (this.manifest) {
 Storage.write(cacheKey, res.body);
 Storage.write(cacheTimeKey, Date.now().toString());
 this._manifestMemCache = this.manifest;
 this._manifestCacheTime = Date.now();
 
 // P0-1: 清除旧缓存，编译新正则
 RegexCache.clear();
 this.patterns = new Map();
 this.domainIndex = new Map();
 this.compilePatterns();
 
 Logger.debug('Loader', `[${this._requestId}] Manifest updated: ${Object.keys(this.manifest.configs).length} apps`);
 return this.manifest;
 }
 }
 throw new Error(`HTTP ${res.status}`);
 } catch (e) {
 Logger.fatal('Loader', `[${this._requestId}] Manifest fetch failed`, e);
 const expired = Storage.read(cacheKey);
 if (expired) {
 this.manifest = Utils.safeJsonParse(expired);
 this._manifestMemCache = this.manifest;
 this._manifestCacheTime = Date.now();
 this.compilePatterns();
 return this.manifest;
 }
 throw e;
 }
 }

 // P0-1: 优化的编译方法
 compilePatterns() {
 // 如果已有缓存，跳过编译
 if (this._regexCached && this.patterns.size > 0) {
 Logger.debug('Loader', `[${this._requestId}] Using cached patterns (${this.patterns.size})`);
 return;
 }

 const startTime = Date.now();
 this.patterns.clear();
 this.domainIndex.clear();

 if (!this.manifest || !this.manifest.configs) return;

 for (const [id, info] of Object.entries(this.manifest.configs)) {
 try {
 if (info.urlPattern) {
 const regex = new RegExp(info.urlPattern);
 this.patterns.set(id, regex);

 if (CONFIG.DOMAIN_INDEX_ENABLED) {
 const domainMatch = info.urlPattern.match(/(?:\^?https?\?:\\\/\\\/)?([^\\\/\\\s]+)/);
 if (domainMatch) {
 const domain = domainMatch[1]
 .replace(/\\\./g, '.')
 .replace(/\d+\??/g, '*')
 .replace(/\\[.*?\\]/g, '*');
 if (!this.domainIndex.has(domain)) {
 this.domainIndex.set(domain, []);
 }
 this.domainIndex.get(domain).push(id);
 }
 }
 }
 } catch (e) {
 Logger.debug('Loader', `[${this._requestId}] Invalid regex for ${id}: ${e.message}`);
 }
 }

 // P0-1: 保存到缓存
 RegexCache.save(this.patterns, this.domainIndex, this.manifest);
 
 const duration = Date.now() - startTime;
 Logger.debug('Loader', `[${this._requestId}] Compiled ${this.patterns.size} patterns, ${this.domainIndex.size} domains in ${duration}ms`);
 }

 findMatch(url) {
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

 for (const id of candidates) {
 try {
 if (this.patterns.get(id).test(url)) {
 this._updateAccessStats(id);
 return id;
 }
 } catch (e) {
 Logger.debug('Loader', `[${this._requestId}] Pattern test error: ${id}`);
 }
 }

 for (const [id, pattern] of this.patterns) {
 if (!candidates.includes(id)) {
 try {
 if (pattern.test(url)) {
 this._updateAccessStats(id);
 return id;
 }
 } catch (e) {}
 }
 }

 return null;
 }

 _updateAccessStats(configId) {
 const stats = this.accessStats.get(configId) || { count: 0, lastAccess: 0 };
 stats.count++;
 stats.lastAccess = Date.now();
 this.accessStats.set(configId, stats);
 }

 async loadConfig(configId, force = false) {
 if (!force && CONFIG.HOT_RELOAD && this.manifest?.configVersions?.[configId]) {
 const remoteVersion = this.manifest.configVersions[configId];
 const cachedVersion = Storage.read(`vip_cfg_version_${configId}`);
 if (cachedVersion !== remoteVersion) {
 force = true;
 Logger.debug('Loader', `[${this._requestId}] Version changed for ${configId}`);
 }
 }

 if (!force) {
 const memCache = this._getMemConfigCache(configId);
 if (memCache) return memCache;
 }

 const cacheKey = `vip_cfg_v20_${configId}`;
 const cacheTimeKey = `${cacheKey}_time`;

 if (!force) {
 const cached = Storage.read(cacheKey);
 const cacheTime = parseInt(Storage.read(cacheTimeKey) || '0');
 if (cached && this._isMemCacheValid(cacheTime)) {
 const config = this.prepareConfig(Utils.safeJsonParse(cached));
 this._setMemConfigCache(configId, config);
 Logger.debug('Loader', `[${this._requestId}] Storage cache: ${configId}`);
 return config;
 }
 }

 const url = `${CONFIG.REMOTE_BASE}/configs/${configId}.json?t=${Date.now()}`;
 Logger.debug('Loader', `[${this._requestId}] Fetching: ${configId}`);

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
 Logger.debug('Loader', `[${this._requestId}] Config updated: ${configId}`);
 return config;
 }
 throw new Error(`HTTP ${res.status}`);
 } catch (e) {
 Logger.fatal('Loader', `[${this._requestId}] Config fetch failed: ${configId}`, e);
 const expired = Storage.read(cacheKey);
 if (expired) {
 const config = this.prepareConfig(Utils.safeJsonParse(expired));
 this._setMemConfigCache(configId, config);
 return config;
 }
 throw e;
 }
 }

 prepareConfig(raw) {
 const config = { ...raw };
 if (raw.urlPattern) {
 try {
 config.urlPattern = new RegExp(raw.urlPattern);
 } catch (e) {
 config.urlPattern = /.*/;
 }
 }

 if (raw.regexReplacements) {
 config.regexReplacements = raw.regexReplacements.map(r => ({
 pattern: new RegExp(r.pattern, r.flags || 'g'),
 replacement: r.replacement
 }));
 }

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
 Logger.debug('Engine', `[${this._requestId}] Empty body`);
 return { body: '{}' };
 }
 
 const bodySize = typeof body === 'string' ? body.length : JSON.stringify(body).length;
 if (bodySize > CONFIG.MAX_BODY_SIZE) {
 Logger.warn('Engine', `[${this._requestId}] Body too large: ${(bodySize/1024/1024).toFixed(2)}MB > ${(CONFIG.MAX_BODY_SIZE/1024/1024)}MB`);
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
 Logger.debug('Engine', `[${this._requestId}] Unknown mode: ${config.mode}`);
 return { body };
 }
 }
 
 processJson(body, config) {
 if (typeof body === 'string' && body.length > CONFIG.MAX_BODY_SIZE) {
 Logger.warn('Engine', `[${this._requestId}] JSON body too large`);
 return { body };
 }
 
 let obj = Utils.safeJsonParse(body);
 if (!obj) {
 Logger.fatal('Engine', `[${this._requestId}] Failed to parse JSON`);
 return { body };
 }

 const factory = createProcessorFactory(this._requestId);
 const compile = createCompiler(factory);
 const customProcessor = config.processor ? compile(config.processor) : null;

 if (typeof customProcessor === 'function') {
 try {
 obj = customProcessor(obj, this.env);
 Logger.debug('Engine', `[${this._requestId}] ${config.name} VIP unlocked`);
 } catch (e) {
 Logger.fatal('Engine', `[${this._requestId}] Processor error`, e);
 }
 } else {
 Logger.debug('Engine', `[${this._requestId}] No custom processor`);
 }

 return { body: Utils.safeJsonStringify(obj) };
 }
 
 processRegex(body, config) {
 let modified = body;
 let count = 0;
 for (const rule of config.regexReplacements || []) {
 try {
 const original = modified;
 modified = modified.replace(rule.pattern, rule.replacement);
 if (original !== modified) count++;
 } catch (e) {}
 }
 Logger.debug('Engine', `[${this._requestId}] Regex replaced ${count} patterns`);
 return { body: modified };
 }
 
 processGame(body, config) {
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
 Logger.debug('Engine', `[${this._requestId}] Game resources modified: ${count}`);
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
 Logger.debug('Engine', `[${this._requestId}] HTML replaced ${count} patterns`);
 return { body: modified };
 }
}

// ==========================================
// 主函数
// ==========================================
async function main() {
 const requestId = Math.random().toString(36).substr(2, 6).toUpperCase();
 const env = new Environment(META.name);
 const loader = new RuntimeLoader(requestId);

 try {
 const url = env.getUrl();
 if (!url) {
 Logger.fatal('Main', `[${requestId}] No URL in request`);
 return env.done({});
 }

 Logger.debug('Request', `[${requestId}] Processing ${url.replace(/\\?.*$/, '').substring(0, 50)}...`);

 let manifest;
 try {
 manifest = await loader.loadManifest();
 } catch (e) {
 Logger.fatal('Main', `[${requestId}] Manifest failed`, e);
 return env.done({ body: env.getBody() });
 }

 const configId = loader.findMatch(url);
 if (!configId) {
 Logger.debug('Main', `[${requestId}] No rule matched`);
 return env.done({ body: env.getBody() });
 }

 let config;
 try {
 config = await loader.loadConfig(configId);
 } catch (e) {
 Logger.fatal('Main', `[${requestId}] Config failed`, e);
 return env.done({ body: env.getBody() });
 }

 const engine = new VipEngine(env, requestId);
 const result = engine.process(env.getBody(), config);

 Logger.debug('Main', `[${requestId}] Completed`);
 
 releaseLock();
 env.done(result);

 } catch (e) {
 Logger.fatal('Main', `[${requestId}] Fatal error`, e);
 releaseLock();
 env.done({ body: env.getBody() });
 }
}
main();
