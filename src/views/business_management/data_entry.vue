<template>
  <div class="main">
    <div class="top-main">
      <el-form :inline="true" ref="application_form" :model="application_form" label-width="120px">
        <el-form-item label="申请提交时间:">
          <el-input class="no-border" v-model="application_form.date" :readonly="application_form.readonly"></el-input>
        </el-form-item>
        <el-form-item label="申请金额:">
          <el-input-number v-model="application_form.amount" :type="'number'" :step="100"  :precision="2" :min="0"></el-input-number>
        </el-form-item>
        <el-form-item label="保理业务期限:">
          <!--<el-input class="inline-width" v-model="application_form.business_period"></el-input>-->
          <el-select v-model="application_form.business_period" placeholder="请选择期限">
            <el-option label="1个月" value="1"></el-option>
            <el-option label="3个月" value="3"></el-option>
            <el-option label="6个月" value="6"></el-option>
            <el-option label="9个月" value="9"></el-option>
            <el-option label="12个月" value="12"></el-option>
            <el-option label="24个月" value="24"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-form :model="application_form" label-width="120px">
        <el-form-item label="所在城市:">
          <el-select
              v-model="application_form.province"
              @change="choseProvince"
              placeholder="省级地区">
              <el-option
                v-for="item in provinces"
                :key="item.code"
                :label="item.name"
                :value="item.code">
              </el-option>
            </el-select>
            <el-select
              v-model="application_form.city"
              @change="choseCity"
              placeholder="市级地区">
              <el-option
                v-for="item in citys"
                :key="item.code"
                :label="item.name"
                :value="item.code">
              </el-option>
            </el-select>
            <el-select
              v-model="application_form.area"
              @change="choseBlock"
              placeholder="区级地区">
              <el-option
                v-for="item in areas"
                :key="item.code"
                :label="item.name"
                :value="item.code">
              </el-option>
            </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="content">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="资料录入" name="first">
          <div class="entry-box">
            <el-form ref="business" :model="business" label-width="250px" :inline="true">
              <!--<div class="form-title">资料录入</div>-->
              <el-form-item label="公司名称">
                <el-input v-model="business.name"></el-input>
              </el-form-item>
              <el-form-item label="注册日期">
                <el-input v-model="business.name"></el-input>
              </el-form-item>
              <el-form-item label="实际经营年限">
                <el-input v-model="business.name"></el-input>
              </el-form-item>
              <el-form-item label="实际经营地址">
                <el-input v-model="business.name"></el-input>
              </el-form-item>
              <div class="form-title">申请人信息</div>
              <el-form-item label="申请人姓名">
                <el-input v-model="business.name"></el-input>
              </el-form-item>
              <el-form-item label="申请人职务">
                <el-input v-model="business.name"></el-input>
              </el-form-item>
              <el-form-item label="申请人身份证号">
                <el-input v-model="business.name"></el-input>
              </el-form-item>
              <el-form-item label="申请人手机">
                <el-input v-model="business.name"></el-input>
              </el-form-item>
              <el-form-item label="申请人固定居住地址">
                <el-input v-model="business.name"></el-input>
              </el-form-item>
              <el-form-item label="申请人婚姻状态">
                <el-input v-model="business.name"></el-input>
              </el-form-item>
              <div class="form-title">配偶信息</div>
              <el-form-item label="申请人配偶姓名">
                <el-input v-model="business.name"></el-input>
              </el-form-item>
              <el-form-item label="申请人配偶身份证号">
                <el-input v-model="business.name"></el-input>
              </el-form-item>
              <el-form-item label="申请人配偶手机">
                <el-input v-model="business.name"></el-input>
              </el-form-item>
              <div class="form-title">法人信息</div>
              <el-form-item label="法人姓名">
                <el-input v-model="business.name"></el-input>
              </el-form-item>
              <el-form-item label="法人身份证号">
                <el-input v-model="business.name"></el-input>
              </el-form-item>
              <el-form-item label="法人手机">
                <el-input v-model="business.name"></el-input>
              </el-form-item>
              <el-form-item label="法人与实际控制人关系">
                <el-input v-model="business.name"></el-input>
              </el-form-item>

              <div class="form-title">企业信息</div>
              <el-form-item label="正式员工数">
                <el-input v-model="business.name"></el-input>
              </el-form-item>
              <el-form-item label="自有车辆数量">
                <el-input v-model="business.name"></el-input>
              </el-form-item>
              <el-form-item label="挂靠车辆数量">
                <el-input v-model="business.name"></el-input>
              </el-form-item>
              <el-form-item label="月均支出（加油费、高速公路费、员工工资等）">
                <el-input v-model="business.name"></el-input>
              </el-form-item>
              <div class="form-title">资产信息</div>
              <el-form-item label="企业资产总额（房、车、土地、设备）">
                <el-input v-model="business.name"></el-input>
              </el-form-item>
              <el-form-item label="企业负债总额（信用卡、贷款、民间借贷）">
                <el-input v-model="business.name"></el-input>
              </el-form-item>
              <el-form-item label="对外担保金额">
                <el-input v-model="business.name"></el-input>
              </el-form-item>
              <el-form-item label="每月应还款额">
                <el-input v-model="business.name"></el-input>
              </el-form-item>
              <el-form-item label="去年销售收入总额">
                <el-input v-model="business.name"></el-input>
              </el-form-item>
              <el-form-item label="本年已实现销售收入总额">
                <el-input v-model="business.name"></el-input>
              </el-form-item>

              <div class="buttons">
                <el-button class="blue el-button el-button--primary" @click="onSubmit">确认提交</el-button>
                <el-button>取消</el-button>
              </div>
            </el-form>
          </div>
        </el-tab-pane>
        <el-tab-pane label="附件管理" name="second">
          <!--<div class="header clearfix">-->
            <!--<el-upload-->
              <!--class="upload-demo"-->
              <!--action="https://jsonplaceholder.typicode.com/posts/"-->
              <!--:on-preview="handlePreview"-->
              <!--:on-remove="handleRemove"-->
              <!--:before-remove="beforeRemove"-->
              <!--multiple-->
              <!--:limit="2"-->
              <!--:on-exceed="handleExceed"-->
              <!--:file-list="fileList">-->
              <!--<el-button size="small" type="primary">附件上传</el-button>-->
            <!--</el-upload>-->
          <!--</div>-->

          <div class="attachment-preview">
            <el-collapse class="preview" v-model="attachmentNames" @change="handleChange">
              <el-collapse-item title="身份证" name="1">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="2"
                  :on-exceed="handleExceed"
                  :file-list="fileList">
                  <el-button size="small" type="primary">附件上传</el-button>
                </el-upload>
              </el-collapse-item>
              <el-collapse-item title="婚姻证明" name="2">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="2"
                  :on-exceed="handleExceed"
                  :file-list="fileList">
                  <el-button size="small" type="primary">附件上传</el-button>
                </el-upload>
              </el-collapse-item>
              <el-collapse-item title="营业执照" name="3">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="2"
                  :on-exceed="handleExceed"
                  :file-list="fileList">
                  <el-button size="small" type="primary">附件上传</el-button>
                </el-upload>
              </el-collapse-item>
              <el-collapse-item title="实际控制人证明 " name="4">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="2"
                  :on-exceed="handleExceed"
                  :file-list="fileList">
                  <el-button size="small" type="primary">附件上传</el-button>
                </el-upload>
              </el-collapse-item>
              <el-collapse-item title="固定居住地证明 " name="5">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="2"
                  :on-exceed="handleExceed"
                  :file-list="fileList">
                  <el-button size="small" type="primary">附件上传</el-button>
                </el-upload>
              </el-collapse-item>
              <el-collapse-item title="道路运输许可证 " name="6">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="2"
                  :on-exceed="handleExceed"
                  :file-list="fileList">
                  <el-button size="small" type="primary">附件上传</el-button>
                </el-upload>
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-tab-pane>
      </el-tabs>

    </div>
  </div>
</template>
<script>
  import china_json from '@/utils/city'

  export default {
    data(){
      return {
        activeName: 'first',
        attachmentNames:['1'],
        provinces:china_json,
        citys:[],
        areas:[],
        title:'录入申请表',
        application_form:{
          date:'2018/9/17',
          readonly:true,
          amount:'',
          business_period:'',
          province:null,
          city:[],
          area:[],
          city_code:null
        },
        fileList:[],
        tableData:[],
        checkList:[],
        business:{
          name:''
        }
      }
    },
     methods:{
       choseProvince:function(e) {
        // 选省
        for (var index in this.provinces) {
          if (e === this.provinces[index].code) {
            this.citys = this.provinces[index].children
            this.areas =this.provinces[index].children[0].children;
            this.application_form.city = this.provinces[index].children[0].name;
            this.application_form.area = null;
          }
        }
      },
      // 选市
      choseCity:function(e) {
        for (var index3 in this.citys) {
          if (e === this.citys[index3].code) {
            this.areas = this.citys[index3].children;
            console.log( this.citys[index3].children)
            console.log( this.citys[index3].children[0].name)
            this.application_form.area = this.citys[index3].children[0].name;
            console.log(e)
          }
        }
      },
      // 选区
       choseBlock:function(e) {
        this.application_form.city_code = e;
        },
       handleRemove(file, fileList) {
        console.log(file, fileList);
        },
       handlePreview(file) {
        console.log(file);
        },
       handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 2 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
       beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
        },
       onSubmit:function () {
         console.log('submit!');
       },
       handleClick:function (tab, e) {

       }
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
  .top-main{
    border: 1px solid #ccc;
    width: 1000px;
    margin: 50px auto 0;
    padding: 50px;
  }
  .white{
    color: #fff;
  }
  .content{
    width: 1000px;
    margin: 50px auto 0;
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
</style>
