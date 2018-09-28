<template>
  <div class="main">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="name"
        label="name">
      </el-table-column>
      <el-table-column
        prop="description"
        label="description">
      </el-table-column>
      <el-table-column
        prop="id"
        label="id">
      </el-table-column>
      <el-table-column
        prop="state"
        label="state">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button class="color-red" type="text" size="small" @click="deleteRow(scope.$index, tableData,scope.row)">删除</el-button>
          <el-button class="color-red" type="text" size="small" @click="editDialog(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="add-btn">
      <el-button class="el-button--primary el-button" @click="dialogFormVisible = true">添加</el-button>
      <!--<el-button class="el-button&#45;&#45;primary el-button" @click="dialogEditFormVisible = true">编辑</el-button>-->
      <!--<el-button class="el-button&#45;&#45;primary el-button" @click="addRole">添加</el-button>-->
    </div>


    <el-dialog title="角色创建" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="name" :label-width="formLabelWidth">
          <el-input v-model="form.name" ></el-input>
        </el-form-item>
        <el-form-item label="description" :label-width="formLabelWidth">
          <el-input v-model="form.description" ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addRole">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="角色编辑" :visible.sync="dialogEditFormVisible">
      <el-tree
        ref="editTree"
        :data="editForm"
        show-checkbox
        node-key="id"
        :default-checked-keys="blockTree"
        :default-expand-all="true"
        :props="defaultProps">
      </el-tree>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogEditFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="editRole">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import ajax from '@/utils/ajax'
  import {reconstruction} from "@/utils/tree";

  export default {
    mounted(){
      var _this = this;
      new Promise((resolve,reject) =>{
        ajax({
          url:'/role/all',
          method:'get'
        }).then(function (res) {
          let data = res.data;
          _this.tableData = data.data;

        }).catch(error => {
          reject(error)
        })
      });
    },
    data(){
      return {
        tableData:[],
        dialogFormVisible:false,
        dialogEditFormVisible:false,
        dialogEditFormId:'',
        form: {
          name: '',
          description: '',
          state: '1',
          id: '',
          type: [],
        },
        formLabelWidth: '120px',
        editForm:{
          name: '',
          label:'',
          code: '',
          description: '',
          type: '1',
          id: '',
          targetUrl: '',
          parentId:'',
          data:'',
          children:[]
        },
        blockTree:[],
        defaultProps: {
          children: 'children',
          label: 'name'
        }
      }
    },
    methods:{
      deleteRow(index,row,scope){
        let id = scope.id;
        let _this = this;

        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

            new Promise((resolve,reject) =>{
              ajax({
                url:`/role/delete/${id}`,
                method:'post',
              }).then(function (res) {
                let data = res.data;

                if(data.code == 1 ){
                  _this.$message({
                    type: 'success',
                    message: data.msg
                  });
                  row.splice(index,1);
                }

              }).catch(error => {
                reject(error)
              })
            });


        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });



      },
      addBox(){
      },

      addRole(){
        var _this = this;
        this.dialogFormVisible = false;

        const date = _this.form;
        new Promise((resolve,reject) =>{
          ajax({
            url:'/role/add',
            method:'post',
            data:date
          }).then(function (res) {
            let data = res.data;
            if(data.code == 1 ){
              _this.$message({
                type: 'success',
                message: data.msg
              });
              _this.tableData.push(data.data);
            }

          }).catch(error => {
            reject(error)
          })
        });


      },
      editDialog(row){
        var _this = this;
        let id = row.id;
        _this.dialogEditFormId = id;

        let check_tree = [];
        function filter(trees){
            for(let i = 0;i<trees.length;i++){
              if(trees[i].selected){
                if(trees[i] && trees[i].children){
                  filter(trees[i].children);
                }else{
                  check_tree.push(trees[i].id);
                }

              }
            }
          return check_tree;
        }


        new Promise((resolve,reject) => {
          ajax({
            url:`/resources/all?roleId=${id}`,
            method:'get'
          }).then(function (res) {
            let data = res.data;
            if(data.code == 1){
              let trees = reconstruction(data.data)
              let check_tree = [];
              _this.editForm = trees;
              _this.dialogEditFormVisible = true;


              const list = filter(trees);
              _this.$nextTick(()=>{
                // _this.$refs.editTree.setCheckedNodes(check_tree)
               _this.$refs.editTree.setCheckedKeys(list)
              })
            }

          }).catch(error => {
            reject(error)
          })
        })
        // this.dialogEditFormVisible = true;
      },
      editRole(){
        var _this = this;
        let aCheck = this.$refs.editTree.getCheckedKeys()
        let roleId = this.dialogEditFormId;

        new Promise((resolve,reject) => {
          ajax({
            url:'/role/authorize/',
            method:'post',
            data:{
              roleIds:JSON.stringify(roleId),
              resIds:aCheck.join(','),
            }
          }).then(function (res) {
            let data = res.data;
            if(data.code == 1){

              _this.$message({
                type: 'success',
                message: data.msg
              });
              _this.dialogEditFormVisible = false;
              _this.$router.go(0)
            }

          }).catch(error => {
            reject(error)
          })
        })


      },

    },
  }
</script>
<style lang="scss">
</style>
<style lang="scss" scoped>
  $blue : #409EFF;
  .color-red{
    color: #f95353;
  }
  .add-btn{
    margin-top: 30px;
  }

</style>
