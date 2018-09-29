<template>
  <!--附件预览-->
  <div>
    <div class="attachment-preview" v-if="uploadId">
    <!--<div class="attachment-preview" >-->
      <el-alert
        title="请将附件全部上传完后再跳往其他界面"
        type="error"
        center
        show-icon>
      </el-alert>
      <el-collapse class="preview" v-model="activeNames" >

        <el-collapse-item title="身份证" name="1">
          <div class="upload-inline">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              name="idCardUrl"
              :show-file-list="false"
              :http-request="uploadHttp"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
              >
              <el-button size="small" type="primary">身份证正面上传</el-button>
            </el-upload>

            <img  v-if="fileData.idCardUrl" :src="fileData.idCardUrl" class="avatar">
          </div>

          <div class="upload-inline">
            <el-upload
              name="idCardBackUrl"
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :http-request="uploadHttp"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
                <el-button size="small" type="primary">身份证反面上传</el-button>
            </el-upload>
            <img v-if="fileData.idCardBackUrl" :src="fileData.idCardBackUrl" class="avatar">
          </div>
          <!--<div class="img-box"><img width="100%" :src="fileData.idCardUrl" alt=""></div>-->
          <!--<div class="img-box"><img width="100%" :src="fileData.idCardBackUrl" alt=""></div>-->
        </el-collapse-item>
        <el-collapse-item title="婚姻证明" name="2">
          <div class="upload-inline">
            <el-upload
              name="marriageCertificateUrl"
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :http-request="uploadHttp"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
                multiple
                :limit="1"
            >
                <el-button size="small" type="primary">上传</el-button>
            </el-upload>
            <img v-if="fileData.marriageCertificateUrl" :src="fileData.marriageCertificateUrl" class="avatar">
          </div>
        </el-collapse-item>
        <el-collapse-item title="营业执照" name="3">
          <div class="upload-inline">
            <el-upload
              name="businessLicenseUrl"
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :http-request="uploadHttp"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
                <el-button size="small" type="primary">上传</el-button>
            </el-upload>
            <img v-if="fileData.businessLicenseUrl" :src="fileData.businessLicenseUrl" class="avatar">
          </div>

        </el-collapse-item>
        <el-collapse-item title="实际控制人证明 " name="4">
          <div class="upload-inline">
            <el-upload
              name="actualControllerCertifyUrl"
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :http-request="uploadHttp"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
                <el-button size="small" type="primary">上传</el-button>
            </el-upload>
            <img v-if="fileData.actualControllerCertifyUrl" :src="fileData.actualControllerCertifyUrl" class="avatar">
          </div>

        </el-collapse-item>
        <el-collapse-item title="固定居住地证明 " name="5">
          <div class="upload-inline">
            <el-upload
              name="residencePermitUrl"
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :http-request="uploadHttp"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
                <el-button size="small" type="primary">上传</el-button>
            </el-upload>
            <img v-if="fileData.residencePermitUrl" :src="fileData.residencePermitUrl" class="avatar">
          </div>

        </el-collapse-item>
        <el-collapse-item title="道路运输许可证 " name="6">
          <div class="upload-inline">
            <el-upload
              name="transportLicenseUrl"
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :http-request="uploadHttp"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
                <el-button size="small" type="primary">上传</el-button>
            </el-upload>
            <img v-if="fileData.transportLicenseUrl" :src="fileData.transportLicenseUrl" class="avatar">
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div v-else>
      <el-alert
        title="请先将资料录入后再添加附件"
        type="error"
        center
        show-icon>
      </el-alert>
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
    methods: {

      handleAvatarSuccess(res, file,fileList) {
        // this.fileData[]= URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        // const isJPG = file.type === 'image/jpeg' || 'image/png';
        // const isLt2M = file.size / 1024 / 1024 < 2;
        //
        // if (!isJPG) {
        //   this.$message.error('上传头像图片只能是 JPG 格式!');
        // }
        // if (!isLt2M) {
        //   this.$message.error('上传头像图片大小不能超过 2MB!');
        // }
        // return isJPG && isLt2M;
      },
      uploadHttp(data){
        let id = this.uploadId || 1;
        let name = data.filename;
        var _this = this;

        let formData = new FormData();
        formData.append('img', data.file)
        formData.append('id', id)
        formData.append('name', name)

        if(id){
           new Promise((resolve,reject) => {
            ajax.post('/loan/loan-application-attachment/upload',formData,{ 'Content-Type': 'multipart/form-data'}).then(function (res) {
              let data = res.data;
              if(data.code == 1){
                _this.$message({
                  type: 'success',
                  message: '添加附件成功'
                });
                _this.fileData[name] = data.data;
              }
            }).catch(error => {
              reject(error)
            })
           })
        }else{
          _this.$message({
            type: 'error',
            message: '请先将资料录入'
          });
        }
      }
    },
  }
</script>
<style>
  .upload-demo .el-upload-list{
    position: relative;
    left: 0;
    top: 0;
    margin-top: 10px;
  }

  /*.avatar-uploader{*/
    /*display: inline-block;*/
  /*}*/
  /*.avatar-uploader .el-upload {*/
    /*border: 1px dashed #d9d9d9;*/
    /*border-radius: 6px;*/
    /*cursor: pointer;*/
    /*position: relative;*/
    /*overflow: hidden;*/
  /*}*/
  /*.avatar-uploader .el-upload:hover {*/
    /*border-color: #409EFF;*/
  /*}*/
  /*.avatar-uploader-icon {*/
    /*font-size: 12px;*/
    /*color: #8c939d;*/
    /*width: 178px;*/
    /*height: 178px;*/
    /*line-height: 178px;*/
    /*text-align: center;*/
  /*}*/
  .avatar {
    display: block;
    width: 100%;
  }
</style>

<style scoped>
  .upload-inline{
    margin-bottom: 20px;
  }
  .attachment-preview{
    margin: 20px 0 100px;
  }
  .preview{
    width: 50%;
    margin: 0 auto;
  }
</style>
