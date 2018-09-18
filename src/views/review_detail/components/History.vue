<template>
  <div>
    <el-table
    :data="tableData"
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
  export default {
    data(){
      return {
        tableData:[{
          p1:'',
          p2:'',
          p3:'',
          p4:'',
          p5:'',
          p6:'',
        }]
      }

    }
  }
</script>
