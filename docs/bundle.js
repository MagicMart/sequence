!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);var o=function e(t){var n=document.querySelector(".".concat(t)),o=Object.create(e.prototype);return o.color=t,o.node=n,o},r={blue:o("blue"),green:o("green"),gold:o("gold"),red:o("red")},u=document.querySelector(".score-panel"),i=document.querySelector(".start"),c=document.getElementById("buttons");o.prototype.check=function(e,t){if(t.userInput[e]===t.sequence[e]){if(u.style.backgroundColor="rgb(153, 255, 102)",setTimeout(function(){u.style.backgroundColor="white"},100),t.userInput.length!==t.sequence.length)return;t.gameState="no-input",document.body.style.backgroundColor="rgb(153, 255, 102)",setTimeout(function(){document.body.style.backgroundColor="white"},100),q()}else t.gameState="no-input",document.body.style.backgroundColor="red",setTimeout(function(){document.body.style.backgroundColor="white",i.style.visibility="visible"},100),k()},c.addEventListener("click",function(e){return function(e){if(e.target&&e.target.classList.contains("button")&&"user-input"===m.gameState){var t=e.target.classList[1];e.target.style.backgroundColor="white",setTimeout(function(){e.target.style.backgroundColor=t},150),m.userInput.push(t),o.prototype.check(m.userInput.length-1,m)}}(e)});var l=["blue","green","gold","red"],s=null,a=0;var d=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;s||(m.gameState="no-input",s=0);var n=t-s;if(n>600&&(n=0,s=t,a+=1,function(e){m.sequence.push(e);var t=e;r[e].node.style.backgroundColor="white",setTimeout(function(){r[e].node.style.backgroundColor=t},300)}(l[Math.floor(4*Math.random())])),a>=m.seqLength)return s=null,a=0,void setTimeout(function(){m.gameState="user-input"},300);requestAnimationFrame(e)},f=document.getElementById("id01"),g=document.getElementById("modal-score");document.querySelector(".w3-modal-content").addEventListener("click",function(){f.style.display="none"});var y=function(e){f.style.display="block",g.innerText=e};n.d(t,"state",function(){return m}),n.d(t,"oneUp",function(){return q}),n.d(t,"loseALife",function(){return k});var m={score:0,lives:3,seqLength:3,sequence:[],userInput:[],gameState:"waiting"},p=document.querySelector(".score"),b=document.querySelector(".lives"),v=document.querySelector(".start");function S(){p.innerText=String(m.score).padStart(3,"0")}function h(){b.innerText=String(m.lives)}function q(){m.score+=m.seqLength,S(),m.seqLength+=1,m.sequence=[],m.userInput=[],setTimeout(function(){d()},1e3)}function k(){m.seqLength=3,m.lives-=1,h(),m.sequence=[],m.userInput=[],m.gameState="waiting",m.lives<=0&&(y(m.score),m.score=0,m.lives=3,S(),h())}v.addEventListener("click",function(){v.style.visibility="hidden","waiting"===m.gameState&&setTimeout(function(){d()},1e3)})}]);