<template>
  <div class="main">
    <div class="content entry-content">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="firstName" name="first">
          <examine-view v-if="id" :id="id"></examine-view>
          <entry-view v-else v-on:childByValue="childByValue"></entry-view>
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
  import { ExamineView, EntryView } from "./components";

  export default {
    components:{
      AttachmentPreview,
      EntryView,
      ExamineView,
    },
    beforeMount:function(){
      let id = this.$route.params.id;

      if(id){
        this.id = id;
        this.firstName = '资料查看';
      }
    },
    data(){
      return {
        id:'',
        activeName: 'first',
        firstName:'资料录入'
      }
    },
     methods:{
       childByValue: function (childValue) {
        // childValue就是子组件传过来的值
          this.id = childValue.id;
          this.activeName = childValue.name;
        },
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
  .white{
    color: #fff;
  }
  .content{
    margin: 20px 0 0;
    padding-bottom: 50px;
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
</style>
