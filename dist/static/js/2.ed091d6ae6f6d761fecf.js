webpackJsonp([2],{"5J4L":function(t,e){},"8e+H":function(t,e){},"9L8w":function(t,e){},MGw8:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Z1y9"),o=a("//Fk"),i=a.n(o),l=a("RbaZ"),r={mounted:function(){var t=this;new i.a(function(e,a){Object(n.a)({url:"/resources/all",method:"get"}).then(function(e){var a=e.data.data;t.tree=Object(l.b)(a)}).catch(function(t){a(t)})})},data:function(){return{tree:[],dialogFormVisible:!1,form:{name:"",label:"",code:"",description:"",type:"1",id:"",targetUrl:"",parentId:"",data:"",children:[]},formLabelWidth:"120px"}},methods:{getUrl:function(){var t=this;new i.a(function(e,a){Object(n.a)({url:"/resources/all",method:"get"}).then(function(e){var a=e.data.data;t.tree=Object(l.b)(a)}).catch(function(t){a(t)})})},addUrl:function(t){var e=this;new i.a(function(a,o){Object(n.a)({url:"/resources/add",method:"post",data:t}).then(function(t){var a=t.data;1==a.code&&e.getUrl()}).catch(function(t){o(t)})})},removeUrl:function(t){var e=this;new i.a(function(a,o){Object(n.a)({url:"/resources/delete/"+t,method:"post"}).then(function(t){1==t.data.code&&e.getUrl()}).catch(function(t){o(t)})})},parentClick:function(){this.dialogFormVisible=!0,this.form.parentId=0},append:function(t){this.dialogFormVisible=!0,this.form.parentId=t.id},addResources:function(){this.form.label=this.form.name+"-----"+this.form.targetUrl;var t=this.form;this.addUrl(t),this.form={},this.dialogFormVisible=!1},remove:function(t,e){var a=e.id;this.removeUrl(a)},renderContent:function(t,e){var a=this,n=e.node,o=e.data;e.store;return t("span",{class:"custom-tree-node"},[t("span",[n.label]),t("span",[t("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(){return a.append(o)}}},["添加"]),t("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(){return a.remove(n,o)}}},["删除"])])])},nodeClick:function(t){}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("div",{staticClass:"add-btn"},[a("el-button",{staticClass:"el-button--primary el-button",on:{click:t.parentClick}},[t._v("添加")])],1),t._v(" "),a("div",{staticClass:"tree"},[a("el-tree",{attrs:{data:t.tree,"node-key":"id","default-expand-all":"","expand-on-click-node":!1,"render-content":t.renderContent},on:{"check-change":t.nodeClick}})],1),t._v(" "),a("el-dialog",{attrs:{title:"菜单添加",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{model:t.form}},[a("el-form-item",{attrs:{label:"菜单名称","label-width":t.formLabelWidth}},[a("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"资源识别码","label-width":t.formLabelWidth}},[a("el-input",{model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"菜单种类","label-width":t.formLabelWidth}},[a("el-input",{model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"链接地址","label-width":t.formLabelWidth}},[a("el-input",{model:{value:t.form.targetUrl,callback:function(e){t.$set(t.form,"targetUrl",e)},expression:"form.targetUrl"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"描述","label-width":t.formLabelWidth}},[a("el-input",{model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.addResources}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var c=a("VU/8")(r,s,!1,function(t){a("SfFo"),a("d8z9")},"data-v-557fd2cb",null).exports,d=a("mvHQ"),u=a.n(d),f={mounted:function(){var t=this;new i.a(function(e,a){Object(n.a)({url:"/role/all",method:"get"}).then(function(e){var a=e.data;t.tableData=a.data}).catch(function(t){a(t)})})},data:function(){return{tableData:[],dialogFormVisible:!1,dialogEditFormVisible:!1,dialogEditFormId:"",form:{name:"",description:"",state:"1",id:"",type:[]},formLabelWidth:"120px",editForm:{name:"",label:"",code:"",description:"",type:"1",id:"",targetUrl:"",parentId:"",data:"",children:[]},blockTree:[],defaultProps:{children:"children",label:"name"}}},methods:{deleteRow:function(t,e,a){var o=this,l=a.id,r=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){new i.a(function(a,o){Object(n.a)({url:"/role/delete/"+l,method:"post"}).then(function(a){var n=a.data;1==n.code&&(r.$message({type:"success",message:n.msg}),e.splice(t,1))}).catch(function(t){o(t)})})}).catch(function(){o.$message({type:"info",message:"已取消删除"})})},addBox:function(){},addRole:function(){var t=this;this.dialogFormVisible=!1;var e=t.form;new i.a(function(a,o){Object(n.a)({url:"/role/add",method:"post",data:e}).then(function(e){var a=e.data;1==a.code&&(t.$message({type:"success",message:a.msg}),t.tableData.push(a.data))}).catch(function(t){o(t)})})},editDialog:function(t){var e=this,a=t.id;e.dialogEditFormId=a,new i.a(function(t,o){Object(n.a)({url:"/role/resources/"+a,method:"get"}).then(function(t){var a=t.data;if(1==a.code){var n=Object(l.b)(a.data),o=[];e.editForm=n,e.dialogEditFormVisible=!0;for(var i=0;i<n.length;i++)n[i].selected&&o.push(n[i]);e.$nextTick(function(){e.$refs.editTree.setCheckedNodes(o)})}}).catch(function(t){o(t)})})},editRole:function(){var t=this,e=this.$refs.editTree.getCheckedKeys(),a=this.dialogEditFormId;new i.a(function(o,i){Object(n.a)({url:"/role/authorize/",method:"post",data:{roleIds:u()(a),resIds:e.join(",")}}).then(function(e){var a=e.data;1==a.code&&(t.$message({type:"success",message:a.msg}),t.dialogEditFormVisible=!1)}).catch(function(t){i(t)})})}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"name",label:"name"}}),t._v(" "),a("el-table-column",{attrs:{prop:"description",label:"description"}}),t._v(" "),a("el-table-column",{attrs:{prop:"id",label:"id"}}),t._v(" "),a("el-table-column",{attrs:{prop:"state",label:"state"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"color-red",attrs:{type:"text",size:"small"},on:{click:function(a){t.deleteRow(e.$index,t.tableData,e.row)}}},[t._v("删除")]),t._v(" "),a("el-button",{staticClass:"color-red",attrs:{type:"text",size:"small"},on:{click:function(a){t.editDialog(e.row)}}},[t._v("编辑")])]}}])})],1),t._v(" "),a("div",{staticClass:"add-btn"},[a("el-button",{staticClass:"el-button--primary el-button",on:{click:function(e){t.dialogFormVisible=!0}}},[t._v("添加")])],1),t._v(" "),a("el-dialog",{attrs:{title:"角色创建",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{model:t.form}},[a("el-form-item",{attrs:{label:"name","label-width":t.formLabelWidth}},[a("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"description","label-width":t.formLabelWidth}},[a("el-input",{model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.addRole}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"角色编辑",visible:t.dialogEditFormVisible},on:{"update:visible":function(e){t.dialogEditFormVisible=e}}},[a("el-tree",{ref:"editTree",attrs:{data:t.editForm,"show-checkbox":"","node-key":"id","default-checked-keys":t.blockTree,"default-expand-all":!0,props:t.defaultProps}}),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogEditFormVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.editRole}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var b={data:function(){return{page:{current:1,pageSize:10,pages:1,total:100,records:[]}}},beforeMount:function(){this.getUser()},methods:{getUser:function(){var t=this;new i.a(function(e,a){Object(n.a)({url:"/sysuser/page?page=1&pageSize=10",method:"get"}).then(function(e){var a=e.data;1==a.code&&a.data&&(t.page=a.data)}).catch(function(t){a(t)})})},handleCurrentChange:function(t){}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.page.records,border:""}},[a("el-table-column",{attrs:{prop:"name",label:"name"}}),t._v(" "),a("el-table-column",{attrs:{prop:"description",label:"description"}}),t._v(" "),a("el-table-column",{attrs:{prop:"id",label:"id"}}),t._v(" "),a("el-table-column",{attrs:{prop:"state",label:"state"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"color-red",attrs:{type:"text",size:"small"},on:{click:function(a){t.editDialog(e.row)}}},[t._v("更改")])]}}])})],1),t._v(" "),t.page.pages?a("div",{staticClass:"page"},[a("el-pagination",{attrs:{"current-page":t.page.current,"page-size":t.page.pageSize,layout:"total, prev,pager, next, jumper",total:t.page.total},on:{"current-change":t.handleCurrentChange}})],1):t._e(),t._v(" "),a("div",{staticClass:"add-btn"})],1)},staticRenderFns:[]};var v={components:{TabMenu:c,RoleMenu:a("VU/8")(f,m,!1,function(t){a("vw5c"),a("8e+H")},"data-v-077ea980",null).exports,UserMenu:a("VU/8")(b,p,!1,function(t){a("5J4L"),a("9L8w")},"data-v-238c0661",null).exports},data:function(){return{activeName:"first"}},methods:{handleClick:function(t,e){}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("el-tabs",{staticClass:"tab",on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"菜单管理",name:"first"}},[a("tab-menu")],1),t._v(" "),a("el-tab-pane",{attrs:{label:"角色管理",name:"second"}},[a("role-menu")],1),t._v(" "),a("el-tab-pane",{attrs:{label:"后台用户管理",name:"third"}},[a("user-menu")],1)],1)],1)},staticRenderFns:[]};var g=a("VU/8")(v,h,!1,function(t){a("wCw/"),a("uc7k")},"data-v-6e9d18fa",null);e.default=g.exports},SfFo:function(t,e){},d8z9:function(t,e){},mvHQ:function(t,e,a){t.exports={default:a("qkKv"),__esModule:!0}},qkKv:function(t,e,a){var n=a("FeBl"),o=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},uc7k:function(t,e){},vw5c:function(t,e){},"wCw/":function(t,e){}});