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

        <el-form-item label="发起下户日期:">
            <el-date-picker
              class="date-pickers"
              v-model="date"
              type="daterange"
              align="right"
              unlink-panels
              value-format="yyyy-MM-dd"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions">
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
          prop="createDate"
          label="下户提交时间"
          width="180">
        </el-table-column>
        <el-table-column
          prop="companyName"
          label="申请单位名称"
          width="160px">
        </el-table-column>
        <el-table-column
          prop="proposerName"
          label="贷款申请人姓名"
          width="150px">
        </el-table-column>
        <el-table-column
          prop="proposerIdno"
          label="申请人身份证号"
          width="180px">
        </el-table-column>
        <el-table-column
          label="审批状态"
          width="80px">
          <template slot-scope="scope">
            <p>待下户</p>
          </template>
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">下户录入</el-button>
          </template>
        </el-table-column>
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
        pickerOptions: {
          shortcuts: [
            {
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }],
          disabledDate(time){
            return time.getTime() > Date.now() - 8.64e6
          }
        },
        date:'',
        management:{
          proposerName:'',
          companyName:'',
          proposerIdno:'',
          startDate:'',
          endDate:'',
          applyStatus:'4',
          page:1,
          pageSize:10
        },
        page:{
          "current":1,
          "pageSize":10,
          "pages":1,
          "records":[
            {
              "companyName":"",
              "createDate":"",
              "id":'',
              "proposerIdno":"",
              "proposerName":"",
              "proposerSpouseName":"",
            },
          ],
          "total":0
        }
      }
    },
    beforeMount:function(){

        this.management.page = 1;
        this.ajaxPage();
    },
    methods:{
      inquire(){
        this.management.page = 1;
        this.ajaxPage();
      },
      ajaxPage:function (page,code) {
        let url = `/loan/loan-application/page/`;
        var _this = this;

        let date = this.date;
        if(date){
          this.management.startDate = date[0];
          this.management.endDate = date[1];
        }
        new Promise((resolve,reject) => {
          ajax({
            url:url,
            method:'post',
            data:_this.management
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
        this.management.page = val;
        this.ajaxPage();
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
    .date-pickers{
      width: auto;
    }
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
