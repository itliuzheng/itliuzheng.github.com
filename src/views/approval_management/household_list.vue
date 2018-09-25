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

        <el-form-item label="发起下户日期:">
          <el-date-picker
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
        :data="tableData"
        border
        style="width: 100%;">
        <el-table-column
          prop="date"
          label="下户提交时间"
          width="180">
        </el-table-column>
        <el-table-column
          prop="confirm_name"
          label="下户确认人"
          width="120">
        </el-table-column>
        <el-table-column
          prop="company"
          label="申请单位名称"
          width="160px">
        </el-table-column>
        <el-table-column
          prop="name"
          label="贷款申请人姓名"
          width="150px">
        </el-table-column>
        <el-table-column
          prop="id_number"
          label="申请人身份证号"
          width="150px">
        </el-table-column>
        <el-table-column
          prop="state"
          label="审批状态"
          width="80px">
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">下户录入</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        management:{
          name:'',
          company:'',
          id_number:'',
          review:'1',
          date:'',
        },
        tableData: [{
          company:'网联运输',
          confirm_name:'王武（信审）',
          date: '2016-05-02',
          name: '王小虎',
          id_number: '110101199206301212',
          id_people:'',
          state:'待下户',
          id:14
        }]
      }
    },
    methods:{
      inquire(){
        console.log('查询');
      },
      handleClick(row){
        let id = row.id;
        this.$router.push({path:`/approval_management/household_review/${id}`})
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
