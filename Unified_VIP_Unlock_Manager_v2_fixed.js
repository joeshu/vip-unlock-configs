/**
 * ==========================================
 * Unified VIP Unlock Manager v20.2.4
 * 统一 VIP 解锁管理器 - 静默模式版
 * @version 20.2.4
 * @description 支持智能预加载、域名索引、惰性编译、热更新
 * ==========================================

[rewrite_local]
 # iAppDaily - 余额查询接口（JSON模式-声明式字段设置）
 ^https:\/\/api\.iappdaily\.com\/my\/balance url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v2_fixed.js
 ^https?:\/\/(?:api[23]\.tophub\.(?:xyz|today|app)|tophub(?:2)?\.(?:tophubdata\.com|idaily\.today|remai\.today|iappdaiy\.com|ipadown\.com))\/account\/sync url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v2_fixed.js
 # gps - GPS工具箱（JSON模式-声明式字段设置）
 ^https:\/\/service\.gpstool\.com\/app\/index\/getUserInfo url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v2_fixed.js
 ^https?:\/\/mapi\.kouyuxingqiu\.com\/api\/v2 url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v2_fixed.js
 # mhlz - 魔幻粒子（JSON模式-声明式前缀处理）
 ^https?:\/\/ss\.landintheair\.com\/storage\/ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v2_fixed.js
 # v2ex - V2EX去广告（HTML替换模式）
 ^https?:\/\/.*v2ex\.com\/(?!(.*(api|login|cdn-cgi|verify|auth|captch|(\.(js|css|jpg|jpeg|png|webp|gif|zip|woff|woff2|m3u8|mp4|mov|m4v|avi|mkv|flv|rmvb|wmv|rm|asf|asx|mp3|json|ico|otf|ttf))))) url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v2_fixed.js
 # foday - 复游会去广告（多路径模式-声明式过滤）
 ^https?:\/\/apis\.folidaymall\.com\/online\/capi\/component\/getPageComponents url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v2_fixed.js
 # qiujingapp - 球竞APP去广告（多路径模式-声明式清空）
 ^https?:\/\/gateway-api\.yizhilive\.com\/api\/v2\/index\/carouses\/(3|6|8|11)(\?.*)?$ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v2_fixed.js
 ^https?:\/\/gateway-api\.yizhilive\.com\/api\/v3\/index\/all\?.*position=2.*$ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v2_fixed.js
 # Keep - 课程/会员接口（正则替换模式）
 ^https?:\/\/(api|kit).gotokeep\.com\/(nuocha|gerudo|athena|nuocha\/plans|suit\/v5\/smart|kprime\/v4\/suit\/sales)\/ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v2_fixed.js
 # bqwz - 标枪王者游戏数据接口（游戏数值模式）
 ^https?:\/\/javelin\.mandrillvr\.com\/api\/data\/get_game_data url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v2_fixed.js
 # bxkt - 伴学课堂接口（混合模式-声明式组合）
 ^https?:\/\/api\.banxueketang\.com\/api\/classpal\/app\/v1 url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v2_fixed.js
 # tv - 影视去广告接口（多路径模式-完全声明式）
 ^https?:\/\/(yzy0916|yz1018|yz250907|yz0320|cfvip)\..+\.com\/(v2|v1)\/api\/(basic\/init|home\/firstScreen|adInfo\/getPageAd|home\/body) url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v2_fixed.js
 ^https?:\/\/(yz\w{4,6}|cfvip)\..+\.com\/(v2|v1)\/api\/(adInfo|vodInfo)\/(getPageAd|getTextAd|getSearchAd|getVodBodyAd|getVodPauseAd|getUserCenterAd) url reject-dict
 ^https?:\/\/(yz\w{4,6}|cfvip)\..+\.com\/(v2|v1)\/api\/(home\/notice|gameCenter\/gameDetailList) url reject-dict
 # 成语来解压 - 微信小程序无限金币（游戏数值模式）
 ^https?:\/\/yr-game-api\.feigo\.fun\/api\/user\/get-game-user-value url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v2_fixed.js
 # 星际使命 - 微信小程序游戏数据修改（JSON声明式处理器-完全重构）
 ^https?:\/\/star\.jvplay\.cn\/v2\/storage url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v2_fixed.js
# wohome - 联通智家去广告（条件删除模式）
 ^https:\/\/iotpservice\.smartont\.net\/wohome\/dispatcher url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v2_fixed.js
# 思朗月影视 - 用户信息VIP解锁
^https?:\/\/theater-api\.sylangyue\.xyz\/api\/user\/info url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v2_fixed.js
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
 PRELOAD_ENABLED: true,
 PRELOAD_CONCURRENT: 3,
 DOMAIN_INDEX_ENABLED: true,
 LAZY_COMPILE: true,
 HOT_RELOAD: true,
 DEBUG: true,      // false = 完全静默模式，只保留致命错误
 TIMEOUT: 10
};

const META = {
 name: 'UnifiedVIP',
 version: '20.2.4'
};

// ==========================================
// 日志系统（核心：DEBUG=false时完全静默）
// ==========================================
const Logger = (() => {
 // 空函数，用于静默模式
 const noop = () => {};
 
 // 实际日志函数
 const log = (level, tag, msg, data) => {
 const now = new Date();
 const time = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
 const prefix = `[${META.name}][${level.toUpperCase()}][${time}]`;
 const tagStr = tag ? `[${tag}]` : '';
 const dataStr = data ? ` | ${typeof data === 'object' ? JSON.stringify(data) : data}` : '';
 console.log(`${prefix}${tagStr} ${msg}${dataStr}`);
 };
 
 // 致命错误（始终输出，不受DEBUG控制）
 const fatal = (tag, msg, err) => {
 const errorMsg = err ? `${msg}: ${err.message || err}` : msg;
 log('FATAL', tag, errorMsg);
 };
 
 // 根据DEBUG配置返回相应实现
 if (!CONFIG.DEBUG) {
 // 静默模式：只有fatal可用
 return {
 debug: noop,
 info: noop,
 warn: noop,
 stats: noop,
 error: noop,  // 普通error也静默，只有fatal输出
 fatal: fatal
 };
 }
 
 // 调试模式：全功能
 return {
 debug: (tag, msg, data) => log('debug', tag, msg, data),
 info: (tag, msg, data) => log('info', tag, msg, data),
 warn: (tag, msg, data) => log('warn', tag, msg, data),
 stats: (msg, data) => log('STATS', '', msg, data),
 error: (tag, msg, data) => log('error', tag, msg, data),
 fatal: fatal
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
// 处理器工厂（无日志或条件日志）
// ==========================================
const ProcessorFactory = {
 setFields: (params) => (obj, env) => {
 let modified = 0;
 for (const [path, value] of Object.entries(params.fields || {})) {
 Utils.setPath(obj, path, value);
 modified++;
 }
 Logger.debug('Processor', `SetFields modified ${modified} fields`);
 return obj;
 },
 mapArray: (params) => (obj, env) => {
 const arr = Utils.getPath(obj, params.path);
 if (!Array.isArray(arr)) {
 Logger.debug('Processor', `${params.path} is not an array`);
 return obj;
 }
 let modified = 0;
 arr.forEach((item) => {
 if (!item) return;
 for (const [field, value] of Object.entries(params.fields || {})) {
 if (item[field] !== undefined || value !== undefined) {
 item[field] = value;
 }
 modified++;
 }
 });
 Logger.debug('Processor', `MapArray processed ${modified} items`);
 return obj;
 },
 filterArray: (params) => (obj, env) => {
 const arr = Utils.getPath(obj, params.path);
 if (!Array.isArray(arr)) return obj;
 const originalLength = arr.length;
 const excludeSet = new Set(params.excludeKeys || []);
 const filtered = arr.filter(item => !excludeSet.has(item[params.keyField]));
 Utils.setPath(obj, params.path, filtered);
 Logger.debug('Processor', `Filtered ${params.path}: ${originalLength} → ${filtered.length}`);
 return obj;
 },
 clearArray: (params) => (obj, env) => {
 const arr = Utils.getPath(obj, params.path);
 if (Array.isArray(arr)) {
 const count = arr.length;
 arr.length = 0;
 Logger.debug('Processor', `Cleared ${params.logName || params.path}: ${count} items`);
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
 Logger.debug('Processor', `Deleted ${deleted} fields`);
 return obj;
 },
 sliceArray: (params) => (obj, env) => {
 const arr = Utils.getPath(obj, params.path);
 if (Array.isArray(arr) && arr.length > params.keepCount) {
 Utils.setPath(obj, params.path, arr.slice(0, params.keepCount));
 Logger.debug('Processor', `Sliced ${params.path}: ${arr.length} → ${params.keepCount}`);
 }
 return obj;
 },
 shiftArray: (params) => (obj, env) => {
 const arr = Utils.getPath(obj, params.path);
 if (Array.isArray(arr) && arr.length > 0) {
 arr.shift();
 Logger.debug('Processor', `Shifted ${params.logName || params.path}`);
 }
 return obj;
 },
 processByKeyPrefix: (params) => (obj, env) => {
 const target = Utils.getPath(obj, params.objPath);
 if (!target || typeof target !== 'object') return obj;
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
 Logger.debug('Processor', `Processed ${modified} items by key prefix`);
 return obj;
 },
 compose: (params, compile) => {
 const processors = (params.steps || []).map(step => compile(step));
 return (obj, env) => {
 let result = obj;
 for (let i = 0; i < processors.length; i++) {
 if (!result) break;
 Logger.debug('Compose', `Step ${i + 1}/${processors.length}`);
 result = processors[i](result, env);
 }
 return result;
 };
 },
 when: (params, compile) => {
 return (obj, env) => {
 try {
 let conditionMet = false;
 const data = Utils.getPath(obj, params.check || 'data');
 switch (params.condition) {
 case "empty":
 conditionMet = !data || Object.keys(data).length === 0;
 break;
 case "hasKey":
 const arr = Utils.getPath(obj, params.path);
 conditionMet = Array.isArray(arr) && arr.some(item => item?.key === params.key);
 break;
 case "pathMatch":
 const url = env?.getUrl?.() || '';
 conditionMet = url.includes(params.path);
 break;
 case "queryMatch":
 const url2 = env?.getUrl?.() || '';
 const match = url2.match(new RegExp(`[?&]${params.param}=([^&]+)`));
 conditionMet = match && decodeURIComponent(match[1]) === params.value;
 break;
 case "includes":
 conditionMet = Array.isArray(data) ? data.includes(params.value) : String(data).includes(params.value);
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
 Logger.debug('When', `Condition "${params.condition}" = ${conditionMet}`);
 if (conditionMet && params.then) {
 return compile(params.then)(obj, env);
 } else if (!conditionMet && params.else) {
 return compile(params.else)(obj, env);
 }
 } catch (e) {
 Logger.debug('When', `Error: ${e.message}`);
 }
 return obj;
 };
 },
 sceneDispatcher: (params, compile) => {
 const scenes = (params.scenes || []).map(s => ({
 name: s.name,
 when: s.when,
 then: compile(s.then)
 }));
 return (obj, env) => {
 for (const scene of scenes) {
 try {
 let matched = false;
 if (scene.when === "isObject") {
 matched = typeof obj.data === 'object' && !Array.isArray(obj.data);
 } else if (scene.when === "isArray") {
 matched = Array.isArray(obj.data);
 } else if (typeof scene.when === 'function') {
 matched = scene.when(obj);
 }
 if (matched) {
 Logger.debug('Scene', `Matched: ${scene.name}`);
 return scene.then(obj, env);
 }
 } catch (e) {}
 }
 Logger.debug('Scene', 'No scene matched');
 return obj;
 };
 }
};

// ==========================================
// 处理器编译缓存
// ==========================================
const ProcessorCompileCache = new Map();
const ConfigProcessorCache = new Map();

function compileProcessor(def) {
 if (!def || !def.processor) return null;

 if (CONFIG.LAZY_COMPILE) {
 const cacheKey = Utils.simpleHash(JSON.stringify(def));
 if (ProcessorCompileCache.has(cacheKey)) {
 return ProcessorCompileCache.get(cacheKey);
 }
 }

 const factory = ProcessorFactory[def.processor];
 if (!factory) {
 Logger.debug('Compile', `Unknown processor: ${def.processor}`);
 return null;
 }
 const processor = factory(def.params, compileProcessor);

 if (CONFIG.LAZY_COMPILE && processor) {
 const cacheKey = Utils.simpleHash(JSON.stringify(def));
 ProcessorCompileCache.set(cacheKey, processor);
 }

 return processor;
}

function getConfigProcessor(config) {
 if (!config || !config.processor || config.mode !== 'json') return null;
 
 const configId = config.id || Utils.simpleHash(JSON.stringify(config));
 
 if (ConfigProcessorCache.has(configId)) {
 return ConfigProcessorCache.get(configId);
 }
 
 const processor = compileProcessor(config.processor);
 if (processor) {
 ConfigProcessorCache.set(configId, processor);
 Logger.debug('Cache', `Compiled processor for ${configId}`);
 }
 return processor;
}

// ==========================================
// 运行时加载器
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
 this._configMemCache = new Map();
 this._preloading = new Set();
 }

 _isMemCacheValid(cacheTime, ttl = CONFIG.CONFIG_CACHE_TTL) {
 return cacheTime && (Date.now() - cacheTime < ttl);
 }

 _getMemConfigCache(configId) {
 const item = this._configMemCache.get(configId);
 if (item && this._isMemCacheValid(item.time)) {
 Logger.debug('Loader', `Memory cache hit: ${configId}`);
 return item.data;
 }
 return null;
 }

 _setMemConfigCache(configId, data) {
 this._configMemCache.set(configId, { data, time: Date.now() });
 if (this._configMemCache.size > 100) {
 const firstKey = this._configMemCache.keys().next().value;
 this._configMemCache.delete(firstKey);
 }
 }

 async loadManifest(force = false) {
 const cacheKey = 'vip_manifest_v20';
 const cacheTimeKey = `${cacheKey}_time`;

 if (!force && this._manifestMemCache && this._isMemCacheValid(this._manifestCacheTime, CONFIG.CACHE_TTL)) {
 Logger.debug('Loader', 'Using memory cached manifest');
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
 return this.manifest;
 }
 throw e;
 }
 }

 compilePatterns() {
 this.patterns.clear();
 this.domainIndex.clear();

 if (!this.manifest || !this.manifest.configs) return;

 for (const [id, info] of Object.entries(this.manifest.configs)) {
 try {
 if (info.urlPattern) {
 const regex = new RegExp(info.urlPattern);
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
 Logger.debug('Loader', `Invalid regex for ${id}: ${e.message}`);
 }
 }

 Logger.debug('Loader', `Compiled ${this.patterns.size} patterns, ${this.domainIndex.size} domains`);
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
 this._triggerPreload(candidates.filter(cid => cid !== id));
 return id;
 }
 } catch (e) {
 Logger.debug('Loader', `Pattern test error: ${id}`);
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
 Logger.debug('Loader', `Storage cache: ${configId}`);
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
 return config;
 }
 throw new Error(`HTTP ${res.status}`);
 } catch (e) {
 Logger.fatal('Loader', `Config fetch failed: ${configId}`, e);
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

 getStats() {
 return {
 manifest: this.manifest ? Object.keys(this.manifest.configs).length : 0,
 cached: this.cache.size,
 memCached: this._configMemCache.size,
 domains: this.domainIndex.size
 };
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
 constructor(env) {
 this.env = env;
 }
 process(body, config) {
 if (!body) {
 Logger.debug('Engine', 'Empty body');
 return { body: '{}' };
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
 Logger.debug('Engine', `Unknown mode: ${config.mode}`);
 return { body };
 }
 }
 processJson(body, config) {
 let obj = Utils.safeJsonParse(body);
 if (!obj) {
 Logger.fatal('Engine', 'Failed to parse JSON');
 return { body };
 }
 
 const customProcessor = getConfigProcessor(config);
 
 if (typeof customProcessor === 'function') {
 try {
 obj = customProcessor(obj, this.env);
 Logger.debug('Engine', `${config.name} VIP unlocked`);
 } catch (e) {
 Logger.fatal('Engine', `Processor error`, e);
 }
 } else {
 Logger.debug('Engine', 'No custom processor');
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
 Logger.debug('Engine', `Regex replaced ${count} patterns`);
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
 Logger.debug('Engine', `Game resources modified: ${count}`);
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
 Logger.debug('Engine', `HTML replaced ${count} patterns`);
 return { body: modified };
 }
}

// ==========================================
// 主函数
// ==========================================
async function main() {
 const env = new Environment(META.name);
 
 try {
 const url = env.getUrl();
 if (!url) {
 Logger.fatal('Main', 'No URL in request');
 return env.done({});
 }
 
 Logger.debug('Request', `Processing ${url.replace(/\?.*$/, '').substring(0, 50)}...`);

 const loader = new RuntimeLoader();

 let manifest;
 try {
 manifest = await loader.loadManifest();
 } catch (e) {
 Logger.fatal('Main', 'Manifest failed', e);
 return env.done({ body: env.getBody() });
 }

 const configId = loader.findMatch(url);
 if (!configId) {
 Logger.debug('Main', 'No rule matched');
 return env.done({ body: env.getBody() });
 }

 let config;
 try {
 config = await loader.loadConfig(configId);
 } catch (e) {
 Logger.fatal('Main', 'Config failed', e);
 return env.done({ body: env.getBody() });
 }

 const engine = new VipEngine(env);
 const result = engine.process(env.getBody(), config);

 Logger.debug('Main', 'Completed');
 env.done(result);

 } catch (e) {
 Logger.fatal('Main', 'Fatal error', e);
 env.done({ body: env.getBody() });
 }
}
main();
