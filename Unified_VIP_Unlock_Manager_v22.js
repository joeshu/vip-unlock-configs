/*
 * ==========================================
 * Unified VIP Unlock Manager v22.0.0 - Manifest内置版
 * 修改：将manifest内置，configs/*.json保持远程加载
 * 优化：M3单键存储 + S3 URL匹配缓存 + P2 Manifest压缩
 * ==========================================

 [rewrite_local]
 # 三联中读 - 所有 VIP 接口
 ^https://apis\.lifeweek\.com\.cn/(vip/loadMyVipV2|user/newindex\.do|api/magazine/detail) url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v22.js
 # Vvebo - 订阅验证转发
 ^https:\/\/fluxapi\.vvebo\.vip\/v1\/purchase\/iap\/subscription url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v22.js
 # iAppDaily - 余额查询接口
 ^https:\/\/api\.iappdaily\.com\/my\/balance url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v22.js
 ^https?:\/\/(?:api[23]\.tophub\.(?:xyz|today|app)|tophub(?:2)?\.(?:tophubdata\.com|idaily\.today|remai\.today|iappdaiy\.com|ipadown\.com))\/account\/sync url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v22.js
 # gps - GPS工具箱
 ^https:\/\/service\.gpstool\.com\/app\/index\/getUserInfo url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v22.js
 ^https?:\/\/mapi\.kouyuxingqiu\.com\/api\/v2 url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v22.js
 # mhlz - 魔幻粒子
 ^https?:\/\/ss\.landintheair\.com\/storage\/ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v22.js
 # v2ex - V2EX去广告
 ^https?:\/\/.*v2ex\.com\/(?!(?:.*(?:api|login|cdn-cgi|verify|auth|captch|\.(js|css|jpg|jpeg|png|webp|gif|zip|woff|woff2|m3u8|mp4|mov|m4v|avi|mkv|flv|rmvb|wmv|rm|asf|asx|mp3|json|ico|otf|ttf)))).+$ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v22.js
 # foday - 复游会
 ^https?:\/\/apis\.folidaymall\.com\/online\/capi\/component\/getPageComponents url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v22.js
 # qiujingapp - 球竞APP
 ^https?:\/\/gateway-api\.yizhilive\.com\/api\/v2\/index\/carouses\/(3|6|8|11)(\?.*)?$ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v22.js
 ^https?:\/\/gateway-api\.yizhilive\.com\/api\/v3\/index\/all\?.*position=2.*$ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v22.js
 # Keep - 课程/会员
 ^https?:\/\/(api|kit)\.gotokeep\.com\/(nuocha|gerudo|athena|nuocha\/plans|suit\/v5\/smart|kprime\/v4\/suit\/sales)\/ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v22.js
 # bqwz - 标枪王者
 ^https?:\/\/javelin\.mandrillvr\.com\/api\/data\/get_game_data url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v22.js
 # bxkt - 伴学课堂
 ^https?:\/\/api\.banxueketang\.com\/api\/classpal\/app\/v1 url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v22.js
 # tv - 影视去广告
 ^https?:\/\/(yzy0916|yz1018|yz250907|yz0320|cfvip)\..+\.com\/(v2|v1)\/api\/(basic\/init|home\/firstScreen|adInfo\/getPageAd|home\/body) url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v22.js
 ^https?:\/\/(yz\w{4,6}|cfvip)\..+\.com\/(v2|v1)\/api\/(adInfo|vodInfo)\/(getPageAd|getTextAd|getSearchAd|getVodBodyAd|getVodPauseAd|getUserCenterAd) url reject-dict
 ^https?:\/\/(yz\w{4,6}|cfvip)\..+\.com\/(v2|v1)\/api\/(home\/notice|gameCenter\/gameDetailList) url reject-dict
 # 成语来解压
 ^https?:\/\/yr-game-api\.feigo\.fun\/api\/user\/get-game-user-value url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v22.js
 # 星际使命
 ^https?:\/\/star\.jvplay\.cn\/v2\/storage url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v22.js
 # wohome - 联通智家
 ^https:\/\/iotpservice\.smartont\.net\/wohome\/dispatcher url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v22.js
 # 思朗月影视
 ^https?:\/\/theater-api\.sylangyue\.xyz\/api\/user\/info url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v22.js
 # mingcalc - 明计算
 ^https?:\/\/jsq\.mingcalc\.cn\/XMGetMeCount\.ashx url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v22.js
 # qmjyzc - 全民解压找茬
 ^https?:\/\/res5\.haotgame\.com\/cu03\/static\/OpenDoors\/Res\/data\/levels\/\d+\.json url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v22.js
 # KaDa 阅读
 ^https://service\.hhdd\.com/book2 url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v22.js
 # 伴鱼绘本 - VIP解锁
^https://picturebook\.ipalfish\.com/pfapi/ugc/picturebook/profile/get url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v22.js
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
 CONFIG_CACHE_TTL: 24 * 60 * 60 * 1000,
 MAX_BODY_SIZE: 5 * 1024 * 1024,
 MAX_PROCESSORS_PER_REQUEST: 30,
 TIMEOUT: 10,
 DEBUG: false,
 VERBOSE_PATTERN_LOG: false
};

const META = {
 name: 'UnifiedVIP',
 version: '22.0.0'  // 版本号同步更新
};

// ==========================================
// 1.5 内置Manifest (P2压缩版)
// ==========================================
const BUILTIN_MANIFEST = {"version":"22.0.0","updated":"2026-03-26","total":21,"configs":{"iappdaily":{"name":"iAppDaily","urlPattern":"^https:\\/\\/api\\.iappdaily\\.com\\/my\\/balance"},"tophub":{"name":"TopHub","urlPattern":"^https?:\\/\\/(?:api[23]\\.tophub\\.(?:xyz|today|app)|tophub(?:2)?\\.(?:tophubdata\\.com|idaily\\.today|remai\\.today|iappdaiy\\.com|ipadown\\.com))\\/account\\/sync"},"ipalfish":{"name":"伴鱼绘本","urlPattern":"^https://picturebook\\.ipalfish\\.com/pfapi/ugc/picturebook/profile/get"},"sylangyue":{"name":"思朗月影视","urlPattern":"^https?:\\/\\/theater-api\\.sylangyue\\.xyz\\/api\\/user\\/info"},"gps":{"name":"GPS工具箱","urlPattern":"^https:\\/\\/service\\.gpstool\\.com\\/app\\/index\\/getUserInfo"},"kyxq":{"name":"口语星球","urlPattern":"^https?:\\/\\/mapi\\.kouyuxingqiu\\.com\\/api\\/v2"},"mhlz":{"name":"魔幻粒子","urlPattern":"^https?:\\/\\/ss\\.landintheair\\.com\\/storage\\/"},"kada":{"name":"kada阅读","urlPattern":"^https://service\\.hhdd\\.com/book2"},"xjsm":{"name":"星际使命","urlPattern":"^https?:\\/\\/star\\.jvplay\\.cn\\/v2\\/storage"},"v2ex":{"name":"V2EX去广告","urlPattern":"^https?:\\/\\/.*v2ex\\.com\\/(?!(?:.*(?:api|login|cdn-cgi|verify|auth|captch|\\.(js|css|jpg|jpeg|png|webp|gif|zip|woff|woff2|m3u8|mp4|mov|m4v|avi|mkv|flv|rmvb|wmv|rm|asf|asx|mp3|json|ico|otf|ttf)))).+$"},"foday":{"name":"复游会","urlPattern":"^https?:\\/\\/apis\\.folidaymall\\.com\\/online\\/capi\\/component\\/getPageComponents"},"qiujingapp":{"name":"球竞APP","urlPattern":"^https?:\\/\\/gateway-api\\.yizhilive\\.com\\/api\\/(v2\\/index\\/carouses\\/(3|6|8|11)|v3\\/index\\/all)"},"tv":{"name":"影视去广告","urlPattern":"^https?:\\/\\/(yzy0916|yz1018|yz250907|yz0320|cfvip)\\..+\\.com\\/(v2|v1)\\/api\\/(basic\\/init|home\\/firstScreen|adInfo\\/getPageAd|home\\/body)"},"keep":{"name":"Keep","urlPattern":"^https?:\\/\\/(api|kit)\\.gotokeep\\.com\\/(nuocha|gerudo|athena|nuocha\\/plans|suit\\/v5\\/smart|kprime\\/v4\\/suit\\/sales)\\/"},"bqwz":{"name":"标枪王者","urlPattern":"^https?:\\/\\/javelin\\.mandrillvr\\.com\\/api\\/data\\/get_game_data"},"cyljy":{"name":"成语来解压","urlPattern":"^https?:\\/\\/yr-game-api\\.feigo\\.fun\\/api\\/user\\/get-game-user-value"},"bxkt":{"name":"伴学课堂","urlPattern":"^https?:\\/\\/api\\.banxueketang\\.com\\/api\\/classpal\\/app\\/v1"},"wohome":{"name":"联通智家","urlPattern":"^https:\\/\\/iotpservice\\.smartont\\.net\\/wohome\\/dispatcher"},"qmjyzc":{"name":"全民解压找茬","urlPattern":"^https?:\\/\\/res5\\.haotgame\\.com\\/cu03\\/static\\/OpenDoors\\/Res\\/data\\/levels\\/\\d+\\.json"},"vvebo":{"name":"forward","urlPattern":"^https://fluxapi\\.vvebo\\.vip/v1/purchase/iap/subscription"},"slzd":{"name":"三联中读","urlPattern":"^https://apis\\.lifeweek\\.com\\.cn/(vip/loadMyVipV2|user/newindex\\.do|api/magazine/detail)"},"mingcalc":{"name":"明计算","urlPattern":"^https?:\\/\\/jsq\\.mingcalc\\.cn\\/XMGetMeCount\\.ashx"}}};

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
// 3. 日志系统
// ==========================================
const Logger = (() => {
 const isDebug = CONFIG.DEBUG === true;
 if (!isDebug) {
 return new Proxy({}, {
 get: () => () => {}
 });
 }

 const now = () => {
 const d = new Date();
 return `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}:${String(d.getSeconds()).padStart(2,'0')}`;
 };

 return {
 info: (tag, msg) => console.log(`[${META.name}][${now()}][INFO][${tag}] ${msg}`),
 error: (tag, msg) => console.log(`[${META.name}][${now()}][ERROR][${tag}] ${msg}`),
 debug: (tag, msg) => {
 if (CONFIG.VERBOSE_PATTERN_LOG) {
 console.log(`[${META.name}][${now()}][DEBUG][${tag}] ${msg}`);
 }
 },
 warn: (tag, msg) => console.log(`[${META.name}][${now()}][WARN][${tag}] ${msg}`)
 };
})();

// ==========================================
// 4. Storage（M3单键存储）
// ==========================================
const Storage = (() => {
 const KEY = 'vip_v22_data';  // 更新存储键名，避免与v15冲突
 
 const qx = {
 read: (k) => $prefs.valueForKey(k),
 write: (k, v) => $prefs.setValueForKey(v, k),
 remove: (k) => $prefs.removeValueForKey(k)
 };

 return {
 readConfig: (configId) => {
 const raw = qx.read(KEY);
 if (!raw) return null;
 try {
 const all = JSON.parse(raw);
 const item = all[configId];
 if (item && (Date.now() - item.t) < CONFIG.CONFIG_CACHE_TTL) {
 return JSON.stringify(item);
 }
 } catch (e) {}
 return null;
 },
 
 writeConfig: (configId, value) => {
 let all = {};
 const raw = qx.read(KEY);
 if (raw) {
 try { all = JSON.parse(raw); } catch (e) {}
 }
 
 const parsed = JSON.parse(value);
 all[configId] = { v: parsed.v, t: Date.now(), d: parsed.d };
 
 let str = JSON.stringify(all);
 
 // M3: QX存储超限保护，只保留最近3个
 if (Platform.isQX && str.length > 500000) {
 const sorted = Object.entries(all)
 .sort((a, b) => (b[1].t || 0) - (a[1].t || 0))
 .slice(0, 3);
 const trimmed = Object.fromEntries(sorted);
 str = JSON.stringify(trimmed);
 Logger.info('Storage', 'QX存储超限，保留最近3个配置');
 }
 
 qx.write(KEY, str);
 },

 read: (key) => qx.read(key),
 write: (key, value) => qx.write(key, value),
 remove: (key) => qx.remove(key)
 };
})();

// ==========================================
// 5. HTTP 客户端
// ==========================================
const HTTP = (() => {
 return {
 get: (url, timeout = CONFIG.TIMEOUT * 1000) => new Promise((resolve, reject) => {
 const timer = setTimeout(() => reject(new Error('Timeout')), timeout);

 const callback = (error, response, body) => {
 clearTimeout(timer);
 if (error) {
 reject(new Error(String(error)));
 } else {
 resolve({
 body: body || '',
 statusCode: typeof response === 'object' ? (response.statusCode || response.status || 200) : 200,
 headers: typeof response === 'object' ? (response.headers || {}) : {}
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
 res => callback(null, { statusCode: res.statusCode, headers: res.headers }, res.body),
 err => callback(err, null, null)
 );
 } else if (Platform.isSurge) {
 $httpClient.get({ url, timeout: timeout / 1000 }, callback);
 } else {
 clearTimeout(timer);
 reject(new Error('No HTTP client'));
 }
 } catch (e) {
 clearTimeout(timer);
 reject(e);
 }
 }),

 post: (options, timeout = CONFIG.TIMEOUT * 1000) => new Promise((resolve, reject) => {
 const timer = setTimeout(() => reject(new Error('Timeout')), timeout);

 const callback = (error, response, body) => {
 clearTimeout(timer);
 if (error) {
 reject(new Error(String(error)));
 } else {
 resolve({
 body: body || '',
 statusCode: typeof response === 'object' ? (response.statusCode || response.status || 200) : 200,
 headers: typeof response === 'object' ? (response.headers || {}) : {}
 });
 }
 };

 try {
 if (Platform.isQX) {
 $task.fetch({
 url: options.url,
 method: 'POST',
 headers: options.headers || {},
 body: options.body || '',
 timeout: Math.ceil(timeout / 1000)
 }).then(
 res => callback(null, { statusCode: res.statusCode, headers: res.headers }, res.body),
 err => callback(err, null, null)
 );
 } else if (Platform.isSurge) {
 $httpClient.post({
 url: options.url,
 headers: options.headers || {},
 body: options.body || '',
 timeout: timeout / 1000
 }, callback);
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
 const match = part.match(/^([^\\[\\]]+)\\[(\\d+)\\]$/);
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
 const match = part.match(/^([^\\[\\]]+)\\[(\\d+)\\]$/);
 const isNextArray = /^\\[.*\\]$/.test(next);

 if (match) {
 const arr = current[match[1]] || (current[match[1]] = []);
 current = arr[parseInt(match[2])] || (arr[parseInt(match[2])] = isNextArray ? [] : {});
 } else {
 current = current[part] || (current[part] = isNextArray ? [] : {});
 }
 }

 const last = parts[parts.length - 1];
 const lastMatch = last.match(/^([^\\[\\]]+)\\[(\\d+)\\]$/);
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

 formatObject: (obj, separator = '\\n') => {
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

 return str.replace(/\\{\\{([^}]+)\\}\\}/g, (match, path) => {
 const trimmedPath = path.trim();
 const value = Utils.getPath(obj, trimmedPath);
 return value !== undefined ? value : match;
 });
 }
};

// ==========================================
// 7. 正则缓存池
// ==========================================
const RegexPool = (() => {
 const cache = new Map();
 const MAX_SIZE = 100;

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
 }
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
 message = params.template.replace(/\\{\\{(\\w+)\\}\\}/g, (match, key) => {
 return Utils.getPath(obj, key) || match;
 });
 }

 if (params.messageField) {
 const fieldData = Utils.getPath(obj, params.messageField);
 if (fieldData) {
 if (typeof fieldData === 'object') {
 message = Utils.formatObject(fieldData, params.separator || '\\n');
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

 if (Platform.isQX) {
 $notify(title, subtitle, message, params.options || {});
 } else if (Platform.isLoon) {
 const url = params.options && params.options['open-url'];
 if (url) {
 $notification.post(title, subtitle, message, url);
 } else {
 $notification.post(title, subtitle, message);
 }
 } else if (Platform.isSurge || Platform.isStash) {
 $notification.post(title, subtitle, message, params.options || {});
 }

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
// 10. Manifest 加载器（S3 URL匹配缓存）
// ==========================================
class SimpleManifestLoader {
 constructor(requestId) {
 this._requestId = requestId;
 // S3: URL匹配缓存初始化
 this._urlCache = Platform.isQX ? {} : null;
 this._urlCacheKey = 'url_match_v22';  // 更新缓存键名，避免与v15冲突
 
 // S3: 读取持久化缓存
 if (Platform.isQX) {
 const saved = $prefs.valueForKey(this._urlCacheKey);
 if (saved) {
 try {
 const parsed = JSON.parse(saved);
 const now = Date.now();
 for (const [k, v] of Object.entries(parsed)) {
 if (now - v.ts < 3600000) this._urlCache[k] = v;
 }
 } catch (e) {}
 }
 }
 }

 async load() {
 Logger.info('ManifestLoader', `Using built-in manifest v${BUILTIN_MANIFEST.version}`);
 return this._createManifestProxy(BUILTIN_MANIFEST);
 }

 // S3: 保存URL缓存（最近10条）
 _saveUrlCache() {
 if (!Platform.isQX || !this._urlCache) return;
 const entries = Object.entries(this._urlCache)
 .sort((a, b) => b[1].ts - a[1].ts)
 .slice(0, 10);
 $prefs.setValueForKey(this._urlCacheKey, JSON.stringify(Object.fromEntries(entries)));
 }

 _createManifestProxy(manifest) {
 const patterns = new Map();
 for (const [id, info] of Object.entries(manifest.configs || {})) {
 if (info && info.urlPattern) {
 patterns.set(id, RegexPool.get(info.urlPattern));
 }
 }

 const self = this;
 
 return {
 patterns,
 configs: manifest.configs || {},
 configVersions: manifest.configVersions || {},

 findMatch: (url) => {
 // S3: 先查缓存
 if (Platform.isQX && self._urlCache) {
 const hash = url.split('?')[0];
 const cached = self._urlCache[hash];
 if (cached && (Date.now() - cached.ts) < 3600000) {
 Logger.info('ManifestLoader', `Cache hit: ${cached.id}`);
 return cached.id;
 }
 }

 // 遍历匹配
 for (const [id, pattern] of patterns) {
 try {
 if (pattern.test(url)) {
 Logger.info('ManifestLoader', `Matched: ${id}`);
 
 // S3: 写入缓存
 if (Platform.isQX && self._urlCache) {
 const hash = url.split('?')[0];
 self._urlCache[hash] = { id, ts: Date.now() };
 self._saveUrlCache();
 }
 
 return id;
 }
 } catch (e) {
 Logger.error('ManifestLoader', `Regex error ${id}: ${e.message}`);
 }
 }
 Logger.warn('ManifestLoader', 'No pattern matched');
 return null;
 },

 getConfigVersion: (configId) => {
 return (manifest.configVersions && manifest.configVersions[configId]) || '1.0';
 }
 };
 }
}

// ==========================================
// 11. 配置加载器
// ==========================================
class SimpleConfigLoader {
 constructor(requestId) {
 this._requestId = requestId;
 }

 async load(configId, remoteVersion) {
 const cached = Storage.readConfig(configId);

 if (cached) {
 try {
 const { v, t, d } = Utils.safeJsonParse(cached);
 if (v === remoteVersion && (Date.now() - t) < CONFIG.CONFIG_CACHE_TTL) {
 Logger.info('ConfigLoader', `${configId} cache hit`);
 return this._prepareConfig(d);
 }
 } catch (e) {}
 }

 Logger.info('ConfigLoader', `${configId} fetching...`);
 const url = `${CONFIG.REMOTE_BASE}/configs/${configId}.json?t=${Date.now()}`;

 try {
 const res = await HTTP.get(url);
 if (res.statusCode !== 200 || !res.body) {
 throw new Error(`HTTP ${res.statusCode}`);
 }

 const fresh = Utils.safeJsonParse(res.body);

 Storage.writeConfig(configId, Utils.safeJsonStringify({
 v: remoteVersion,
 t: Date.now(),
 d: fresh
 }));

 return this._prepareConfig(fresh);

 } catch (e) {
 Logger.error('ConfigLoader', `${configId} failed: ${e.message}`);

 if (cached) {
 Logger.warn('ConfigLoader', `${configId} using stale cache`);
 const { d } = Utils.safeJsonParse(cached);
 return this._prepareConfig(d);
 }
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
// 12. 环境和引擎
// ==========================================
class Environment {
 constructor(name) {
 this.name = name;
 this.isQX = Platform.isQX;
 this.isSurge = Platform.isSurge;
 this.isLoon = Platform.isLoon;

 this.response = (typeof $response !== 'undefined') ? $response : {};
 this.request = (typeof $request !== 'undefined') ? $request : {};

 if (!this.request.url && this.response && this.response.request && this.response.request.url) {
 this.request = this.response.request;
 }
 }

 getUrl() {
 let url = (this.response && this.response.url) || (this.request && this.request.url) || '';
 if (this.isQX && typeof $request === 'string') {
 url = $request;
 }
 return url.toString();
 }

 getBody() {
 return (this.response && this.response.body) || '';
 }

 getRequestHeaders() {
 return (this.request && this.request.headers) || {};
 }

 getRequestBody() {
 return (this.request && this.request.body) || '';
 }

 done(result) {
 if (typeof $done === 'function') {
 $done(result);
 } else {
 console.log('[DONE]', result);
 }
 }
}

class VipEngine {
 constructor(env, requestId) {
 this.env = env;
 this._requestId = requestId;
 }

 async process(body, config) {
 if (!body) return { body: '{}' };

 const bodySize = typeof body === 'string' ? body.length : Utils.safeJsonStringify(body).length;
 if (bodySize > CONFIG.MAX_BODY_SIZE) {
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
 Logger.error('Forward', 'Missing statusTexts');
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
 const errorHeaders = config.responseHeaders ? Object.assign({}, config.responseHeaders) : {};

 return {
 status: `HTTP/1.1 ${errorCode} ${errorText}`,
 headers: errorHeaders,
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
 } catch (e) {}
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
 } catch (e) {}
 }
 return { body: modified };
 }
}

// ==========================================
// 13. 主函数
// ==========================================
async function main() {
 const requestId = Math.random().toString(36).substr(2, 6).toUpperCase();

 try {
 let url = '';
 if (typeof $request !== 'undefined') {
 url = (typeof $request === 'string') ? $request : ($request.url || '');
 } else if (typeof $response !== 'undefined' && $response) {
 url = $response.url || '';
 }

 if (!url) {
 Logger.warn('Main', 'No URL detected');
 return $done((typeof $response !== 'undefined' && $response) ? { body: $response.body } : {});
 }

 const displayUrl = url ? url.split('?')[0].substring(0, 60) : 'unknown';
 Logger.info('Main', `${requestId} | ${displayUrl}`);

 const mLoader = new SimpleManifestLoader(requestId);
 const manifest = await mLoader.load();

 const configId = manifest.findMatch(url);
 if (!configId) {
 Logger.info('Main', 'No rule matched');
 return $done((typeof $response !== 'undefined' && $response) ? { body: $response.body } : {});
 }

 const cLoader = new SimpleConfigLoader(requestId);
 const config = await cLoader.load(configId, manifest.getConfigVersion(configId));

 const env = new Environment(META.name);
 const engine = new VipEngine(env, requestId);
 const result = await engine.process(
 (typeof $response !== 'undefined' && $response) ? $response.body : '',
 config
 );

 Logger.info('Main', `${requestId} completed [${config.mode || 'default'}]`);
 $done(result);

 } catch (e) {
 Logger.error('Main', `${requestId} failed: ${e.message}`);
 $done((typeof $response !== 'undefined' && $response) ? { body: $response.body } : {});
 }
}

main();
