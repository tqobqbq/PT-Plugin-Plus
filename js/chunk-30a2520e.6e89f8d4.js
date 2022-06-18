(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30a2520e"],{bdd7:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"system-logs"},[s("v-alert",{attrs:{value:!0,type:"info"}},[e._v(e._s(e.$t("systemLog.title")))]),s("v-card",[s("v-card-title",[s("v-btn",{attrs:{color:"error",disabled:0==e.selected.length}},[s("v-icon",{staticClass:"mr-2"},[e._v("remove")]),e._v("\n        "+e._s(e.$t("common.remove"))+"\n      ")],1),s("v-btn",{attrs:{color:"error",disabled:0==e.items.length},on:{click:e.clear}},[s("v-icon",{staticClass:"mr-2"},[e._v("clear")]),e._v("\n        "+e._s(e.$t("common.clear"))+"\n      ")],1),s("v-btn",{attrs:{color:"success"},on:{click:e.save}},[s("v-icon",[e._v("save")]),s("span",{staticClass:"ml-1"},[e._v(e._s(e.$t("systemLog.save")))])],1),s("v-spacer"),s("v-text-field",{staticClass:"search",attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:e.filterKey,callback:function(t){e.filterKey=t},expression:"filterKey"}})],1),s("v-data-table",{staticClass:"elevation-1",attrs:{search:e.filterKey,headers:e.headers,items:e.items,pagination:e.pagination,"item-key":"time","select-all":"","rows-per-page-items":e.options.rowsPerPageItems},on:{"update:pagination":[function(t){e.pagination=t},e.updatePagination]},scopedSlots:e._u([{key:"items",fn:function(t){return[s("tr",{on:{click:function(e){t.expanded=!t.expanded}}},[s("td",{staticStyle:{width:"20px"}},[s("v-checkbox",{attrs:{primary:"","hide-details":""},model:{value:t.selected,callback:function(s){e.$set(t,"selected",s)},expression:"props.selected"}})],1),s("td",[e._v(e._s(t.item.module))]),s("td",[e._v(e._s(t.item.event))]),s("td",[e._v(e._s(e._f("formatDate")(t.item.time,"YYYY-MM-DD HH:mm:ss")))]),s("td",[e._v(e._s(t.item.msg))]),s("td",[s("v-icon",{attrs:{small:"",color:"error"},on:{click:function(s){return e.removeConfirm(t.item)}}},[e._v("delete")])],1)])]}},{key:"expand",fn:function(t){return[s("v-card",{attrs:{flat:""}},[s("v-card-text",[e._v(e._s(e.getErrorDetail(t.item.data)))])],1)]}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),s("v-dialog",{attrs:{width:"300"},model:{value:e.dialogRemoveConfirm,callback:function(t){e.dialogRemoveConfirm=t},expression:"dialogRemoveConfirm"}},[s("v-card",[s("v-card-title",{staticClass:"headline red lighten-2"},[e._v(e._s(e.$t("common.removeConfirmTitle")))]),s("v-card-text",[e._v(e._s(e.$t("common.removeConfirm")))]),s("v-divider"),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{flat:"",color:"info"},on:{click:function(t){e.dialogRemoveConfirm=!1}}},[s("v-icon",[e._v("cancel")]),s("span",{staticClass:"ml-1"},[e._v(e._s(e.$t("common.cancel")))])],1),s("v-btn",{attrs:{color:"error",flat:""},on:{click:e.remove}},[s("v-icon",[e._v("check_circle_outline")]),s("span",{staticClass:"ml-1"},[e._v(e._s(e.$t("common.ok")))])],1)],1)],1)],1),s("v-snackbar",{attrs:{top:"",timeout:3e3,color:"error"},model:{value:e.haveError,callback:function(t){e.haveError=t},expression:"haveError"}},[e._v(e._s(e.errorMsg))]),s("v-snackbar",{attrs:{bottom:"",timeout:3e3,color:"success"},model:{value:e.haveSuccess,callback:function(t){e.haveSuccess=t},expression:"haveSuccess"}},[e._v(e._s(e.successMsg))])],1)},o=[],i=(s("6b54"),s("2b0e")),n=s("f62e"),r=s("a1f4"),c=s("21a6"),l=s.n(c),m=new r["a"],d=i["default"].extend({data:function(){return{selected:[],selectedItem:{},pagination:{rowsPerPage:10,sortBy:"time",descending:!0},items:[],dialogRemoveConfirm:!1,options:this.$store.state.options,errorMsg:"",haveError:!1,haveSuccess:!1,successMsg:"",filterKey:""}},methods:{clear:function(){var e=this;confirm(this.$t("common.clearConfirm").toString())&&m.sendRequest(n["b"].clearSystemLogs).then((function(t){e.items=t}))},remove:function(){var e=this;m.sendRequest(n["b"].removeSystemLogs,null,[this.selectedItem]).then((function(t){console.log("removeSystemLogs",t),e.items=t})),this.dialogRemoveConfirm=!1},removeConfirm:function(e){this.selectedItem=e,this.dialogRemoveConfirm=!0},getSystemLogs:function(){var e=this;m.sendRequest(n["b"].getSystemLogs).then((function(t){e.items=t}))},save:function(){var e=window.Blob,t=new e([JSON.stringify(this.items)],{type:"text/plain"});l.a.saveAs(t,"PT-Plugin-Plus-System-Logs.json")},updatePagination:function(e){console.log(e),this.$store.dispatch("updatePagination",{key:n["l"].systemLogs,options:e})},getErrorDetail:function(e){var t="";if(e)try{t=JSON.stringify(e)}catch(s){t=""}return t}},created:function(){this.getSystemLogs(),this.pagination=this.$store.getters.pagination(n["l"].systemLogs,{rowsPerPage:10,sortBy:"time",descending:!0})},computed:{headers:function(){return[{text:this.$t("systemLog.headers.module"),align:"left",value:"module"},{text:this.$t("systemLog.headers.event"),align:"left",value:"event"},{text:this.$t("systemLog.headers.time"),align:"left",value:"time"},{text:this.$t("systemLog.headers.msg"),align:"left",value:"msg"},{text:this.$t("systemLog.headers.action"),value:"name",sortable:!1}]}}}),v=d,u=(s("f39b"),s("2877")),f=s("6544"),g=s.n(f),h=s("0798"),p=s("8336"),b=s("b0af"),_=s("99d9"),y=s("12b2"),k=s("ac7c"),C=s("8fea"),x=s("169a"),S=s("ce7e"),$=s("132d"),w=s("2db4"),L=s("9910"),V=s("2677"),P=Object(u["a"])(v,a,o,!1,null,"b59afe68",null);t["default"]=P.exports;g()(P,{VAlert:h["a"],VBtn:p["a"],VCard:b["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:y["a"],VCheckbox:k["a"],VDataTable:C["a"],VDialog:x["a"],VDivider:S["a"],VIcon:$["a"],VSnackbar:w["a"],VSpacer:L["a"],VTextField:V["a"]})},f39b:function(e,t,s){"use strict";s("f4be")},f4be:function(e,t,s){}}]);