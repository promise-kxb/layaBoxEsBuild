(()=>{function e(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}window.addEventListener("load",(function(){var n,t,o,i,s=function(){var e=document.createElement("div");e.innerHTML='\n        <div class="confirmEx">\n            <div class="bg"></div>\n            <div class="content">\n                <div class="mes">消息</div>\n                <div class="but">\n                    <button class="yes">确认</button>\n                    <button class="no">取消</button>\n                </div>\n            </div>\n        </div>\n    ',e=document.body.appendChild(e.firstElementChild);var n,t=document.getElementsByClassName("confirmEx")[0],o=t.getElementsByClassName("bg")[0],i=t.getElementsByClassName("content")[0],s=t.getElementsByClassName("mes")[0],a=t.getElementsByClassName("yes")[0],d=t.getElementsByClassName("no")[0],r=!1;window.addEventListener("keydown",(function(e){r&&13==e.keyCode&&(n&&n(!0),c()),r&&27==e.keyCode&&(n&&n(!1),c())}));var c=function(){r=!1,t.classList.remove("show")};return o.onclick=function(){n&&n(!1),c()},i.onclick=function(e){n&&n(!0),c(),e.stopPropagation()},a.onclick=function(e){n&&n(!0),c(),e.stopPropagation()},d.onclick=function(e){n&&n(!1),c(),e.stopPropagation()},function(e,o){r=!0,t.classList.add("show"),n=o,s.innerHTML=e}}();o=0,i=!1,esbuildTool.webSocketT.instance.addEventListener("message",(function(n){var t,a,d=JSON.parse(n.data),r=d.mes;d.type==esbuildTool.webSocketT.mesType.contentUpdate&&(o++,(t=console).log.apply(t,function(n){if(Array.isArray(n))return e(n)}(a=esbuildTool.consoleEx.pack(esbuildTool.consoleEx.getStyle("#eeeeee","#08d9d6"),r))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(a)||function(n,t){if(n){if("string"==typeof n)return e(n,t);var o=Object.prototype.toString.call(n).slice(8,-1);return"Object"===o&&n.constructor&&(o=n.constructor.name),"Map"===o||"Set"===o?Array.from(n):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(n,t):void 0}}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),!i&&o>0&&(i=!0,s('\n                        <div class="title">项目内容有更新</div>\n                        <div class="content">点击消息框或点击确认按钮或按Enter键刷新页面，点击背景或取消按钮取消</div>\n                    ',(function(e){o=0,i=!1,e&&location.reload()}))))})),$ifUpdateNow&&(void 0!==document.hidden?(n="hidden",t="visibilitychange"):void 0!==document.msHidden?(n="msHidden",t="msvisibilitychange"):void 0!==document.webkitHidden&&(n="webkitHidden",t="webkitvisibilitychange"),void 0===document.addEventListener||void 0===document[n]?consol.warn("当前浏览器不能判断窗口是否获取或失去焦点"):document.addEventListener(t,(function(){document[n]||o>0&&location.reload()}),!1))}))})();