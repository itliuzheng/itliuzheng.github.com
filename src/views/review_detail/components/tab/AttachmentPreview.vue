<template>
  <!--附件预览-->
  <div class="attachment-preview" v-if="uploadId">
  <!--<div class="attachment-preview" >-->
    <el-collapse class="preview" v-model="activeNames" >
      <el-collapse-item title="身份证" name="1">
        <!--<el-upload-->
          <!--v-if="uploadType == 'upload'"-->
          <!--class="upload-demo"-->
          <!--action="/loan/loan-application-attachment/upload"-->
          <!--:on-preview="handlePreview"-->
          <!--:on-remove="handleRemove"-->
          <!--:before-remove="beforeRemove"-->
          <!--multiple-->
          <!--:limit="2"-->
          <!--:on-exceed="handleExceed"-->
          <!--:file-list="fileList">-->
          <!--<el-button size="small" type="primary">附件上传</el-button>-->
        <!--</el-upload>-->


          <!--action="/loan/loan-application-attachment/upload"-->
        <el-upload
          class="upload-demo"
          name="idCardUrl"
          action="http://119.147.171.111/loan/loan-application-attachment/upload"
          :http-request="uploadHttp"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <!--<div><img src="" alt=""></div>-->
      </el-collapse-item>
      <el-collapse-item title="婚姻证明" name="2">

        <el-upload
          class="upload-demo"
          name="marriageCertificateUrl"
          action="http://119.147.171.111/loan/loan-application-attachment/upload"
          :http-request="uploadHttp"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <div><img src="" alt=""></div>
      </el-collapse-item>
      <el-collapse-item title="营业执照" name="3">

        <el-upload
          class="upload-demo"
          name="businessLicenseUrl"
          action="http://119.147.171.111/loan/loan-application-attachment/upload"
          :http-request="uploadHttp"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <div><img src="" alt=""></div>
      </el-collapse-item>
      <el-collapse-item title="实际控制人证明 " name="4">
        <el-upload
          class="upload-demo"
          name="actualControllerCertifyUrl"
          action="http://119.147.171.111/loan/loan-application-attachment/upload"
          :http-request="uploadHttp"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <div><img src="" alt=""></div>
      </el-collapse-item>
      <el-collapse-item title="固定居住地证明 " name="5">
        <el-upload
          class="upload-demo"
          name="residencePermitUrl"
          action="http://119.147.171.111/loan/loan-application-attachment/upload"
          :http-request="uploadHttp"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <div><img src="" alt=""></div>
      </el-collapse-item>
      <el-collapse-item title="道路运输许可证 " name="6">
        <el-upload
          class="upload-demo"
          name="transportLicenseUrl"
          action="http://119.147.171.111/loan/loan-application-attachment/upload"
          :http-request="uploadHttp"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <div><img src="" alt=""></div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
  import ajax from '@/utils/ajax'

  export default {
    props:['uploadType','uploadId'],
    mounted:function(){

        let id = this.uploadId || 1;

    },
    data(){
      return {
        form1:{},
        activeNames: ['1','2','3','4','5','6',],
        fileList:[],
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
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log('file==',file);
      },
      uploadHttp(data){
        console.log(data);
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
