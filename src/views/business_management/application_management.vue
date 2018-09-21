<template>
  <div class="main">
    <div class="top-main">
      <el-form :inline="true" ref="management" :model="management" label-position="top">
        <el-form-item label="申请人姓名:">
          <el-input v-model="management.name"></el-input>
        </el-form-item>
        <el-form-item label="申请公司名称:">
          <el-input v-model="management.company"></el-input>
        </el-form-item>
        <el-form-item label="申请人身份证号:">
          <el-input v-model="management.id_number"></el-input>
        </el-form-item>
        <el-form-item label="资料审核状态:">
          <el-select v-model="management.review" >
            <el-option label="全部" value="1"></el-option>
            <el-option label="待审核" value="11"></el-option>
            <el-option label="下户中" value="6"></el-option>
            <el-option label="下户完成" value="7"></el-option>
            <el-option label="审核通过" value="9"></el-option>
            <el-option label="审核不通过" value="12"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="申请日期:">
          <!--<el-input v-model="management.date"></el-input>-->

          <el-date-picker
            class="picker-dome"
            v-model="management.date"
            type="date"
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
          prop="companyRegisterDate"
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
      <div class="page">
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

  export default {
    data(){
      return {
        management:{
          name:'',
          company:'',
          id_number:'',
          state:'1',
          review:'1',
          date:'',
        },
        // tableData: [{
        //   company:'中网中网中网中网中网中网',
        //   year:'1',
        //   date: '2016-05-02',
        //   name: '王小虎',
        //   id_number: '110101199206301212',
        //   id_people:''
        // }],
        page:{
          current:1,
          pageSize:1,
          pages:1,
          total:100,
          records:[],
        },
      }
    },
    beforeMount:function(){
       // new Promise((resolve,reject) => {
       //  ajax({
       //    url:`/loan/loan-application/page`,
       //    method:'get'
       //  }).then(function (res) {
       //    let data = res.data;
       //    if(data.code == 1){
       //      if(data.data){
       //        _this.page = data.data;
       //      }
       //    }
       //
       //  }).catch(error => {
       //    reject(error)
       //  })
       // })
      this.ajaxPage(1);
    },
    methods:{
      ajaxPage:function (page) {
        console.log('ajaxPage');
        var _this = this;
        new Promise((resolve,reject) => {
          ajax({
            url:`/loan/loan-application/page/?page=${page}&pageSize=10`,
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
        console.log('查询');
      },
      handleClick(row){
        console.log(row);
        let id = row.id;

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
