webpackJsonp([1],{"8yh+":function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});t("Z/wl");var a=t("Z1y9"),o=t("qJ7W"),r=t("//Fk"),n=t.n(r),i={props:["id"],data:function(){return{business:{companyName:"",companyRegisterDate:"",companyOperateYear:"",companyOperateAddress:"",proposerName:"",proposerIdno:"",proposerAddress:"",proposerPosition:"",proposerMobile:"",proposerIsMarried:"",proposerSpouseName:"",proposerSpouseIdno:"",proposerSpouseMobile:"",companyLegalPerson:"",companyLegalPersonIdno:"",companyLegalPersonMobile:"",legalPersonActualControllerRelation:"",companyOfficalStaffCount:"",companyCarCount:"",companyParkedCarCount:"",companyMonthDisburse:"",companyTotalAssets:"",companyTotalLiabilities:"",companyExternalGuaranteeAmount:"",companyMonthPaymentAmount:"",grossSalesLastYear:"",grossSalesThisYear:""}}},beforeMount:function(){this.getAjac(this.id)},methods:{getAjac:function(e){var s=this;new n.a(function(t,o){Object(a.a)({url:"/loan/loan-application/"+e,method:"get"}).then(function(e){var t=e.data;1==t.code&&(s.business=t.data)}).catch(function(e){o(e)})})}},filters:{dateFormat:function(e){return e?e.substring(0,10):""}}},l={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"container"},[t("div",{staticClass:"top-main"},[t("div",{staticClass:"information"},[t("div",{staticClass:"p_inline"},[t("p",[t("span",[e._v("申请提交时间：")]),e._v(e._s(e.business.createDate))]),e._v(" "),t("p",[t("span",[e._v("申请金额：")]),e._v(e._s(e.business.loanAmount)+"元")])]),e._v(" "),t("p",[t("span",[e._v("保理业务期限：")]),e._v(e._s(e.business.factoringBusinessDeadline)+"个月")]),e._v(" "),t("div",{staticClass:"p_inline"},[t("p",[t("span",[e._v("所属城市：")]),e._v(e._s(e.business.companyProvinceCode)+e._s(e.business.companyCityCode)+e._s(e.business.companyAreaCode))])])])]),e._v(" "),t("div",{staticClass:"entry-box"},[t("table",{attrs:{border:"1px"}},[t("tr",[t("td",[e._v("公司名称")]),e._v(" "),t("td",[e._v(e._s(e.business.companyName))]),e._v(" "),t("td",[e._v("注册日期")]),e._v(" "),t("td",[e._v(e._s(e._f("dateFormat")(e.business.companyRegisterDate)))])]),e._v(" "),t("tr",[t("td",[e._v("实际经营年限")]),e._v(" "),t("td",[e._v(e._s(e.business.companyOperateYear))]),e._v(" "),t("td",[e._v("实际经营地址")]),e._v(" "),t("td",[e._v(e._s(e.business.companyOperateAddress))])]),e._v(" "),e._m(0),e._v(" "),t("tr",[t("td",[e._v("申请人姓名")]),e._v(" "),t("td",[e._v(e._s(e.business.proposerName))]),e._v(" "),t("td",[e._v("申请人职务")]),e._v(" "),t("td",[e._v(e._s(e.business.proposerPosition))])]),e._v(" "),t("tr",[t("td",[e._v("申请人身份证号")]),e._v(" "),t("td",[e._v(e._s(e.business.proposerIdno))]),e._v(" "),t("td",[e._v("申请人手机")]),e._v(" "),t("td",[e._v(e._s(e.business.proposerMobile))])]),e._v(" "),t("tr",[t("td",[e._v("申请人固定居住地址")]),e._v(" "),t("td",[e._v(e._s(e.business.proposerAddress))]),e._v(" "),t("td",[e._v("申请人婚姻状态")]),e._v(" "),1==e.business.proposerIsMarried?t("td",[e._v("已婚")]):t("td",[e._v("未婚")])]),e._v(" "),e._m(1),e._v(" "),1==e.business.proposerIsMarried?t("tr",[t("td",[e._v("申请人配偶姓名")]),e._v(" "),t("td",[e._v(e._s(e.business.proposerSpouseName))]),e._v(" "),t("td",[e._v("申请人配偶身份证号")]),e._v(" "),t("td",[e._v(e._s(e.business.proposerSpouseIdno))])]):e._e(),e._v(" "),1==e.business.proposerIsMarried?t("tr",[t("td",[e._v("申请人配偶手机")]),e._v(" "),t("td",[e._v(e._s(e.business.proposerSpouseMobile))]),e._v(" "),t("td"),e._v(" "),t("td")]):e._e(),e._v(" "),1==e.business.proposerIsMarried?t("tr",[t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td")]):e._e(),e._v(" "),t("tr",[t("td",[e._v("法人姓名")]),e._v(" "),t("td",[e._v(e._s(e.business.companyLegalPerson))]),e._v(" "),t("td",[e._v("法人身份证号")]),e._v(" "),t("td",[e._v(e._s(e.business.companyLegalPersonIdno))])]),e._v(" "),t("tr",[t("td",[e._v("法人手机")]),e._v(" "),t("td",[e._v(e._s(e.business.companyLegalPersonMobile))]),e._v(" "),t("td",[e._v("法人与实际控制人关系")]),e._v(" "),t("td",[e._v(e._s(e.business.legalPersonActualControllerRelation))])]),e._v(" "),e._m(2),e._v(" "),t("tr",[t("td",[e._v("正式员工数")]),e._v(" "),t("td",[e._v(e._s(e.business.companyOfficalStaffCount))]),e._v(" "),t("td",[e._v("自有车辆数量")]),e._v(" "),t("td",[e._v(e._s(e.business.companyCarCount))])]),e._v(" "),t("tr",[t("td",[e._v("挂靠车辆数量")]),e._v(" "),t("td",[e._v(e._s(e.business.companyParkedCarCount))]),e._v(" "),t("td",[e._v("月均支出（加油费、高速公路费、员工工资等）")]),e._v(" "),t("td",[e._v(e._s(e.business.companyMonthDisburse))])]),e._v(" "),e._m(3),e._v(" "),t("tr",[t("td",[e._v("企业资产总额（房、车、土地、设备）")]),e._v(" "),t("td",[e._v(e._s(e.business.companyTotalAssets))]),e._v(" "),t("td",[e._v("企业负债总额（信用卡、贷款、民间借贷）")]),e._v(" "),t("td",[e._v(e._s(e.business.companyTotalLiabilities))])]),e._v(" "),t("tr",[t("td",[e._v("对外担保金额")]),e._v(" "),t("td",[e._v(e._s(e.business.companyExternalGuaranteeAmount))]),e._v(" "),t("td",[e._v("每月应还款额")]),e._v(" "),t("td",[e._v(e._s(e.business.companyMonthPaymentAmount))])])])])])},staticRenderFns:[function(){var e=this.$createElement,s=this._self._c||e;return s("tr",[s("td"),this._v(" "),s("td"),this._v(" "),s("td"),this._v(" "),s("td")])},function(){var e=this.$createElement,s=this._self._c||e;return s("tr",[s("td"),this._v(" "),s("td"),this._v(" "),s("td"),this._v(" "),s("td")])},function(){var e=this.$createElement,s=this._self._c||e;return s("tr",[s("td"),this._v(" "),s("td"),this._v(" "),s("td"),this._v(" "),s("td")])},function(){var e=this.$createElement,s=this._self._c||e;return s("tr",[s("td"),this._v(" "),s("td"),this._v(" "),s("td"),this._v(" "),s("td")])}]};var p=t("VU/8")(i,l,!1,function(e){t("nvPd"),t("N5hJ")},"data-v-b5862fbc",null).exports,c=t("mvHQ"),u=t.n(c),m=t("RbaZ"),d=t("0xDb"),v=t("ByPo"),_={beforeMount:function(){this.getCity()},data:function(){return{provinces:[],citys:[],areas:[],application_form:{readonly:!0,loanAmount:"",factoringBusinessDeadline:"",companyProvinceCode:"",companyCityCode:"",companyAreaCode:"",city_code:null},application_rules:{loanAmount:[{required:!0,message:"请输入金额",trigger:"blur"}],factoringBusinessDeadline:[{required:!0,message:"请选择保理业务期限",trigger:"change"}],companyProvinceCode:[{required:!0,message:"请选择省级地区",trigger:"change"}],companyCityCode:[{required:!0,message:"请选择市级地区",trigger:"change"}],companyAreaCode:[{required:!0,message:"请选择区级地区",trigger:"change"}]},business:{companyName:"",companyRegisterDate:"",companyOperateYear:"",companyOperateAddress:"",proposerName:"",proposerIdno:"",proposerAddress:"",proposerPosition:"",proposerMobile:"",proposerIsMarried:"",proposerSpouseName:"",proposerSpouseIdno:"",proposerSpouseMobile:"",companyLegalPerson:"",companyLegalPersonIdno:"",companyLegalPersonMobile:"",legalPersonActualControllerRelation:"",companyOfficalStaffCount:"",companyCarCount:"",companyParkedCarCount:"",companyMonthDisburse:"",companyTotalAssets:"",companyTotalLiabilities:"",companyExternalGuaranteeAmount:"",companyMonthPaymentAmount:"",grossSalesLastYear:"",grossSalesThisYear:""},business_rules:{companyName:[{required:!0,message:"请输入申请人公司名称",trigger:"blur"}],companyRegisterDate:[{required:!0,message:"请选择注册日期",trigger:"change"}],companyOperateYear:[{required:!0,message:"请输入申请人公司经营年限",trigger:"blur"}],companyOperateAddress:[{required:!0,message:"请输入申请人公司经营地址",trigger:"blur"}],proposerName:[{required:!0,message:"请输入申请人姓名",trigger:"blur"}],proposerAddress:[{required:!0,message:"此项不能为空",trigger:"blur"}],proposerPosition:[{required:!0,message:"请输入申请人职务",trigger:"blur"}],proposerIsMarried:[{required:!0,message:"请选择是否已婚",trigger:"change"}],companyLegalPerson:[{required:!0,message:"请输入公司法人",trigger:"blur"}],legalPersonActualControllerRelation:[{required:!0,message:"请输入法人与实际控制人关系",trigger:"blur"}],companyOfficalStaffCount:[{required:!0,message:"请输入公司正式员工数量",trigger:"blur"}],companyCarCount:[{required:!0,message:"请输入公司自有车辆数量",trigger:"blur"}],companyParkedCarCount:[{required:!0,message:"此项不能为空",trigger:"blur"}],companyMonthDisburse:[{required:!0,message:"此项不能为空",trigger:"blur"}],companyTotalAssets:[{required:!0,message:"此项不能为空",trigger:"blur"}],companyTotalLiabilities:[{required:!0,message:"此项不能为空",trigger:"blur"}],companyExternalGuaranteeAmount:[{required:!0,message:"此项不能为空",trigger:"blur"}],companyMonthPaymentAmount:[{required:!0,message:"此项不能为空",trigger:"blur"}],grossSalesLastYear:[{required:!0,message:"此项不能为空",trigger:"blur"}],grossSalesThisYear:[{required:!0,message:"此项不能为空",trigger:"blur"}]},pickerOption:{disabledDate:function(e){return e.getTime()>Date.now()-864e4}}}},methods:{validateString:function(e,s,t){var a=v.a.validateRealName(s);a.boolean?t():t(new Error(a.msg))},validateIdCard:function(e,s,t){var a=v.a.validateIdCard(s);a.boolean?t():t(new Error(a.msg))},validatePhone:function(e,s,t){var a=v.a.validatePhoneNum(s);a.boolean?t():t(new Error(a.msg))},getCity:function(){var e=this,s=JSON.parse(localStorage.getItem("city"));s?e.provinces=s:new n.a(function(s,t){Object(a.a)({url:"/city",method:"get"}).then(function(s){var t=s.data;1==t.code&&(e.provinces=Object(m.b)(t.data),localStorage.setItem("city",u()(e.provinces)))}).catch(function(e){t(e)})})},choseProvince:function(e){for(var s in this.provinces)e===this.provinces[s].code&&(this.citys=this.provinces[s].children,this.areas=this.provinces[s].children[0].children,this.application_form.companyCityCode=this.provinces[s].children[0].code,this.application_form.companyAreaCode=null)},choseCity:function(e){for(var s in this.citys)e===this.citys[s].code&&(this.areas=this.citys[s].children,this.application_form.companyAreaCode=this.citys[s].children[0].code)},choseBlock:function(e){},getAjax:function(e){var s=this;new n.a(function(t,o){Object(a.a)({url:"/loan/loan-application/add",method:"post",data:e}).then(function(e){var t=e.data;if(1==t.code){s.$message({type:"success",message:"添加成功，请前往附件管理添加附件"});var a={id:t.data.id,name:"attachment"};s.$emit("childByValue",a)}}).catch(function(e){o(e)})})},onSubmit:function(){var e=this,s=Object(d.a)(this.application_form,this.business);this.$refs.application_form.validate(function(t){t?e.$refs.business.validate(function(t){t?e.getAjax(s):e.$message({type:"error",message:"数据不能为空"})}):e.$message({type:"error",message:"数据不能为空"})})}}},b={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"container"},[t("div",{staticClass:"top-main"},[t("el-form",{ref:"application_form",attrs:{inline:!0,rules:e.application_rules,model:e.application_form,"label-width":"120px"}},[t("el-form-item",{staticClass:"is-required",attrs:{label:"申请金额:",prop:"loanAmount"}},[t("el-input-number",{attrs:{type:"number",step:100,precision:2,min:0},model:{value:e.application_form.loanAmount,callback:function(s){e.$set(e.application_form,"loanAmount",s)},expression:"application_form.loanAmount"}})],1),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"保理业务期限:",prop:"factoringBusinessDeadline"}},[t("el-select",{attrs:{placeholder:"请选择期限"},model:{value:e.application_form.factoringBusinessDeadline,callback:function(s){e.$set(e.application_form,"factoringBusinessDeadline",s)},expression:"application_form.factoringBusinessDeadline"}},[t("el-option",{attrs:{label:"1个月",value:"1"}}),e._v(" "),t("el-option",{attrs:{label:"3个月",value:"3"}}),e._v(" "),t("el-option",{attrs:{label:"6个月",value:"6"}}),e._v(" "),t("el-option",{attrs:{label:"9个月",value:"9"}}),e._v(" "),t("el-option",{attrs:{label:"12个月",value:"12"}}),e._v(" "),t("el-option",{attrs:{label:"24个月",value:"24"}})],1)],1)],1),e._v(" "),t("el-form",{attrs:{inline:!0,model:e.application_form,rules:e.application_rules,"label-width":"120px"}},[t("el-form-item",{staticClass:"is-required",attrs:{label:"所在城市:",prop:"companyProvinceCode"}},[t("el-select",{attrs:{placeholder:"省级地区"},on:{change:e.choseProvince},model:{value:e.application_form.companyProvinceCode,callback:function(s){e.$set(e.application_form,"companyProvinceCode",s)},expression:"application_form.companyProvinceCode"}},e._l(e.provinces,function(e){return t("el-option",{key:e.code,attrs:{label:e.name,value:e.code}})})),e._v(" "),t("el-form-item",{attrs:{prop:"companyCityCode"}},[t("el-select",{attrs:{placeholder:"市级地区"},on:{change:e.choseCity},model:{value:e.application_form.companyCityCode,callback:function(s){e.$set(e.application_form,"companyCityCode",s)},expression:"application_form.companyCityCode"}},e._l(e.citys,function(e){return t("el-option",{key:e.code,attrs:{label:e.name,value:e.code}})}))],1),e._v(" "),t("el-form-item",{attrs:{prop:"companyAreaCode"}},[t("el-select",{attrs:{placeholder:"区级地区"},on:{change:e.choseBlock},model:{value:e.application_form.companyAreaCode,callback:function(s){e.$set(e.application_form,"companyAreaCode",s)},expression:"application_form.companyAreaCode"}},e._l(e.areas,function(e){return t("el-option",{key:e.code,attrs:{label:e.name,value:e.code}})}))],1)],1)],1)],1),e._v(" "),t("div",{staticClass:"entry-box"},[t("el-form",{ref:"business",attrs:{rules:e.business_rules,model:e.business,"label-width":"250px",inline:!0}},[t("el-form-item",{staticClass:"is-required",attrs:{label:"公司名称",prop:"companyName"}},[t("el-input",{model:{value:e.business.companyName,callback:function(s){e.$set(e.business,"companyName",s)},expression:"business.companyName"}})],1),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"注册日期",prop:"companyRegisterDate"}},[t("el-date-picker",{attrs:{"picker-options":e.pickerOption,type:"date","value-format":"yyyy-MM-dd"},model:{value:e.business.companyRegisterDate,callback:function(s){e.$set(e.business,"companyRegisterDate",s)},expression:"business.companyRegisterDate"}})],1),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"实际经营年限",prop:"companyOperateYear"}},[t("el-input",{model:{value:e.business.companyOperateYear,callback:function(s){e.$set(e.business,"companyOperateYear",s)},expression:"business.companyOperateYear"}})],1),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"实际经营地址",prop:"companyOperateAddress"}},[t("el-input",{model:{value:e.business.companyOperateAddress,callback:function(s){e.$set(e.business,"companyOperateAddress",s)},expression:"business.companyOperateAddress"}})],1),e._v(" "),t("div",{staticClass:"form-title"},[e._v("申请人信息")]),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"申请人姓名",prop:"proposerName"}},[t("el-input",{model:{value:e.business.proposerName,callback:function(s){e.$set(e.business,"proposerName",s)},expression:"business.proposerName"}})],1),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"申请人职务",prop:"proposerPosition"}},[t("el-input",{model:{value:e.business.proposerPosition,callback:function(s){e.$set(e.business,"proposerPosition",s)},expression:"business.proposerPosition"}})],1),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"申请人身份证号",prop:"proposerIdno",rules:{required:!0,message:"请输入正确的身份证号码",validator:e.validateIdCard,trigger:"blur"}}},[t("el-input",{model:{value:e.business.proposerIdno,callback:function(s){e.$set(e.business,"proposerIdno",s)},expression:"business.proposerIdno"}})],1),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"申请人手机号",prop:"proposerMobile",rules:{required:!0,message:"请输入正确的手机号码",validator:e.validatePhone,trigger:"blur"}}},[t("el-input",{model:{value:e.business.proposerMobile,callback:function(s){e.$set(e.business,"proposerMobile",s)},expression:"business.proposerMobile"}})],1),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"申请人固定居住地址",prop:"proposerAddress"}},[t("el-input",{model:{value:e.business.proposerAddress,callback:function(s){e.$set(e.business,"proposerAddress",s)},expression:"business.proposerAddress"}})],1),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"申请人婚姻状态",prop:"proposerIsMarried"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.business.proposerIsMarried,callback:function(s){e.$set(e.business,"proposerIsMarried",s)},expression:"business.proposerIsMarried"}},[t("el-option",{attrs:{label:"未婚",value:"0"}}),e._v(" "),t("el-option",{attrs:{label:"已婚",value:"1"}})],1)],1),e._v(" "),1==e.business.proposerIsMarried?[t("div",{staticClass:"form-title"},[e._v("配偶信息")]),e._v(" "),t("el-form-item",{attrs:{label:"申请人配偶姓名"}},[t("el-input",{model:{value:e.business.proposerSpouseName,callback:function(s){e.$set(e.business,"proposerSpouseName",s)},expression:"business.proposerSpouseName"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"申请人配偶身份证号"}},[t("el-input",{model:{value:e.business.proposerSpouseIdno,callback:function(s){e.$set(e.business,"proposerSpouseIdno",s)},expression:"business.proposerSpouseIdno"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"申请人配偶手机"}},[t("el-input",{model:{value:e.business.proposerSpouseMobile,callback:function(s){e.$set(e.business,"proposerSpouseMobile",s)},expression:"business.proposerSpouseMobile"}})],1)]:e._e(),e._v(" "),t("div",{staticClass:"form-title"},[e._v("法人信息")]),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"法人姓名",prop:"companyLegalPerson"}},[t("el-input",{model:{value:e.business.companyLegalPerson,callback:function(s){e.$set(e.business,"companyLegalPerson",s)},expression:"business.companyLegalPerson"}})],1),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"法人身份证号",prop:"companyLegalPersonIdno",rules:{required:!0,message:"请输入正确的身份证号码",validator:e.validateIdCard,trigger:"blur"}}},[t("el-input",{model:{value:e.business.companyLegalPersonIdno,callback:function(s){e.$set(e.business,"companyLegalPersonIdno",s)},expression:"business.companyLegalPersonIdno"}})],1),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"法人手机",prop:"companyLegalPersonMobile",rules:{required:!0,message:"请输入正确的手机号码",validator:e.validatePhone,trigger:"blur"}}},[t("el-input",{model:{value:e.business.companyLegalPersonMobile,callback:function(s){e.$set(e.business,"companyLegalPersonMobile",s)},expression:"business.companyLegalPersonMobile"}})],1),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"法人与实际控制人关系",prop:"legalPersonActualControllerRelation"}},[t("el-input",{model:{value:e.business.legalPersonActualControllerRelation,callback:function(s){e.$set(e.business,"legalPersonActualControllerRelation",s)},expression:"business.legalPersonActualControllerRelation"}})],1),e._v(" "),t("div",{staticClass:"form-title"},[e._v("企业信息")]),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"正式员工数",prop:"companyOfficalStaffCount"}},[t("el-input",{model:{value:e.business.companyOfficalStaffCount,callback:function(s){e.$set(e.business,"companyOfficalStaffCount",s)},expression:"business.companyOfficalStaffCount"}})],1),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"自有车辆数量",prop:"companyCarCount"}},[t("el-input",{model:{value:e.business.companyCarCount,callback:function(s){e.$set(e.business,"companyCarCount",s)},expression:"business.companyCarCount"}})],1),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"挂靠车辆数量",prop:"companyParkedCarCount"}},[t("el-input",{model:{value:e.business.companyParkedCarCount,callback:function(s){e.$set(e.business,"companyParkedCarCount",s)},expression:"business.companyParkedCarCount"}})],1),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"月均支出（加油费、高速公路费、员工工资等）",prop:"companyMonthDisburse"}},[t("el-input",{model:{value:e.business.companyMonthDisburse,callback:function(s){e.$set(e.business,"companyMonthDisburse",s)},expression:"business.companyMonthDisburse"}})],1),e._v(" "),t("div",{staticClass:"form-title"},[e._v("资产信息")]),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"企业资产总额（房、车、土地、设备）",prop:"companyTotalAssets"}},[t("el-input",{model:{value:e.business.companyTotalAssets,callback:function(s){e.$set(e.business,"companyTotalAssets",s)},expression:"business.companyTotalAssets"}})],1),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"企业负债总额（信用卡、贷款、民间借贷）",prop:"companyTotalLiabilities"}},[t("el-input",{model:{value:e.business.companyTotalLiabilities,callback:function(s){e.$set(e.business,"companyTotalLiabilities",s)},expression:"business.companyTotalLiabilities"}})],1),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"对外担保金额",prop:"companyExternalGuaranteeAmount"}},[t("el-input",{model:{value:e.business.companyExternalGuaranteeAmount,callback:function(s){e.$set(e.business,"companyExternalGuaranteeAmount",s)},expression:"business.companyExternalGuaranteeAmount"}})],1),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"每月应还款额",prop:"companyMonthPaymentAmount"}},[t("el-input",{model:{value:e.business.companyMonthPaymentAmount,callback:function(s){e.$set(e.business,"companyMonthPaymentAmount",s)},expression:"business.companyMonthPaymentAmount"}})],1),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"去年销售收入总额",prop:"grossSalesLastYear"}},[t("el-input",{model:{value:e.business.grossSalesLastYear,callback:function(s){e.$set(e.business,"grossSalesLastYear",s)},expression:"business.grossSalesLastYear"}})],1),e._v(" "),t("el-form-item",{staticClass:"is-required",attrs:{label:"本年已实现销售收入总额",prop:"grossSalesThisYear"}},[t("el-input",{model:{value:e.business.grossSalesThisYear,callback:function(s){e.$set(e.business,"grossSalesThisYear",s)},expression:"business.grossSalesThisYear"}})],1),e._v(" "),t("div",{staticClass:"buttons"},[t("el-button",{staticClass:"blue el-button el-button--primary",on:{click:e.onSubmit}},[e._v("确认提交")]),e._v(" "),t("el-button",[e._v("取消")])],1)],2)],1)])},staticRenderFns:[]};var f=t("VU/8")(_,b,!1,function(e){t("ZBwk"),t("e9rk")},"data-v-1c6b826e",null).exports,y={components:{AttachmentPreview:o.b,EntryView:f,ExamineView:p},beforeMount:function(){var e=this.$route.params.id;e&&(this.id=e,this.firstName="资料查看")},data:function(){return{id:"",activeName:"first",firstName:"资料录入"}},methods:{childByValue:function(e){this.id=e.id,this.activeName=e.name},handleClick:function(e,s){}}},g={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"main"},[t("div",{staticClass:"content entry-content"},[t("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(s){e.activeName=s},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:e.firstName,name:"first"}},[e.id?t("examine-view",{attrs:{id:e.id}}):t("entry-view",{on:{childByValue:e.childByValue}})],1),e._v(" "),t("el-tab-pane",{attrs:{label:"附件管理",name:"attachment"}},[t("div",{staticClass:"attachment-preview"},[t("attachment-preview",{attrs:{uploadType:"'upload'",uploadId:e.id}})],1)])],1)],1)])},staticRenderFns:[]};var C=t("VU/8")(y,g,!1,function(e){t("YA7U"),t("P5vT")},"data-v-2b70f810",null);s.default=C.exports},ByPo:function(e,s,t){"use strict";var a=6,o=12,r={PHONE_REG:/^1[0-9]{10}$/,CAPTCHA_REG:/^[a-zA-Z]{4}$/,ID_CARD_REG:/^(\d{18}$|^\d{17}(\d|X|x))$/,SMS_CODE_REG:/^[0-9]{6}$/,BANK_ACCOUNT_REG:/^\d{16}|\d{19}$/},n={INVALID_PHONE_NUMBER:"手机号码不合法，请重新输入",PHONE_ALREADY_REGISTERED:"此手机号已被注册",PHONE_NOT_REGISTERED:"此手机号非注册用户",INVALID_CAPTCHA:"请输入4位英文字母验证码",PASS_TOO_SINPLE:"密码过于简单",PASS_TOO_LONE:"密码最长不超过"+o+"位字符串",PASS_NOT_NULL:"密码不能为空",PASS_UNEQUAL_PASS_CONF:"密码输入不匹配，请重新输入",SMS_CAN_NOT_BE_NULL:"请填写短信验证码",NAME_CAN_NOT_BE_NULL:"请填写姓名",ID_CARD_INVALID:"请填写正确的身份证号码",INVALID_SMS_CODE:"请输入正确的短信验证码",BANK_ACCOUNT:"请输入正确的银行卡号"};s.a={validatePhoneNum:function(e){return{boolean:r.PHONE_REG.test(e.trim()),msg:n.INVALID_PHONE_NUMBER}},validateCaptcha:function(e){return{boolean:r.CAPTCHA_REG.test(e.trim()),msg:n.INVALID_CAPTCHA}},validatePassword:function(e){var s="";return""==e.trim()?{boolean:!1,msg:s=n.PASS_NOT_NULL}:e.length<a?{boolean:!1,msg:s=n.PASS_TOO_SINPLE}:e.length>o?{boolean:!1,msg:s=n.PASS_TOO_LONE}:{boolean:!0,msg:s}},validatePassConf:function(e,s){return{boolean:e==s,msg:n.PASS_UNEQUAL_PASS_CONF}},validateSms:function(e){return{boolean:""!=e.trim(),msg:n.SMS_CAN_NOT_BE_NULL}},validateRealName:function(e){return{boolean:""!=e.trim(),msg:n.NAME_CAN_NOT_BE_NULL}},validateIdCard:function(e){return{boolean:r.ID_CARD_REG.test(e.trim()),msg:n.ID_CARD_INVALID}},validateSmsCode:function(e){return{boolean:r.SMS_CODE_REG.test(e.trim()),msg:n.INVALID_SMS_CODE}},validateBankAccount:function(e){return{boolean:r.BANK_ACCOUNT_REG.test(e.trim()),msg:n.BANK_ACCOUNT}}}},N5hJ:function(e,s){},P5vT:function(e,s){},RbaZ:function(e,s,t){"use strict";s.a=function(e){for(var s=[],t={},a=0;a<e.length;a++)for(var o in e[a])e[a].label=e[a].name+"-----"+e[a].targetUrl;for(var r=0,n=e.length;r<n;r++)t[e[r].id]=e[r];for(var i=0,l=e.length;i<l;i++)t[e[i].parentId]&&e[i].id!=e[i].parentId?(t[e[i].parentId].children||(t[e[i].parentId].children=[]),t[e[i].parentId].children.push(e[i])):s.push(e[i]);return s},s.b=function(e){for(var s=[],t={},a=0,o=e.length;a<o;a++)t[e[a].code]=e[a];for(var r=0,n=e.length;r<n;r++)t[e[r].parentCode]&&e[r].code!=e[r].parentCode?(t[e[r].parentCode].children||(t[e[r].parentCode].children=[]),t[e[r].parentCode].children.push(e[r])):s.push(e[r]);return s}},YA7U:function(e,s){},"Z/wl":function(e,s,t){"use strict"},ZBwk:function(e,s){},e9rk:function(e,s){},mvHQ:function(e,s,t){e.exports={default:t("qkKv"),__esModule:!0}},nvPd:function(e,s){},qkKv:function(e,s,t){var a=t("FeBl"),o=a.JSON||(a.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}}});