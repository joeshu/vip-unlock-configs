/**
 * Unified VIP Unlock Manager - Runtime Loader
 * 运行时动态加载版 - iOS 专用
 * @version 20.0.0
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
// 配置区域（修改这里）
// ==========================================

const CONFIG = {
  // 远程配置服务器地址
  REMOTE_BASE: 'https://joeshu.github.io/vip-unlock-configs',
  
  // 缓存时间（毫秒）：默认24小时
  CACHE_TTL: 24 * 60 * 60 * 1000,
  
  // 调试模式
  DEBUG: true
  // 请求超时（秒）
  TIMEOUT: 10
};

const META = { 
  name: 'UnifiedVIP', 
  version: '20.1.0',
  description: 'Runtime Loader with 16 Apps Support'
};

// ==========================================
// 环境修复（QX兼容性）
// ==========================================

(function fixEnvironment() {
  if (typeof console === 'undefined') globalThis.console = { log: () => {} };
  const _log = console.log.bind(console);
  
  ['error', 'warn', 'debug', 'info'].forEach(method => {
    if (typeof console[method] !== 'function') {
      console[method] = (...args) => {
        const prefix = `[${method.toUpperCase()}]`;
        return _log(prefix, ...args);
      };
    }
  });
})();

// ==========================================
// HTTP 请求（跨平台兼容）
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
        // Quantumult X
        $task.fetch({ url, method: 'GET', timeout }).then(
          res => handleResponse(null, { status: res.statusCode }, res.body),
          err => handleResponse(err, null, null)
        );
      } else if (typeof $httpClient !== 'undefined') {
        // Surge
        $httpClient.get({ url, timeout }, handleResponse);
      } else if (typeof $http !== 'undefined') {
        // Loon
        $http.get(url, handleResponse);
      } else {
        reject(new Error('No HTTP client available'));
      }
    } catch (e) {
      reject(new Error(`HTTP Setup Error: ${e.message}`));
    }
  })
};

// ==========================================
// 存储（跨平台兼容）
// ==========================================

const Storage = {
  read: (key) => {
    try {
      if (typeof $prefs !== 'undefined') {
        return $prefs.valueForKey(key);
      } else if (typeof $persistentStore !== 'undefined') {
        return $persistentStore.read(key);
      }
    } catch (e) {}
    return null;
  },
  
  write: (key, value) => {
    try {
      if (typeof $prefs !== 'undefined') {
        return $prefs.setValueForKey(value, key);
      } else if (typeof $persistentStore !== 'undefined') {
        return $persistentStore.write(value, key);
      }
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
    try { 
      return JSON.parse(str); 
    } catch (e) { 
      return defaultVal; 
    }
  },

  safeJsonStringify: (obj) => {
    try { 
      return JSON.stringify(obj); 
    } catch (e) { 
      return '{}'; 
    }
  },

  getPath: (obj, path) => {
    if (!path || !obj) return undefined;
    return path.split('.').reduce((current, part) => {
      if (current === null || current === undefined) return undefined;
      // 支持数组索引，如 data.items[0].name
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
        // 数组索引
        const arrName = match[1];
        const arrIndex = parseInt(match[2]);
        if (!(arrName in current) || !Array.isArray(current[arrName])) {
          current[arrName] = [];
        }
        while (current[arrName].length <= arrIndex) {
          current[arrName].push({});
        }
        if (i === parts.length - 2) {
          current[arrName][arrIndex] = value;
          return obj;
        } else {
          current = current[arrName][arrIndex];
        }
      } else {
        // 普通对象
        const isNextArray = /^[^\[]+\[\d+\]$/.test(nextPart);
        if (!(part in current) || current[part] === null) {
          current[part] = isNextArray ? [] : {};
        }
        current = current[part];
      }
    }

    // 最后一个部分
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
  
  // 1. 基础字段设置
  setFields: (params) => (obj, env) => {
    let modified = 0;
    for (const [path, value] of Object.entries(params.fields || {})) {
      Utils.setPath(obj, path, value);
      modified++;
    }
    if (modified > 0 && env) env.debug(`SetFields: ${modified} fields`);
    return obj;
  },

  // 2. 数组映射
  mapArray: (params) => (obj, env) => {
    const arr = Utils.getPath(obj, params.path);
    if (!Array.isArray(arr)) {
      env?.warn(`MapArray: ${params.path} is not array`);
      return obj;
    }
    
    let modified = 0;
    arr.forEach((item, index) => {
      if (!item) return;
      // 支持条件判断
      if (params.condition && typeof params.condition === 'function') {
        if (!params.condition(item, index)) return;
      }
      
      for (const [field, value] of Object.entries(params.fields || {})) {
        if (item[field] !== undefined || value !== undefined) {
          item[field] = value;
        }
      }
      modified++;
    });
    
    if (env) env.debug(`MapArray: ${modified}/${arr.length} items`);
    return obj;
  },

  // 3. 数组过滤
  filterArray: (params) => (obj, env) => {
    const arr = Utils.getPath(obj, params.path);
    if (!Array.isArray(arr)) {
      env?.warn(`FilterArray: ${params.path} is not array`);
      return obj;
    }
    
    const originalLength = arr.length;
    let filtered;
    
    if (params.excludeKeys && params.keyField) {
      const excludeSet = new Set(params.excludeKeys);
      filtered = arr.filter(item => !excludeSet.has(item[params.keyField]));
    } else if (params.keepPredicate) {
      filtered = arr.filter(params.keepPredicate);
    } else {
      return obj;
    }
    
    Utils.setPath(obj, params.path, filtered);
    if (env) env.log(`Filter: ${originalLength} -> ${filtered.length}`);
    return obj;
  },

  // 4. 清空数组
  clearArray: (params) => (obj, env) => {
    const arr = Utils.getPath(obj, params.path);
    if (Array.isArray(arr)) {
      const count = arr.length;
      arr.length = 0;
      if (env) env.log(`Cleared ${params.logName || params.path}: ${count} items`);
    }
    return obj;
  },

  // 5. 删除字段
  deleteFields: (params) => (obj, env) => {
    for (const path of params.paths || []) {
      const parts = path.split('.');
      let current = obj;
      for (let i = 0; i < parts.length - 1; i++) {
        current = current?.[parts[i]];
        if (!current) break;
      }
      if (current) {
        delete current[parts[parts.length - 1]];
        env?.debug(`Deleted: ${path}`);
      }
    }
    return obj;
  },

  // 6. 数组切片（保留前N个）
  sliceArray: (params) => (obj, env) => {
    const arr = Utils.getPath(obj, params.path);
    if (Array.isArray(arr) && arr.length > params.keepCount) {
      const original = arr.length;
      Utils.setPath(obj, params.path, arr.slice(0, params.keepCount));
      if (env) env.log(`Sliced ${params.logName || params.path}: ${original} -> ${params.keepCount}`);
    }
    return obj;
  },

  // 7. 移除数组第一个元素
  shiftArray: (params) => (obj, env) => {
    const arr = Utils.getPath(obj, params.path);
    if (Array.isArray(arr) && arr.length > 0) {
      const removed = arr.shift();
      if (env) env.log(`Shifted ${params.logName || params.path}: removed ${removed?.title || 'item'}`);
    }
    return obj;
  },

  // 8. 按键前缀处理（游戏货币等）
  processByKeyPrefix: (params) => (obj, env) => {
    const target = Utils.getPath(obj, params.objPath);
    if (!target || typeof target !== 'object') {
      env?.warn(`ProcessByKeyPrefix: ${params.objPath} not found`);
      return obj;
    }
    
    const stats = {};
    for (const [key, value] of Object.entries(target)) {
      let matched = false;
      
      for (const [prefix, handler] of Object.entries(params.prefixRules || {})) {
        if (prefix === '*') continue;
        
        if (key.startsWith(prefix)) {
          Object.assign(value, handler);
          stats[prefix] = (stats[prefix] || 0) + 1;
          matched = true;
          break;
        }
      }
      
      if (!matched && params.prefixRules?.['*']) {
        Object.assign(value, params.prefixRules['*']);
        stats['*'] = (stats['*'] || 0) + 1;
      }
    }
    
    if (env && params.logPrefix) {
      env.log(`${params.logPrefix}: ${JSON.stringify(stats)}`);
    }
    return obj;
  },

  // 9. 组合处理器（顺序执行）
  compose: (params, compile) => {
    const processors = (params.steps || []).map(step => compile(step));
    return (obj, env) => {
      return processors.reduce((acc, processor) => {
        if (!acc) return acc;
        try {
          return processor(acc, env);
        } catch (e) {
          env?.warn(`Compose step error: ${e.message}`);
          return acc;
        }
      }, obj);
    };
  },

  // 10. 条件处理器（增强版）
  when: (params, compile) => {
    return (obj, env) => {
      try {
        let conditionMet = false;
        
        switch (params.condition) {
          case "empty":
            // 检查对象是否为空
            const val = Utils.getPath(obj, params.check);
            conditionMet = !val || (typeof val === 'object' && Object.keys(val).length === 0);
            break;
            
          case "hasKey":
            // 检查数组中是否有指定key的对象
            const arr = Utils.getPath(obj, params.path);
            if (Array.isArray(arr)) {
              conditionMet = arr.some(item => item?.key === params.key);
            }
            break;
            
          case "pathMatch":
            // URL路径包含
            const url1 = env?.getUrl?.() || '';
            conditionMet = url1.includes(params.path);
            break;
            
          case "queryMatch":
            // URL参数匹配
            const url2 = env?.getUrl?.() || '';
            const match = url2.match(new RegExp(`[?&]${params.param}=([^&]+)`));
            conditionMet = match && decodeURIComponent(match[1]) === params.value;
            break;
            
          case "includes":
            // 包含检查
            const target = Utils.getPath(obj, params.path);
            if (Array.isArray(target)) {
              conditionMet = target.includes(params.value);
            } else if (typeof target === 'string') {
              conditionMet = target.includes(params.value);
            }
            break;
            
          case "isObject":
            // 是对象但不是数组
            const check1 = Utils.getPath(obj, params.check);
            conditionMet = typeof check1 === 'object' && !Array.isArray(check1) && check1 !== null;
            break;
            
          case "isArray":
            // 是数组
            const check2 = Utils.getPath(obj, params.check);
            conditionMet = Array.isArray(check2);
            break;
            
          default:
            // 自定义函数条件
            if (typeof params.condition === 'function') {
              conditionMet = params.condition(obj);
            }
        }
        
        if (conditionMet && params.then) {
          const thenProc = compile(params.then);
          return thenProc(obj, env);
        } else if (!conditionMet && params.else) {
          const elseProc = compile(params.else);
          return elseProc(obj, env);
        }
      } catch (e) {
        env?.warn(`When error: ${e.message}`);
      }
      return obj;
    };
  },

  // 11. 场景分发器
  sceneDispatcher: (params, compile) => {
    const scenes = (params.scenes || []).map(scene => ({
      name: scene.name,
      when: scene.when,
      then: compile(scene.then)
    }));

    return (obj, env) => {
      for (const scene of scenes) {
        try {
          let matched = false;
          
          // 支持字符串条件类型
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
        } catch (e) {
          env?.warn(`Scene ${scene.name} error: ${e.message}`);
        }
      }
      return obj;
    };
  }
};

// 编译处理器（递归）
function compileProcessor(def) {
  if (!def || !def.processor) return null;
  
  const factory = ProcessorFactory[def.processor];
  if (!factory) {
    console.error(`Unknown processor: ${def.processor}`);
    return null;
  }
  
  // 传递 compileProcessor 用于嵌套
  return factory(def.params, compileProcessor);
}

// ==========================================
// 运行时加载器
// ==========================================

class RuntimeLoader {
  constructor() {
    this.cache = new Map();
    this.manifest = null;
  }

  async loadManifest(force = false) {
    const cacheKey = 'vip_manifest_v20';
    const cacheTimeKey = `${cacheKey}_time`;
    
    // 检查缓存
    if (!force) {
      const cached = Storage.read(cacheKey);
      const cacheTime = parseInt(Storage.read(cacheTimeKey) || '0');
      const age = Date.now() - cacheTime;
      
      if (cached && age < CONFIG.CACHE_TTL) {
        this.manifest = Utils.safeJsonParse(cached);
        if (this.manifest) {
          if (CONFIG.DEBUG) console.log(`[Loader] Using cached manifest (${(age/1000/60).toFixed(1)}min ago)`);
          return this.manifest;
        }
      }
    }

    // 远程加载
    const url = `${CONFIG.REMOTE_BASE}/manifest.json?t=${Date.now()}`;
    if (CONFIG.DEBUG) console.log(`[Loader] Fetching manifest...`);
    
    try {
      const res = await HTTP.get(url);
      if (res.status === 200 && res.body) {
        this.manifest = Utils.safeJsonParse(res.body);
        if (this.manifest) {
          Storage.write(cacheKey, res.body);
          Storage.write(cacheTimeKey, Date.now().toString());
          if (CONFIG.DEBUG) console.log(`[Loader] Manifest updated (${res.time}ms)`);
          return this.manifest;
        }
      }
      throw new Error(`HTTP ${res.status}`);
    } catch (e) {
      console.error(`[Loader] Manifest failed: ${e.message}`);
      // 使用过期缓存
      const expired = Storage.read(cacheKey);
      if (expired) {
        console.log('[Loader] Using expired cache');
        return Utils.safeJsonParse(expired);
      }
      throw e;
    }
  }

  async loadConfig(configId, force = false) {
    // 内存缓存
    if (!force && this.cache.has(configId)) {
      if (CONFIG.DEBUG) console.log(`[Loader] Memory cache: ${configId}`);
      return this.cache.get(configId);
    }

    const cacheKey = `vip_cfg_v20_${configId}`;
    const cacheTimeKey = `${cacheKey}_time`;
    
    // 本地缓存
    if (!force) {
      const cached = Storage.read(cacheKey);
      const cacheTime = parseInt(Storage.read(cacheTimeKey) || '0');
      const age = Date.now() - cacheTime;
      
      if (cached && age < CONFIG.CACHE_TTL) {
        try {
          const config = this.prepareConfig(Utils.safeJsonParse(cached));
          this.cache.set(configId, config);
          if (CONFIG.DEBUG) console.log(`[Loader] Disk cache: ${configId}`);
          return config;
        } catch (e) {
          console.warn(`[Loader] Cache parse error: ${e.message}`);
        }
      }
    }

    // 远程加载
    const url = `${CONFIG.REMOTE_BASE}/configs/${configId}.json?t=${Date.now()}`;
    if (CONFIG.DEBUG) console.log(`[Loader] Fetching: ${configId}`);
    
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
      console.error(`[Loader] Config failed: ${e.message}`);
      // 使用过期缓存
      const expired = Storage.read(cacheKey);
      if (expired) {
        console.log(`[Loader] Using expired: ${configId}`);
        return this.prepareConfig(Utils.safeJsonParse(expired));
      }
      throw e;
    }
  }

  prepareConfig(raw) {
    const config = { ...raw };
    
    // 编译正则
    if (raw.urlPattern) {
      try {
        config.urlPattern = new RegExp(raw.urlPattern);
      } catch (e) {
        console.error(`[Loader] Invalid regex for ${raw.id}: ${e.message}`);
        config.urlPattern = /.*/;
      }
    }
    
    // 编译处理器（JSON模式）
    if (raw.processor && raw.mode === 'json') {
      config.customProcessor = compileProcessor(raw.processor);
    }
    
    // 编译正则替换
    if (raw.regexReplacements) {
      config.regexReplacements = raw.regexReplacements.map(r => ({
        pattern: new RegExp(r.pattern, r.flags || 'g'),
        replacement: r.replacement
      }));
    }
    
    return Object.freeze(config);
  }

  findMatch(url) {
    if (!this.manifest || !this.manifest.configs) return null;
    
    for (const [id, info] of Object.entries(this.manifest.configs)) {
      try {
        const pattern = new RegExp(info.urlPattern);
        if (pattern.test(url)) return id;
      } catch (e) {}
    }
    return null;
  }

  getStats() {
    return {
      manifest: this.manifest ? Object.keys(this.manifest.configs).length : 0,
      cached: this.cache.size
    };
  }
}

// ==========================================
// 跨平台环境
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
    // QX 特殊处理
    if (this.isQX && typeof $request === 'string') {
      url = $request;
    }
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
    if (typeof $done === 'function') {
      $done(result);
    } else {
      console.log('[DONE]', result);
    }
  }
}

// ==========================================
// VIP 解锁引擎
// ==========================================

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
    if (!obj) {
      this.env.warn('JSON parse failed');
      return { body };
    }

    if (typeof config.customProcessor === 'function') {
      try {
        obj = config.customProcessor(obj, this.env);
      } catch (e) {
        this.env.error(`Processor error: ${e.message}`);
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
      } catch (e) {
        this.env.warn(`Regex error: ${e.message}`);
      }
    }
    
    if (count > 0) this.env.debug(`Regex: ${count} replacements`);
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
      } catch (e) {
        this.env.warn(`Game error: ${e.message}`);
      }
    }
    
    if (count > 0) this.env.debug(`Game: ${count} resources modified`);
    return { body: modified };
  }

  processHybrid(body, config) {
    // 先 JSON 处理
    let result = this.processJson(body, config);
    // 再 Regex 处理
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
      } catch (e) {
        this.env.warn(`HTML error: ${e.message}`);
      }
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
    env.info(`${META.name} v${META.version} [Runtime]`);
    
    // 获取 URL
    const url = env.getUrl();
    if (!url) {
      env.error('No URL detected');
      return env.done({});
    }
    env.debug(`URL: ${url.substring(0, 60)}...`);
    
    // 初始化加载器
    const loader = new RuntimeLoader();
    
    // 加载清单
    let manifest;
    try {
      manifest = await loader.loadManifest();
    } catch (e) {
      env.error(`Manifest failed: ${e.message}`);
      return env.done({ body: env.getBody() });
    }
    
    const stats = loader.getStats();
    env.debug(`Apps: ${stats.manifest}, Cached: ${stats.cached}`);
    
    // 查找匹配
    const configId = loader.findMatch(url);
    if (!configId) {
      env.warn('No matching config');
      return env.done({ body: env.getBody() });
    }
    env.info(`Match: ${configId}`);
    
    // 加载配置
    let config;
    try {
      config = await loader.loadConfig(configId);
    } catch (e) {
      env.error(`Config failed: ${e.message}`);
      return env.done({ body: env.getBody() });
    }
    
    env.debug(`Mode: ${config.mode}, Name: ${config.name}`);
    
    // 执行解锁
    const engine = new VipEngine(env);
    const result = engine.process(env.getBody(), config);
    
    env.info('Completed successfully');
    env.done(result);
    
  } catch (e) {
    env.error(`Fatal error: ${e.message}`);
    // 出错返回原始响应，避免破坏
    env.done({ body: env.getBody() });
  }
}

// 启动
main()
