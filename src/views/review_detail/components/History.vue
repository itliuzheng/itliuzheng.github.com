<template>
  <div>
    <el-table
      class="history-table"
    :data="page"
    border
    width="100%">
      <el-table-column prop="approvalUser" label="处理人"></el-table-column>
      <el-table-column prop="approvalStatus" label="处理结果">

        <template slot-scope="scope">
          <p v-if="scope.row.approvalStatus == 2">通过</p>
          <p v-if="scope.row.approvalStatus == 3">不通过</p>
          <p v-if="scope.row.approvalStatus == 4">待下户</p>
          <p v-if="scope.row.approvalStatus == 5">已下户</p>
          <p v-if="scope.row.approvalStatus == 6">下户驳回</p>
        </template>
      </el-table-column>
      <el-table-column prop="approvalDate" label="处理时间"></el-table-column>
      <el-table-column prop="nextApprovalUser" label="下一步办理人"></el-table-column>
      <el-table-column prop="approvalOpinion" label="审批意见"></el-table-column>
      <el-table-column prop="rejectCause" label="拒绝原因"></el-table-column>

    </el-table>
  </div>
</template>
<script>
  import ajax from '@/utils/ajax'

  export default {
    props:['id','page'],
    beforeMount:function(){
      // this.getAjax(1);

      console.log(this.page);
    },
    data(){
      return {
      }

    },
    methods:{
      // getAjax(page){
      //   var _this = this;
      //    new Promise((resolve,reject) => {
      //     ajax({
      //       url:`/loan/loan-application-history/${this.$route.params.id}?page=${page}&pageSize=10`,
      //       method:'get'
      //     }).then(function (res) {
      //       let data = res.data;
      //       if(data.code == 1){
      //         _this.page = data.data;
      //       }
      //     }).catch(error => {
      //       reject(error)
      //     })
      //    })
      // }
    },
  }
</script>
<style scoped lang="scss">
  .history-table{
    width: 1000px;
    margin: 0 auto;
  }
</style>
