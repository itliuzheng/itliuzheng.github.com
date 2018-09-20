<template>
  <div class="main">
    <div class="top-main">
      <el-form :inline="true" :rules="application_rules" ref="application_form" :model="application_form" label-width="120px">
        <!--<el-form-item label="申请提交时间:">-->
          <!--<el-input class="no-border" v-model="application_form.date" :readonly="application_form.readonly"></el-input>-->
        <!--</el-form-item>-->
        <el-form-item label="申请金额:"  class="is-required">
          <el-input-number v-model="application_form.loanAmount" :type="'number'" :step="100"  :precision="2" :min="0"></el-input-number>
        </el-form-item>
        <el-form-item label="保理业务期限:"  class="is-required">
          <el-select v-model="application_form.factoringBusinessDeadline" placeholder="请选择期限">
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
        <el-form-item label="所在城市:"  class="is-required">
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
            <el-form ref="business" :rules="business_rules" :model="business" label-width="250px" :inline="true">
              <!--<div class="form-title">资料录入</div>-->
              <el-form-item label="公司名称" class="is-required">
                <el-input v-model="business.companyName"></el-input>
              </el-form-item>
              <el-form-item label="注册日期" class="is-required">
                <el-date-picker   type="date" v-model="business.companyRegisterDate" value-format="yyyy-MM-dd"></el-date-picker>
              </el-form-item>
              <el-form-item label="实际经营年限" class="is-required">
                <el-input v-model="business.companyOperateYear"></el-input>
              </el-form-item>
              <el-form-item label="实际经营地址" class="is-required">
                <el-input v-model="business.companyOperateAddress"></el-input>
              </el-form-item>
              <div class="form-title">申请人信息</div>
              <el-form-item label="申请人姓名" class="is-required">
                <el-input v-model="business.proposerName"></el-input>
              </el-form-item>
              <el-form-item label="申请人职务" class="is-required">
                <el-input v-model="business.proposerPosition"></el-input>
              </el-form-item>
              <el-form-item label="申请人身份证号" class="is-required">
                <el-input v-model="business.proposerIdno"></el-input>
              </el-form-item>
              <el-form-item label="申请人手机" class="is-required">
                <el-input v-model="business.proposerMobile"></el-input>
              </el-form-item>
              <el-form-item label="申请人固定居住地址" class="is-required">
                <el-input v-model="business.proposerAddress"></el-input>
              </el-form-item>
              <el-form-item label="申请人婚姻状态" class="is-required">
                <el-select v-model="business.proposerIsMarried" placeholder="请选择">
                  <el-option label="未婚" value="0"></el-option>
                  <el-option label="已婚" value="1"></el-option>
                </el-select>
              </el-form-item>
              <div class="form-title">配偶信息</div>
              <el-form-item label="申请人配偶姓名">
                <el-input v-model="business.proposerSpouseName"></el-input>
              </el-form-item>
              <el-form-item label="申请人配偶身份证号">
                <el-input v-model="business.proposerSpouseIdno"></el-input>
              </el-form-item>
              <el-form-item label="申请人配偶手机">
                <el-input v-model="business.proposerSpouseMobile"></el-input>
              </el-form-item>
              <div class="form-title">法人信息</div>
              <el-form-item label="法人姓名" class="is-required">
                <el-input v-model="business.companyLegalPerson"></el-input>
              </el-form-item>
              <el-form-item label="法人身份证号" class="is-required">
                <el-input v-model="business.companyLegalPersonIdno"></el-input>
              </el-form-item>
              <el-form-item label="法人手机" class="is-required">
                <el-input v-model="business.companyLegalPersonMobile"></el-input>
              </el-form-item>
              <el-form-item label="法人与实际控制人关系" class="is-required">
                <el-input v-model="business.legalPersonActualControllerRelation"></el-input>
              </el-form-item>

              <div class="form-title">企业信息</div>
              <el-form-item label="正式员工数" class="is-required">
                <el-input v-model="business.companyOfficalStaffCount"></el-input>
              </el-form-item>
              <el-form-item label="自有车辆数量" class="is-required">
                <el-input v-model="business.companyCarCount"></el-input>
              </el-form-item>
              <el-form-item label="挂靠车辆数量" class="is-required">
                <el-input v-model="business.companyParkedCarCount"></el-input>
              </el-form-item>
              <el-form-item label="月均支出（加油费、高速公路费、员工工资等）" class="is-required">
                <el-input v-model="business.companyMonthDisburse"></el-input>
              </el-form-item>
              <div class="form-title">资产信息</div>
              <el-form-item label="企业资产总额（房、车、土地、设备）" class="is-required">
                <el-input v-model="business.companyTotalAssets"></el-input>
              </el-form-item>
              <el-form-item label="企业负债总额（信用卡、贷款、民间借贷）" class="is-required">
                <el-input v-model="business.companyTotalLiabilities"></el-input>
              </el-form-item>
              <el-form-item label="对外担保金额" class="is-required">
                <el-input v-model="business.companyExternalGuaranteeAmount"></el-input>
              </el-form-item>
              <el-form-item label="每月应还款额" class="is-required">
                <el-input v-model="business.companyMonthPaymentAmount"></el-input>
              </el-form-item>
              <el-form-item label="去年销售收入总额" class="is-required">
                <el-input v-model="business.grossSalesLastYear"></el-input>
              </el-form-item>
              <el-form-item label="本年已实现销售收入总额" class="is-required">
                <el-input v-model="business.grossSalesThisYear"></el-input>
              </el-form-item>

              <div class="buttons">
                <el-button class="blue el-button el-button--primary" @click="onSubmit">确认提交</el-button>
                <el-button>取消</el-button>
              </div>
            </el-form>
          </div>
        </el-tab-pane>
          <el-tab-pane label="附件管理" name="second" >
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
      AttachmentPreview
    },
    data(){
      return {
        id:'',
        activeName: 'first',
        provinces:china_json,
        citys:[],
        areas:[],
        title:'录入申请表',
        application_form:{
          // date:'2018/9/17',
          readonly:true,
          loanAmount:'',
          factoringBusinessDeadline:'',
          province:null,
          city:[],
          area:[],
          city_code:null
        },
        application_rules:{
          loanAmount:[
            { required: true, message: '请输入金额', trigger: 'blur' },
          ],
          factoringBusinessDeadline:[
            { required: true, message: '请选择保理业务期限', trigger: 'blur' },
          ]
        },
        tableData:[],
        checkList:[],
        business:{
          "companyName": '', // "string //申请人公司名称",
          "companyRegisterDate": '', //{},注册日期
          "companyOperateYear": '', //"string //申请人公司经营年限",
          "companyOperateAddress": '', //"string //申请人公司经营地址",
          "proposerName": '', //"string //申请人姓名",
          "proposerIdno":'', // "string //申请人身份证",
          "proposerAddress": '', //"string //申请人居住地址",
          "proposerPosition":'', // "string //申请人职务",
          "proposerMobile":'', // "string //申请人手机号",
          "proposerIsMarried":'', // "boolean //是否已婚：1为已婚，0为否",
          "proposerSpouseName": '', //"string //申请人配偶姓名",
          "proposerSpouseIdno": '', //"string //申请人配偶身份证",
          "proposerSpouseMobile": '', //"string //申请人配偶手机号",
          "companyLegalPerson": '', //"string //公司法人",
          "companyLegalPersonIdno":'', // "string //公司法人身份证号",
          "companyLegalPersonMobile":'', // "string //公司法人手机号",
          "legalPersonActualControllerRelation": '', //"string //法人与实际控制人关系",
          "companyOfficalStaffCount": '', //"string //公司正式员工数量",
          "companyCarCount":'', // "string //公司自有车辆数量",
          "companyParkedCarCount": '', //"string //公司挂靠车辆数量",
          "companyMonthDisburse":'', // "string //公司月均支出（加油费，调整公路费，员工工资等）",
          "companyTotalAssets": '', //"string //公司总资产（房，车，土地，设备）",
          "companyTotalLiabilities": '', //"string //公司负债总额（信用卡，贷款，民间借贷）",
          "companyExternalGuaranteeAmount": '', //"string //对外担保金额",
          "companyMonthPaymentAmount": '', //"string //每月应还款额",
          "grossSalesLastYear":'', // "string //去年销售收入总额",
          "grossSalesThisYear":'', // "string //今年销售收入总额",
        },
        business_rules:{
          companyName:[
            { required: true, message: '请输入申请人公司名称', trigger: 'blur' }
          ],
          companyRegisterDate:[
            { required: true, message: '请选择注册日期', trigger: 'change' }
          ]
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
       onSubmit:function () {
         var _this = this;
         console.log(this.application_form);
         console.log(this.business);

         function joinJson(jsonbject1, jsonbject2) {
            var resultJsonObject={};
            for(var attr in jsonbject1){
              resultJsonObject[attr]=jsonbject1[attr];
            }
            for(var attr in jsonbject2){
              resultJsonObject[attr]=jsonbject2[attr];
            }
            return resultJsonObject;
          };


          let data =joinJson(this.application_form,this.business);

        this.$refs.application_form.validate((valid) => {
          console.log(valid);
          if (!valid) {
            console.log('error submit!!');
            return false;
          }
        });
        this.$refs.business.validate((valid) => {
          console.log('business',valid);
          if (!valid) {
            console.log('error submit!!');
            return false;
          }
        });
        _this.$message({
          type: 'success',
          message: '添加成功，请前往附件管理添加附件'
        });
         // new Promise((resolve,reject) => {
         //  ajax({
         //    url:'/loan/loan-application/add',
         //    method:'post',
         //    data
         //  }).then(function (res) {
         //    let data = res.data;
         //    if(data.code == 1){
         //
         //      _this.id = data.data.id;
         //      _this.$message({
         //        type: 'success',
         //        message: '添加成功，请前往附件管理添加附件'
         //      });
         //
         //    }
         //
         //  }).catch(error => {
         //    reject(error)
         //  })
         // })

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
