(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab081"],{1419:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-alert",{attrs:{value:!0,type:"info"}},[e._v(e._s(e.$t("searchResultSnapshot.title")))]),a("v-card",[a("v-card-title",[a("v-btn",{attrs:{color:"error",disabled:0==e.selected.length},on:{click:e.removeSelected}},[a("v-icon",{staticClass:"mr-2"},[e._v("remove")]),e._v("\n        "+e._s(e.$t("common.remove"))+"\n      ")],1),a("v-btn",{attrs:{color:"error",disabled:0==e.items.length},on:{click:e.clear}},[a("v-icon",{staticClass:"mr-2"},[e._v("clear")]),e._v("\n        "+e._s(e.$t("common.clear"))+"\n      ")],1),a("v-btn",{attrs:{color:"info",href:"https://github.com/ronggang/PT-Plugin-Plus/wiki/search-result-snapshot",target:"_blank",rel:"noopener noreferrer nofollow"}},[a("v-icon",{staticClass:"mr-2"},[e._v("help")]),e._v("\n        "+e._s(e.$t("settings.searchSolution.index.help"))+"\n      ")],1),a("v-spacer"),a("v-text-field",{staticClass:"search",attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""}})],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.items,pagination:e.pagination,"item-key":"id","select-all":""},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"items",fn:function(t){return[a("td",{staticStyle:{width:"20px"}},[a("v-checkbox",{attrs:{primary:"","hide-details":""},model:{value:t.selected,callback:function(a){e.$set(t,"selected",a)},expression:"props.selected"}})],1),a("td",[e._v(e._s(t.item.key)+" "+e._s(e.getInfos(t.item)))]),a("td",[e._v(e._s(e._f("formatDate")(t.item.time)))]),a("td",[a("v-btn",{staticClass:"mx-0",attrs:{flat:"",icon:"",small:"",title:e.$t("searchResultSnapshot.show"),to:"/search-torrent/show-snapshot-"+t.item.id}},[a("v-icon",{attrs:{small:""}},[e._v("image_search")])],1),a("v-btn",{staticClass:"mx-0",attrs:{flat:"",icon:"",small:"",color:"error",title:e.$t("common.remove")},on:{click:function(a){return e.removeConfirm(t.item)}}},[a("v-icon",{attrs:{small:""}},[e._v("delete")])],1)],1)]}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),a("v-dialog",{attrs:{width:"300"},model:{value:e.dialogRemoveConfirm,callback:function(t){e.dialogRemoveConfirm=t},expression:"dialogRemoveConfirm"}},[a("v-card",[a("v-card-title",{staticClass:"headline red lighten-2"},[e._v(e._s(e.$t("searchResultSnapshot.removeConfirmTitle")))]),a("v-card-text",[e._v(e._s(e.$t("searchResultSnapshot.removeConfirm")))]),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{flat:"",color:"info"},on:{click:function(t){e.dialogRemoveConfirm=!1}}},[a("v-icon",[e._v("cancel")]),a("span",{staticClass:"ml-1"},[e._v(e._s(e.$t("common.cancel")))])],1),a("v-btn",{attrs:{color:"error",flat:""},on:{click:function(t){return e.remove()}}},[a("v-icon",[e._v("check_circle_outline")]),a("span",{staticClass:"ml-1"},[e._v(e._s(e.$t("common.ok")))])],1)],1)],1)],1),a("v-snackbar",{attrs:{top:"",timeout:3e3,color:"error"},model:{value:e.haveError,callback:function(t){e.haveError=t},expression:"haveError"}},[e._v(e._s(e.errorMsg))]),a("v-snackbar",{attrs:{bottom:"",timeout:3e3,color:"success"},model:{value:e.haveSuccess,callback:function(t){e.haveSuccess=t},expression:"haveSuccess"}},[e._v(e._s(e.successMsg))])],1)},o=[],n=(a("6b54"),a("2b0e")),r=a("f62e"),c=a("a1f4"),l=new c["a"],i=n["default"].extend({data:function(){return{selected:[],selectedItem:{},pagination:{rowsPerPage:10,sortBy:"time",descending:!0},items:[],dialogRemoveConfirm:!1,options:this.$store.state.options,errorMsg:"",haveError:!1,haveSuccess:!1,successMsg:"",siteCache:{}}},methods:{clear:function(){var e=this;confirm(this.$t("searchResultSnapshot.clearConfirm").toString())&&l.sendRequest(r["b"].clearSearchResultSnapshot).then((function(t){console.log("clearSearchResultSnapshot",t),e.items=[]}))},removeSelected:function(){this.selected&&this.selected.length>0&&confirm(this.$t("common.removeSelectedConfirm",{count:this.selected.length}).toString())&&this.remove(this.selected)},remove:function(e){var t=this;e||(e=[this.selectedItem]),l.sendRequest(r["b"].removeSearchResultSnapshot,null,e).then((function(e){console.log("removeSearchResultSnapshot",e),t.items=e})),this.dialogRemoveConfirm=!1},removeConfirm:function(e){this.selectedItem=e,this.dialogRemoveConfirm=!0},loadSearchResultSnapshot:function(){var e=this;l.sendRequest(r["b"].loadSearchResultSnapshot).then((function(t){console.log("loadSearchResultSnapshot",t),e.items=t}))},getInfos:function(e){var t="";return e.searchPayload&&(e.searchPayload.cn?t=e.searchPayload.cn:e.searchPayload.en&&(t=e.searchPayload.en)),t}},created:function(){this.loadSearchResultSnapshot()},computed:{headers:function(){return[{text:this.$t("searchResultSnapshot.headers.key"),align:"left",value:"data.key"},{text:this.$t("searchResultSnapshot.headers.time"),align:"left",value:"time"},{text:this.$t("history.headers.action"),value:"name",sortable:!1}]}}}),h=i,d=a("2877"),v=a("6544"),m=a.n(v),u=a("0798"),f=a("8336"),p=a("b0af"),g=a("99d9"),_=a("12b2"),b=a("ac7c"),S=a("8fea"),C=a("169a"),k=a("ce7e"),R=a("132d"),x=a("2db4"),$=a("9910"),y=a("2677"),w=Object(d["a"])(h,s,o,!1,null,null,null);t["default"]=w.exports;m()(w,{VAlert:u["a"],VBtn:f["a"],VCard:p["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:_["a"],VCheckbox:b["a"],VDataTable:S["a"],VDialog:C["a"],VDivider:k["a"],VIcon:R["a"],VSnackbar:x["a"],VSpacer:$["a"],VTextField:y["a"]})}}]);