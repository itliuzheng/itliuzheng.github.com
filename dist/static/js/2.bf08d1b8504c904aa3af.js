webpackJsonp([2],{"2g2N":function(e,t){},"8e+H":function(e,t){},Ji57:function(e,t){},MGw8:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Z1y9"),o=a("//Fk"),i=a.n(o),l=a("RbaZ"),r={mounted:function(){var e=this;new i.a(function(t,a){Object(n.a)({url:"/resources/all",method:"get"}).then(function(t){var a=t.data.data;e.tree=Object(l.b)(a)}).catch(function(e){a(e)})})},data:function(){return{tree:[],dialogFormVisible:!1,form:{name:"",label:"",code:"",description:"",type:"1",id:"",targetUrl:"",parentId:"",data:"",children:[]},formLabelWidth:"120px"}},methods:{getUrl:function(){var e=this;new i.a(function(t,a){Object(n.a)({url:"/resources/all",method:"get"}).then(function(t){var a=t.data.data;e.tree=Object(l.b)(a)}).catch(function(e){a(e)})})},addUrl:function(e){var t=this;new i.a(function(a,o){Object(n.a)({url:"/resources/add",method:"post",data:e}).then(function(e){var a=e.data;1==a.code&&t.getUrl()}).catch(function(e){o(e)})})},removeUrl:function(e){var t=this;new i.a(function(a,o){Object(n.a)({url:"/resources/delete/"+e,method:"post"}).then(function(e){1==e.data.code&&t.getUrl()}).catch(function(e){o(e)})})},parentClick:function(){this.dialogFormVisible=!0,this.form.parentId=0},append:function(e){this.dialogFormVisible=!0,this.form.parentId=e.id},addResources:function(){this.form.label=this.form.name+"-----"+this.form.targetUrl;var e=this.form;this.addUrl(e),this.form={},this.dialogFormVisible=!1},remove:function(e,t){var a=t.id;this.removeUrl(a)},renderContent:function(e,t){var a=this,n=t.node,o=t.data;t.store;return e("span",{class:"custom-tree-node"},[e("span",[n.label]),e("span",[e("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(){return a.append(o)}}},["添加"]),e("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(){return a.remove(n,o)}}},["删除"])])])},nodeClick:function(e){}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("div",{staticClass:"add-btn"},[a("el-button",{staticClass:"el-button--primary el-button",on:{click:e.parentClick}},[e._v("添加")])],1),e._v(" "),a("div",{staticClass:"tree"},[a("el-tree",{attrs:{data:e.tree,"node-key":"id","default-expand-all":"","expand-on-click-node":!1,"render-content":e.renderContent},on:{"check-change":e.nodeClick}})],1),e._v(" "),a("el-dialog",{attrs:{title:"菜单添加",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{attrs:{model:e.form}},[a("el-form-item",{attrs:{label:"菜单名称","label-width":e.formLabelWidth}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"资源识别码","label-width":e.formLabelWidth}},[a("el-input",{model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"菜单种类","label-width":e.formLabelWidth}},[a("el-input",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"链接地址","label-width":e.formLabelWidth}},[a("el-input",{model:{value:e.form.targetUrl,callback:function(t){e.$set(e.form,"targetUrl",t)},expression:"form.targetUrl"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"描述","label-width":e.formLabelWidth}},[a("el-input",{model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.addResources}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var c=a("VU/8")(r,s,!1,function(e){a("SfFo"),a("d8z9")},"data-v-557fd2cb",null).exports,d=a("mvHQ"),u=a.n(d),f={mounted:function(){var e=this;new i.a(function(t,a){Object(n.a)({url:"/role/all",method:"get"}).then(function(t){var a=t.data;e.tableData=a.data}).catch(function(e){a(e)})})},data:function(){return{tableData:[],dialogFormVisible:!1,dialogEditFormVisible:!1,dialogEditFormId:"",form:{name:"",description:"",state:"1",id:"",type:[]},formLabelWidth:"120px",editForm:{name:"",label:"",code:"",description:"",type:"1",id:"",targetUrl:"",parentId:"",data:"",children:[]},blockTree:[],defaultProps:{children:"children",label:"name"}}},methods:{deleteRow:function(e,t,a){var o=this,l=a.id,r=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){new i.a(function(a,o){Object(n.a)({url:"/role/delete/"+l,method:"post"}).then(function(a){var n=a.data;1==n.code&&(r.$message({type:"success",message:n.msg}),t.splice(e,1))}).catch(function(e){o(e)})})}).catch(function(){o.$message({type:"info",message:"已取消删除"})})},addBox:function(){},addRole:function(){var e=this;this.dialogFormVisible=!1;var t=e.form;new i.a(function(a,o){Object(n.a)({url:"/role/add",method:"post",data:t}).then(function(t){var a=t.data;1==a.code&&(e.$message({type:"success",message:a.msg}),e.tableData.push(a.data))}).catch(function(e){o(e)})})},editDialog:function(e){var t=this,a=e.id;t.dialogEditFormId=a,new i.a(function(e,o){Object(n.a)({url:"/role/resources/"+a,method:"get"}).then(function(e){var a=e.data;if(1==a.code){var n=Object(l.b)(a.data),o=[];t.editForm=n,t.dialogEditFormVisible=!0;for(var i=0;i<n.length;i++)n[i].selected&&o.push(n[i]);t.$nextTick(function(){t.$refs.editTree.setCheckedNodes(o)})}}).catch(function(e){o(e)})})},editRole:function(){var e=this,t=this.$refs.editTree.getCheckedKeys(),a=this.dialogEditFormId;new i.a(function(o,i){Object(n.a)({url:"/role/authorize/",method:"post",data:{roleIds:u()(a),resIds:t.join(",")}}).then(function(t){var a=t.data;1==a.code&&(e.$message({type:"success",message:a.msg}),e.dialogEditFormVisible=!1)}).catch(function(e){i(e)})})}}},m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"name",label:"name"}}),e._v(" "),a("el-table-column",{attrs:{prop:"description",label:"description"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"id"}}),e._v(" "),a("el-table-column",{attrs:{prop:"state",label:"state"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"color-red",attrs:{type:"text",size:"small"},on:{click:function(a){e.deleteRow(t.$index,e.tableData,t.row)}}},[e._v("删除")]),e._v(" "),a("el-button",{staticClass:"color-red",attrs:{type:"text",size:"small"},on:{click:function(a){e.editDialog(t.row)}}},[e._v("编辑")])]}}])})],1),e._v(" "),a("div",{staticClass:"add-btn"},[a("el-button",{staticClass:"el-button--primary el-button",on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("添加")])],1),e._v(" "),a("el-dialog",{attrs:{title:"角色创建",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{attrs:{model:e.form}},[a("el-form-item",{attrs:{label:"name","label-width":e.formLabelWidth}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"description","label-width":e.formLabelWidth}},[a("el-input",{model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.addRole}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"角色编辑",visible:e.dialogEditFormVisible},on:{"update:visible":function(t){e.dialogEditFormVisible=t}}},[a("el-tree",{ref:"editTree",attrs:{data:e.editForm,"show-checkbox":"","node-key":"id","default-checked-keys":e.blockTree,"default-expand-all":!0,props:e.defaultProps}}),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogEditFormVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.editRole}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var b={data:function(){return{page:{current:1,pageSize:10,pages:1,total:100,records:[{bankCardCode:"",bankCardName:"",bankCardNo:"",companyCode:"",companyName:"",createDate:null,delFlag:0,email:"",id:1,idCard:"",loginName:"admin",mobile:"",password:"123456",realName:"admin-r",remark:"",updateDate:null}]},dialogFormVisible:!1,current_id:"",form:[],rules:[],transTitle:["全部角色","拥有角色"]}},beforeMount:function(){this.getUser()},methods:{getUser:function(){var e=this;new i.a(function(t,a){Object(n.a)({url:"/sysuser/page?page=1&pageSize=10",method:"get"}).then(function(t){var a=t.data;1==a.code&&a.data&&(e.page=a.data)}).catch(function(e){a(e)})})},handleCurrentChange:function(e){},openDialog:function(e){this.current_id=e.id,this.getRolesAll(),this.getRoles(this.current_id),this.dialogFormVisible=!0},handleChange:function(e,t,a){this.sysuserAuthorize(e)},sysuserAuthorize:function(e){var t=this,a=e.join(",");new i.a(function(e,o){Object(n.a)({url:"/sysuser/authorize?uid="+t.current_id+"&rids="+a,method:"post"}).then(function(a){1==a.data.code?(t.$message({type:"success",message:"修改成功"}),e()):(t.$message({type:"error",message:"修改失败"}),t.dialogFormVisible=!1)}).catch(function(e){o()})})},clear:function(){this.form=[],this.rules=[]},getRolesAll:function(){var e=this;new i.a(function(t,a){Object(n.a)({url:"/role/all",method:"get"}).then(function(n){var o=n.data;1==o.code?(o.data.forEach(function(t,a){e.form.push({label:t.name,key:t.id,disabled:1!=t.state})}),t()):a()}).catch(function(e){a()})})},getRoles:function(e){var t=this;new i.a(function(a,o){Object(n.a)({url:"/sysuser/roles?uid="+e,method:"get"}).then(function(e){var a=e.data;1==a.code&&a.data.forEach(function(e,a){t.rules.push(e.id)})}).catch(function(e){o(e)})})}}},p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.page.records,border:""}},[a("el-table-column",{attrs:{prop:"loginName",label:"登录名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"realName",label:"姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"编号"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"color-red",attrs:{type:"text",size:"small"},on:{click:function(a){e.openDialog(t.row)}}},[e._v("更改")])]}}])})],1),e._v(" "),e.page.pages?a("div",{staticClass:"page"},[a("el-pagination",{attrs:{"current-page":e.page.current,"page-size":e.page.pageSize,layout:"total, prev,pager, next, jumper",total:e.page.total},on:{"current-change":e.handleCurrentChange}})],1):e._e(),e._v(" "),a("div",{staticClass:"add-btn"}),e._v(" "),a("el-dialog",{attrs:{title:"权限设置",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.clear}},[a("el-transfer",{attrs:{data:e.form,titles:e.transTitle},on:{change:e.handleChange},model:{value:e.rules,callback:function(t){e.rules=t},expression:"rules"}})],1)],1)},staticRenderFns:[]};var h={components:{TabMenu:c,RoleMenu:a("VU/8")(f,m,!1,function(e){a("vw5c"),a("8e+H")},"data-v-077ea980",null).exports,UserMenu:a("VU/8")(b,p,!1,function(e){a("nZCE"),a("Ji57")},"data-v-f640ace4",null).exports},data:function(){return{activeName:"first"}},methods:{handleClick:function(e,t){}}},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("el-tabs",{staticClass:"tab",on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"菜单管理",name:"first"}},[a("tab-menu")],1),e._v(" "),a("el-tab-pane",{attrs:{label:"角色管理",name:"second"}},[a("role-menu")],1),e._v(" "),a("el-tab-pane",{attrs:{label:"后台用户管理",name:"third"}},[a("user-menu")],1)],1)],1)},staticRenderFns:[]};var g=a("VU/8")(h,v,!1,function(e){a("2g2N"),a("x3Et")},"data-v-cfe7347e",null);t.default=g.exports},SfFo:function(e,t){},d8z9:function(e,t){},mvHQ:function(e,t,a){e.exports={default:a("qkKv"),__esModule:!0}},nZCE:function(e,t){},qkKv:function(e,t,a){var n=a("FeBl"),o=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},vw5c:function(e,t){},x3Et:function(e,t){}});