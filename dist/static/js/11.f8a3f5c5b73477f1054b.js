webpackJsonp([11],{H96L:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("//Fk"),l=a.n(n),o=a("Z1y9"),i=(a("0xDb"),{data:function(){return{pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}],disabledDate:function(e){return e.getTime()>Date.now()-864e4}},date:"",management:{proposerName:"",companyName:"",proposerIdno:"",startDate:"",endDate:"",applyStatus:"1,5",page:1,pageSize:10},page:{current:"",pageSize:"",pages:"",total:"",records:[]}}},deactivated:function(){this.$destroy(!0)},beforeMount:function(){this.ajaxPage()},methods:{handleCurrentChange:function(e){this.management.page=e,this.ajaxPage()},inquire:function(){this.management.page=1,this.ajaxPage()},handleClick:function(e){var t=e.id;this.$router.push({path:"/review/detail/"+t})},lookClick:function(e){var t=e.id;this.$router.push({path:"/review/detail/"+t+"?type=look"})},ajaxPage:function(){var e=this.date;e&&(this.management.startDate=e[0],this.management.endDate=e[1]);var t=this;new l.a(function(e,a){Object(o.a)({url:"/loan/loan-application/getPendingApprovalPage",method:"post",data:t.management}).then(function(n){var l=n.data;1==l.code?(l.data&&(t.page=l.data),e()):a()}).catch(function(e){a()})})}}}),s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("div",{staticClass:"top-main"},[a("el-form",{ref:"management",attrs:{inline:!0,model:e.management,"label-position":"top"}},[a("el-form-item",{attrs:{label:"申请人姓名:"}},[a("el-input",{model:{value:e.management.proposerName,callback:function(t){e.$set(e.management,"proposerName",t)},expression:"management.proposerName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"申请公司名称:"}},[a("el-input",{model:{value:e.management.companyName,callback:function(t){e.$set(e.management,"companyName",t)},expression:"management.companyName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"申请人身份证号:"}},[a("el-input",{model:{value:e.management.proposerIdno,callback:function(t){e.$set(e.management,"proposerIdno",t)},expression:"management.proposerIdno"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"申请日期:"}},[a("el-date-picker",{staticClass:"date-pickers",attrs:{type:"daterange",align:"right","unlink-panels":"","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),e._v(" "),a("div",{staticClass:"inquire"},[a("el-button",{staticClass:"el-button el-button--primary",on:{click:e.inquire}},[e._v("查询")])],1)],1)],1),e._v(" "),a("div",{staticClass:"content list-dome"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.page.records,border:""}},[a("el-table-column",{attrs:{prop:"companyName",label:"申请公司名称",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createDate",label:"申请时间",width:"100px"}}),e._v(" "),a("el-table-column",{attrs:{prop:"proposerName",label:"申请人姓名",width:"100px"}}),e._v(" "),a("el-table-column",{attrs:{prop:"proposerIdno",label:"申请人身份证号",width:"180px"}}),e._v(" "),a("el-table-column",{attrs:{prop:"applyStatus",label:"状态",width:"120px"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.applyStatus?a("el-button",{staticClass:"black",attrs:{type:"text",size:"small"}},[e._v("待审核")]):2==t.row.applyStatus?a("el-button",{staticClass:"black",attrs:{type:"text",size:"small"}},[e._v("通过")]):3==t.row.applyStatus?a("el-button",{staticClass:"black",attrs:{type:"text",size:"small"}},[e._v("不通过")]):4==t.row.applyStatus?a("el-button",{staticClass:"black",attrs:{type:"text",size:"small"}},[e._v("下户中")]):5==t.row.applyStatus?a("el-button",{staticClass:"black",attrs:{type:"text",size:"small"}},[e._v("已下户")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.handleClick(t.row)}}},[e._v("审核")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.lookClick(t.row)}}},[e._v("查看")])]}}])})],1)],1),e._v(" "),0!=e.page.total?a("div",{staticClass:"page"},[a("el-pagination",{attrs:{"current-page":e.page.current,"page-size":e.page.pageSize,layout:"total, prev,pager, next, jumper",total:e.page.total},on:{"current-change":e.handleCurrentChange}})],1):e._e()])},staticRenderFns:[]};var r=a("VU/8")(i,s,!1,function(e){a("hOpY"),a("REVe")},"data-v-19da57e0",null);t.default=r.exports},REVe:function(e,t){},hOpY:function(e,t){}});