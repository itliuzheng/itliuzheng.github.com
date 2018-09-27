<template>
  <div class="main">
    <div class="top-main">
      <el-form :inline="true" ref="management" :model="management" label-position="top">
        <el-form-item label="申请公司名称:">
          <el-input v-model="management.companyName"></el-input>
        </el-form-item>
        <el-form-item label="申请公司地址:">
          <el-input v-model="management.companyOperateAddress"></el-input>
        </el-form-item>
        <el-form-item label="经营年限:">
          <el-input v-model="management.companyOperateYear"></el-input>
        </el-form-item>
        <el-form-item label="申请日期:">
          <el-date-picker
            v-model="management.companyRegisterDate"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="">
          </el-date-picker>
        </el-form-item>
        <div class="inquire">
          <el-button class="el-button el-button--primary" @click="inquire">查询</el-button>
        </div>
      </el-form>
    </div>
    <div class="content">
      <el-table
        :data="page.records"
        border
        style="width: 100%;">
        <el-table-column
          prop="companyName"
          label="申请单位名称"
          >
        </el-table-column>
        <el-table-column
          prop="companyOperateAddress"
          label="申请单位地址"
          >
        </el-table-column>
        <el-table-column
          prop="companyOperateYear"
          label="申请单位年限"
          >
        </el-table-column>
        <el-table-column
          prop="companyRegisterDate"
          label="单位注册时间"
          >
        </el-table-column>
        <!--<el-table-column-->
          <!--label="操作">-->
          <!--<template slot-scope="scope">-->
            <!--<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>-->
          <!--</template>-->
        <!--</el-table-column>-->
      </el-table>
    </div>

    <div class="page" v-if="page.total != 0">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="page.current"
        :page-size="page.pageSize"
        layout="total, prev,pager, next, jumper"
        :total="page.total">
      </el-pagination>
    </div>

  </div>
</template>
<script>
  import ajax from '@/utils/ajax'
  import {jsonToUrl} from "@/utils";

  export default {
    data(){
      return {
        management:{
          companyName:'',
          companyOperateAddress:'',
          companyOperateYear:'',
          companyRegisterDate:''
        },
        page:{
          "current":1,
          "pageSize":10,
          "pages":1,
          "records":[
            {
              "companyName":"",
              "companyOperateAddress":"",
              "companyOperateYear":"",
              "companyRegisterDate":""
            },
          ],
          "total":0
        }
      }
    },
    beforeMount:function(){

      let url = jsonToUrl(this.management);

      this.ajaxPage(1);
    },
    methods:{
      inquire(){
        console.log('查询');
        if(!this.management.date){
          this.management.date = '';
        }
        let url = jsonToUrl(this.management);

        this.ajaxPage(1,url);
      },
      ajaxPage:function (page,code) {
        let url = `/loan/loan-application/users?page=${page}&pageSize=10`;
        if(code){
          url = `/loan/loan-application/users?page=${page}&pageSize=10&${code}`
        }
        var _this = this;
        new Promise((resolve,reject) => {
          ajax({
            url:url,
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
      handleClick(row){
        let id = row.id;
        this.$router.push({path:`/approval_management/household_review/${id}`})
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.ajaxPage(val);
      }
    }
  }
</script>
<style lang="scss">
  .content{
    tr,td{
      .cell{
        text-align: center;
        font-size: 12px;
      }
    }
  }
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
  .top-main{
    border: 1px solid #ccc;
    width: 1000px;
    margin: 50px auto 0;
    padding: 20px;
  }
  .white{
    color: #fff;
  }
  .content{
    width: 1001px;
    margin: 50px auto 0;
  }
  .inquire{

  }
</style>
