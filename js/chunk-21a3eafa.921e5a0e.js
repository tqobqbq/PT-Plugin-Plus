(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21a3eafa"],{"0a06":function(e,t,n){"use strict";var r=n("c532"),o=n("30b5"),i=n("f6b4"),s=n("5270"),a=n("4a7b");function u(e){this.defaults=e,this.interceptors={request:new i,response:new i}}u.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=a(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[s,void 0],n=Promise.resolve(e);this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));while(t.length)n=n.then(t.shift(),t.shift());return n},u.prototype.getUri=function(e){return e=a(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){u.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}})),r.forEach(["post","put","patch"],(function(e){u.prototype[e]=function(t,n,o){return this.request(r.merge(o||{},{method:e,url:t,data:n}))}})),e.exports=u},"0df6":function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},"1d2b":function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},2444:function(e,t,n){"use strict";(function(t){var r=n("c532"),o=n("c8af"),i={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function a(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t))&&(e=n("b50d")),e}var u={adapter:a(),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){u.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){u.headers[e]=r.merge(i)})),e.exports=u}).call(this,n("f28c"))},"2d83":function(e,t,n){"use strict";var r=n("387f");e.exports=function(e,t,n,o,i){var s=new Error(e);return r(s,t,n,o,i)}},"2e67":function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},"30b5":function(e,t,n){"use strict";var r=n("c532");function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var s=[];r.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))})))})),i=s.join("&")}if(i){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},"387f":function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},3934:function(e,t,n){"use strict";var r=n("c532");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return function(){return!0}}()},"467f":function(e,t,n){"use strict";var r=n("2d83");e.exports=function(e,t,n){var o=n.config.validateStatus;!o||o(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},"4a7b":function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t){t=t||{};var n={},o=["url","method","params","data"],i=["headers","auth","proxy"],s=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];r.forEach(o,(function(e){"undefined"!==typeof t[e]&&(n[e]=t[e])})),r.forEach(i,(function(o){r.isObject(t[o])?n[o]=r.deepMerge(e[o],t[o]):"undefined"!==typeof t[o]?n[o]=t[o]:r.isObject(e[o])?n[o]=r.deepMerge(e[o]):"undefined"!==typeof e[o]&&(n[o]=e[o])})),r.forEach(s,(function(r){"undefined"!==typeof t[r]?n[r]=t[r]:"undefined"!==typeof e[r]&&(n[r]=e[r])}));var a=o.concat(i).concat(s),u=Object.keys(t).filter((function(e){return-1===a.indexOf(e)}));return r.forEach(u,(function(r){"undefined"!==typeof t[r]?n[r]=t[r]:"undefined"!==typeof e[r]&&(n[r]=e[r])})),n}},"504c":function(e,t,n){var r=n("9e1e"),o=n("0d58"),i=n("6821"),s=n("52a7").f;e.exports=function(e){return function(t){var n,a=i(t),u=o(a),c=u.length,f=0,p=[];while(c>f)n=u[f++],r&&!s.call(a,n)||p.push(e?[n,a[n]]:a[n]);return p}}},5270:function(e,t,n){"use strict";var r=n("c532"),o=n("c401"),i=n("2e67"),s=n("2444");function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){a(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||s.adapter;return t(e).then((function(t){return a(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(a(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},6556:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-alert",{attrs:{value:!0,type:"info"}},[e._v(e._s(e.$t("reference.title")))]),n("v-card",[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.items,pagination:e.pagination,"hide-actions":"","item-key":"name"},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"items",fn:function(t){return[n("td",[e._v(e._s(t.item.name))]),n("td",[e._v(e._s(t.item.ver))]),n("td",[n("a",{attrs:{href:t.item.url,rel:"noopener noreferrer nofollow",target:"_blank"}},[e._v(e._s(t.item.url))])])]}}])})],1),n("v-alert",{attrs:{value:!0,color:"grey"}},[e._v(e._s(e.$t("reference.thanks")))])],1)},o=[],i=(n("4917"),n("7f7f"),n("ac6a"),n("ffc1"),n("9ab4")),s=n("2b0e"),a=n("bc3a"),u=n.n(a),c=n("9224").dependencies,f=Object.entries(c).map((function(e){var t=e[0],n=e[1];return{name:t,ver:n,url:"https://www.npmjs.com/package/"+t}})),p=s["default"].extend({data:function(){return{pagination:{rowsPerPage:-1},items:Object(i["d"])(f,[{name:"PT-Plugin Rhilip修改版",ver:"0.0.9",url:"https://github.com/Rhilip/PT-Plugin"},{name:"Jackett",ver:"latest",url:"https://github.com/Jackett/Jackett"}])}},created:function(){var e=this,t=JSON.parse(localStorage.getItem("depend-metadata")||"{}");setTimeout((function(){return Object(i["a"])(e,void 0,void 0,(function(){var e,n,r,o,s,a,c;return Object(i["c"])(this,(function(i){switch(i.label){case 0:e=0,i.label=1;case 1:return e<this.items.length?(n=this.items[e],r=n.name,o=n.url,o.match(/npmjs/)?t[r]?(o=t[r],[3,5]):[3,2]:[3,6]):[3,7];case 2:return i.trys.push([2,4,,5]),[4,u.a.get("https://registry.npm.taobao.org/"+r)];case 3:return s=i.sent(),(null===(a=s.data)||void 0===a?void 0:a.homepage)&&(o=t[r]=null===(c=s.data)||void 0===c?void 0:c.homepage),[3,5];case 4:return i.sent(),[3,5];case 5:this.items[e].url=o,i.label=6;case 6:return e++,[3,1];case 7:return localStorage.setItem("depend-metadata",JSON.stringify(t)),[2]}}))}))}),1e3)},computed:{headers:function(){return[{text:this.$t("reference.headers.name"),align:"left",value:"name"},{text:this.$t("reference.headers.ver"),align:"left",value:"ver"},{text:this.$t("reference.headers.url"),align:"left",value:"url"}]}}}),l=p,d=n("2877"),h=n("6544"),m=n.n(h),v=n("0798"),g=n("b0af"),y=n("8fea"),b=Object(d["a"])(l,r,o,!1,null,null,null);t["default"]=b.exports;m()(b,{VAlert:v["a"],VCard:g["a"],VDataTable:y["a"]})},"7a77":function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},"7aac":function(e,t,n){"use strict";var r=n("c532");e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"83b9":function(e,t,n){"use strict";var r=n("d925"),o=n("e683");e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},"8df4":function(e,t,n){"use strict";var r=n("7a77");function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e,t=new o((function(t){e=t}));return{token:t,cancel:e}},e.exports=o},9224:function(e){e.exports=JSON.parse('{"name":"pt-plugin-plus","version":"1.5.2","author":{"name":"ronggang","url":"https://github.com/ronggang"},"archiverName":"PT-Plugin-Plus","displayName":"PT 助手 Plus","homepage":"https://github.com/ronggang/PT-Plugin-Plus","scripts":{"serve":"vue-cli-service serve --mode=test","build":"yarn build:index && yarn build:background && yarn build:content && yarn resource","lint":"vue-cli-service lint","background":"webpack --config webpack/prod-background.js && webpack --config webpack/prod-content.js","dev":"yarn dev:index && yarn dev:background && yarn dev:content && yarn resource","dev-s":"cd debug && yarn install && tsc && node ./dist/index.js","dev:index":"yarn install && vue-cli-service build --mode=development","dev:background":"webpack --config webpack/dev-background.js --progress","dev:content":"webpack --config webpack/dev-content.js --progress","dev:bc":"yarn dev:background && yarn dev:content","resource":"cd debug && yarn install && tsc && node ./dist/buildResource.js","build:index":"yarn install && vue-cli-service build","build:background":"webpack --config webpack/prod-background.js --progress","build:content":"webpack --config webpack/prod-content.js --progress","zip":"ts-node --skip-project ./deploy/index.ts -z","package":"ts-node --skip-project ./deploy/index.ts -p","release":"yarn build && yarn package","deploy:chrome":"ts-node --skip-project ./deploy/index.ts -pc","deploy":"yarn build && yarn deploy:chrome"},"dependencies":{"archiver":"^3.1.1","basiccontext":"^3.5.1","blueimp-md5":"^2.10.0","commander":"^4.0.1","crypto-js":"^3.1.9-1","dayjs":"^1.8.11","dom-to-image":"^2.6.0","dotenv":"^8.2.0","extend":"^3.0.2","file-saver":"^2.0.0","highcharts":"^7.2.2","highcharts-vue":"^1.2.0","i18next":"^17.0.3","jszip":"^3.4.0","marked":"^0.7.0","parse-torrent":"^7.0.1","ua-parser-js":"^0.7.20","url-parse":"^1.4.4","vue":"^2.5.17","vue-class-component":"^6.3.2","vue-i18n":"^8.11.2","vue-property-decorator":"^7.0.0","vue-router":"^3.0.1","vuetify":"^1.3.0","vuex":"^3.0.1","webdav":"^2.10.0"},"devDependencies":{"@types/archiver":"^3.0.0","@types/blueimp-md5":"^2.7.0","@types/chrome":"^0.0.75","@types/crypto-js":"^3.1.43","@types/dom-to-image":"^2.6.2","@types/extend":"^3.0.0","@types/file-saver":"^2.0.0","@types/jquery":"^3.3.22","@types/marked":"^0.7.2","@types/parse-torrent":"^5.8.3","@types/ua-parser-js":"^0.7.33","@types/url-parse":"^1.4.2","@vue/cli-plugin-babel":"^3.0.5","@vue/cli-plugin-eslint":"^3.0.5","@vue/cli-plugin-typescript":"^3.2.0","@vue/cli-service":"^3.0.5","@vue/eslint-config-typescript":"^3.2.0","babel-eslint":"^10.0.1","chrome-webstore-upload":"^0.2.2","copy-webpack-plugin":"^4.6.0","crx":"^5.0.1","crx3":"^1.1.1","eslint":"^5.8.0","eslint-plugin-vue":"^5.0.0-0","sass":"^1.23.7","sass-loader":"^7.1.0","stylus":"^0.54.5","stylus-loader":"^3.0.1","terser-webpack-plugin":"^2.2.1","ts-loader":"^5.3.1","ts-node":"^8.5.2","typescript":"^3.0.0","uglifyjs-webpack-plugin":"^2.0.1","unique-commit-id":"^1.0.0","vue-cli-plugin-vuetify":"^0.4.6","vue-template-compiler":"^2.5.17","vuetify-loader":"^1.0.5","webpack":"^4.26.1","webpack-cli":"^3.1.2","webpack-merge":"^4.1.4"},"eslintConfig":{"root":true,"env":{"node":true},"extends":["plugin:vue/essential","eslint:recommended","@vue/typescript"],"rules":{"no-console":0},"parserOptions":{"parser":"typescript-eslint-parser"}},"postcss":{"plugins":{"autoprefixer":{}}},"browserslist":["> 1%","last 2 versions","not ie <= 8"]}')},b50d:function(e,t,n){"use strict";var r=n("c532"),o=n("467f"),i=n("30b5"),s=n("83b9"),a=n("c345"),u=n("3934"),c=n("2d83");e.exports=function(e){return new Promise((function(t,f){var p=e.data,l=e.headers;r.isFormData(p)&&delete l["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password||"";l.Authorization="Basic "+btoa(h+":"+m)}var v=s(e.baseURL,e.url);if(d.open(e.method.toUpperCase(),i(v,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?a(d.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?d.response:d.responseText,i={data:r,status:d.status,statusText:d.statusText,headers:n,config:e,request:d};o(t,f,i),d=null}},d.onabort=function(){d&&(f(c("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){f(c("Network Error",e,null,d)),d=null},d.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),f(c(t,e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var g=n("7aac"),y=(e.withCredentials||u(v))&&e.xsrfCookieName?g.read(e.xsrfCookieName):void 0;y&&(l[e.xsrfHeaderName]=y)}if("setRequestHeader"in d&&r.forEach(l,(function(e,t){"undefined"===typeof p&&"content-type"===t.toLowerCase()?delete l[t]:d.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),e.responseType)try{d.responseType=e.responseType}catch(b){if("json"!==e.responseType)throw b}"function"===typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){d&&(d.abort(),f(e),d=null)})),void 0===p&&(p=null),d.send(p)}))}},bc3a:function(e,t,n){e.exports=n("cee4")},c345:function(e,t,n){"use strict";var r=n("c532"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,s={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}})),s):s}},c401:function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},c532:function(e,t,n){"use strict";var r=n("1d2b"),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function s(e){return"undefined"===typeof e}function a(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function u(e){return"[object ArrayBuffer]"===o.call(e)}function c(e){return"undefined"!==typeof FormData&&e instanceof FormData}function f(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer,t}function p(e){return"string"===typeof e}function l(e){return"number"===typeof e}function d(e){return null!==e&&"object"===typeof e}function h(e){return"[object Date]"===o.call(e)}function m(e){return"[object File]"===o.call(e)}function v(e){return"[object Blob]"===o.call(e)}function g(e){return"[object Function]"===o.call(e)}function y(e){return d(e)&&g(e.pipe)}function b(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function w(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function x(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function k(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}function j(){var e={};function t(t,n){"object"===typeof e[n]&&"object"===typeof t?e[n]=j(e[n],t):e[n]=t}for(var n=0,r=arguments.length;n<r;n++)k(arguments[n],t);return e}function T(){var e={};function t(t,n){"object"===typeof e[n]&&"object"===typeof t?e[n]=T(e[n],t):e[n]="object"===typeof t?T({},t):t}for(var n=0,r=arguments.length;n<r;n++)k(arguments[n],t);return e}function E(e,t,n){return k(t,(function(t,o){e[o]=n&&"function"===typeof t?r(t,n):t})),e}e.exports={isArray:i,isArrayBuffer:u,isBuffer:a,isFormData:c,isArrayBufferView:f,isString:p,isNumber:l,isObject:d,isUndefined:s,isDate:h,isFile:m,isBlob:v,isFunction:g,isStream:y,isURLSearchParams:b,isStandardBrowserEnv:x,forEach:k,merge:j,deepMerge:T,extend:E,trim:w}},c8af:function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},cee4:function(e,t,n){"use strict";var r=n("c532"),o=n("1d2b"),i=n("0a06"),s=n("4a7b"),a=n("2444");function u(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var c=u(a);c.Axios=i,c.create=function(e){return u(s(c.defaults,e))},c.Cancel=n("7a77"),c.CancelToken=n("8df4"),c.isCancel=n("2e67"),c.all=function(e){return Promise.all(e)},c.spread=n("0df6"),e.exports=c,e.exports.default=c},d925:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},e683:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},f28c:function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}function u(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{return r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"===typeof clearTimeout?clearTimeout:s}catch(e){r=s}})();var c,f=[],p=!1,l=-1;function d(){p&&c&&(p=!1,c.length?f=c.concat(f):l=-1,f.length&&h())}function h(){if(!p){var e=a(d);p=!0;var t=f.length;while(t){c=f,f=[];while(++l<t)c&&c[l].run();l=-1,t=f.length}c=null,p=!1,u(e)}}function m(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];f.push(new m(e,t)),1!==f.length||p||a(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},f6b4:function(e,t,n){"use strict";var r=n("c532");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},ffc1:function(e,t,n){var r=n("5ca1"),o=n("504c")(!0);r(r.S,"Object",{entries:function(e){return o(e)}})}}]);