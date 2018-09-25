<template>
  <div>
    <el-table
    :data="page.records"
    border
    width="100%">
      <el-table-column prop="p1" label="处理人"></el-table-column>
      <el-table-column prop="p2" label="处理结果"></el-table-column>
      <el-table-column prop="p3" label="处理时间"></el-table-column>
      <el-table-column prop="p4" label="下一步办理人"></el-table-column>
      <el-table-column prop="p5" label="审批意见"></el-table-column>
      <el-table-column prop="p6" label="拒绝原因"></el-table-column>

    </el-table>
  </div>
</template>
<script>
  import ajax from '@/utils/ajax'

  export default {
    props:['id'],
    beforeMount:function(){
      this.getAjax(1);

    },
    data(){
      return {
        page:[{
          p1:'',
          p2:'',
          p3:'',
          p4:'',
          p5:'',
          p6:'',
        }]
      }

    },
    methods:{
      getAjax(page){
        var _this = this;
         new Promise((resolve,reject) => {
          ajax({
            url:`/loan/loan-application-history/page?page=${page}&pageSize=10`,
            method:'get'
          }).then(function (res) {
            let data = res.data;
            if(data.code == 1){
              _this.page = data.data;
            }
          }).catch(error => {
            reject(error)
          })
         })
      }
    },
  }
</script>
