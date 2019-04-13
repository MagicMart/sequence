!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=5)}([function(e,n,t){var r=t(1);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(2)(!1)).push([e.i,'html {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n*,\n*:before,\n*:after {\n    -webkit-box-sizing: inherit;\n    -moz-box-sizing: inherit;\n    box-sizing: inherit;\n}\n\nbody {\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",\n        "Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif;\n    background-color: whitesmoke;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    width: 300px;\n    margin: 0 auto;\n}\n\nheader {\n    display: flex;\n    justify-content: center;\n}\n\n.score-panel {\n    display: flex;\n    justify-content: space-around;\n    font-family: monospace;\n    font-size: large;\n    font-weight: 700;\n    margin: 5px;\n}\n\n.score,\n.lives {\n    font-size: x-large;\n}\n\n.row {\n    display: flex;\n    justify-content: space-around;\n    width: 100%;\n}\n\n.button {\n    width: 60px;\n    height: 60px;\n    border: 10px solid black;\n    margin: 5px;\n    border-radius: 50%;\n    box-shadow: 0 9px #999;\n}\n.button:active {\n    box-shadow: 0 5px #666;\n    transform: translateY(4px);\n}\n\n.red {\n    background-color: red;\n}\n.green {\n    background-color: green;\n}\n.blue {\n    background-color: blue;\n}\n.gold {\n    background-color: gold;\n}\n\n.start {\n    width: 48px;\n    height: 48px;\n    margin: auto 0;\n    background: rgb(37, 192, 37);\n}\n\n.w3-display-topright {\n    background: rgb(206, 22, 22);\n}\n',""])},function(e,n){e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[t].concat(i).concat([o]).join("\n")}var s;return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="("+s[2]+") and ("+t+")"),n.push(s))}},n}},function(e,n,t){var r,o,i={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),a=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var r=function(e,n){return n?n.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}}(),c=null,u=0,l=[],f=t(4);function d(e,n){for(var t=0;t<e.length;t++){var r=e[t],o=i[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(v(r.parts[s],n))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(v(r.parts[s],n));i[r.id]={id:r.id,refs:1,parts:a}}}}function p(e,n){for(var t=[],r={},o=0;o<e.length;o++){var i=e[o],s=n.base?i[0]+n.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):t.push(r[s]={id:s,parts:[a]})}return t}function b(e,n){var t=a(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),l.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(e.insertAt.before,t);t.insertBefore(n,o)}}function y(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=l.indexOf(e);n>=0&&l.splice(n,1)}function h(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return t.nc}();r&&(e.attrs.nonce=r)}return g(n,e.attrs),b(e,n),n}function g(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function v(e,n){var t,r,o,i;if(n.transform&&e.css){if(!(i="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=i}if(n.singleton){var s=u++;t=c||(c=h(n)),r=w.bind(null,t,s,!1),o=w.bind(null,t,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(n,e.attrs),b(e,n),n}(n),r=function(e,n,t){var r=t.css,o=t.sourceMap,i=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,t,n),o=function(){y(t),t.href&&URL.revokeObjectURL(t.href)}):(t=h(n),r=function(e,n){var t=n.css,r=n.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){y(t)});return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=s()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=p(e,n);return d(t,n),function(e){for(var r=[],o=0;o<t.length;o++){var s=t[o];(a=i[s.id]).refs--,r.push(a)}e&&d(p(e,n),n);for(o=0;o<r.length;o++){var a;if(0===(a=r[o]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete i[a.id]}}}};var m,x=(m=[],function(e,n){return m[e]=n,m.filter(Boolean).join("\n")});function w(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(n,o);else{var i=document.createTextNode(o),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(i,s[n]):e.appendChild(i)}}},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,r=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var o,i=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,n,t){"use strict";t.r(n);t(0);var r=function(e,n){var t;!function(e){var t=document.querySelector("body");t.style.backgroundColor="rgba(120,120,120)";var r,o,i=document.querySelector(".score-panel"),s=null,a=0;requestAnimationFrame(function c(u){o=document.querySelector(".".concat(e[a])),s||(s=u),(r=u-s)>500&&(i.style.backgroundColor=e[a],o.style.cssText="background-color: white;border: 10px solid ".concat(e[a]),o.style.boxShadow="0 5px #666",o.style.transform="translateY(4px)"),r>800&&(o.style.backgroundColor=e[a],i.style.backgroundColor="white",o.style.cssText="border: 10px solid black",a+=1,r=0,s=u),a<e.length?requestAnimationFrame(c):setTimeout(function(){t.style.backgroundColor="whitesmoke",n(e)},300)})}((t=e,function(e){return new Array(e).fill()}(t).map(function(){return["red","green","blue","gold"][Math.floor(4*Math.random())]})))},o=document.getElementById("id01"),i=document.getElementById("modal-score");document.querySelector(".w3-modal-content").addEventListener("click",function(){o.style.display="none"});var s,a=function(e){o.style.display="block",i.innerText=e},c=(s={score:0,lives:3,sequence:[],seqLength:3,userInput:[]},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return s=Object.assign(s,e)});function u(e){document.querySelector(".score").innerText=String(e).padStart(3,"0")}function l(e){document.querySelector(".lives").innerText=String(e)}document.querySelector(".start").addEventListener("click",function e(){var n=c().seqLength;document.querySelector(".start").style.visibility="hidden",setTimeout(function(){r(n,function(e){return c({sequence:e})}),document.querySelector(".start").addEventListener("click",e,{once:!0})},500)},{once:!0});var f=Object.freeze({handleState:c,scoreInc:function(){var e=c(),n=e.score,t=e.seqLength;c({score:n+t,seqLength:t+1,sequence:[],userInput:[]}),u(n+t),setTimeout(function(){r(t+1,function(e){return c({sequence:e})})},500)},loseALife:function(){var e=c(),n=e.lives,t=e.score;c({seqLength:3,lives:n-1,sequence:[],userInput:[]}),n-1<=0?(a(t),c({score:0,lives:3}),u(0),l(3)):l(n-1)}});function d(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}document.querySelector("body").style.visibility="visible";var p=f.handleState,b=f.loseALife,y=f.scoreInc,h=document.querySelector(".score-panel"),g=document.getElementById("buttons"),v=document.querySelector("body");function m(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"rgb(255,255,255)";e.style.backgroundColor=n;var o=null;requestAnimationFrame(function n(i){o||(o=i),i-o>=t?e.style.backgroundColor=r:requestAnimationFrame(n)})}function x(e){if(e.target&&e.target.classList.contains("button")&&0!==p().sequence.length){var n=e.target.classList[1];m(e.target,"rgb(255,255,255)",150,n),p({userInput:d(p().userInput).concat([n])});var t=p(),r=t.userInput,o=t.sequence,i=r.length-1;r[i]===o[i]?(m(h,"rgb(153, 255, 102)",150),r.length===o.length&&(m(v,"rgb(153, 255, 102)",150),y())):(s=document.querySelector(".start"),m(v,"red",150),s.style.visibility="visible",b())}var s}g.addEventListener("click",function(e){return x(e)})}]);