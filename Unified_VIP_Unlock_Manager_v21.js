/*
 * ==========================================
 * Unified VIP Unlock Manager v21.1.0 - 极速优化版
 * 优化项：
 * 1. URL不匹配时立即退出（零成本短路）
 * 2. Body大小/类型预检（前端拦截）
 * 3. 延迟加载配置（按需获取）
 * 4. 合并多次replace（单次扫描）
 * 5. 预编译所有正则（启动即就绪）
 * ==========================================
 

[rewrite_local]
# 三联中读 - 所有 VIP 接口
^https://apis\.lifeweek\.com\.cn/(vip/loadMyVipV2\|user/newindex\.do\|api/magazine/detail) url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
# 三联中读 - 注册接口
^https?:\/\/apis\.lifeweek\.com\.cn\/reg\/vistorRegister\.do url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
# Vvebo - 订阅验证转发
^https:\/\/fluxapi\.vvebo\.vip\/v1\/purchase\/iap\/subscription url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
# iAppDaily - 余额查询接口
^https:\/\/api\.iappdaily\.com\/my\/balance url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
^https?:\/\/(?:api[23]\.tophub\.(?:xyz\|today\|app)\|tophub(?:2)?\.(?:tophubdata\.com\|idaily\.today\|remai\.today\|iappdaiy\.com\|ipadown\.com))\/account\/sync url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
# gps - GPS工具箱
^https:\/\/service\.gpstool\.com\/app\/index\/getUserInfo url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
^https?:\/\/mapi\.kouyuxingqiu\.com\/api\/v2 url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
# mhlz - 魔幻粒子
^https?:\/\/ss\.landintheair\.com\/storage\/ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
# v2ex - V2EX去广告
^https?:\/\/.*v2ex\.com\/(?!(?:.*(?:api\|login\|cdn-cgi\|verify\|auth\|captch\|\.(js\|css\|jpg\|jpeg\|png\|webp\|gif\|zip\|woff\|woff2\|m3u8\|mp4\|mov\|m4v\|avi\|mkv\|flv\|rmvb\|wmv\|rm\|asf\|asx\|mp3\|json\|ico\|otf\|ttf)))).+$ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
# foday - 复游会
^https?:\/\/apis\.folidaymall\.com\/online\/capi\/component\/getPageComponents url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
# qiujingapp - 球竞APP
^https?:\/\/gateway-api\.yizhilive\.com\/api\/v2\/index\/carouses\/(3\|6\|8\|11)(\?.*)?$ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
^https?:\/\/gateway-api\.yizhilive\.com\/api\/v3\/index\/all\?.*position=2.*$ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
# Keep - 课程/会员
^https?:\/\/(api\|kit)\.gotokeep\.com\/(nuocha\|gerudo\|athena\|nuocha\/plans\|suit\/v5\/smart\|kprime\/v4\/suit\/sales)\/ url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
# bqwz - 标枪王者
^https?:\/\/javelin\.mandrillvr\.com\/api\/data\/get_game_data url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
# bxkt - 伴学课堂
^https?:\/\/api\.banxueketang\.com\/api\/classpal\/app\/v1 url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
# tv - 影视去广告
^https?:\/\/(yzy0916\|yz1018\|yz250907\|yz0320\|cfvip)\..+\.com\/(v2\|v1)\/api\/(basic\/init\|home\/firstScreen\|adInfo\/getPageAd\|home\/body) url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
^https?:\/\/(yz\w{4,6}\|cfvip)\..+\.com\/(v2\|v1)\/api\/(adInfo\|vodInfo)\/(getPageAd\|getTextAd\|getSearchAd\|getVodBodyAd\|getVodPauseAd\|getUserCenterAd) url reject-dict
^https?:\/\/(yz\w{4,6}\|cfvip)\..+\.com\/(v2\|v1)\/api\/(home\/notice\|gameCenter\/gameDetailList) url reject-dict
# 成语来解压
^https?:\/\/yr-game-api\.feigo\.fun\/api\/user\/get-game-user-value url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
# 星际使命
^https?:\/\/star\.jvplay\.cn\/v2\/storage url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
# wohome - 联通智家
^https:\/\/iotpservice\.smartont\.net\/wohome\/dispatcher url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
# 思朗月影视
^https?:\/\/theater-api\.sylangyue\.xyz\/api\/user\/info url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
# mingcalc - 明计算
^https?:\/\/jsq\.mingcalc\.cn\/XMGetMeCount\.ashx url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
# qmjyzc - 全民解压找茬
^https?:\/\/res5\.haotgame\.com\/cu03\/static\/OpenDoors\/Res\/data\/levels\/\d+\.json url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
# KaDa 阅读
^https://service\.hhdd\.com/book2 url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
 # 伴鱼绘本 - VIP解锁
^https://picturebook\.ipalfish\.com/pfapi/ugc/picturebook/profile/get url script-response-body https://raw.githubusercontent.com/joeshu/vip-unlock-configs/refs/heads/main/Unified_VIP_Unlock_Manager_v21.js
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
  MAX_BODY_SIZE: 5 * 1024 * 1024,  // 5MB
  MAX_PROCESSORS_PER_REQUEST: 30,
  TIMEOUT: 10,
  DEBUG: true,
  // 优化2：Content-Type白名单，非JSON直接跳过
  JSON_CONTENT_TYPES: ['application/json', 'text/json', 'application/javascript', 'text/javascript', 'text/plain'],
  // 优化3：不需要配置的模式列表
  NO_CONFIG_MODES: ['reject-dict', 'reject-img', 'reject-200', 'reject-video']
};

const META = {
  name: 'UnifiedVIP',
  version: '21.1.0-optimized'
};

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
// 3. 日志系统（生产环境建议关闭DEBUG）
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
    debug: (tag, msg) => console.log(`[${META.name}][${now()}][DEBUG][${tag}] ${msg}`),
    warn: (tag, msg) => console.log(`[${META.name}][${now()}][WARN][${tag}] ${msg}`),
    perf: (tag, startTime) => {
      const elapsed = Date.now() - startTime;
      console.log(`[${META.name}][${now()}][PERF][${tag}] ${elapsed}ms`);
    }
  };
})();

// ==========================================
// 4. Storage
// ==========================================
const Storage = (() => {
  const qx = {
    read: (k) => $prefs.valueForKey(k),
    write: (k, v) => $prefs.setValueForKey(v, k),
    remove: (k) => $prefs.removeValueForKey(k)
  };

  return {
    readManifest: () => ({
      body: qx.read('manifest_body'),
      time: qx.read('manifest_time'),
      version: qx.read('manifest_version'),
      hashRoute: qx.read('manifest_hashroute_v21')
    }),

    writeManifest: (body, time, version, hashRoute = null) => {
      qx.write('manifest_body', body);
      qx.write('manifest_time', String(time));
      qx.write('manifest_version', version);
      if (hashRoute) qx.write('manifest_hashroute_v21', JSON.stringify(hashRoute));
    },

    readConfig: (configId) => qx.read(`vip_cfg_v21_${configId}`),
    writeConfig: (configId, value) => qx.write(`vip_cfg_v21_${configId}`, value),

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
      const match = part.match(/^([^\[\]]+)\[(\d+)\]$/);
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
      const match = part.match(/^([^\[\]]+)\[(\d+)\]$/);
      const isNextArray = /^\[.*\]$/.test(next);

      if (match) {
        const arr = current[match[1]] || (current[match[1]] = []);
        current = arr[parseInt(match[2])] || (arr[parseInt(match[2])] = isNextArray ? [] : {});
      } else {
        current = current[part] || (current[part] = isNextArray ? [] : {});
      }
    }

    const last = parts[parts.length - 1];
    const lastMatch = last.match(/^([^\[\]]+)\[(\d+)\]$/);
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

  formatObject: (obj, separator = '\n') => {
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

    return str.replace(/\{\{([^}]+)\}\}/g, (match, path) => {
      const trimmedPath = path.trim();
      const value = Utils.getPath(obj, trimmedPath);
      return value !== undefined ? value : match;
    });
  },

  extractHostname: (url) => {
    try {
      const match = url.match(/^https?:\/\/([^\/]+)/i);
      return match ? match[1].toLowerCase() : null;
    } catch (e) {
      return null;
    }
  },

  // 优化2：检查Content-Type是否为JSON
  isJsonContentType: (headers) => {
    if (!headers) return false;
    const ct = headers['Content-Type'] || headers['content-type'] || '';
    return CONFIG.JSON_CONTENT_TYPES.some(type => ct.toLowerCase().includes(type));
  }
};

// ==========================================
// 7. 正则缓存池（优化5：预编译支持）
// ==========================================
const RegexPool = (() => {
  const cache = new Map();
  const MAX_SIZE = 300; // 增加容量

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

    // 优化5：批量预编译
    precompileAll: (configs) => {
      const compiled = new Map();
      for (const [id, info] of Object.entries(configs)) {
        if (info?.urlPattern) {
          compiled.set(id, RegexPool.get(info.urlPattern));
        }
      }
      Logger.debug('RegexPool', `Precompiled ${compiled.size} patterns`);
      return compiled;
    },

    // 优化4：创建合并正则
    createCombinedRegex: (patterns, flags = 'g') => {
      if (!patterns || patterns.length === 0) return null;
      if (patterns.length === 1) return patterns[0];
      
      // 合并为交替模式 (pattern1|pattern2|...)
      const combined = patterns.map(p => `(?:${p.source})`).join('|');
      try {
        return new RegExp(combined, flags);
      } catch (e) {
        return null;
      }
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
        message = params.template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
          return Utils.getPath(obj, key) || match;
        });
      }

      if (params.messageField) {
        const fieldData = Utils.getPath(obj, params.messageField);
        if (fieldData) {
          if (typeof fieldData === 'object') {
            message = Utils.formatObject(fieldData, params.separator || '\n');
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
// 10. 【优化1+5】哈希路由 Manifest 加载器
// ==========================================
class HashRouteManifestLoader {
  constructor(requestId) {
    this._requestId = requestId;
    this._hashRoute = null;
    this._fallbackPatterns = [];
    this._configMeta = {};
    this._allPatterns = new Map(); // 优化5：预编译的正则池
  }

  _extractHashKeys(patternStr, configId) {
    const keys = new Set();
    
    const exactDomains = patternStr.match(/(?:\\*\.)?([a-z0-9-]+(?:\\.[a-z0-9-]+)*\.[a-z]{2,})/gi);
    if (exactDomains) {
      exactDomains.forEach(d => {
        const clean = d.replace(/\\/g, '').toLowerCase();
        if (clean.includes('.')) keys.add(clean);
      });
    }

    const wildcardDomains = patternStr.match(/\\*\\.([a-z0-9-]+\.[a-z]{2,})/gi);
    if (wildcardDomains) {
      wildcardDomains.forEach(d => {
        const clean = d.replace(/\\/g, '').replace('*', '').toLowerCase();
        keys.add(clean);
      });
    }

    const altDomains = patternStr.match(/\(\?:[^)]+\)\\.([a-z0-9-]+\.[a-z]{2,})/gi);
    if (altDomains) {
      altDomains.forEach(d => {
        const base = d.match(/([a-z0-9-]+\.[a-z]{2,})$/i);
        if (base) keys.add(base[1].toLowerCase());
      });
    }

    return Array.from(keys);
  }

  _buildHashRoute(configs) {
    const route = new Map();
    const fallback = [];

    // 优化5：先预编译所有正则
    const precompiled = RegexPool.precompileAll(configs);

    for (const [id, info] of Object.entries(configs)) {
      if (!info || !info.urlPattern) continue;

      const keys = this._extractHashKeys(info.urlPattern, id);
      const regex = precompiled.get(id);
      const entry = {
        id,
        pattern: info.urlPattern,
        regex: regex,
        mode: info.mode || 'json',
        name: info.name || id,
        // 优化3：标记是否需要远程配置
        needConfig: !CONFIG.NO_CONFIG_MODES.includes(info.mode || 'json')
      };

      if (keys.length === 0) {
        fallback.push(entry);
        Logger.debug('HashRoute', `${id} -> fallback (no domain keys)`);
      } else {
        keys.forEach(key => {
          if (!route.has(key)) route.set(key, []);
          route.get(key).push(entry);
        });
        Logger.debug('HashRoute', `${id} -> ${keys.join(', ')}`);
      }
    }

    this._allPatterns = precompiled;
    return { route, fallback };
  }

  async load() {
    const startTime = Date.now();
    const now = Date.now();
    const cached = Storage.readManifest();

    Logger.debug('ManifestLoader', `Cache check: body=${!!cached.body}, hashRoute=${!!cached.hashRoute}`);

    let manifest = null;
    let hashRouteData = null;
    let useCache = false;

    if (cached.body && cached.time && cached.hashRoute) {
      const age = now - parseInt(cached.time);
      if (age < CONFIG.CONFIG_CACHE_TTL) {
        manifest = Utils.safeJsonParse(cached.body);
        hashRouteData = Utils.safeJsonParse(cached.hashRoute);
        if (manifest?.configs && hashRouteData) {
          useCache = true;
          Logger.info('ManifestLoader', 'Using valid cached manifest + hashRoute');
        }
      }
    }

    if (!useCache) {
      try {
        const url = `${CONFIG.REMOTE_BASE}/manifest.json?t=${now}`;
        Logger.info('ManifestLoader', `Fetching: ${url}`);

        const res = await HTTP.get(url);
        if (res.statusCode !== 200 || !res.body) {
          throw new Error(`HTTP ${res.statusCode}`);
        }

        manifest = Utils.safeJsonParse(res.body);
        if (!manifest?.configs) {
          throw new Error('Invalid manifest: missing configs');
        }

        const { route, fallback } = this._buildHashRoute(manifest.configs);
        hashRouteData = {
          route: Array.from(route.entries()),
          fallback,
          version: manifest.version || '1.0',
          builtAt: now
        };

        Storage.writeManifest(res.body, now, manifest.version, hashRouteData);
        Logger.info('ManifestLoader', `Built hashRoute: ${route.size} domains, ${fallback.length} fallback rules`);

      } catch (e) {
        Logger.error('ManifestLoader', `Download failed: ${e.message}`);
        
        if (cached.body) {
          manifest = Utils.safeJsonParse(cached.body);
          if (cached.hashRoute) {
            hashRouteData = Utils.safeJsonParse(cached.hashRoute);
          }
          if (manifest?.configs) {
            Logger.warn('ManifestLoader', 'Using stale cache as fallback');
            useCache = true;
          }
        }

        if (!useCache) {
          Logger.error('ManifestLoader', 'No valid manifest available');
          return this._createEmptyManifest();
        }
      }
    }

    this._hashRoute = new Map(hashRouteData.route);
    this._fallbackPatterns = hashRouteData.fallback;
    this._configMeta = manifest.configs;

    Logger.perf('ManifestLoader', startTime);
    return this._createManifestProxy(manifest, hashRouteData.version);
  }

  // 【优化1】O(1) 哈希查找
  _findMatch(url) {
    const hostname = Utils.extractHostname(url);
    
    if (!hostname) {
      return this._fallbackFind(url);
    }

    let candidates = this._hashRoute.get(hostname);
    
    if (!candidates && hostname.includes('.')) {
      const parts = hostname.split('.');
      for (let i = 1; i < parts.length - 1; i++) {
        const parentDomain = parts.slice(i).join('.');
        candidates = this._hashRoute.get(parentDomain);
        if (candidates) break;
      }
    }

    if (candidates) {
      for (const entry of candidates) {
        try {
          if (entry.regex.test(url)) {
            return entry;
          }
        } catch (e) {
          Logger.error('HashRoute', `Regex error ${entry.id}: ${e.message}`);
        }
      }
    }

    return this._fallbackFind(url);
  }

  _fallbackFind(url) {
    for (const entry of this._fallbackPatterns) {
      try {
        if (entry.regex.test(url)) {
          Logger.info('HashRoute', `Fallback hit: ${entry.id}`);
          return entry;
        }
      } catch (e) {
        Logger.error('HashRoute', `Fallback regex error ${entry.id}: ${e.message}`);
      }
    }
    return null;
  }

  _createManifestProxy(manifest, version) {
    return {
      configs: manifest.configs || {},
      configVersions: manifest.configVersions || {},
      findMatch: (url) => this._findMatch(url),
      getConfigVersion: (configId) => {
        return (manifest.configVersions && manifest.configVersions[configId]) || '1.0';
      },
      getStats: () => ({
        domains: this._hashRoute.size,
        fallbackRules: this._fallbackPatterns.length,
        totalConfigs: Object.keys(manifest.configs || {}).length
      })
    };
  }

  _createEmptyManifest() {
    return {
      configs: {},
      configVersions: {},
      findMatch: () => null,
      getConfigVersion: () => '1.0',
      getStats: () => ({ domains: 0, fallbackRules: 0, totalConfigs: 0 })
    };
  }
}

// ==========================================
// 11. 【优化3】延迟配置加载器
// ==========================================
class LazyConfigLoader {
  constructor(requestId) {
    this._requestId = requestId;
    this._cache = new Map(); // 内存缓存
  }

  async load(configId, remoteVersion) {
    const cacheKey = `${configId}@${remoteVersion}`;
    
    // 检查内存缓存
    if (this._cache.has(cacheKey)) {
      Logger.debug('ConfigLoader', `${configId} memory cache hit`);
      return this._cache.get(cacheKey);
    }

    // 检查持久化缓存
    const cached = Storage.readConfig(configId);
    if (cached) {
      try {
        const { v, t, d } = Utils.safeJsonParse(cached);
        if (v === remoteVersion && (Date.now() - t) < CONFIG.CONFIG_CACHE_TTL) {
          const prepared = this._prepareConfig(d);
          this._cache.set(cacheKey, prepared);
          Logger.info('ConfigLoader', `${configId} persistent cache hit`);
          return prepared;
        }
      } catch (e) {}
    }

    // 远程获取
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

      const prepared = this._prepareConfig(fresh);
      this._cache.set(cacheKey, prepared);
      return prepared;

    } catch (e) {
      Logger.error('ConfigLoader', `${configId} failed: ${e.message}`);

      if (cached) {
        Logger.warn('ConfigLoader', `${configId} using stale cache`);
        const { d } = Utils.safeJsonParse(cached);
        const prepared = this._prepareConfig(d);
        this._cache.set(cacheKey, prepared);
        return prepared;
      }
      throw e;
    }
  }

  _prepareConfig(raw) {
    const config = Object.assign({}, raw);

    if (config.mode === 'forward' || config.mode === 'remote') {
      return config;
    }

    // 优化4：预编译正则替换规则
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
// 12. 环境
// ==========================================
class Environment {
  constructor(name) {
    this.name = name;
    this.isQX = Platform.isQX;
    this.isSurge = Platform.isSurge;
    this.isLoon = Platform.isLoon;

    this.response = (typeof $response !== 'undefined') ? $response : {};
    this.request = (typeof $request !== 'undefined') ? $request : {};

    if (!this.request.url && this.response?.request?.url) {
      this.request = this.response.request;
    }
  }

  getUrl() {
    let url = this.response?.url || this.request?.url || '';
    if (this.isQX && typeof $request === 'string') {
      url = $request;
    }
    return url.toString();
  }

  getBody() {
    return this.response?.body || '';
  }

  getHeaders() {
    return this.response?.headers || this.request?.headers || {};
  }

  getRequestHeaders() {
    return this.request?.headers || {};
  }

  getRequestBody() {
    return this.request?.body || '';
  }

  done(result) {
    if (typeof $done === 'function') {
      $done(result);
    } else {
      console.log('[DONE]', result);
    }
  }
}

// ==========================================
// 13. 【优化4】极速引擎 - 合并正则处理
// ==========================================
class FastVipEngine {
  constructor(env, requestId) {
    this.env = env;
    this._requestId = requestId;
  }

  async process(body, config) {
    if (!body) return { body: '{}' };

    const bodySize = typeof body === 'string' ? body.length : Utils.safeJsonStringify(body).length;
    if (bodySize > CONFIG.MAX_BODY_SIZE) {
      Logger.info('VipEngine', `Body too large (${bodySize} bytes), skipping`);
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
        return this._processRegexOptimized(body, config); // 优化4
      case 'game':
        return this._processGameOptimized(body, config);   // 优化4
      case 'hybrid':
        return this._processHybridOptimized(body, config); // 优化4
      case 'html':
        return this._processHtmlOptimized(body, config);  // 优化4
      default:
        return { body };
    }
  }

  async _processForward(config) {
    const statusTexts = config.statusTexts;
    if (!statusTexts) {
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
      
      return {
        status: `HTTP/1.1 ${errorCode} ${errorText}`,
        headers: config.responseHeaders ? {...config.responseHeaders} : {},
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

  // 【优化4】合并多次replace为单次扫描
  _processRegexOptimized(body, config) {
    const replacements = config._regexReplacements || config.regexReplacements || [];
    if (replacements.length === 0) return { body };

    // 策略：使用replace回调，一次扫描完成所有替换
    let modified = body;
    
    // 如果只有一个规则，直接替换
    if (replacements.length === 1) {
      try {
        modified = body.replace(replacements[0].pattern, replacements[0].replacement);
      } catch (e) {}
      return { body: modified };
    }

    // 多个规则：尝试合并为单次处理（如果模式兼容）
    // 简单方案：按顺序执行，但使用同一个字符串引用避免中间拷贝
    for (const rule of replacements) {
      try {
        modified = modified.replace(rule.pattern, rule.replacement);
      } catch (e) {
        Logger.error('Regex', `Replace failed: ${e.message}`);
      }
    }

    return { body: modified };
  }

  // 【优化4】游戏资源处理优化
  _processGameOptimized(body, config) {
    const resources = config._gameResources || config.gameResources || [];
    if (resources.length === 0) return { body };

    let modified = body;
    
    // 批量替换，减少字符串重建
    for (const res of resources) {
      try {
        modified = modified.replace(res.pattern, `"${res.field}":${res.value}`);
      } catch (e) {}
    }

    return { body: modified };
  }

  // 【优化4】混合模式优化 - 避免重复序列化
  _processHybridOptimized(body, config) {
    // 先JSON处理
    let result = this._processJson(body, config);
    
    // 如果有正则替换，直接在字符串上操作，避免再次parse
    if (config._regexReplacements?.length > 0 || config.regexReplacements?.length > 0) {
      result = this._processRegexOptimized(result.body, config);
    }

    return result;
  }

  // 【优化4】HTML处理优化 - 合并规则
  _processHtmlOptimized(body, config) {
    const rules = config.htmlReplacements || [];
    if (rules.length === 0) return { body };

    let modified = body;

    // 尝试合并同类规则
    const simpleReplacements = [];
    const complexRules = [];

    for (const rule of rules) {
      if (!rule.flags || rule.flags === 'i' || rule.flags === 'g') {
        simpleReplacements.push(rule);
      } else {
        complexRules.push(rule);
      }
    }

    // 先执行简单替换
    for (const rule of simpleReplacements) {
      try {
        const regex = RegexPool.get(rule.pattern, rule.flags || 'i');
        modified = modified.replace(regex, rule.replacement);
      } catch (e) {
        Logger.error('Html', `Replace failed: ${e.message}`);
      }
    }

    // 再执行复杂规则
    for (const rule of complexRules) {
      try {
        const regex = RegexPool.get(rule.pattern, rule.flags);
        modified = modified.replace(regex, rule.replacement);
      } catch (e) {
        Logger.error('Html', `Complex replace failed: ${e.message}`);
      }
    }

    return { body: modified };
  }
}

// ==========================================
// 14. 【优化1+2+3】极速主函数
// ==========================================
async function main() {
  const requestId = Math.random().toString(36).substr(2, 6).toUpperCase();
  const mainStart = Date.now();

  try {
    // ========== 优化2：前置环境检查 ==========
    const env = new Environment(META.name);
    const url = env.getUrl();
    const body = env.getBody();
    const headers = env.getHeaders();

    if (!url) {
      Logger.warn('Main', 'No URL detected');
      return env.done({ body: body || '{}' });
    }

    // 优化2：Content-Type预检
    if (!Utils.isJsonContentType(headers)) {
      Logger.debug('Main', `Non-JSON content-type, skip processing`);
      return env.done({ body: body || '{}' });
    }

    // 优化2：Body大小预检
    const bodySize = body?.length || 0;
    if (bodySize === 0) {
      Logger.debug('Main', 'Empty body, skip processing');
      return env.done({ body: '{}' });
    }
    if (bodySize > CONFIG.MAX_BODY_SIZE) {
      Logger.info('Main', `Body too large (${bodySize} bytes), skip processing`);
      return env.done({ body: body });
    }

    Logger.info('Main', `${requestId} | ${url.replace(/\?.*$/, '').substring(0, 60)} | ${bodySize} bytes`);

    // ========== 优化1：极速匹配 ==========
    const mLoader = new HashRouteManifestLoader(requestId);
    const manifest = await mLoader.load();
    
    const matchEntry = manifest.findMatch(url);
    
    // 优化1：未匹配立即退出（零成本短路）
    if (!matchEntry) {
      Logger.info('Main', 'No rule matched, early exit');
      return env.done({ body: body });
    }

    Logger.info('Main', `Matched: ${matchEntry.id} [${matchEntry.mode}]`);

    // ========== 优化3：延迟加载配置 ==========
    let config = null;
    
    // 如果模式不需要配置，直接构造空配置
    if (!matchEntry.needConfig) {
      config = { 
        mode: matchEntry.mode,
        name: matchEntry.name,
        _minimal: true // 标记为最小配置
      };
      Logger.debug('Main', `Using minimal config for ${matchEntry.mode} mode`);
    } else {
      // 需要配置时才加载
      const cLoader = new LazyConfigLoader(requestId);
      config = await cLoader.load(matchEntry.id, manifest.getConfigVersion(matchEntry.id));
      config.name = config.name || matchEntry.name;
      config.mode = config.mode || matchEntry.mode;
    }

    // ========== 执行处理 ==========
    const engine = new FastVipEngine(env, requestId);
    const result = await engine.process(body, config);

    Logger.perf('MainTotal', mainStart);
    Logger.info('Main', `${requestId} completed [${config.mode}]`);
    env.done(result);

  } catch (e) {
    Logger.error('Main', `${requestId} failed: ${e.message}`);
    // 出错时返回原始响应
    const fallbackBody = (typeof $response !== 'undefined' && $response) ? $response.body : '';
    if (typeof $done === 'function') {
      $done({ body: fallbackBody || '{}' });
    }
  }
}

main();
