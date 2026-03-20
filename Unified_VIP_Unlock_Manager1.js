/**
 * ==========================================
 * Unified VIP Unlock Manager v20.1.2
 * 调试版 - 显示详细的正则编译错误
 * ==========================================
 
[rewrite_local]
 # iAppDaily - 余额查询接口（JSON模式-声明式字段设置）
 ^https:\/\/api\.iappdaily\.com\/my\/balance url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager1.js
 ^https?:\/\/(?:api[23]\.tophub\.(?:xyz|today|app)|tophub(?:2)?\.(?:tophubdata\.com|idaily\.today|remai\.today|iappdaiy\.com|ipadown\.com))\/account\/sync url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager1.js
 # gps - GPS工具箱（JSON模式-声明式字段设置）
 ^https:\/\/service\.gpstool\.com\/app\/index\/getUserInfo url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager.js
 ^https?:\/\/mapi\.kouyuxingqiu\.com\/api\/v2 url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager.js
 # mhlz - 魔幻粒子（JSON模式-声明式前缀处理）
 ^https?:\/\/ss\.landintheair\.com\/storage\/ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager.js
 # v2ex - V2EX去广告（HTML替换模式）
 ^https?:\/\/.*v2ex\.com\/(?!(.*(api|login|cdn-cgi|verify|auth|captch|(\.(js|css|jpg|jpeg|png|webp|gif|zip|woff|woff2|m3u8|mp4|mov|m4v|avi|mkv|flv|rmvb|wmv|rm|asf|asx|mp3|json|ico|otf|ttf))))) url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager1.js
 # foday - 复游会去广告（多路径模式-声明式过滤）
 ^https?:\/\/apis\.folidaymall\.com\/online\/capi\/component\/getPageComponents url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager.js
 # qiujingapp - 球竞APP去广告（多路径模式-声明式清空）
 ^https?:\/\/gateway-api\.yizhilive\.com\/api\/v2\/index\/carouses\/(3|6|8|11)(\?.*)?$ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager.js
 ^https?:\/\/gateway-api\.yizhilive\.com\/api\/v3\/index\/all\?.*position=2.*$ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager.js
 # Keep - 课程/会员接口（正则替换模式）
 ^https?:\/\/(api|kit).gotokeep\.com\/(nuocha|gerudo|athena|nuocha\/plans|suit\/v5\/smart|kprime\/v4\/suit\/sales)\/ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager.js
 # bqwz - 标枪王者游戏数据接口（游戏数值模式）
 ^https?:\/\/javelin\.mandrillvr\.com\/api\/data\/get_game_data url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager.js
 # bxkt - 伴学课堂接口（混合模式-声明式组合）
 ^https?:\/\/api\.banxueketang\.com\/api\/classpal\/app\/v1 url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager.js
 # tv - 影视去广告接口（多路径模式-完全声明式）
 ^https?:\/\/(yzy0916|yz1018|yz250907|yz0320|cfvip)\..+\.com\/(v2|v1)\/api\/(basic\/init|home\/firstScreen|adInfo\/getPageAd|home\/body) url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager.js
 ^https?:\/\/(yz\w{4,6}|cfvip)\..+\.com\/(v2|v1)\/api\/(adInfo|vodInfo)\/(getPageAd|getTextAd|getSearchAd|getVodBodyAd|getVodPauseAd|getUserCenterAd) url reject-dict
 ^https?:\/\/(yz\w{4,6}|cfvip)\..+\.com\/(v2|v1)\/api\/(home\/notice|gameCenter\/gameDetailList) url reject-dict
 # 成语来解压 - 微信小程序无限金币（游戏数值模式）
 ^https?:\/\/yr-game-api\.feigo\.fun\/api\/user\/get-game-user-value url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager.js
 # 星际使命 - 微信小程序游戏数据修改（JSON声明式处理器-完全重构）
 ^https?:\/\/star\.jvplay\.cn\/v2\/storage url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager.js
# wohome - 联通智家去广告（条件删除模式）
 ^https:\/\/iotpservice\.smartont\.net\/wohome\/dispatcher url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager.js
# 思朗月影视 - 用户信息VIP解锁
^https?:\/\/theater-api\.sylangyue\.xyz\/api\/user\/info url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager.js
 [mitm]
 hostname = theater-api.sylangyue.xyz, api.iappdaily.com, api2.tophub.today, api2.tophub.app, api3.tophub.xyz, api3.tophub.today, api3.tophub.app, tophub.tophubdata.com, tophub2.tophubdata.com, tophub.idaily.today, tophub2.idaily.today, tophub.remai.today, tophub.iappdaiy.com, tophub.ipadown.com,service.gpstool.com, mapi.kouyuxingqiu.com, ss.landintheair.com, *.v2ex.com, apis.folidaymall.com, gateway-api.yizhilive.com, pagead*.googlesyndication.com, api.gotokeep.com, kit.gotokeep.com, *.gotokeep.*, 120.53.74.*, 162.14.5.*, 42.187.199.*, 101.42.124.*, javelin.mandrillvr.com,api.banxueketang.com, yzy0916.*.com, yz1018.*.com, yz250907.*.com, yz0320.*.com, cfvip.*.com,yr-game-api.feigo.fun,star.jvplay.cn,iotpservice.smartont.net

*/

'use strict';

const CONFIG = {
  REMOTE_BASE: 'https://joeshu.github.io/vip-unlock-configs',
  CACHE_TTL: 24 * 60 * 60 * 1000,
  DEBUG: true,
  TIMEOUT: 10
};

const META = { name: 'UnifiedVIP', version: '20.1.2' };

// 环境修复
(function fixEnvironment() {
  if (typeof console === 'undefined') globalThis.console = { log: () => {} };
  const _log = console.log.bind(console);
  ['error', 'warn', 'debug', 'info'].forEach(method => {
    if (typeof console[method] !== 'function') {
      console[method] = (...args) => _log(`[${method.toUpperCase()}]`, ...args);
    }
  });
})();

// HTTP 和 Storage（保持之前代码不变）...
const HTTP = {
  get: (url, timeout = CONFIG.TIMEOUT) => new Promise((resolve, reject) => {
    const startTime = Date.now();
    const handleResponse = (error, response, body) => {
      if (error) reject(new Error(`HTTP: ${error}`));
      else resolve({ body: body || '', status: typeof response === 'object' ? (response.status || 200) : 200, time: Date.now() - startTime });
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
      } else reject(new Error('No HTTP'));
    } catch (e) { reject(new Error(`HTTP: ${e.message}`)); }
  })
};

const Storage = {
  read: (k) => { try { if (typeof $prefs !== 'undefined') return $prefs.valueForKey(k); if (typeof $persistentStore !== 'undefined') return $persistentStore.read(k); } catch (e) {} return null; },
  write: (k, v) => { try { if (typeof $prefs !== 'undefined') return $prefs.setValueForKey(v, k); if (typeof $persistentStore !== 'undefined') return $persistentStore.write(v, k); } catch (e) {} return false; }
};

// 工具函数
const Utils = {
  safeJsonParse: (s, d = null) => { try { return JSON.parse(s); } catch (e) { return d; } },
  safeJsonStringify: (o) => { try { return JSON.stringify(o); } catch (e) { return '{}'; } }
};

// 处理器工厂（简化版，关键部分）
const ProcessorFactory = {
  setFields: (p) => (o, e) => { for (const [k, v] of Object.entries(p.fields || {})) { const parts = k.split('.'); let c = o; for (let i = 0; i < parts.length - 1; i++) { if (!(parts[i] in c)) c[parts[i]] = {}; c = c[parts[i]]; } c[parts[parts.length - 1]] = v; } return o; },
  compose: (p, c) => { const procs = (p.steps || []).map(s => c(s)); return (o, e) => procs.reduce((a, pr) => a ? pr(a, e) : a, o); },
  when: (p, c) => (o, e) => { try { let m = false; const d = o.data; if (p.condition === "empty") m = !d || Object.keys(d).length === 0; else if (p.condition === "isArray") m = Array.isArray(d); else if (p.condition === "isObject") m = typeof d === 'object' && !Array.isArray(d); if (m && p.then) return c(p.then)(o, e); if (!m && p.else) return c(p.else)(o, e); } catch (err) {} return o; },
  sceneDispatcher: (p, c) => { const sc = (p.scenes || []).map(s => ({ n: s.name, w: s.when, t: c(s.then) })); return (o, e) => { for (const s of sc) { try { let m = false; if (s.w === "isArray") m = Array.isArray(o.data); else if (s.w === "isObject") m = typeof o.data === 'object' && !Array.isArray(o.data); if (m) { e?.debug(`Scene: ${s.n}`); return s.t(o, e); } } catch (err) {} } return o; } },
  mapArray: (p) => (o, e) => { const a = p.path.split('.').reduce((c, k) => c?.[k], o); if (Array.isArray(a)) a.forEach(i => { if (i) Object.assign(i, p.fields); }); return o; },
  filterArray: (p) => (o, e) => { const a = p.path.split('.').reduce((c, k) => c?.[k], o); if (Array.isArray(a)) { const ex = new Set(p.excludeKeys || []); const f = a.filter(i => !ex.has(i[p.keyField])); Utils.setPath(o, p.path, f); } return o; },
  clearArray: (p) => (o, e) => { const a = p.path.split('.').reduce((c, k) => c?.[k], o); if (Array.isArray(a)) a.length = 0; return o; },
  deleteFields: (p) => (o, e) => { for (const path of p.paths || []) { const parts = path.split('.'); let c = o; for (let i = 0; i < parts.length - 1; i++) { c = c?.[parts[i]]; if (!c) break; } if (c) delete c[parts[parts.length - 1]]; } return o; }
};

function compileProcessor(def) {
  if (!def || !def.processor) return null;
  const f = ProcessorFactory[def.processor];
  if (!f) { console.error(`Unknown: ${def.processor}`); return null; }
  return f(def.params, compileProcessor);
}

// ==========================================
// 运行时加载器（带详细调试）
// ==========================================

class RuntimeLoader {
  constructor() {
    this.cache = new Map();
    this.manifest = null;
    this.patterns = new Map();
  }

  async loadManifest(force = false) {
    const cacheKey = 'vip_manifest_v20';
    const cacheTimeKey = `${cacheKey}_time`;
    
    if (!force) {
      const cached = Storage.read(cacheKey);
      const cacheTime = parseInt(Storage.read(cacheTimeKey) || '0');
      if (cached && (Date.now() - cacheTime < CONFIG.CACHE_TTL)) {
        this.manifest = Utils.safeJsonParse(cached);
        if (this.manifest) {
          this.compilePatterns();
          if (CONFIG.DEBUG) console.log(`[Loader] Using cached (${((Date.now()-cacheTime)/1000/60).toFixed(1)}min)`);
          return this.manifest;
        }
      }
    }

    const url = `${CONFIG.REMOTE_BASE}/manifest.json?t=${Date.now()}`;
    console.log(`[Loader] Fetching manifest...`);
    
    try {
      const res = await HTTP.get(url);
      if (res.status === 200 && res.body) {
        this.manifest = Utils.safeJsonParse(res.body);
        if (this.manifest) {
          Storage.write(cacheKey, res.body);
          Storage.write(cacheTimeKey, Date.now().toString());
          this.compilePatterns();
          return this.manifest;
        }
      }
      throw new Error(`HTTP ${res.status}`);
    } catch (e) {
      console.error(`[Loader] Manifest failed: ${e.message}`);
      const expired = Storage.read(cacheKey);
      if (expired) {
        this.manifest = Utils.safeJsonParse(expired);
        this.compilePatterns();
        return this.manifest;
      }
      throw e;
    }
  }

  // 关键修复：详细的正则编译日志
  compilePatterns() {
    this.patterns.clear();
    if (!this.manifest || !this.manifest.configs) {
      console.warn('[Loader] No configs in manifest');
      return;
    }

    let success = 0;
    let failed = 0;

    for (const [id, info] of Object.entries(this.manifest.configs)) {
      try {
        if (!info.urlPattern) {
          console.warn(`[Loader] ${id}: Missing urlPattern`);
          failed++;
          continue;
        }
        
        // 尝试编译正则
        const pattern = new RegExp(info.urlPattern);
        this.patterns.set(id, pattern);
        success++;
        
        if (CONFIG.DEBUG) console.log(`[Loader] ${id}: OK`);
      } catch (e) {
        console.error(`[Loader] ${id}: FAILED - ${e.message}`);
        console.error(`[Loader] Pattern was: ${info.urlPattern}`);
        failed++;
      }
    }

    console.log(`[Loader] Compiled: ${success} success, ${failed} failed, Total: ${success + failed}`);
    
    // 如果没有成功编译任何正则，报错
    if (success === 0) {
      console.error('[Loader] CRITICAL: No valid patterns!');
    }
  }

  findMatch(url) {
    for (const [id, pattern] of this.patterns) {
      try {
        if (pattern.test(url)) {
          if (CONFIG.DEBUG) console.log(`[Loader] Match: ${id}`);
          return id;
        }
      } catch (e) {
        console.warn(`[Loader] Test error ${id}: ${e.message}`);
      }
    }
    return null;
  }

  async loadConfig(configId, force = false) {
    if (!force && this.cache.has(configId)) return this.cache.get(configId);

    const cacheKey = `vip_cfg_v20_${configId}`;
    const cacheTimeKey = `${cacheKey}_time`;
    
    if (!force) {
      const cached = Storage.read(cacheKey);
      const cacheTime = parseInt(Storage.read(cacheTimeKey) || '0');
      if (cached && (Date.now() - cacheTime < CONFIG.CACHE_TTL)) {
        const config = this.prepareConfig(Utils.safeJsonParse(cached));
        this.cache.set(configId, config);
        return config;
      }
    }

    const url = `${CONFIG.REMOTE_BASE}/configs/${configId}.json?t=${Date.now()}`;
    console.log(`[Loader] Fetch: ${configId}`);
    
    try {
      const res = await HTTP.get(url);
      if (res.status === 200 && res.body) {
        Storage.write(cacheKey, res.body);
        Storage.write(cacheTimeKey, Date.now().toString());
        const config = this.prepareConfig(Utils.safeJsonParse(res.body));
        this.cache.set(configId, config);
        return config;
      }
      throw new Error(`HTTP ${res.status}`);
    } catch (e) {
      console.error(`[Loader] Config ${configId}: ${e.message}`);
      const expired = Storage.read(cacheKey);
      if (expired) return this.prepareConfig(Utils.safeJsonParse(expired));
      throw e;
    }
  }

  prepareConfig(raw) {
    const config = { ...raw };
    if (raw.urlPattern) {
      try { config.urlPattern = new RegExp(raw.urlPattern); } 
      catch (e) { config.urlPattern = /.*/; }
    }
    if (raw.processor && raw.mode === 'json') {
      config.customProcessor = compileProcessor(raw.processor);
    }
    if (raw.regexReplacements) {
      config.regexReplacements = raw.regexReplacements.map(r => ({
        pattern: new RegExp(r.pattern, r.flags || 'g'),
        replacement: r.replacement
      }));
    }
    return Object.freeze(config);
  }

  getStats() {
    return { total: this.patterns.size, cached: this.cache.size };
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
    if (!this.request.url && this.response.request?.url) this.request = this.response.request;
  }

  getUrl() {
    let url = this.response?.url || this.request?.url || '';
    if (this.isQX && typeof $request === 'string') url = $request;
    return url.toString();
  }

  getBody() { return this.response?.body || ''; }

  log(level, msg) {
    if (!CONFIG.DEBUG && level === 'debug') return;
    const ts = new Date().toISOString().split('T')[1].split('.')[0];
    console.log(`[${this.name}][${level.toUpperCase()}][${ts}] ${msg}`);
  }

  debug(m) { this.log('debug', m); }
  info(m) { this.log('info', m); }
  warn(m) { this.log('warn', m); }
  error(m) { this.log('error', m); }

  done(result) { if (typeof $done === 'function') $done(result); else console.log('[DONE]', result); }
}

class VipEngine {
  constructor(env) { this.env = env; }

  process(body, config) {
    if (!body) return { body: '{}' };
    switch (config.mode) {
      case 'json': return this.processJson(body, config);
      case 'regex': return this.processRegex(body, config);
      case 'game': return this.processGame(body, config);
      case 'html': return this.processHtml(body, config);
      default: return { body };
    }
  }

  processJson(body, config) {
    let obj = Utils.safeJsonParse(body);
    if (!obj) return { body };
    if (typeof config.customProcessor === 'function') {
      try { obj = config.customProcessor(obj, this.env); } 
      catch (e) { this.env.error(`Proc: ${e.message}`); }
    }
    return { body: Utils.safeJsonStringify(obj) };
  }

  processRegex(body, config) {
    let mod = body;
    for (const r of config.regexReplacements || []) {
      try { mod = mod.replace(r.pattern, r.replacement); } catch (e) {}
    }
    return { body: mod };
  }

  processGame(body, config) {
    let mod = body;
    for (const r of config.gameResources || []) {
      try { mod = mod.replace(new RegExp(`"${r.field}":\\d+`, 'g'), `"${r.field}":${r.value}`); } catch (e) {}
    }
    return { body: mod };
  }

  processHtml(body, config) {
    let mod = body;
    for (const r of config.htmlReplacements || []) {
      try { mod = mod.replace(new RegExp(r.pattern, 'i'), r.replacement); } catch (e) {}
    }
    return { body: mod };
  }
}

// ==========================================
// 主函数
// ==========================================

async function main() {
  const env = new Environment(META.name);
  
  try {
    env.info(`${META.name} v${META.version}`);
    
    const url = env.getUrl();
    if (!url) { env.error('No URL'); return env.done({}); }
    env.debug(`URL: ${url.substring(0, 60)}`);
    
    const loader = new RuntimeLoader();
    
    try {
      await loader.loadManifest();
    } catch (e) {
      env.error(`Manifest: ${e.message}`);
      return env.done({ body: env.getBody() });
    }
    
    const stats = loader.getStats();
    env.debug(`Patterns: ${stats.total}, Cached: ${stats.cached}`);
    
    // 调试：列出所有已编译的模式
    if (CONFIG.DEBUG) {
      console.log('[Debug] Available patterns:');
      for (const id of loader.patterns.keys()) {
        console.log(`  - ${id}`);
      }
    }
    
    const configId = loader.findMatch(url);
    if (!configId) {
      env.warn(`No match: ${url.substring(0, 50)}...`);
      return env.done({ body: env.getBody() });
    }
    
    env.info(`Match: ${configId}`);
    
    let config;
    try { config = await loader.loadConfig(configId); } 
    catch (e) { env.error(`Load: ${e.message}`); return env.done({ body: env.getBody() }); }
    
    env.debug(`${config.name} [${config.mode}]`);
    
    const engine = new VipEngine(env);
    const result = engine.process(env.getBody(), config);
    
    env.info('Done');
    env.done(result);
    
  } catch (e) {
    env.error(`Fatal: ${e.message}`);
    env.done({ body: env.getBody() });
  }
}

main();
