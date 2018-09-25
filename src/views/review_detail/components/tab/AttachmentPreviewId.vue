<template>
  <!--附件预览-->
  <div>
    <div class="attachment-preview" v-if="uploadId">
    <!--<div class="attachment-preview" >-->
      <el-collapse class="preview" v-model="activeNames" >
        <el-collapse-item title="身份证" name="1">
            <img  v-if="fileData.idCardUrl" :src="fileData.idCardUrl" class="avatar">
            <img v-if="fileData.idCardBackUrl" :src="fileData.idCardBackUrl" class="avatar">
        </el-collapse-item>
        <el-collapse-item title="婚姻证明" name="2">

            <img v-if="fileData.marriageCertificateUrl" :src="fileData.marriageCertificateUrl" class="avatar">
        </el-collapse-item>
        <el-collapse-item title="营业执照" name="3">

            <img v-if="fileData.businessLicenseUrl" :src="fileData.businessLicenseUrl" class="avatar">

        </el-collapse-item>
        <el-collapse-item title="实际控制人证明 " name="4">
            <img v-if="fileData.actualControllerCertifyUrl" :src="fileData.actualControllerCertifyUrl" class="avatar">

        </el-collapse-item>
        <el-collapse-item title="固定居住地证明 " name="5">
            <img v-if="fileData.residencePermitUrl" :src="fileData.residencePermitUrl" class="avatar">

        </el-collapse-item>
        <el-collapse-item title="道路运输许可证 " name="6">
            <img v-if="fileData.transportLicenseUrl" :src="fileData.transportLicenseUrl" class="avatar">
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>
<script>
  import ajax from '@/utils/ajax'

  export default {
    props:['uploadType','uploadId'],
    beforeMount:function(){
        var _this = this;
        let id = this.uploadId;
        if(id){
         new Promise((resolve,reject) => {
          ajax({
            url:`/loan/loan-application-attachment/${id}`,
            method:'get'
          }).then(function (res) {
            let data = res.data;
            if(data.code == 1){
              if(data.data){
                _this.fileData = data.data;
              }
            }

          }).catch(error => {
            reject(error)
          })
         })
        }

    },
    data(){
      return {
        loanId:'',
        form1:{},
        activeNames: ['1','2','3','4','5','6',],
        fileData:{
          "id": '', //"int //主键",
          "loanId":'',// "int //loan_application 表的id",
          "idCardUrl":'',// "string //身份证正面，url地址",
          "idCardBackUrl":'',// "string //身份证，反面 url地址",
          "marriageCertificateUrl":'',// "string //结婚证图片url地址",
          "businessLicenseUrl": '',//"string //营业执照",
          "actualControllerCertifyUrl":'',// "string //实际控制人证明",
          "residencePermitUrl": '',//"string //固定居住地证明",
          "transportLicenseUrl": '',//"string //道跟运输许可证",
          "otherUrl": '',//"string //其他图片，或者压缩包",
          "createDate": {},
          "remark": '',//"string //备注"
        },
        type:'',
        imageUrl:''
      }
    },
    // watch:{
    //   uploadType:function (newValue,oldVal) {
    //     console.log(newValue,oldVal);
    //     this.type = newValue;
    //   }
    // },
    methods: {

    },
  }
</script>
<style>

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

<style scoped>
  .attachment-preview{
    margin: 20px 0 100px;
  }
  .preview{
    width: 50%;
    margin: 0 auto;
  }
</style>
