<template>
  <div class="main">
    <div class="top-main">
      <el-form :inline="true" ref="management" :model="management" label-position="top">
        <el-form-item label="申请人姓名:">
          <el-input v-model="management.proposerName"></el-input>
        </el-form-item>
        <el-form-item label="申请公司名称:">
          <el-input v-model="management.companyName"></el-input>
        </el-form-item>
        <el-form-item label="申请人身份证号:">
          <el-input v-model="management.idNo"></el-input>
        </el-form-item>
        <el-form-item label="资料审核状态:">
          <el-select v-model="management.status" >
            <el-option label="全部" value=""></el-option>
            <el-option label="待审核" value="1"></el-option>
            <el-option label="下户" value="4"></el-option>
            <el-option label="审核通过" value="2"></el-option>
            <el-option label="审核不通过" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="申请日期:">
          <el-date-picker
            class="picker-dome"
            v-model="management.date"
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
          label="申请公司名称"
          width="240">
        </el-table-column>
        <el-table-column
          prop="factoringBusinessDeadline"
          label="申请年限"
          width="80">
        </el-table-column>
        <el-table-column
          prop="createDate"
          label="申请时间"
          width="100px">
        </el-table-column>
        <el-table-column
          prop="proposerName"
          label="申请人姓名"
          width="100px">
        </el-table-column>
        <el-table-column
          prop="proposerIdno"
          label="申请人身份证号"
          width="150px">
        </el-table-column>
        <el-table-column
          prop="id_people"
          label="审核员ID"
          width="80px">
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
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
  </div>
</template>
<script>
  import ajax from '@/utils/ajax'
  import {jsonToUrl} from "@/utils";

  export default {
    data(){
      return {
        management:{
          proposerName:'',
          companyName:'',
          idNo:'',
          status:'',
          date:'',
        },
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
      this.ajaxPage(1);
    },
    methods:{
      ajaxPage:function (page,code) {
        let url = `/loan/loan-application/page/?page=${page}&pageSize=10`;
        if(code){
          url = `/loan/loan-application/page/?page=${page}&pageSize=10&${code}`
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
      inquire(){
        if(!this.management.date){
          this.management.date = '';
        }
        let url = jsonToUrl(this.management);

         this.ajaxPage(1,url);
      },
      handleClick(row){
        let id = row.id;
        this.$router.push({path:`data_entry/${id}`})

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
    width: 1000px;
    margin: 50px auto 0;
  }
  .inquire{

  }
</style>
