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
            <!--1-初始状态，2-通过，3-不通过，4-下户中，5-已下户-->
            <el-option label="全部" value=""></el-option>
            <el-option label="待审核" value="1"></el-option>
            <el-option label="通过" value="2"></el-option>
            <el-option label="不通过" value="3"></el-option>
            <el-option label="下户中" value="4"></el-option>
            <el-option label="已下户" value="5"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="申请日期:">
          <!--<el-input v-model="management.date"></el-input>-->

          <el-date-picker
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
    <div class="content list-dome">
      <el-table
        :data="page.records"
        border
        style="width: 100%;">
        <el-table-column
          prop="companyName"
          label="申请公司名称"
          width="200">
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
          width="180px">
        </el-table-column>
        <el-table-column
          prop="applyStatus"
          label="状态"
          width="120px">
          <template slot-scope="scope">
            <el-button v-if="scope.row.applyStatus == 1" class="black" type="text" size="small">待审核</el-button>
            <el-button v-else-if="scope.row.applyStatus == 2" class="black" type="text" size="small">通过</el-button>
            <el-button v-else-if="scope.row.applyStatus == 3" class="black" type="text" size="small">不通过</el-button>
            <el-button v-else-if="scope.row.applyStatus == 4" class="black" type="text" size="small">下户中</el-button>
            <el-button v-else-if="scope.row.applyStatus == 5" class="black" type="text" size="small">已下户</el-button>
          </template>
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button  @click="lookClick(scope.row)" type="text" size="small">查看</el-button>
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
  import router from '@/router'

  export default {
    data(){
      return {
        management:{
          proposerName:'',
          companyName:'',
          idNo:'',
          date:'',
          status:''
        },
        page:{
          "current": "", //long //当前",
          "pageSize":"",// "int //页大小",
          "pages": "",//"long //总页数",
          "total":"",// "long //总数据量",
          "records": [
            // {
            //   "loanId":"",// "int //loan表id",
            //   "taskId":"",// "string //工作流程id",
            //   "companyName": "",//"string //申请人公司名称",
            //   "createDate": {},
            //   "proposerName":"",// "string //申请人姓名",
            //   "proposerIdno":"",// "string //申请人身份证",
            //   "applyStatus":"",// "int //审批状态：1-初始状态/待审核，2-通过，3-不通过，4-待下户，5-已下户"
            // }
          ]
        },
      }
    },
    deactivated(){
      this.$destroy(true)
    },
    beforeMount:function(){
      this.ajaxPage(1);
    },
    methods:{
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.ajaxPage(val);
      },
      inquire(){
        console.log('查询');
        if(!this.management.date){
          this.management.date = '';
        }
        let url = jsonToUrl(this.management);

        this.ajaxPage(1,url);
      },
      lookClick(row){
        let id = row.id;
        let taskId = 0;
        // this.$router.push({path:`/review/detail/${id}/${taskId}`})
        router.push({path:`/review/detail/${id}/${taskId}`})
        // this.$router.push({path:`/review/detail/${id}/?task=${taskId}`})
      },
      ajaxPage(page,code){
        let url = `/loan/loan-application/page/?page=${page}&pageSize=10`;
        if(code){
          url = `/loan/loan-application/page/?page=${page}&pageSize=10&${code}`
        }
        let _this = this;
        new Promise((resolve,reject)=>{
          ajax({
            url:url,
            method:'get'
          }).then(function(res){
            var data = res.data;
            if(data.code == 1){
              if(data.data){
                _this.page = data.data;
              }
              resolve()
            }else{
              reject();
            }
          }).catch(error => {
              reject();
          })
        })
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

  .list-dome{
    .black{
      color: #606266;
    }
  }
</style>
