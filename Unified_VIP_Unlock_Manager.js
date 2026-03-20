/**
 * ==========================================
 * Unified VIP Unlock Manager v20.1.0
 * 统一 VIP 解锁管理器 - 运行时加载完整版
 * @version 20.1.0
 * @description 支持16个应用，纯远程配置，iOS全平台兼容
 * ==========================================

 [rewrite_local]
 # iAppDaily - 余额查询接口（JSON模式-声明式字段设置）
 ^https:\/\/api\.iappdaily\.com\/my\/balance url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager.js
 ^https?:\/\/(?:api[23]\.tophub\.(?:xyz|today|app)|tophub(?:2)?\.(?:tophubdata\.com|idaily\.today|remai\.today|iappdaiy\.com|ipadown\.com))\/account\/sync url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager.js
 # gps - GPS工具箱（JSON模式-声明式字段设置）
 ^https:\/\/service\.gpstool\.com\/app\/index\/getUserInfo url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager.js
 ^https?:\/\/mapi\.kouyuxingqiu\.com\/api\/v2 url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager.js
 # mhlz - 魔幻粒子（JSON模式-声明式前缀处理）
 ^https?:\/\/ss\.landintheair\.com\/storage\/ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager.js
 # v2ex - V2EX去广告（HTML替换模式）
 ^https?:\/\/.*v2ex\.com\/(?!(.*(api|login|cdn-cgi|verify|auth|captch|(\.(js|css|jpg|jpeg|png|webp|gif|zip|woff|woff2|m3u8|mp4|mov|m4v|avi|mkv|flv|rmvb|wmv|rm|asf|asx|mp3|json|ico|otf|ttf))))) url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager.js
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

// ==========================================
// 配置区域（修改为你的服务器地址）
// ==========================================

const CONFIG = {
  REMOTE_BASE: 'https://joeshu.github.io/vip-unlock-configs',
  CACHE_TTL: 1 * 20 * 60 * 1000,
  DEBUG: true,
  TIMEOUT: 10
};

const META = { 
  name: 'UnifiedVIP', 
  version: '20.1.1'
};

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
      const match = part.match(/^([^\[]+)\[(\d+)\]$/);
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
      const match = part.match(/^([^\[]+)\[(\d+)\]$/);
      
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
        const isNextArray = /^[^\[]+\[\d+\]$/.test(nextPart);
        if (!(part in current) || current[part] === null) {
          current[part] = isNextArray ? [] : {};
        }
        current = current[part];
      }
    }

    const lastPart = parts[parts.length - 1];
    const lastMatch = lastPart.match(/^([^\[]+)\[(\d+)\]$/);
    
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
  }
};

// ==========================================
// 处理器工厂（完整版）
// ==========================================

const ProcessorFactory = {
  
  setFields: (params) => (obj, env) => {
    let modified = 0;
    for (const [path, value] of Object.entries(params.fields || {})) {
      Utils.setPath(obj, path, value);
      modified++;
    }
    if (modified > 0 && env) env.debug(`SetFields: ${modified}`);
    return obj;
  },

  mapArray: (params) => (obj, env) => {
    const arr = Utils.getPath(obj, params.path);
    if (!Array.isArray(arr)) {
      env?.warn(`MapArray: ${params.path} not array`);
      return obj;
    }
    
    let modified = 0;
    arr.forEach((item) => {
      if (!item) return;
      for (const [field, value] of Object.entries(params.fields || {})) {
        if (item[field] !== undefined || value !== undefined) {
          item[field] = value;
        }
      }
      modified++;
    });
    
    if (env) env.debug(`MapArray: ${modified}/${arr.length}`);
    return obj;
  },

  filterArray: (params) => (obj, env) => {
    const arr = Utils.getPath(obj, params.path);
    if (!Array.isArray(arr)) return obj;
    
    const originalLength = arr.length;
    const excludeSet = new Set(params.excludeKeys || []);
    const filtered = arr.filter(item => !excludeSet.has(item[params.keyField]));
    
    Utils.setPath(obj, params.path, filtered);
    if (env) env.log(`Filter: ${originalLength} -> ${filtered.length}`);
    return obj;
  },

  clearArray: (params) => (obj, env) => {
    const arr = Utils.getPath(obj, params.path);
    if (Array.isArray(arr)) {
      const count = arr.length;
      arr.length = 0;
      if (env) env.log(`Clear ${params.logName || params.path}: ${count}`);
    }
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
      if (env) env.log(`Slice: ${arr.length} -> ${params.keepCount}`);
    }
    return obj;
  },

  shiftArray: (params) => (obj, env) => {
    const arr = Utils.getPath(obj, params.path);
    if (Array.isArray(arr) && arr.length > 0) {
      arr.shift();
      if (env) env.log(`Shift: ${params.logName}`);
    }
    return obj;
  },

  processByKeyPrefix: (params) => (obj, env) => {
    const target = Utils.getPath(obj, params.objPath);
    if (!target || typeof target !== 'object') return obj;
    
    for (const [key, value] of Object.entries(target)) {
      for (const [prefix, handler] of Object.entries(params.prefixRules || {})) {
        if (prefix === '*') continue;
        if (key.startsWith(prefix)) {
          Object.assign(value, handler);
          break;
        }
      }
    }
    return obj;
  },

  compose: (params, compile) => {
    const processors = (params.steps || []).map(step => compile(step));
    return (obj, env) => processors.reduce((o, p) => o ? p(o, env) : o, obj);
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
        
        if (conditionMet && params.then) {
          return compile(params.then)(obj, env);
        } else if (!conditionMet && params.else) {
          return compile(params.else)(obj, env);
        }
      } catch (e) {
        env?.warn(`When: ${e.message}`);
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
            env?.debug(`Scene: ${scene.name}`);
            return scene.then(obj, env);
          }
        } catch (e) {}
      }
      return obj;
    };
  }
};

function compileProcessor(def) {
  if (!def || !def.processor) return null;
  const factory = ProcessorFactory[def.processor];
  if (!factory) {
    console.error(`Unknown: ${def.processor}`);
    return null;
  }
  return factory(def.params, compileProcessor);
}

// ==========================================
// 运行时加载器（修复版）
// ==========================================

class RuntimeLoader {
  constructor() {
    this.cache = new Map();
    this.manifest = null;
    // 添加：存储编译后的配置信息用于匹配
    this.patterns = new Map();
  }

  async loadManifest(force = false) {
    const cacheKey = 'vip_manifest_v20';
    const cacheTimeKey = `${cacheKey}_time`;
    
    if (!force) {
      const cached = Storage.read(cacheKey);
      const cacheTime = parseInt(Storage.read(cacheTimeKey) || '0');
      const age = Date.now() - cacheTime;
      
      if (cached && age < CONFIG.CACHE_TTL) {
        this.manifest = Utils.safeJsonParse(cached);
        if (this.manifest) {
          // 预编译所有正则（关键修复）
          this.compilePatterns();
          if (CONFIG.DEBUG) console.log(`[Loader] Cached manifest (${(age/1000/60).toFixed(1)}min)`);
          return this.manifest;
        }
      }
    }

    const url = `${CONFIG.REMOTE_BASE}/manifest.json?t=${Date.now()}`;
    if (CONFIG.DEBUG) console.log(`[Loader] Fetching manifest...`);
    
    try {
      const res = await HTTP.get(url);
      if (res.status === 200 && res.body) {
        this.manifest = Utils.safeJsonParse(res.body);
        if (this.manifest) {
          Storage.write(cacheKey, res.body);
          Storage.write(cacheTimeKey, Date.now().toString());
          // 预编译所有正则
          this.compilePatterns();
          if (CONFIG.DEBUG) console.log(`[Loader] Manifest updated`);
          return this.manifest;
        }
      }
      throw new Error(`HTTP ${res.status}`);
    } catch (e) {
      console.error(`[Loader] Manifest: ${e.message}`);
      const expired = Storage.read(cacheKey);
      if (expired) {
        this.manifest = Utils.safeJsonParse(expired);
        this.compilePatterns();
        return this.manifest;
      }
      throw e;
    }
  }

  // 新增：预编译所有正则模式
  compilePatterns() {
    this.patterns.clear();
    if (!this.manifest || !this.manifest.configs) return;
    
    for (const [id, info] of Object.entries(this.manifest.configs)) {
      try {
        // 将字符串转为 RegExp 对象
        if (info.urlPattern) {
          this.patterns.set(id, new RegExp(info.urlPattern));
        }
      } catch (e) {
        console.error(`[Loader] Invalid regex for ${id}: ${e.message}`);
      }
    }
    
    if (CONFIG.DEBUG) console.log(`[Loader] Compiled ${this.patterns.size} patterns`);
  }

  findMatch(url) {
    // 使用预编译的正则
    for (const [id, pattern] of this.patterns) {
      try {
        if (pattern.test(url)) return id;
      } catch (e) {
        console.warn(`[Loader] Test error: ${id}`);
      }
    }
    return null;
  }

  async loadConfig(configId, force = false) {
    if (!force && this.cache.has(configId)) {
      if (CONFIG.DEBUG) console.log(`[Loader] Memory: ${configId}`);
      return this.cache.get(configId);
    }

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
    if (CONFIG.DEBUG) console.log(`[Loader] Fetch: ${configId}`);
    
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
      console.error(`[Loader] Config: ${e.message}`);
      const expired = Storage.read(cacheKey);
      if (expired) return this.prepareConfig(Utils.safeJsonParse(expired));
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
    return {
      manifest: this.manifest ? Object.keys(this.manifest.configs).length : 0,
      cached: this.cache.size
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

  log(level, msg) {
    if (!CONFIG.DEBUG && level === 'debug') return;
    const ts = new Date().toISOString().split('T')[1].split('.')[0];
    console.log(`[${this.name}][${level.toUpperCase()}][${ts}] ${msg}`);
  }

  debug(m) { this.log('debug', m); }
  info(m) { this.log('info', m); }
  warn(m) { this.log('warn', m); }
  error(m) { this.log('error', m); }

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
    if (!body) return { body: '{}' };

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

    if (typeof config.customProcessor === 'function') {
      try {
        obj = config.customProcessor(obj, this.env);
      } catch (e) {
        this.env.error(`Processor: ${e.message}`);
      }
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
    
    if (count > 0) this.env.debug(`Regex: ${count}`);
    return { body: modified };
  }

  processGame(body, config) {
    let modified = body;
    for (const res of config.gameResources || []) {
      try {
        const pattern = new RegExp(`"${res.field}":\\d+`, 'g');
        modified = modified.replace(pattern, `"${res.field}":${res.value}`);
      } catch (e) {}
    }
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
    for (const rule of config.htmlReplacements || []) {
      try {
        const regex = new RegExp(rule.pattern, 'i');
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
  const env = new Environment(META.name);
  
  try {
    env.info(`${META.name} v${META.version}`);
    
    const url = env.getUrl();
    if (!url) {
      env.error('No URL');
      return env.done({});
    }
    env.debug(`URL: ${url.substring(0, 60)}...`);
    
    const loader = new RuntimeLoader();
    
    // 加载清单（会自动编译正则）
    let manifest;
    try {
      manifest = await loader.loadManifest();
    } catch (e) {
      env.error(`Manifest: ${e.message}`);
      return env.done({ body: env.getBody() });
    }
    
    const stats = loader.getStats();
    env.debug(`Apps: ${stats.manifest}, Cached: ${stats.cached}`);
    
    // 查找匹配（现在使用预编译的正则）
    const configId = loader.findMatch(url);
    if (!configId) {
      env.warn(`No match for: ${url.substring(0, 40)}...`);
      return env.done({ body: env.getBody() });
    }
    env.info(`Match: ${configId}`);
    
    // 加载配置
    let config;
    try {
      config = await loader.loadConfig(configId);
    } catch (e) {
      env.error(`Load: ${e.message}`);
      return env.done({ body: env.getBody() });
    }
    
    env.debug(`${config.name} [${config.mode}]`);
    
    // 执行
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
