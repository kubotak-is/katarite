(function(e){function t(t){for(var r,o,c=t[0],s=t[1],l=t[2],p=0,f=[];p<c.length;p++)o=c[p],i[o]&&f.push(i[o][0]),i[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/katarite/dist/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";var r=n("64a9"),i=n.n(r);i.a},"64a9":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=(n("c58f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"row at-row no-gutter flex-center"},[n("div",{staticClass:"col-md-10"},[n("div",{staticClass:"at-box-row"},[n("at-card",[n("h4",{attrs:{slot:"title"},slot:"title"},[n("at-select",{staticStyle:{width:"300px"},attrs:{filterable:"",size:"large"},model:{value:e.selectVoice,callback:function(t){e.selectVoice=t},expression:"selectVoice"}},e._l(e.voices,function(t,r){return n("at-option",{key:r,attrs:{value:r}},[e._v(e._s(t.name))])}),1)],1),n("div",{attrs:{slot:"extra"},slot:"extra"},[n("at-button",{attrs:{type:"primary",disabled:null===e.selectVoice||""===e.inputValue},on:{click:e.speech}},[e._v("Read")])],1),n("div",[n("at-textarea",{attrs:{"min-rows":"5","max-rows":"10",placeholder:"Please input multiline text..."},model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}})],1)])],1)])])])}),a=[],o=n("d225"),c=n("b0b4"),s=n("308d"),l=n("6bb5"),u=n("4e2b"),p=n("9ab4"),f=n("60a3"),d=function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(s["a"])(this,Object(l["a"])(t).apply(this,arguments)),e.voices=[],e.selectVoice=null,e.inputValue="",e}return Object(u["a"])(t,e),Object(c["a"])(t,[{key:"created",value:function(){var e=this;window.speechSynthesis.onvoiceschanged=function(){e.voices=window.speechSynthesis.getVoices(),0===e.voices.length&&alert("You don't have speechSynthesis")}}},{key:"speech",value:function(){var e=new SpeechSynthesisUtterance(this.inputValue);null!==this.selectVoice&&(e.voice=this.voices[this.selectVoice],window.speechSynthesis.speak(e))}}]),t}(f["b"]);d=p["a"]([f["a"]],d);var v=d,h=v,b=(n("034f"),n("2877")),y=Object(b["a"])(h,i,a,!1,null,null,null),w=y.exports,g=n("44e4");r["default"].config.productionTip=!1,r["default"].use(g),new r["default"]({render:function(e){return e(w)}}).$mount("#app")}});
//# sourceMappingURL=app.23b4328f.js.map