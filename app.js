!function(e){var t={};function n(o){if(t[o])return t[o].exports;var u=t[o]={i:o,l:!1,exports:{}};return e[o].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(o,u,function(t){return e[t]}.bind(null,u));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}({"./src/index.js":function(e,t){if(document.getElementById("message-form")){const e=document.getElementById("name"),t=document.getElementById("email"),n=document.getElementById("message"),o=document.getElementById("modal-message");document.getElementById("message-form").addEventListener("submit",(function(u){u.preventDefault(),u.stopPropagation(),o.style.display="flex",t.value="",e.value="",n.value="",setTimeout(()=>{o.style.display="none"},5e3)}))}document.getElementById("menu-button").addEventListener("click",(function(e){document.getElementById("navlist").classList.toggle("js-menu")})),window.onclick=function(e){e.target==modal&&(modal.style.display="none")}},"./src/js/script.js":function(e,t){if(document.getElementById("message-form")){const e=document.getElementById("name"),t=document.getElementById("email"),n=document.getElementById("message");document.getElementById("message-form").addEventListener("submit",(function(o){o.preventDefault(),alert("Votre message a bien été envoyé."),t.value="",e.value="",n.value=""}))}document.getElementById("menu-button").addEventListener("click",(function(e){document.getElementById("navlist").classList.toggle("js-menu")}))},0:function(e,t,n){n("./src/index.js"),e.exports=n("./src/js/script.js")}});