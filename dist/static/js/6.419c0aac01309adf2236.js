webpackJsonp([6],{"4NIm":function(a,e){},"61fI":function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t("//Fk"),n=t.n(i),s=t("qJ7W"),r=t("Z1y9"),l=(t("zL8q"),{components:{History:s.e,ApplicationInformation:s.a,Qualification:s.h,EnterpriseRiskInformation:s.d,PersonalQualification:s.f,PersonalRiskInformation:s.g,AttachmentPreviewId:s.c},beforeMount:function(){this.id=this.$route.params.id,this.taskId=this.$route.params.taskId,this.getInit(this.id,this.taskId)},data:function(){return{id:"",taskId:"",activeName:"first",review:{result:"",list:[{value:"3",name:"不通过"},{value:"4",name:"需要下户"},{value:"2",name:"通过"}],reason:"",reason_list:[{value:"0",name:"缺少资料"},{value:"1",name:"账户流水不足"},{value:"2",name:"负债过多"}],amount:"",remark:""},reviewRules:{result:[{required:!0,message:"请选择审核结果",trigger:"change"}],amount:[{required:!0,validator:function(a,e,t){/^\d+$/g.test(e)?"0"===e?t(new Error("审核金额不能为0")):t():t(new Error("请输入审核金额"))},trigger:"blur"}],remark:[{required:!0,message:"请填写备注",trigger:"blur"}]},review_info:"1",data:{companyName:"",loanAmount:"",createDate:"",factoringBusinessDeadline:"",applyStatus:"",companyProvinceCode:"",companyCityCode:"",companyAreaCode:"",approvalAmount:""},page:{}}},methods:{handleClick:function(a,e){"history"==a.name&&this.getAjax(1)},infoClick:function(a,e){},reviewResult:function(){var a=this,e={taskId:this.$route.params.taskId,status:this.review.result,approvalAmount:this.review.amount,remark:this.review.remark,reason:this.review.reason};this.$refs.review.validate(function(t){t&&a.reviewAjax(e)})},reviewAjax:function(a){var e=this;new n.a(function(t,i){Object(r.a)({url:"/approval/app",method:"post",data:a}).then(function(a){var t=a.data;1==t.code&&(e.$message({message:t.msg}),e.$router.push({path:"/approval_management/approval_list"}))}).catch(function(a){i(a)})})},getInit:function(a,e){var t=this;new n.a(function(i,n){Object(r.a)({url:"/approval/taskInfo/"+a+"?taskId="+e,method:"get"}).then(function(a){var e=a.data;1==e.code&&(t.data=e.data.loan,t.review.amount=t.data.approvalAmount)}).catch(function(a){n(a)})})},getAjax:function(a){var e=this,t=this;new n.a(function(i,n){Object(r.a)({url:"/loan/loan-application-history/"+e.id+"?page="+a+"&pageSize=10",method:"get"}).then(function(a){var e=a.data;1==e.code&&(t.page=e.data)}).catch(function(a){n(a)})})}}}),o={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"main"},[t("el-tabs",{staticClass:"tabs",on:{"tab-click":a.handleClick},model:{value:a.activeName,callback:function(e){a.activeName=e},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"审核详情",name:"first"}},[t("div",{staticClass:"information"},[t("div",{staticClass:"p_inline"},[t("p",[t("span",[a._v("申请提交时间：")]),a._v(a._s(a.data.createDate))]),a._v(" "),t("p",[t("span",[a._v("申请金额：")]),a._v(a._s(a.data.loanAmount))])]),a._v(" "),t("p",[t("span",[a._v("保理业务期限：")]),a._v(a._s(a.data.factoringBusinessDeadline)+"个月")]),a._v(" "),t("div",{staticClass:"p_inline"},[t("p",[t("span",[a._v("所属城市：")]),a._v(a._s(a.data.companyProvinceCode)+"  "+a._s(a.data.companyCityCode)+"  "+a._s(a.data.companyAreaCode))]),a._v(" "),t("p",[t("span",[a._v("公司名称：")]),a._v(a._s(a.data.companyName))])]),a._v(" "),1==a.data.applyStatus?t("p",[t("span",[a._v("状态：")]),a._v("待审核")]):2==a.data.applyStatus?t("p",[t("span",[a._v("状态：")]),a._v("通过")]):3==a.data.applyStatus?t("p",[t("span",[a._v("状态：")]),a._v("不通过")]):4==a.data.applyStatus?t("p",[t("span",[a._v("状态：")]),a._v("下户中")]):5==a.data.applyStatus?t("p",[t("span",[a._v("状态：")]),a._v("已下户")]):a._e()]),a._v(" "),1!=a.data.applyStatus?t("div",{staticClass:"result"},[t("p",[a._v("审批结果")]),a._v(" "),t("p",[2==a.data.applyStatus?t("span",[a._v("通过")]):3==a.data.applyStatus?t("span",[a._v("不通过 --")]):4==a.data.applyStatus?t("span",[a._v("下户")]):a._e(),a._v("\n          "+a._s(a.data.reason)+"\n        ")])]):a._e(),a._v(" "),1==a.data.applyStatus?t("div",{staticClass:"review_result"},[t("el-form",{ref:"review",attrs:{model:a.review,rules:a.reviewRules,"label-width":"100px"}},[[t("el-form-item",{staticClass:"inline-block",attrs:{prop:"result",label:"审核结果"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:a.review.result,callback:function(e){a.$set(a.review,"result",e)},expression:"review.result"}},a._l(a.review.list,function(a){return t("el-option",{key:a.value,attrs:{label:a.name,value:a.value}})}))],1),a._v(" "),"3"==a.review.result?[t("el-form-item",{staticClass:"inline-block",attrs:{prop:"reason",label:"不通过原因"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:a.review.reason,callback:function(e){a.$set(a.review,"reason",e)},expression:"review.reason"}},a._l(a.review.reason_list,function(a){return t("el-option",{key:a.value,attrs:{label:a.name,value:a.name}})}))],1)]:a._e(),a._v(" "),t("el-button",{staticClass:"el-button el-button--success",on:{click:a.reviewResult}},[a._v("确认审批结果")])],a._v(" "),t("el-form-item",{staticClass:"input-box",attrs:{prop:"amount",label:"审批额度"}},[t("el-input",{staticClass:"review-input",model:{value:a.review.amount,callback:function(e){a.$set(a.review,"amount",e)},expression:"review.amount"}})],1),a._v(" "),t("el-form-item",{staticClass:"input-box",attrs:{prop:"remark",label:"审核备注"}},[t("el-input",{staticClass:"review-input max-width",model:{value:a.review.remark,callback:function(e){a.$set(a.review,"remark",e)},expression:"review.remark"}})],1)],2)],1):a._e(),a._v(" "),t("el-tabs",{staticClass:"info_tab",attrs:{type:"card"},on:{"tab-click":a.infoClick},model:{value:a.review_info,callback:function(e){a.review_info=e},expression:"review_info"}},[t("el-tab-pane",{attrs:{label:"申请信息",name:"1"}},[t("application-information",{attrs:{id:a.id,business:a.data}})],1),a._v(" "),t("el-tab-pane",{attrs:{label:"附件预览",name:"6"}},[t("attachment-preview-id",{attrs:{uploadId:a.id}})],1)],1)],1),a._v(" "),t("el-tab-pane",{attrs:{label:"审核历史记录",name:"history"}},[t("history",{attrs:{id:a.id,page:"page"}})],1)],1)],1)},staticRenderFns:[]};var v=t("VU/8")(l,o,!1,function(a){t("4NIm"),t("ho7+")},"data-v-a7a910e6",null);e.default=v.exports},"ho7+":function(a,e){}});