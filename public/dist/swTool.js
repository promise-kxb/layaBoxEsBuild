(()=>{function e(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,o){if(e){if("string"==typeof e)return r(e,o);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,o):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,r){(null==r||r>e.length)&&(r=e.length);for(var o=0,t=new Array(r);o<r;o++)t[o]=e[o];return t}var o,t,n;"serviceWorker"in navigator&&(navigator.serviceWorker.register("/sw.js").then((function(r){var o;(o=console).log.apply(o,e(esbuildTool.consoleEx.textPack(esbuildTool.consoleEx.getStyle("#8785a2","#f4f6ff"),"ServiceWorker 注册成功: ".concat(r.scope))))}),(function(r){var o;(o=console).log.apply(o,e(esbuildTool.consoleEx.textPack(esbuildTool.consoleEx.getStyle("#8785a2","#f4f6ff"),"ServiceWorker 注册失败: ".concat(r))))})),"update",o={v:esbuildTool.version,webSocketUrl:esbuildTool.webSocketT.instance.url},null===(t=navigator.serviceWorker)||void 0===t||null===(n=t.controller)||void 0===n||n.postMessage(JSON.stringify({type:"update",mes:o})))})();