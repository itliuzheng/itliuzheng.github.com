webpackJsonp([7],{Hu2C:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{management:{name:"",company:"",id_number:"",review:"1",date:""},tableData:[{company:"网联运输",confirm_name:"王武（信审）",date:"2016-05-02",name:"王小虎",id_number:"110101199206301212",id_people:"",state:"待下户",id:14}]}},methods:{inquire:function(){},handleClick:function(e){var t=e.id;this.$router.push({path:"/approval_management/household_review/"+t})}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("div",{staticClass:"top-main"},[a("el-form",{ref:"management",attrs:{inline:!0,model:e.management,"label-position":"top"}},[a("el-form-item",{attrs:{label:"申请人姓名:"}},[a("el-input",{model:{value:e.management.name,callback:function(t){e.$set(e.management,"name",t)},expression:"management.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"申请公司名称:"}},[a("el-input",{model:{value:e.management.company,callback:function(t){e.$set(e.management,"company",t)},expression:"management.company"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"发起下户日期:"}},[a("el-date-picker",{attrs:{type:"date",placeholder:""},model:{value:e.management.date,callback:function(t){e.$set(e.management,"date",t)},expression:"management.date"}})],1),e._v(" "),a("div",{staticClass:"inquire"},[a("el-button",{staticClass:"el-button el-button--primary",on:{click:e.inquire}},[e._v("查询")])],1)],1)],1),e._v(" "),a("div",{staticClass:"content"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"date",label:"下户提交时间",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"confirm_name",label:"下户确认人",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"company",label:"申请单位名称",width:"160px"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"贷款申请人姓名",width:"150px"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id_number",label:"申请人身份证号",width:"150px"}}),e._v(" "),a("el-table-column",{attrs:{prop:"state",label:"审批状态",width:"80px"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.handleClick(t.row)}}},[e._v("下户录入")])]}}])})],1)],1)])},staticRenderFns:[]};var i=a("VU/8")(n,l,!1,function(e){a("clUE"),a("p7qK")},"data-v-57ff1eae",null);t.default=i.exports},clUE:function(e,t){},p7qK:function(e,t){}});