<template>
  <div class="main">
    <el-table
      :data="page.records"
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
          <el-button class="color-red" type="text" size="small" @click="editDialog(scope.row)">更改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="page" v-if="page.pages">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="page.current"
        :page-size="page.pageSize"
        layout="total, prev,pager, next, jumper"
        :total="page.total">
      </el-pagination>
    </div>

    <div class="add-btn">
      <!--<el-button class="el-button&#45;&#45;primary el-button" @click="dialogFormVisible = true">添加</el-button>-->
    </div>


  </div>
</template>
<script>
  import ajax from '@/utils/ajax'
  import {reconstruction} from "@/utils/tree";

  export default {
    data(){
      return {
        page:{
          current:1,
          pageSize:10,
          pages:1,
          total:100,
          records:[],
        },
      }
    },
    beforeMount:function(){
      this.getUser();
    },
    methods:{
      getUser(){
        var _this = this;
        new Promise((resolve,reject) => {
            ajax({
              url:'/sysuser/page?page=1&pageSize=10',
              method:'get'
            }).then(function (res) {
              let data = res.data;

              if(data.code == 1){
                if(data.data){
                  _this.page = data.data;
                }
              }

            }).catch(error => {
              reject(error)
            })
        })
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        // this.ajaxPage(val);
      }

    },
  }
</script>
<style lang="scss">
  .page{
    padding-bottom: 30px;
    .el-pagination{
      margin-top: 30px;
      text-align: center;
    }
  }
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
