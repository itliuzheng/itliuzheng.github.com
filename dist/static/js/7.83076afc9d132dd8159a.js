webpackJsonp([7],{MZYl:function(n,e){},"T+/8":function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=6,r=12,a={INVALID_PHONE_NUMBER:"手机号码不合法，请重新输入",PHONE_ALREADY_REGISTERED:"此手机号已被注册",PHONE_NOT_REGISTERED:"此手机号非注册用户",INVALID_CAPTCHA:"请输入4位英文字母验证码",PASS_TOO_SINPLE:"密码过于简单",PASS_TOO_LONE:"密码最长不超过"+r+"位字符串",PASS_NOT_NULL:"密码不能为空",PASS_UNEQUAL_PASS_CONF:"密码输入不匹配，请重新输入",SMS_CAN_NOT_BE_NULL:"请填写短信验证码",NAME_CAN_NOT_BE_NULL:"请填写姓名",ID_CARD_INVALID:"请填写正确的身份证号码",INVALID_SMS_CODE:"请输入正确的短信验证码",BANK_ACCOUNT:"请输入正确的银行卡号"},s=function(n){var e="";return""==n.trim()?{boolean:!1,msg:e=a.PASS_NOT_NULL}:n.length<t?{boolean:!1,msg:e=a.PASS_TOO_SINPLE}:n.length>r?{boolean:!1,msg:e=a.PASS_TOO_LONE}:{boolean:!0,msg:e}},i=function(n){return{boolean:""!=n.trim(),msg:a.NAME_CAN_NOT_BE_NULL}},l={name:"login",data:function(){return{loginRules:{username:[{required:!0,trigger:"blur",validator:function(n,e,o){var t=i(e);t.boolean?o():o(new Error(t.msg))},message:"请填写用户名"}],password:[{required:!0,trigger:"blur",validator:function(n,e,o){var t=s(e);t.boolean?o():o(new Error(t.msg))}}]},loginForm:{username:"",password:""},lang:{title:"系统登录",username:"用户名",password:"密码",logIn:"登录"},loading:!1,redirect:null}},watch:{$route:{handler:function(n){this.redirect=n.query&&n.query.redirect},immediate:!0}},methods:{handleLogin:function(){var n=this;this.$refs.loginForm.validate(function(e){if(!e)return!1;n.loading=!0,n.$store.dispatch("LoginByUsername",n.loginForm).then(function(){n.loading=!1,n.$router.push({path:n.redirect||"/"})}).catch(function(){n.loading=!1})})}}},u={render:function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("div",{staticClass:"login-container"},[o("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:n.loginForm,"auto-complete":"on","label-position":"left",rules:n.loginRules}},[o("div",{staticClass:"title-container"},[o("h3",[n._v(n._s(n.lang.title))])]),n._v(" "),o("el-form-item",{attrs:{prop:"username"}},[o("span",{staticClass:"svg-container svg-container_login"},[o("svg-icon",{attrs:{"icon-class":"user"}})],1),n._v(" "),o("el-input",{attrs:{placeholder:n.lang.username,name:"username",type:"text","auto-complete":"on"},model:{value:n.loginForm.username,callback:function(e){n.$set(n.loginForm,"username",e)},expression:"loginForm.username"}})],1),n._v(" "),o("el-form-item",{attrs:{prop:"password"}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"password"}})],1),n._v(" "),o("el-input",{attrs:{placeholder:n.lang.password,name:"passwod",type:"password","auto-complete":"on"},model:{value:n.loginForm.password,callback:function(e){n.$set(n.loginForm,"password",e)},expression:"loginForm.password"}})],1),n._v(" "),o("el-button",{staticClass:"login-button",attrs:{loading:n.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),n.handleLogin(e)}}},[n._v(n._s(n.lang.logIn))])],1)],1)},staticRenderFns:[]};var c=o("VU/8")(l,u,!1,function(n){o("uTnL"),o("MZYl")},"data-v-289c84f6",null);e.default=c.exports},uTnL:function(n,e){}});