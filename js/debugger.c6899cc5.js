(function(t){function e(e){for(var r,i,s=e[0],u=e[1],l=e[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={debugger:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=u;a.push([1,"chunk-vendors","chunk-common"]),n()})({1:function(t,e,n){t.exports=n("695f")},"17a8":function(t,e,n){},"1e4e":function(t,e,n){"use strict";n("17a8")},"695f":function(t,e,n){"use strict";n.r(e);n("7f7f"),n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-toolbar",{attrs:{color:t.baseColor,app:"",fixed:"","clipped-left":"",id:"system-topbar"}},[n("v-toolbar-title",{staticClass:"hidden-md-and-down",staticStyle:{width:"220px"}},[n("span",[t._v("Debugger Beta")])]),n("v-spacer"),n("v-toolbar-items",{staticClass:"hidden-xs-only"},[n("v-btn",{attrs:{flat:"",href:"https://github.com/ronggang/PT-Plugin-Plus/issues",target:"_blank",rel:"noopener noreferrer nofollow"}},[n("v-icon",[t._v("bug_report")])],1)],1)],1),n("v-content",[n("v-container",{staticClass:"debugger",attrs:{fluid:""}},[n("table",[n("tbody",t._l(t.items,(function(e,r){return n("tr",{key:r},[n("td",{staticClass:"id"},[t._v(t._s(r+1))]),n("td",{staticClass:"time"},[t._v(t._s(e.time))]),n("td",{staticClass:"msg"},[n("div",[t._v(t._s(e.msg))])])])})),0)])])],1)],1)},a=[],i=r["default"].extend({data:function(){return{items:[],baseColor:"amber"}},methods:{add:function(t){this.items.push({time:(new Date).toLocaleString(),msg:"string"===typeof t?t:JSON.stringify(t)})}}}),s=i,u=(n("1e4e"),n("2877")),l=n("6544"),c=n.n(l),d=n("7496"),f=n("8336"),p=n("a523"),b=n("549c"),g=n("132d"),v=n("9910"),h=n("71d9"),m=n("2a7f"),y=Object(u["a"])(s,o,a,!1,null,"74bf6c4f",null),_=y.exports;c()(y,{VApp:d["a"],VBtn:f["a"],VContainer:p["a"],VContent:b["a"],VIcon:g["a"],VSpacer:v["a"],VToolbar:h["a"],VToolbarItems:m["a"],VToolbarTitle:m["b"]});var w=n("7e92"),O=n("a400"),C=n("a1f4"),j=new C["a"],x=function(){function t(){w["a"].init("en"),this.vm=new r["default"]({el:"#app",render:function(t){return t(_)}}),this.initEvents()}return t.prototype.initEvents=function(){var t=this;chrome.runtime.onConnect.addListener((function(e){console.assert(e.name==O["j"].debugger),e.onMessage.addListener((function(e){console.log(e),e.action==O["a"].pushDebugMsg&&t.add(e.data)}))})),chrome.tabs.getCurrent((function(t){console.log("debugTabId: %s",t.id),j.sendRequest(O["a"].updateDebuggerTabId,null,t.id)}))},t.prototype.add=function(t){this.vm.$children[0].add(t)},t}();new x}});