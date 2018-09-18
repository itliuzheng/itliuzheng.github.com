<template>
  <!--附件预览-->
  <div class="attachment-preview">
    <el-collapse class="preview" v-model="activeNames" @change="handleChange">
      <el-collapse-item title="身份证" name="1">

        <div><img src="" alt=""></div>
      </el-collapse-item>
      <el-collapse-item title="婚姻证明" name="2">

        <div><img src="" alt=""></div>
      </el-collapse-item>
      <el-collapse-item title="营业执照" name="3">

        <div><img src="" alt=""></div>
      </el-collapse-item>
      <el-collapse-item title="实际控制人证明 " name="4">
        <div><img src="" alt=""></div>
      </el-collapse-item>
      <el-collapse-item title="固定居住地证明 " name="5">
        <div><img src="" alt=""></div>
      </el-collapse-item>
      <el-collapse-item title="道路运输许可证 " name="6">
        <div><img src="" alt=""></div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        activeNames: ['1']
      }

    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    },
  }
</script>
<style scoped>
  .attachment-preview{
    margin: 20px 0 100px;
  }
  .preview{
    width: 50%;
    margin: 0 auto;
  }
</style>
