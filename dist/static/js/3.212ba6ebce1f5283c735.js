webpackJsonp([3],{PkzY:function(e,s){},"Z/wl":function(e,s,t){"use strict"},ZLcT:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t("//Fk"),i=t.n(a),n=(t("Z/wl"),t("Z1y9")),r={components:{AttachmentPreview:t("qJ7W").b},beforeMount:function(){var e=this.$route.params.id;this.id=e,this.business.loanId=e,this.getInit(e)},data:function(){return{id:"",loading:!1,activeName:"first",firstName:"下户信息",topContext:{companyRegisterDate:"",loanAmount:"",factoringBusinessDeadline:"",companyProvinceCode:"",companyCityCode:"",companyAreaCode:"",companyName:"",applyStatus:"4"},business:{loanId:"",reportOrganisation:"",businessNum:"",sponsorCustomerManager:"",sponsorCustomerManagerPhone:"",supportCustomerManager:"",supportCustomerManagerPhone:"",sponsorPersonnel:"",supportPersonnel:"",businessInfo:{projectName:"",applyForAmount:"",applyForDate:"",expireDate:"",monthlyRate:"",annualRate:"",isFirst:"",paymentWay:""},companyInfo:[{investigationItemName:"经营项目",investigationItemResult:""},{investigationItemName:"行业分类",investigationItemResult:""},{investigationItemName:"经营地址",investigationItemResult:""},{investigationItemName:"法定代表人",investigationItemResult:""},{investigationItemName:"实际经营年限",investigationItemResult:""},{investigationItemName:"法人持股比例（%）",investigationItemResult:""},{investigationItemName:"正式员工人数",investigationItemResult:""},{investigationItemName:"异常情况",investigationItemResult:""}],projectExceptionAskInfo:[{askName:"民间借贷情况",askResult:"",askTarget:""},{askName:"对企业发展前景是否有规划、是否具有前瞻性眼光",askResult:"",askTarget:""},{askName:"本人及配偶投资情况（股市、基金、期货、房产）",askResult:"",askTarget:""},{askName:"有无高利贷",askResult:"",askTarget:""},{askName:"有无黄赌毒不良嗜好",askResult:"",askTarget:""},{askName:"有无复杂社会背景",askResult:"",askTarget:""}],projectExceptionViewInfo:[{viewName:"办公地址与公司注册地址不一致",viewResult:"",viewDate:""},{viewName:"机器设备、物流车辆随意搁置",viewResult:"",viewDate:""},{viewName:"企业员工无所事事、表情异样",viewResult:"",viewDate:""},{viewName:"客流稀少、气氛低沉",viewResult:"",viewDate:""},{viewName:"线下现金收付款",viewResult:"",viewDate:""},{viewName:"企业有其他互斥的兼职业务,如物资代销",viewResult:"",viewDate:""},{viewName:"无紧急情况处置预案",viewResult:"",viewDate:""},{viewName:"重要场所（厂房、库房）无显著标识",viewResult:"",viewDate:""},{viewName:"经销商办公场所无样品/报价单",viewResult:"",viewDate:""},{viewName:"合同大多为新签订或格式异常",viewResult:"",viewDate:""},{viewName:"各种书面资料大多无法提供",viewResult:"",viewDate:""},{viewName:"与所述业务不匹配的经营环境",viewResult:"",viewDate:""},{viewName:"无关键库房/厂房的钥匙、管库人员不在",viewResult:"",viewDate:""},{viewName:"不合常理的业务安排",viewResult:"",viewDate:""},{viewName:"单据情况",viewResult:"",viewDate:""}],invoicesInfo:[{invoicesName:"身份证（借款人及配偶、法人）",isSeeYourself:"",remark:""},{invoicesName:"婚姻证明",isSeeYourself:"",remark:""},{invoicesName:"营业执照",isSeeYourself:"",remark:""},{invoicesName:"实际控制人证明",isSeeYourself:"",remark:""},{invoicesName:"固定居住地证明",isSeeYourself:"",remark:""},{invoicesName:"固定经营场所证明",isSeeYourself:"",remark:""},{invoicesName:"道路运输许可证",isSeeYourself:"",remark:""},{invoicesName:"申请人及配偶个人征信报告（要求查询时间在申请时间2个月内）",isSeeYourself:"",remark:""},{invoicesName:"企业征信报告（要求查询时间在申请时间2个月内）",isSeeYourself:"",remark:""},{invoicesName:"银行流水",isSeeYourself:"",remark:""},{invoicesName:"应收账款明细及账期",isSeeYourself:"",remark:""},{invoicesName:"主要经营合同",isSeeYourself:"",remark:""}],historyData:[{dataName:"纳税申报表及回执",have:""},{dataName:"财报",have:""},{dataName:"账户信息",have:""}],projectRelatedInfo:[{projectRelatedName:"交易对手是否有小贷公司典当行",projectRelatedAmount:"",remark:""},{projectRelatedName:"是否有大额异常交易",projectRelatedAmount:"",remark:""},{projectRelatedName:"是否有法院",projectRelatedAmount:"",remark:""},{projectRelatedName:"资金是否整进整出",projectRelatedAmount:"",remark:""},{projectRelatedName:"月均出账金额",projectRelatedAmount:"",remark:""},{projectRelatedName:"月均进账",projectRelatedAmount:"",remark:""},{projectRelatedName:"近两季度结息金额",projectRelatedAmount:"",remark:""},{projectRelatedName:"所有银行经营账户近一年总日均",projectRelatedAmount:"",remark:""},{projectRelatedName:"资产负债信息",projectRelatedAmount:"",remark:""}],assetInfo:[{assetName:"房产（房产证、购房发票、实地照片）",assetAmount:"",placeholder:"需为借款人夫妻名下或贷款企业名下：中介询价（中介名片或电话）、网站截图、评估报告",remark:""},{assetName:"车辆（行驶证、机动车登记证、实地照片）",assetAmount:"",placeholder:"需为借款人夫妻名下或贷款企业名下：中介询价（中介名片或电话）、网站截图、评估报告",remark:""},{assetName:"机器设备（购买合同、发票）",assetAmount:"",placeholder:"需为借款人夫妻名下或贷款企业名下",remark:""},{assetName:"土地证",placeholder:"需为借款人夫妻名下或贷款企业名下、非集体所有、权属清晰",assetAmount:"",remark:""},{assetName:"应收账款",placeholder:"应收账款：70%",assetAmount:"",remark:""},{assetName:"货币资产",placeholder:"银行存款、国债：100%；理财产品、股票、基金、债券、信托：80％",assetAmount:"",remark:""},{assetName:"其他",placeholder:"若有，则备注",assetAmount:"",remark:""},{assetName:"资产总额（自动计算项）",placeholder:"",assetAmount:"",disabled:!0,remark:""}],liabilitiesInfo:[{liabilitiesName:"信用卡",liabilitiesAmount:"",placeholder:"未销户贷记卡信息汇总——最近6个月平均使用额度",remark:""},{liabilitiesName:"个人贷款",liabilitiesAmount:"",placeholder:"未结清贷款信息汇总——余额",remark:""},{liabilitiesName:"企业贷款",liabilitiesAmount:"",placeholder:"负债信息概要合计——余额",remark:""},{liabilitiesName:"应付账款",liabilitiesAmount:"",placeholder:"",remark:""},{liabilitiesName:"民间借贷",liabilitiesAmount:"",placeholder:"交谈、银行异常流水核查",remark:""},{liabilitiesName:"对外担保（按50%计算负债）",liabilitiesAmount:"",placeholder:"准入：对外担保≤净资产的3倍",remark:""},{liabilitiesName:"月应还负债（人工计算项）",liabilitiesAmount:"",placeholder:"",remark:""},{liabilitiesName:"负债总额（自动计算项）",liabilitiesAmount:"",placeholder:"",disabled:!0,remark:""},{liabilitiesName:"净资产（自动计算项）",liabilitiesAmount:"",placeholder:"资产总额-负债总额",disabled:!0,remark:""},{liabilitiesName:"资产负债率（自动计算项）",liabilitiesAmount:"",disabled:!0,placeholder:"准入：（负债总额+本次申请金额）/资产总额≤70%",remark:""}],saleInfo:[{name:"企业上年销售总额",expenses:""},{name:"今年当前销售总额",expenses:""},{name:"企业上年销售净利润",expenses:""},{name:"今年当前销售净利润",expenses:""},{name:"上年净利润率（自动计算项）",expenses:"",disables:!0},{name:"今年净利润率（自动计算项）",expenses:"",disables:!0},{name:"运营支出",expenses:""},{name:"正式员工数",expenses:""},{name:"员工工资（月）",expenses:""},{name:"月加油费",expenses:""},{name:"月高速公路费",expenses:""},{name:"月车辆维修费",expenses:""},{name:"月场地租赁费",expenses:""},{name:"月车辆保险费",expenses:""},{name:"保险费",expenses:""},{name:"月均总支出（自动计算项）",expenses:"",disables:!0},{name:"企业最近半年员工工资发放凭证及明细",expenses:""}]},business_rules:{},pickerOption:{disabledDate:function(e){return e.getTime()>Date.now()-864e4}}}},methods:{validateString:function(e,s,t){var a=tool.validateRealName(s);a.boolean?t():t(new Error(a.msg))},validateIdCard:function(e,s,t){var a=tool.validateIdCard(s);a.boolean?t():t(new Error(a.msg))},validatePhone:function(e,s,t){var a=tool.validatePhoneNum(s);a.boolean?t():t(new Error(a.msg))},getInit:function(e){var s=this;new i.a(function(t,a){Object(n.a)({url:"/loan/loan-application/"+e,method:"get"}).then(function(e){var t=e.data;1==t.code&&(s.topContext=t.data)}).catch(function(e){a(e)})})},handleClick:function(e,s){},liabilities:function(){var e="";return this.business.liabilitiesInfo.forEach(function(s,t){var a=parseFloat(s.liabilitiesAmount);"信用卡"==s.liabilitiesName?isNaN(a)||(e=1*e+1*a):"个人贷款"==s.liabilitiesName?isNaN(a)||(e=1*e+1*a):"企业贷款"==s.liabilitiesName?isNaN(a)||(e=1*e+1*a):"应付账款"==s.liabilitiesName?isNaN(a)||(e=1*e+1*a):"民间借贷"==s.liabilitiesName?isNaN(a)||(e=1*e+1*a):"对外担保（按50%计算负债）"==s.liabilitiesName&&(isNaN(a)||(e=1*e+1*a))}),e},assetsTotal:function(){var e="";return this.business.assetInfo.forEach(function(s,t){var a=parseFloat(s.assetAmount),i=s.assetName;"房产（房产证、购房发票、实地照片）"==i?isNaN(a)||(e=1*e+1*a):"车辆（行驶证、机动车登记证、实地照片）"==i?isNaN(a)||(e=1*e+1*a):"机器设备（购买合同、发票）"==i?isNaN(a)||(e=1*e+1*a):"土地证"==i?isNaN(a)||(e=1*e+1*a):"应收账款"==i?isNaN(a)||(e=1*e+1*a):"货币资产"==i?isNaN(a)||(e=1*e+1*a):"其他"==i&&(isNaN(a)||(e=1*e+1*a))}),e},profilTotle:function(){var e={firstHalf:"",firstHalf_profil:"",yearHalf:"",yearHalf_profil:"",total_month:""},s="0";return this.business.saleInfo.forEach(function(t,a){"企业上年销售总额"==t.name?e.firstHalf=parseFloat(t.expenses):"企业上年销售净利润"==t.name?e.firstHalf_profil=parseFloat(t.expenses):"今年当前销售总额"==t.name?e.yearHalf=parseFloat(t.expenses):"今年当前销售净利润"==t.name&&(e.yearHalf_profil=parseFloat(t.expenses));var i=parseFloat(t.expenses);"运营支出"==t.name?isNaN(i)||(s=1*s+1*i):"员工工资（月）"==t.name?isNaN(i)||(s=1*s+1*i):"月加油费"==t.name?isNaN(i)||(s=1*s+1*i):"月高速公路费"==t.name?isNaN(i)||(s=1*s+1*i):"月车辆维修费"==t.name?isNaN(i)||(s=1*s+1*i):"月场地租赁费"==t.name?isNaN(i)||(s=1*s+1*i):"月车辆保险费"==t.name?isNaN(i)||(s=1*s+1*i):"保险费"==t.name&&(isNaN(i)||(s=1*s+1*i))}),e.total_month=s,e},autoChange:function(e){var s=this;this.business.liabilitiesInfo.forEach(function(e,t){switch(e.liabilitiesName){case"负债总额（自动计算项）":e.liabilitiesAmount=s.liabilities();break;case"净资产（自动计算项）":var a=s.assetsTotal();e.liabilitiesAmount=a-s.liabilities();break;case"资产负债率（自动计算项）":var i=s.liabilities();e.liabilitiesAmount=100*parseFloat((i+1*s.topContext.loanAmount)/s.assetsTotal())+"%"}}),this.business.assetInfo.forEach(function(e,t){switch(e.assetName){case"资产总额（自动计算项）":e.assetAmount=s.assetsTotal()}})},autoCalc:function(e){var s=this;this.business.saleInfo.forEach(function(e,t){var a=s.profilTotle();switch(e.name){case"上年净利润率（自动计算项）":var i=parseFloat(a.firstHalf_profil/a.firstHalf).toFixed(4);isNaN(i)?e.expenses="0%":e.expenses=100*i+"%";break;case"今年净利润率（自动计算项）":s.assetsTotal();var n=parseFloat(a.yearHalf_profil/a.yearHalf).toFixed(4);isNaN(n)?e.expenses="0%":e.expenses=100*n+"%";break;case"月均总支出（自动计算项）":e.expenses=a.total_month}})},onSubmit:function(){var e=this;e.loading=!0,this.$refs.business.validate(function(s){s?e.getAjax():(e.$message({type:"error",message:"数据不能为空"}),e.loading=!1)})},getAjax:function(){var e=this;new i.a(function(s,t){Object(n.a)({url:"/loan/offline-due-diligence/add",method:"post",data:e.business}).then(function(s){1==s.data.code?e.$message({type:"success",message:"提交成功"}):e.$message({type:"error",message:"提交失败,请重新提交"}),e.loading=!1}).catch(function(s){e.loading=!1,t(s)})})}}},l={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"main"},[t("div",{staticClass:"content entry-content household_review"},[t("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(s){e.activeName=s},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:e.firstName,name:"first"}},[t("div",{staticClass:"top-main"},[t("div",{staticClass:"information"},[t("div",{staticClass:"p_inline"},[t("p",[t("span",[e._v("申请提交时间：")]),e._v(e._s(e.topContext.companyRegisterDate))]),e._v(" "),t("p",[t("span",[e._v("申请金额：")]),e._v(e._s(e.topContext.loanAmount)+"元")])]),e._v(" "),t("p",[t("span",[e._v("保理业务期限：")]),e._v(e._s(e.topContext.factoringBusinessDeadline)+"个月")]),e._v(" "),t("div",{staticClass:"p_inline"},[t("p",[t("span",[e._v("所属城市：")]),e._v(e._s(e.topContext.companyProvinceCode)+e._s(e.topContext.companyCityCode)+e._s(e.topContext.companyAreaCode))]),e._v(" "),t("p",[t("span",[e._v("公司名称：")]),e._v(e._s(e.topContext.companyName))])]),e._v(" "),1==e.topContext.applyStatus?t("p",[t("span",[e._v("状态：")]),e._v("待审核")]):2==e.topContext.applyStatus?t("p",[t("span",[e._v("状态：")]),e._v("通过")]):3==e.topContext.applyStatus?t("p",[t("span",[e._v("状态：")]),e._v("不通过")]):4==e.topContext.applyStatus?t("p",[t("span",[e._v("状态：")]),e._v("下户中")]):5==e.topContext.applyStatus?t("p",[t("span",[e._v("状态：")]),e._v("已下户")]):e._e()])]),e._v(" "),t("div",{staticClass:"entry-box"},[t("el-form",{ref:"business",attrs:{rules:e.business_rules,model:e.business,"label-width":"250px",inline:!0}},[t("el-form-item",{staticClass:"is-required",attrs:{label:"上报机构",prop:"reportOrganisation",rules:[{required:!0,message:"此项不能为空",trigger:"blur"}]}},[t("el-input",{model:{value:e.business.reportOrganisation,callback:function(s){e.$set(e.business,"reportOrganisation",s)},expression:"business.reportOrganisation"}})],1),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"业务编号",prop:"businessNum",rules:[{required:!0,message:"此项不能为空",trigger:"blur"}]}},[t("el-input",{model:{value:e.business.businessNum,callback:function(s){e.$set(e.business,"businessNum",s)},expression:"business.businessNum"}})],1),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"主办客户经理",prop:"sponsorCustomerManager",rules:[{required:!0,message:"此项不能为空",trigger:"blur"}]}},[t("el-input",{model:{value:e.business.sponsorCustomerManager,callback:function(s){e.$set(e.business,"sponsorCustomerManager",s)},expression:"business.sponsorCustomerManager"}})],1),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"联系电话（手机）",prop:"sponsorCustomerManagerPhone",rules:[{required:!0,message:"此项不能为空",trigger:"blur"}]}},[t("el-input",{model:{value:e.business.sponsorCustomerManagerPhone,callback:function(s){e.$set(e.business,"sponsorCustomerManagerPhone",s)},expression:"business.sponsorCustomerManagerPhone"}})],1),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"协办客户经理",prop:"supportCustomerManager",rules:[{required:!0,message:"此项不能为空",trigger:"blur"}]}},[t("el-input",{model:{value:e.business.supportCustomerManager,callback:function(s){e.$set(e.business,"supportCustomerManager",s)},expression:"business.supportCustomerManager"}})],1),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"联系电话（手机）",prop:"supportCustomerManagerPhone",rules:[{required:!0,message:"此项不能为空",trigger:"blur"}]}},[t("el-input",{model:{value:e.business.supportCustomerManagerPhone,callback:function(s){e.$set(e.business,"supportCustomerManagerPhone",s)},expression:"business.supportCustomerManagerPhone"}})],1),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"主办人员",prop:"sponsorPersonnel",rules:[{required:!0,message:"此项不能为空",trigger:"blur"}]}},[t("el-input",{model:{value:e.business.sponsorPersonnel,callback:function(s){e.$set(e.business,"sponsorPersonnel",s)},expression:"business.sponsorPersonnel"}})],1),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"协办人员",prop:"supportPersonnel",rules:[{required:!0,message:"此项不能为空",trigger:"blur"}]}},[t("el-input",{model:{value:e.business.supportPersonnel,callback:function(s){e.$set(e.business,"supportPersonnel",s)},expression:"business.supportPersonnel"}})],1),e._v(" "),t("div",{staticClass:"form-title"},[e._v("业务信息")]),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"产品名称",prop:"businessInfo.projectName",rules:[{required:!0,message:"此项不能为空",trigger:"blur"}]}},[t("el-input",{model:{value:e.business.businessInfo.projectName,callback:function(s){e.$set(e.business.businessInfo,"projectName",s)},expression:"business.businessInfo.projectName"}})],1),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"申请金额",prop:"businessInfo.applyForAmount",rules:[{required:!0,message:"此项不能为空",trigger:"blur"}]}},[t("el-input",{model:{value:e.business.businessInfo.applyForAmount,callback:function(s){e.$set(e.business.businessInfo,"applyForAmount",s)},expression:"business.businessInfo.applyForAmount"}})],1),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"申请日",prop:"businessInfo.applyForDate",rules:[{required:!0,message:"此项不能为空",trigger:"blur"}]}},[t("el-date-picker",{attrs:{"picker-options":e.pickerOption,type:"date","value-format":"yyyy-MM-dd"},model:{value:e.business.businessInfo.applyForDate,callback:function(s){e.$set(e.business.businessInfo,"applyForDate",s)},expression:"business.businessInfo.applyForDate"}})],1),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"到期日",prop:"businessInfo.expireDate",rules:[{required:!0,message:"此项不能为空",trigger:"blur"}]}},[t("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd"},model:{value:e.business.businessInfo.expireDate,callback:function(s){e.$set(e.business.businessInfo,"expireDate",s)},expression:"business.businessInfo.expireDate"}})],1),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"月利率",prop:"businessInfo.monthlyRate",rules:[{required:!0,message:"此项不能为空",trigger:"blur"}]}},[t("el-input",{model:{value:e.business.businessInfo.monthlyRate,callback:function(s){e.$set(e.business.businessInfo,"monthlyRate",s)},expression:"business.businessInfo.monthlyRate"}})],1),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"年利率",prop:"businessInfo.annualRate",rules:[{required:!0,message:"此项不能为空",trigger:"blur"}]}},[t("el-input",{model:{value:e.business.businessInfo.annualRate,callback:function(s){e.$set(e.business.businessInfo,"annualRate",s)},expression:"business.businessInfo.annualRate"}})],1),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"是否首次",prop:"businessInfo.isFirst",rules:[{required:!0,message:"此项不能为空",trigger:"blur"}]}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.business.businessInfo.isFirst,callback:function(s){e.$set(e.business.businessInfo,"isFirst",s)},expression:"business.businessInfo.isFirst"}},[t("el-option",{attrs:{label:"是",value:"true"}}),e._v(" "),t("el-option",{attrs:{label:"否",value:"false"}})],1)],1),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"还款方式",prop:"businessInfo.paymentWay",rules:[{required:!0,message:"此项不能为空",trigger:"blur"}]}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.business.businessInfo.paymentWay,callback:function(s){e.$set(e.business.businessInfo,"paymentWay",s)},expression:"business.businessInfo.paymentWay"}},[t("el-option",{attrs:{label:"等额本息",value:"等额本息"}}),e._v(" "),t("el-option",{attrs:{label:"还本付息",value:"还本付息"}})],1)],1),e._v(" "),t("div",{staticClass:"form-title"},[e._v("公司信息")]),e._v(" "),e._l(e.business.companyInfo,function(s,a){return t("el-form-item",{key:s.investigationItemName+a,staticClass:"is-required",attrs:{label:s.investigationItemName,prop:"companyInfo."+a+".investigationItemResult",rules:{required:!0,message:"此项不能为空",trigger:"blur"}}},[t("el-input",{model:{value:s.investigationItemResult,callback:function(t){e.$set(s,"investigationItemResult",t)},expression:"list.investigationItemResult"}})],1)}),e._v(" "),t("table",{staticClass:"list-table"},[t("tr",[t("th",[e._v("异常项目（问询）")]),e._v(" "),t("th",[e._v("询问结果")]),e._v(" "),t("th",[e._v("询问对象")])]),e._v(" "),e._l(e.business.projectExceptionAskInfo,function(s,a){return t("tr",[t("td",[e._v(e._s(s.askName))]),e._v(" "),t("td",[t("el-form-item",{attrs:{prop:"projectExceptionAskInfo."+a+".askResult",rules:{required:!0,message:"此项不能为空",trigger:"blur"},"show-message":!1}},[t("el-input",{model:{value:s.askResult,callback:function(t){e.$set(s,"askResult",t)},expression:"list.askResult"}})],1)],1),e._v(" "),t("td",[t("el-form-item",{attrs:{"show-message":!1}},[t("el-input",{model:{value:s.askTarget,callback:function(t){e.$set(s,"askTarget",t)},expression:"list.askTarget"}})],1)],1)])})],2),e._v(" "),t("table",{staticClass:"list-table"},[t("tr",[t("th",[e._v("异常项目（观察）")]),e._v(" "),t("th",[e._v("观察结果")]),e._v(" "),t("th",[e._v("观察时间")])]),e._v(" "),e._l(e.business.projectExceptionViewInfo,function(s,a){return t("tr",[t("td",[e._v(e._s(s.viewName))]),e._v(" "),t("td",[t("el-form-item",{attrs:{prop:"projectExceptionViewInfo."+a+".viewResult",rules:{required:!0,message:"此项不能为空",trigger:"blur"},"show-message":!1}},[t("el-input",{model:{value:s.viewResult,callback:function(t){e.$set(s,"viewResult",t)},expression:"list.viewResult"}})],1)],1),e._v(" "),t("td",[t("el-form-item",{attrs:{prop:"projectExceptionViewInfo."+a+".viewDate",rules:{required:!0,message:"",trigger:"change"},"show-message":!1}},[t("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd"},model:{value:s.viewDate,callback:function(t){e.$set(s,"viewDate",t)},expression:"list.viewDate"}})],1)],1)])})],2),e._v(" "),t("table",{staticClass:"list-table"},[t("tr",[t("th",[e._v("单据项目")]),e._v(" "),t("th",[e._v("是否亲见原件")]),e._v(" "),t("th",[e._v("备注")])]),e._v(" "),e._l(e.business.invoicesInfo,function(s,a){return t("tr",[t("td",[e._v(e._s(s.invoicesName))]),e._v(" "),t("td",[t("el-form-item",{attrs:{prop:"invoicesInfo."+a+".isSeeYourself",rules:{required:!0,message:"",trigger:"change"},"show-message":!1}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:s.isSeeYourself,callback:function(t){e.$set(s,"isSeeYourself",t)},expression:"list.isSeeYourself"}},[t("el-option",{attrs:{label:"是",value:"是"}}),e._v(" "),t("el-option",{attrs:{label:"否",value:"否"}})],1)],1)],1),e._v(" "),t("td",[t("el-form-item",{attrs:{"show-message":!1}},[t("el-input",{model:{value:s.remark,callback:function(t){e.$set(s,"remark",t)},expression:"list.remark"}})],1)],1)])})],2),e._v(" "),t("table",{staticClass:"list-table"},[t("tr",[t("th",[e._v("历史数据")]),e._v(" "),t("th",[e._v("（运单、回单、发票、打款记录、TMS、财务软件）")])]),e._v(" "),e._l(e.business.historyData,function(s,a){return t("tr",[t("td",[e._v(e._s(s.dataName))]),e._v(" "),t("td",[t("el-form-item",{attrs:{prop:"historyData."+a+".have",rules:{required:!0,message:"",trigger:"change"},"show-message":!1}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:s.have,callback:function(t){e.$set(s,"have",t)},expression:"list.have"}},[t("el-option",{attrs:{label:"有",value:"有"}}),e._v(" "),t("el-option",{attrs:{label:"没有",value:"没有"}})],1)],1)],1)])})],2),e._v(" "),t("table",{staticClass:"list-table"},[t("tr",[t("th",[e._v("项目名称")]),e._v(" "),t("th",[e._v("金额")]),e._v(" "),t("th",[e._v("备注")])]),e._v(" "),e._l(e.business.projectRelatedInfo,function(s,a){return t("tr",[t("td",[e._v(e._s(s.projectRelatedName))]),e._v(" "),t("td",[t("el-form-item",{attrs:{prop:"projectRelatedInfo."+a+".projectRelatedAmount",rules:{required:!0,message:"",trigger:"blur"},"show-message":!1}},[t("el-input",{model:{value:s.projectRelatedAmount,callback:function(t){e.$set(s,"projectRelatedAmount",t)},expression:"list.projectRelatedAmount"}})],1)],1),e._v(" "),t("td",[t("el-form-item",{attrs:{"show-message":!1}},[t("el-input",{model:{value:s.remark,callback:function(t){e.$set(s,"remark",t)},expression:"list.remark"}})],1)],1)])})],2),e._v(" "),t("table",{staticClass:"list-table"},[t("tr",[t("th",[e._v("资产类型")]),e._v(" "),t("th",[e._v("金额")]),e._v(" "),t("th",[e._v("备注")])]),e._v(" "),e._l(e.business.assetInfo,function(s,a){return t("tr",[t("td",[e._v(e._s(s.assetName))]),e._v(" "),t("td",[t("el-form-item",{attrs:{prop:"assetInfo."+a+".assetAmount",rules:{required:!0,message:"",trigger:"blur"},"show-message":!1}},[t("el-input",{attrs:{disabled:s.disabled,placeholder:s.placeholder},on:{change:function(s){e.autoChange()}},model:{value:s.assetAmount,callback:function(t){e.$set(s,"assetAmount",e._n(t))},expression:"list.assetAmount"}})],1)],1),e._v(" "),t("td",[t("el-form-item",{attrs:{"show-message":!1}},[t("el-input",{model:{value:s.remark,callback:function(t){e.$set(s,"remark",t)},expression:"list.remark"}})],1)],1)])})],2),e._v(" "),t("div",{staticClass:"form-title"},[e._v("负债信息")]),e._v(" "),t("table",{staticClass:"list-table"},[t("tr",[t("th",[e._v("负债总额（自动计算项）")]),e._v(" "),t("th",[e._v("金额")]),e._v(" "),t("th",[e._v("备注")])]),e._v(" "),e._l(e.business.liabilitiesInfo,function(s,a){return t("tr",[t("td",[e._v(e._s(s.liabilitiesName))]),e._v(" "),t("td",[t("el-form-item",{attrs:{prop:"liabilitiesInfo."+a+".liabilitiesAmount",rules:{required:!0,message:"",trigger:"blur"},"show-message":!1}},[t("el-input",{attrs:{disabled:s.disabled,placeholder:s.placeholder},on:{change:function(t){e.autoChange(s)}},model:{value:s.liabilitiesAmount,callback:function(t){e.$set(s,"liabilitiesAmount",t)},expression:"list.liabilitiesAmount"}})],1)],1),e._v(" "),t("td",[t("el-form-item",{attrs:{"show-message":!1}},[t("el-input",{model:{value:s.remark,callback:function(t){e.$set(s,"remark",t)},expression:"list.remark"}})],1)],1)])})],2),e._v(" "),t("div",{staticClass:"form-title"},[e._v("销售情况")]),e._v(" "),t("ul",{staticClass:"table-ul clearfix"},e._l(e.business.saleInfo,function(s,a){return t("li",[t("el-form-item",{key:s.name+a,staticClass:"is-required",attrs:{label:s.name,prop:"saleInfo."+a+".expenses",rules:{required:!0,message:"此项不能为空",trigger:"blur"}}},[t("el-input",{attrs:{disabled:s.disables},on:{change:function(s){e.autoCalc()}},model:{value:s.expenses,callback:function(t){e.$set(s,"expenses",t)},expression:"list.expenses"}})],1)],1)})),e._v(" "),t("div",{staticClass:"buttons"},[t("el-button",{staticClass:"blue el-button el-button--primary",attrs:{loading:e.loading},on:{click:e.onSubmit}},[e._v("确认提交")])],1)],2)],1)]),e._v(" "),t("el-tab-pane",{attrs:{label:"附件管理",name:"attachment"}},[t("div",{staticClass:"attachment-preview"},[t("attachment-preview",{attrs:{uploadType:"'upload'",uploadId:e.id}})],1)])],1)],1)])},staticRenderFns:[]};var o=t("VU/8")(r,l,!1,function(e){t("qN7x"),t("PkzY")},"data-v-b0becc84",null);s.default=o.exports},qN7x:function(e,s){}});