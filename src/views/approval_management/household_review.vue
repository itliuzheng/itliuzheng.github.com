<template>
  <div class="main">
    <div class="content entry-content">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="firstName" name="first">
          <div class="top-main">
              <div class="information">
                <div class="p_inline">
                  <p><span>申请提交时间：</span>2018/12/6</p>
                  <p><span>申请金额：</span>201,800.00</p>
                </div>
                <p><span>保理业务期限：</span>12个月</p>
                <div class="p_inline">
                  <p><span>所属城市：</span>北京市  北京  东城区</p>
                  <p><span>公司名称：</span>天津港位物流有限公司</p>
                </div>
                <p><span>状态：</span>待下户</p>
              </div>
          </div>
        </el-tab-pane>
          <el-tab-pane label="附件管理" name="attachment" >
            <div class="attachment-preview">
              <attachment-preview uploadType="'upload'" :uploadId="id"></attachment-preview>
            </div>
          </el-tab-pane>
      </el-tabs>

    </div>
  </div>
</template>
<script>
  import china_json from '@/utils/city'
  import ajax from '@/utils/ajax'
  import {  AttachmentPreview} from '@/views/review_detail/components'

  export default {
    components:{
      AttachmentPreview,
    },
    beforeMount:function(){
      let id = this.$route.params.id;

      this.id = id;

    },
    data(){
      return {
        id:'',
        activeName: 'first',
        firstName:'下户信息'
      }
    },
     methods:{
       handleClick:function (tab, e) {

       },
    }
  }
</script>
<style lang="scss">
  $blue : #409EFF;

  .inline-width{
    width: 203px;
  }
  .no-border{
    input{
      border: none 0;
    }
  }

  .entry-content{
    .el-tabs__nav-wrap{
      padding-left: 30px;
    }
  }

  .el-upload__tip{
    display: inline-block;
  }

  .upload-demo{
    float: left;
    position: relative;
    .el-upload-list{
      position: absolute;
      left: 100px;
      top: -20px;
    }
  }
  .table{
    .el-input__inner{
      border: none;
    }
  }
  .check-group{
    width: 50%;
    margin: 50px auto 10px;
  }
  .check-block{
    display: block;
  }
  .el-form-item__label{
    text-align: center;
    font-size: 12px;
  }
  .form-title{
    width: 250px;
    text-align: center;
    line-height: 40px;
    background: $blue;
    color: #fff;
    margin-bottom: 22px;
  }


</style>
<style scoped lang="scss">
  $blue : #409EFF;

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
    margin: 0 auto 0;
  }

  .tab{
    font-size: 12px;
    background-color: #409eff;
    color: #fff;
    border: 1px solid #409eff;
    display: inline-block;
    padding: 9px 15px;
    border-radius: 3px;
    line-height:1;
    float: left;
    margin-right: 10px;
  }
  .table{
    font-size: 14px;
    text-align: center;
    margin-top: 20px;
    table{
      width: 100%;
      td{
        width: 250px;
        text-align: center;
        height: 40px;
        line-height: 40px;
        font-weight: 500;
      }
    }
  }
  .buttons{
    text-align: center;
  }
  .entry-box{
    margin-top: 22px;
  }


  .information{
    width: 1000px;
    p{
      width: 49%;
      margin-top: 20px;
      font-weight: 500;
      span{
        width: 200px;
        display: inline-block;
        padding-left: 20px;
        color: #666;
        font-weight: normal;
      }
    }
    .p_inline{
      p{
        display: inline-block;
        /*margin-right: 50px;*/
      }
    }
  }
</style>
