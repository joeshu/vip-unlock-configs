/**
 * Unified VIP Unlock Manager - Runtime Loader
 * 运行时动态加载版 - iOS 专用
 * @version 20.0.0
 */

'use strict';

// ==========================================
// 配置区域（修改这里）
// ==========================================

const CONFIG = {
  // 远程配置服务器地址
  REMOTE_BASE: 'https://your-github-username.github.io/vip-configs',
  
  // 缓存时间（毫秒）：默认24小时
  CACHE_TTL: 24 * 60 * 60 * 1000,
  
  // 调试模式
  DEBUG: true
};

// ==========================================
// 核心代码（无需修改）
// ==========================================

const META = { name: 'UnifiedVIP', version: '20.0.0' };

// 修复环境
(function fixEnv() {
  if (typeof console === 'undefined') globalThis.console = { log: () => {} };
  const _log = console.log.bind(console);
  ['error', 'warn', 'debug', 'info'].forEach(m => {
    if (typeof console[m] !== 'function') {
      console[m] = (...a) => _log(`[${m.toUpperCase()}]`, ...a);
    }
  });
})();

// HTTP 请求
const HTTP = {
  get: (url, timeout = 10) => new Promise((resolve, reject) => {
    const startTime = Date.now();
    
    const callback = (e, r, b) => {
      if (e) {
        reject(new Error(`HTTP Error: ${e}`));
      } else {
        resolve({
          body: b,
          status: typeof r === 'object' ? r.status : 200,
          time: Date.now() - startTime
        });
      }
    };

    if (typeof $task !== 'undefined') {
      $task.fetch({ url, method: 'GET', timeout }).then(
        res => callback(null, { status: res.statusCode }, res.body),
        err => callback(err, null, null)
      );
    } else if (typeof $httpClient !== 'undefined') {
      $httpClient.get({ url, timeout }, callback);
    } else if (typeof $http !== 'undefined') {
      $http.get(url, callback);
    } else {
      reject(new Error('No HTTP client available'));
    }
  })
};

// 存储
const Storage = {
  read: (k) => {
    if (typeof $prefs !== 'undefined') return $prefs.valueForKey(k);
    if (typeof $persistentStore !== 'undefined') return $persistentStore.read(k);
    return null;
  },
  write: (k, v) => {
    if (typeof $prefs !== 'undefined') return $prefs.setValueForKey(v, k);
    if (typeof $persistentStore !== 'undefined') return $persistentStore.write(v, k);
    return false;
  },
  remove: (k) => Storage.write(k, null)
};

// 工具
const Utils = {
  safeJsonParse: (s, d = null) => {
    try { return JSON.parse(s); } catch (e) { return d; }
  },
  safeJsonStringify: (o) => {
    try { return JSON.stringify(o); } catch (e) { return '{}'; }
  },
  getPath: (o, p) => p.split('.').reduce((a, k) => a?.[k], o),
  setPath: (o, p, v) => {
    const parts = p.split('.');
    let c = o;
    for (let i = 0; i < parts.length - 1; i++) {
      const k = parts[i];
      if (!(k in c)) c[k] = {};
      c = c[k];
    }
    c[parts[parts.length - 1]] = v;
    return o;
  }
};

// 处理器工厂（安全沙箱）
const ProcessorFactory = {
  setFields: (params) => (obj, env) => {
    let mod = 0;
    for (const [path, val] of Object.entries(params.fields || {})) {
      const actual = typeof val === 'string' && val.startsWith('$') 
        ? Utils.getPath({ CONSTANTS: window.CONSTANTS }, val.slice(1))
        : val;
      Utils.setPath(obj, path, actual);
      mod++;
    }
    if (mod) env?.debug(`SetFields: ${mod}`);
    return obj;
  },
  
  mapArray: (params) => (obj, env) => {
    const arr = Utils.getPath(obj, params.path);
    if (!Array.isArray(arr)) return obj;
    arr.forEach(item => {
      if (item) Object.assign(item, params.fields || {});
    });
    return obj;
  },
  
  filterArray: (params) => (obj, env) => {
    const arr = Utils.getPath(obj, params.path);
    if (!Array.isArray(arr)) return obj;
    const exclude = new Set(params.excludeKeys || []);
    const filtered = arr.filter(item => !exclude.has(item[params.keyField]));
    Utils.setPath(obj, params.path, filtered);
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
      let c = obj;
      for (let i = 0; i < parts.length - 1; i++) c = c?.[parts[i]];
      if (c) delete c[parts[parts.length - 1]];
    }
    return obj;
  },
  
  compose: (params, compile) => {
    const processors = (params.steps || []).map(step => compile(step));
    return (obj, env) => processors.reduce((o, p) => o ? p(o, env) : o, obj);
  },
  
  when: (params, compile) => {
    const thenProc = compile(params.then);
    const elseProc = params.else ? compile(params.else) : null;
    return (obj, env) => {
      try {
        if (params.condition(obj)) return thenProc(obj, env);
        if (elseProc) return elseProc(obj, env);
      } catch (e) {}
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
          if (scene.when(obj)) {
            env?.debug(`Scene: ${scene.name}`);
            return scene.then(obj, env);
          }
        } catch (e) {}
      }
      return obj;
    };
  }
};

// 编译配置
function compileConfig(raw) {
  const config = { ...raw };
  
  // 编译正则
  if (raw.urlPattern) {
    config.urlPattern = new RegExp(raw.urlPattern);
  }
  
  // 编译处理器
  if (raw.processor) {
    config.customProcessor = compileProcessor(raw.processor);
  }
  
  // 编译正则替换
  if (raw.regexReplacements) {
    config.regexReplacements = raw.regexReplacements.map(r => ({
      pattern: new RegExp(r.pattern, r.flags || 'g'),
      replacement: r.replacement
    }));
  }
  
  return config;
}

function compileProcessor(def) {
  if (!def || !def.processor) return null;
  
  const factory = ProcessorFactory[def.processor];
  if (!factory) {
    console.error(`Unknown processor: ${def.processor}`);
    return null;
  }
  
  // 传递 compile 函数用于嵌套
  return factory(def.params, compileProcessor);
}

// 加载器
class RuntimeLoader {
  constructor() {
    this.cache = new Map();
    this.manifest = null;
  }

  async loadManifest(force = false) {
    const cacheKey = 'vip_manifest_v2';
    const cacheTimeKey = `${cacheKey}_time`;
    
    // 检查缓存
    if (!force) {
      const cached = Storage.read(cacheKey);
      const cacheTime = parseInt(Storage.read(cacheTimeKey) || '0');
      if (cached && (Date.now() - cacheTime < CONFIG.CACHE_TTL)) {
        this.manifest = Utils.safeJsonParse(cached);
        if (this.manifest) {
          if (CONFIG.DEBUG) console.log('[Loader] Using cached manifest');
          return this.manifest;
        }
      }
    }

    // 远程加载
    const url = `${CONFIG.REMOTE_BASE}/manifest.json?t=${Date.now()}`;
    if (CONFIG.DEBUG) console.log(`[Loader] Fetching: ${url}`);
    
    try {
      const res = await HTTP.get(url, 15);
      if (res.status === 200) {
        this.manifest = Utils.safeJsonParse(res.body);
        if (this.manifest) {
          Storage.write(cacheKey, res.body);
          Storage.write(cacheTimeKey, Date.now().toString());
          if (CONFIG.DEBUG) console.log('[Loader] Manifest updated');
          return this.manifest;
        }
      }
    } catch (e) {
      console.error(`[Loader] Failed: ${e.message}`);
    }
    
    // 使用缓存（即使过期）
    const cached = Storage.read(cacheKey);
    if (cached) {
      console.log('[Loader] Using expired cache');
      return Utils.safeJsonParse(cached);
    }
    
    throw new Error('No manifest available');
  }

  async loadConfig(configId, force = false) {
    // 内存缓存
    if (!force && this.cache.has(configId)) {
      if (CONFIG.DEBUG) console.log(`[Loader] Memory cache: ${configId}`);
      return this.cache.get(configId);
    }

    const cacheKey = `vip_cfg_${configId}`;
    const cacheTimeKey = `${cacheKey}_time`;
    
    // 本地缓存
    if (!force) {
      const cached = Storage.read(cacheKey);
      const cacheTime = parseInt(Storage.read(cacheTimeKey) || '0');
      if (cached && (Date.now() - cacheTime < CONFIG.CACHE_TTL)) {
        const config = compileConfig(Utils.safeJsonParse(cached));
        this.cache.set(configId, config);
        if (CONFIG.DEBUG) console.log(`[Loader] Disk cache: ${configId}`);
        return config;
      }
    }

    // 远程加载
    const url = `${CONFIG.REMOTE_BASE}/configs/${configId}.json?t=${Date.now()}`;
    if (CONFIG.DEBUG) console.log(`[Loader] Fetching: ${configId}`);
    
    try {
      const res = await HTTP.get(url, 15);
      if (res.status === 200) {
        Storage.write(cacheKey, res.body);
        Storage.write(cacheTimeKey, Date.now().toString());
        
        const config = compileConfig(Utils.safeJsonParse(res.body));
        this.cache.set(configId, config);
        return config;
      }
    } catch (e) {
      console.error(`[Loader] Config failed: ${e.message}`);
    }
    
    // 使用过期缓存
    const cached = Storage.read(cacheKey);
    if (cached) {
      console.log(`[Loader] Using expired: ${configId}`);
      return compileConfig(Utils.safeJsonParse(cached));
    }
    
    throw new Error(`Cannot load: ${configId}`);
  }

  findMatch(url, manifest) {
    for (const [id, info] of Object.entries(manifest.configs || {})) {
      try {
        const pattern = new RegExp(info.urlPattern);
        if (pattern.test(url)) return id;
      } catch (e) {}
    }
    return null;
  }

  clearCache() {
    // 清除所有缓存
    const keys = ['vip_manifest_v2'];
    for (let i = 0; i < localStorage?.length || 0; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith('vip_cfg_')) keys.push(key);
    }
    keys.forEach(k => Storage.remove(k));
    this.cache.clear();
    console.log('[Loader] Cache cleared');
  }
}

// 引擎
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
      default:
        return { body };
    }
  }

  processJson(body, config) {
    let obj = Utils.safeJsonParse(body);
    if (!obj) return { body };

    if (typeof config.customProcessor === 'function') {
      obj = config.customProcessor(obj, this.env);
    }

    return { body: Utils.safeJsonStringify(obj) };
  }

  processRegex(body, config) {
    let modified = body;
    for (const rule of config.regexReplacements || []) {
      try {
        modified = modified.replace(rule.pattern, rule.replacement);
      } catch (e) {
        this.env?.warn(`Regex error: ${e.message}`);
      }
    }
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
}

// 环境
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
    return this.response?.url || this.request?.url || '';
  }

  getBody() {
    return this.response?.body || '';
  }

  log(level, msg) {
    const ts = new Date().toISOString();
    console.log(`[${this.name}][${level.toUpperCase()}][${ts}] ${msg}`);
  }

  debug(m) { if (CONFIG.DEBUG) this.log('debug', m); }
  info(m) { this.log('info', m); }
  warn(m) { this.log('warn', m); }
  error(m) { this.log('error', m); }

  done(result) {
    if (typeof $done === 'function') $done(result);
  }
}

// 主函数
async function main() {
  const env = new Environment(META.name);
  
  try {
    env.info(`${META.name} v${META.version} [Runtime]`);

    const url = env.getUrl();
    if (!url) {
      env.error('No URL');
      return env.done({});
    }
    env.debug(`URL: ${url.substring(0, 50)}...`);

    const loader = new RuntimeLoader();
    
    // 加载清单
    const manifest = await loader.loadManifest();
    env.debug(`Manifest: ${Object.keys(manifest.configs).length} apps`);

    // 查找匹配
    const configId = loader.findMatch(url, manifest);
    if (!configId) {
      env.warn('No match');
      return env.done({ body: env.getBody() });
    }
    env.info(`Match: ${configId}`);

    // 加载配置
    const config = await loader.loadConfig(configId);
    env.debug(`Loaded: ${config.name} [${config.mode}]`);

    // 执行
    const engine = new VipEngine(env);
    const result = engine.process(env.getBody(), config);

    env.info('Completed');
    env.done(result);

  } catch (e) {
    env.error(`Fatal: ${e.message}`);
    // 出错时返回原始响应
    env.done({ body: env.getBody() });
  }
}

// 启动
main();
