!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var t=n();for(var o in t)("object"==typeof exports?exports:e)[o]=t[o]}}("undefined"!=typeof self?self:this,function(){return webpackJsonp([5],{"3erz":function(e,n){},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});t("Qbok");var o={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var r=t("VU/8")({name:"App"},o,!1,function(e){t("3erz")},null,null).exports,i=t("/ocq");Vue.use(i.a);var u=new i.a({mode:"history",base:"/dist/",routes:[{path:"/",name:"login",component:function(e){return t.e(0).then(function(){var n=[t("EV1k")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"/HelloWorld/",name:"HelloWorld",component:function(e){return t.e(2).then(function(){var n=[t("gORT")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"/fail/",name:"fail",component:function(e){return t.e(1).then(function(){var n=[t("OBhn")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"*",name:"undefinedfail",component:function(e){return t.e(3).then(function(){var n=[t("ReZk")];e.apply(null,n)}.bind(this)).catch(t.oe)}}]}),a=t("mtWM"),p=t.n(a);Vue.use(u),Vue.prototype.$http=p.a,Vue.config.productionTip=!1,new Vue({el:"#app",router:u,render:function(e){return e(r)},template:"<App/>"})},Qbok:function(e,n){}},["NHnr"])});