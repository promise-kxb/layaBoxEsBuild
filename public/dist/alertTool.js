(()=>{function n(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=n[t];return o}window.addEventListener("load",(function(){var e,t,o,i,s=function(){var n=document.createElement("div");n.innerHTML='\n        <div class="confirmEx">\n            <div class="bg"></div>\n            <div class="content">\n                <div class="mes">消息</div>\n                <div class="but">\n                    <button class="yes">确认✔️</button>\n                    <button class="no">取消❌</button>\n                </div>\n            </div>\n        </div>\n    ',n=document.body.appendChild(n.firstElementChild);var e,t=document.getElementsByClassName("confirmEx")[0],o=t.getElementsByClassName("bg")[0],i=t.getElementsByClassName("content")[0],s=t.getElementsByClassName("mes")[0],a=t.getElementsByClassName("yes")[0],d=t.getElementsByClassName("no")[0],r=!1;window.addEventListener("resize",(function(n){i.style.transform="scale(".concat(window.innerWidth/500,")")})),i.style.transform="scale(".concat(window.innerWidth/500,")"),window.addEventListener("keydown",(function(n){r&&"Enter"==n.key&&(e&&e(!0),c()),r&&"Escape"==n.key&&(e&&e(!1),c())}));var c=function(){r=!1,t.classList.remove("show")};return o.onclick=function(){e&&e(!1),c()},i.onclick=function(n){e&&e(!0),c(),n.stopPropagation()},a.onclick=function(n){e&&e(!0),c(),n.stopPropagation()},d.onclick=function(n){e&&e(!1),c(),n.stopPropagation()},function(n,o){r=!0,t.classList.add("show"),e=o,s.innerHTML=n}}();o=0,i=!1,esbuildTool.webSocketT.instance.addEventListener("message",(function(e){var t,a,d=JSON.parse(e.data),r=d.mes;d.type==esbuildTool.webSocketT.mesType.contentUpdate&&(o++,(t=console).log.apply(t,function(e){if(Array.isArray(e))return n(e)}(a=esbuildTool.consoleEx.pack(esbuildTool.consoleEx.getStyle("#eeeeee","#08d9d6"),r))||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(a)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,t):void 0}}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),!i&&o>0&&(i=!0,s('\n                        <div class="title">项目内容有更新 🔔</div>\n                        <div class="content">点击消息框或点击确认按钮或按Enter键刷新页面，点击背景或取消按钮取消</div>\n                    ',(function(n){o=0,i=!1,n&&location.reload()}))))})),esbuildTool.config.ifUpdateNow&&(void 0!==document.hidden?(e="hidden",t="visibilitychange"):void 0!==document.msHidden?(e="msHidden",t="msvisibilitychange"):void 0!==document.webkitHidden&&(e="webkitHidden",t="webkitvisibilitychange"),void 0===document.addEventListener||void 0===document[e]?consol.warn("当前浏览器不能判断窗口是否获取或失去焦点😰"):document.addEventListener(t,(function(){document[e]||o>0&&location.reload()}),!1))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly/impnvuI9sZWLinZUvLi9zcmMvYWxlcnRUb29sLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoaWRkZW4iLCJ2aXNpYmlsaXR5Q2hhbmdlIiwiX3VwZGF0ZU51bWJlciIsIl9pZkNvbmZpcm0iLCJjb25maXJtRXgiLCJfZGl2RG9tIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJfYmFja0YiLCJfY29uZmlybUV4RG9tIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIl9iZ0RvbSIsIl9jb250ZW50RG9tIiwiX21lc0RvbSIsIl95ZXNCdXREb20iLCJfbm9CdXREb20iLCJfaWZTaG93IiwiZSIsInN0eWxlIiwidHJhbnNmb3JtIiwiaW5uZXJXaWR0aCIsImV2ZW50Iiwia2V5IiwiX2hpZGUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJvbmNsaWNrIiwic3RvcFByb3BhZ2F0aW9uIiwibWVzIiwiX2YiLCJhZGQiLCJlc2J1aWxkVG9vbCIsIndlYlNvY2tldFQiLCJpbnN0YW5jZSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJfbWVzIiwidHlwZSIsIm1lc1R5cGUiLCJjb250ZW50VXBkYXRlIiwiY29uc29sZSIsImxvZyIsImNvbnNvbGVFeCIsInBhY2siLCJnZXRTdHlsZSIsImZsYWciLCJsb2NhdGlvbiIsInJlbG9hZCIsImNvbmZpZyIsImlmVXBkYXRlTm93IiwibXNIaWRkZW4iLCJ3ZWJraXRIaWRkZW4iLCJjb25zb2wiLCJ3YXJuIl0sIm1hcHBpbmdzIjoiZ0hBQ0FBLE9BQU9DLGlCQUFpQixRQUFRLFdBRTVCLElBa0lZQyxFQUFRQyxFQXhDWkMsRUFFQUMsRUE1RkZDLEVBQWEsV0FDZixJQWFJQyxFQUFVQyxTQUFTQyxjQUFjLE9BQ3JDRixFQUFRRyxVQWRHLHVXQWdCWEgsRUFBVUMsU0FBU0csS0FBS0MsWUFBWUwsRUFBUU0sbUJBRTVDLElBU0lDLEVBVEFDLEVBQWdCUCxTQUFTUSx1QkFBdUIsYUFBYSxHQUM3REMsRUFBU0YsRUFBY0MsdUJBQXVCLE1BQU0sR0FDcERFLEVBQWNILEVBQWNDLHVCQUF1QixXQUFXLEdBQzlERyxFQUFVSixFQUFjQyx1QkFBdUIsT0FBTyxHQUN0REksRUFBYUwsRUFBY0MsdUJBQXVCLE9BQU8sR0FDekRLLEVBQVlOLEVBQWNDLHVCQUF1QixNQUFNLEdBRXZETSxHQUFVLEVBSWR0QixPQUFPQyxpQkFBaUIsVUFBVSxTQUFDc0IsR0FDL0JMLEVBQVlNLE1BQU1DLFVBQWxCLGdCQUF1Q3pCLE9BQU8wQixXQUFhLElBQTNELFFBR0pSLEVBQVlNLE1BQU1DLFVBQWxCLGdCQUF1Q3pCLE9BQU8wQixXQUFhLElBQTNELEtBRUExQixPQUFPQyxpQkFBaUIsV0FBVyxTQUFDMEIsR0FDNUJMLEdBQXdCLFNBQWJLLEVBQU1DLE1BQ2pCZCxHQUFVQSxHQUFPLEdBQ2pCZSxLQUVBUCxHQUF3QixVQUFiSyxFQUFNQyxNQUNqQmQsR0FBVUEsR0FBTyxHQUNqQmUsUUFJUixJQVFJQSxFQUFRLFdBQ1JQLEdBQVUsRUFDVlAsRUFBY2UsVUFBVUMsT0FBTyxTQTBCbkMsT0F2QkFkLEVBQU9lLFFBQVUsV0FDYmxCLEdBQVVBLEdBQU8sR0FDakJlLEtBR0pYLEVBQVljLFFBQVUsU0FBQ1QsR0FDbkJULEdBQVVBLEdBQU8sR0FDakJlLElBQ0FOLEVBQUVVLG1CQUdOYixFQUFXWSxRQUFVLFNBQUNULEdBQ2xCVCxHQUFVQSxHQUFPLEdBQ2pCZSxJQUNBTixFQUFFVSxtQkFHTlosRUFBVVcsUUFBVSxTQUFDVCxHQUNqQlQsR0FBVUEsR0FBTyxHQUNqQmUsSUFDQU4sRUFBRVUsbUJBakNNLFNBQUNDLEVBQUtDLEdBQ2RiLEdBQVUsRUFDVlAsRUFBY2UsVUFBVU0sSUFBSSxRQUU1QnRCLEVBQVNxQixFQUNUaEIsRUFBUVQsVUFBWXdCLEdBcERULEdBMEZYOUIsRUFBZ0IsRUFFaEJDLEdBQWEsRUFHakJnQyxZQUFZQyxXQUFXQyxTQUFTdEMsaUJBQWlCLFdBQVcsU0FBVTBCLEdBQ2xFLElBSTJELEUsRUFKdkRhLEVBQU9DLEtBQUtDLE1BQU1mLEVBQU1hLE1BQ3hCRyxFQUFPSCxFQUFLTixJQUNKTSxFQUFLSSxNQUVKUCxZQUFZQyxXQUFXTyxRQUFRQyxnQkFDeEMxQyxLQUVBLEVBQUEyQyxTQUFRQyxJQUFSLFEsK0NBQWVYLFlBQVlZLFVBQVVDLEtBQUtiLFlBQVlZLFVBQVVFLFNBQVMsVUFBVyxXQUFZUixLLGtrQkFFM0Z0QyxHQUFjRCxFQUFnQixJQUMvQkMsR0FBYSxFQUViQyxFQUFVLGdMQUdQLFNBQUM4QyxHQUNBaEQsRUFBZ0IsRUFDaEJDLEdBQWEsRUFFVCtDLEdBRUFDLFNBQVNDLGlCQVd6QmpCLFlBQVlrQixPQUFPQyxtQkFHWSxJQUFwQmhELFNBQVNOLFFBQ2hCQSxFQUFTLFNBQ1RDLEVBQW1CLHlCQUNpQixJQUF0QkssU0FBU2lELFVBQ3ZCdkQsRUFBUyxXQUNUQyxFQUFtQiwyQkFDcUIsSUFBMUJLLFNBQVNrRCxlQUN2QnhELEVBQVMsZUFDVEMsRUFBbUIsK0JBR2tCLElBQTlCSyxTQUFTUCx1QkFBZ0UsSUFBckJPLFNBQVNOLEdBQ3BFeUQsT0FBT0MsS0FBSywwQkFHWnBELFNBQVNQLGlCQUFpQkUsR0FBa0IsV0FDcENLLFNBQVNOLElBSUxFLEVBQWdCLEdBRWhCaUQsU0FBU0MsWUFHbEIsUSIsImZpbGUiOiJhbGVydFRvb2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL+WKoOi9veWujOaIkOS6i+S7tlxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKiDmj5DnpLrmoYbmianlsZUgKi9cclxuICAgIGNvbnN0IGNvbmZpcm1FeCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IF9kaXYgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbmZpcm1FeFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmdcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXNcIj7mtojmga88L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwieWVzXCI+56Gu6K6k4pyU77iPPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5vXCI+5Y+W5raI4p2MPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gICAgICAgIC8v5re75Yqg5YWD57SgXHJcbiAgICAgICAgbGV0IF9kaXZEb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIF9kaXZEb20uaW5uZXJIVE1MID0gX2RpdjtcclxuICAgICAgICAvL1xyXG4gICAgICAgIF9kaXZEb20gPSBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKF9kaXZEb20uZmlyc3RFbGVtZW50Q2hpbGQpO1xyXG4gICAgICAgIC8v6I635Y+W5ZCE5Liq5YWD57SgXHJcbiAgICAgICAgbGV0IF9jb25maXJtRXhEb20gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb25maXJtRXgnKVswXTtcclxuICAgICAgICBsZXQgX2JnRG9tID0gX2NvbmZpcm1FeERvbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdiZycpWzBdO1xyXG4gICAgICAgIGxldCBfY29udGVudERvbSA9IF9jb25maXJtRXhEb20uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29udGVudCcpWzBdO1xyXG4gICAgICAgIGxldCBfbWVzRG9tID0gX2NvbmZpcm1FeERvbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtZXMnKVswXTtcclxuICAgICAgICBsZXQgX3llc0J1dERvbSA9IF9jb25maXJtRXhEb20uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgneWVzJylbMF07XHJcbiAgICAgICAgbGV0IF9ub0J1dERvbSA9IF9jb25maXJtRXhEb20uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbm8nKVswXTtcclxuICAgICAgICAvL+aYr+WQpuaYvuekulxyXG4gICAgICAgIGxldCBfaWZTaG93ID0gZmFsc2U7XHJcbiAgICAgICAgLy/lm57osIPlh73mlbBcclxuICAgICAgICBsZXQgX2JhY2tGO1xyXG4gICAgICAgIC8v55uR5ZCs56qX5Y+j5aSn5bCP5pS55Y+YXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIF9jb250ZW50RG9tLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgke3dpbmRvdy5pbm5lcldpZHRoIC8gNTAwfSlgO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5Li75Yqo6Kem5Y+R56qX5Y+j5aSn5bCP5pS55Y+Y5LqL5Lu2XHJcbiAgICAgICAgX2NvbnRlbnREb20uc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKCR7d2luZG93LmlubmVyV2lkdGggLyA1MDB9KWA7XHJcbiAgICAgICAgLy/mt7vliqDplK7nm5jkuovku7ZcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoX2lmU2hvdyAmJiBldmVudC5rZXkgPT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICAgICAgX2JhY2tGICYmIF9iYWNrRih0cnVlKTtcclxuICAgICAgICAgICAgICAgIF9oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKF9pZlNob3cgJiYgZXZlbnQua2V5ID09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgICAgICAgICBfYmFja0YgJiYgX2JhY2tGKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIF9oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+aYvuekuueahOaWueazlVxyXG4gICAgICAgIGxldCBfc2hvdyA9IChtZXMsIF9mKSA9PiB7XHJcbiAgICAgICAgICAgIF9pZlNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICBfY29uZmlybUV4RG9tLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgX2JhY2tGID0gX2Y7XHJcbiAgICAgICAgICAgIF9tZXNEb20uaW5uZXJIVE1MID0gbWVzO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/pmpDol4/nmoTmlrnms5VcclxuICAgICAgICBsZXQgX2hpZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIF9pZlNob3cgPSBmYWxzZTtcclxuICAgICAgICAgICAgX2NvbmZpcm1FeERvbS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL+aVtOS4quWFg+e0oFxyXG4gICAgICAgIF9iZ0RvbS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBfYmFja0YgJiYgX2JhY2tGKGZhbHNlKTtcclxuICAgICAgICAgICAgX2hpZGUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8v6Zi75q2i6IOM5pmv5p2/55qE54K55Ye75LqL5Lu25YaS5rOhXHJcbiAgICAgICAgX2NvbnRlbnREb20ub25jbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIF9iYWNrRiAmJiBfYmFja0YodHJ1ZSk7XHJcbiAgICAgICAgICAgIF9oaWRlKCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v56Gu6K6k5oyJ6ZKuXHJcbiAgICAgICAgX3llc0J1dERvbS5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICAgICAgX2JhY2tGICYmIF9iYWNrRih0cnVlKTtcclxuICAgICAgICAgICAgX2hpZGUoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8v5Y+W5raI5oyJ6ZKuXHJcbiAgICAgICAgX25vQnV0RG9tLm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBfYmFja0YgJiYgX2JhY2tGKGZhbHNlKTtcclxuICAgICAgICAgICAgX2hpZGUoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmV0dXJuIF9zaG93O1xyXG4gICAgfSkoKTtcclxuXHJcbiAgICAvL1xyXG4gICAgKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgLyoqIOmhueebruabtOaWsOasoeaVsCAqL1xyXG4gICAgICAgIGxldCBfdXBkYXRlTnVtYmVyID0gMDtcclxuICAgICAgICAvL+aYr+WQpuacieehruiupOahhuWcqOetieW+hVxyXG4gICAgICAgIGxldCBfaWZDb25maXJtID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8v55uR5ZCs5raI5oGvXHJcbiAgICAgICAgZXNidWlsZFRvb2wud2ViU29ja2V0VC5pbnN0YW5jZS5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xyXG4gICAgICAgICAgICBsZXQgX21lcyA9IGRhdGEubWVzO1xyXG4gICAgICAgICAgICBsZXQgX3R5cGUgPSBkYXRhLnR5cGU7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIGlmIChfdHlwZSA9PSBlc2J1aWxkVG9vbC53ZWJTb2NrZXRULm1lc1R5cGUuY29udGVudFVwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgX3VwZGF0ZU51bWJlcisrO1xyXG4gICAgICAgICAgICAgICAgLy8g5aSE55CG5pWw5o2uXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyguLi5lc2J1aWxkVG9vbC5jb25zb2xlRXgucGFjayhlc2J1aWxkVG9vbC5jb25zb2xlRXguZ2V0U3R5bGUoJyNlZWVlZWUnLCAnIzA4ZDlkNicpLCBfbWVzKSk7XHJcbiAgICAgICAgICAgICAgICAvL+W8ueWHuuaPkOekuuahhlxyXG4gICAgICAgICAgICAgICAgaWYgKCFfaWZDb25maXJtICYmIF91cGRhdGVOdW1iZXIgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX2lmQ29uZmlybSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtRXgoYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj7pobnnm67lhoXlrrnmnInmm7TmlrAg8J+UlDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPueCueWHu+a2iOaBr+ahhuaIlueCueWHu+ehruiupOaMiemSruaIluaMiUVudGVy6ZSu5Yi35paw6aG16Z2i77yM54K55Ye76IOM5pmv5oiW5Y+W5raI5oyJ6ZKu5Y+W5raIPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgYCwgKGZsYWcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3VwZGF0ZU51bWJlciA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9pZkNvbmZpcm0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/liKTmlq3nirbmgIFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZsYWcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Yi35paw6aG16Z2iXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn5Y+W5raIJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyDnm5HlkKzpobXpnaLnhKbngrnkuovku7ZcclxuICAgICAgICBpZiAoZXNidWlsZFRvb2wuY29uZmlnLmlmVXBkYXRlTm93KSB7XHJcbiAgICAgICAgICAgIC8v5qC55o2u5LiN5ZCM5rWP6KeI5Zmo6I635Y+W5bGe5oCn5ZCN56ewXHJcbiAgICAgICAgICAgIHZhciBoaWRkZW4sIHZpc2liaWxpdHlDaGFuZ2U7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQuaGlkZGVuICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBoaWRkZW4gPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eUNoYW5nZSA9IFwidmlzaWJpbGl0eWNoYW5nZVwiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudC5tc0hpZGRlbiAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgaGlkZGVuID0gXCJtc0hpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eUNoYW5nZSA9IFwibXN2aXNpYmlsaXR5Y2hhbmdlXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50LndlYmtpdEhpZGRlbiAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgaGlkZGVuID0gXCJ3ZWJraXRIaWRkZW5cIjtcclxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHlDaGFuZ2UgPSBcIndlYmtpdHZpc2liaWxpdHljaGFuZ2VcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDliKTmlq3mtY/op4jlmajnmoTmlK/mjIHmg4XlhrUgXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciA9PT0gXCJ1bmRlZmluZWRcIiB8fCB0eXBlb2YgZG9jdW1lbnRbaGlkZGVuXSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sLndhcm4oXCLlvZPliY3mtY/op4jlmajkuI3og73liKTmlq3nqpflj6PmmK/lkKbojrflj5bmiJblpLHljrvnhKbngrnwn5iwXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8g55uR5ZCsdmlzaWJpbGl0eUNoYW5nZeS6i+S7tiAgICBcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodmlzaWJpbGl0eUNoYW5nZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudFtoaWRkZW5dKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5aSx5Y6754Sm54K5XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g6I635Y+W54Sm54K5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdXBkYXRlTnVtYmVyID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/liLfmlrDpobXpnaJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSkoKTtcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==