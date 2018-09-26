<template>
          <div class="container">

            <div class="top-main">
              <el-form :inline="true" :rules="application_rules" ref="application_form" :model="application_form" label-width="120px">
                <!--<el-form-item label="申请提交时间:">-->
                  <!--<el-input class="no-border" v-model="application_form.date" :readonly="application_form.readonly"></el-input>-->
                <!--</el-form-item>-->
                <el-form-item label="申请金额:"  class="is-required"  prop="loanAmount">
                  <el-input-number v-model="application_form.loanAmount" :type="'number'" :step="100"  :precision="2" :min="0"></el-input-number>
                </el-form-item>
                <el-form-item label="保理业务期限:"  class="is-required"  prop="factoringBusinessDeadline">
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
              <el-form :inline="true" :model="application_form" :rules="application_rules" label-width="120px">
                <el-form-item label="所在城市:"  class="is-required"  prop="companyProvinceCode" >
                  <el-select
                      v-model="application_form.companyProvinceCode"
                      @change="choseProvince"
                      placeholder="省级地区">
                      <el-option
                        v-for="item in provinces"
                        :key="item.code"
                        :label="item.name"
                        :value="item.code">
                      </el-option>
                    </el-select>
                  <el-form-item prop="companyCityCode">
                    <el-select
                      v-model="application_form.companyCityCode"
                      @change="choseCity"
                      placeholder="市级地区">
                      <el-option
                        v-for="item in citys"
                        :key="item.code"
                        :label="item.name"
                        :value="item.code">
                      </el-option>
                    </el-select>
                  </el-form-item>

                  <el-form-item prop="companyAreaCode">

                    <el-select
                      v-model="application_form.companyAreaCode"
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
                </el-form-item>
              </el-form>
            </div>

            <div class="entry-box">
              <el-form ref="business" :rules="business_rules" :model="business" label-width="250px" :inline="true">
                <!--<div class="form-title">资料录入</div>-->
                <el-form-item label="公司名称" class="is-required" prop="companyName">
                  <el-input v-model="business.companyName"></el-input>
                </el-form-item>
                <el-form-item label="注册日期" class="is-required" prop="companyRegisterDate">
                  <el-date-picker   type="date" v-model="business.companyRegisterDate" value-format="yyyy-MM-dd"></el-date-picker>
                </el-form-item>
                <el-form-item label="实际经营年限" class="is-required"  prop="companyOperateYear">
                  <el-input v-model="business.companyOperateYear"></el-input>
                </el-form-item>
                <el-form-item label="实际经营地址" class="is-required" prop="companyOperateAddress">
                  <el-input v-model="business.companyOperateAddress"></el-input>
                </el-form-item>
                <div class="form-title">申请人信息</div>
                <el-form-item label="申请人姓名" class="is-required" prop="proposerName">
                  <el-input v-model="business.proposerName"></el-input>
                </el-form-item>
                <el-form-item label="申请人职务" class="is-required" prop="proposerPosition">
                  <el-input v-model="business.proposerPosition"></el-input>
                </el-form-item>
                <el-form-item label="申请人身份证号" class="is-required" prop="proposerIdno">
                  <el-input v-model="business.proposerIdno"></el-input>
                </el-form-item>
                <el-form-item label="申请人手机" class="is-required" prop="proposerMobile">
                  <el-input v-model="business.proposerMobile"></el-input>
                </el-form-item>
                <el-form-item label="申请人固定居住地址" class="is-required" prop="proposerAddress">
                  <el-input v-model="business.proposerAddress"></el-input>
                </el-form-item>
                <el-form-item label="申请人婚姻状态" class="is-required" prop="proposerIsMarried">
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
                <el-form-item label="法人姓名" class="is-required" prop="companyLegalPerson">
                  <el-input v-model="business.companyLegalPerson"></el-input>
                </el-form-item>
                <el-form-item label="法人身份证号" class="is-required" prop="companyLegalPersonIdno">
                  <el-input v-model="business.companyLegalPersonIdno"></el-input>
                </el-form-item>
                <el-form-item label="法人手机" class="is-required" prop="companyLegalPersonMobile">
                  <el-input v-model="business.companyLegalPersonMobile"></el-input>
                </el-form-item>
                <el-form-item label="法人与实际控制人关系" class="is-required" prop="legalPersonActualControllerRelation">
                  <el-input v-model="business.legalPersonActualControllerRelation"></el-input>
                </el-form-item>

                <div class="form-title">企业信息</div>
                <el-form-item label="正式员工数" class="is-required" prop="companyOfficalStaffCount">
                  <el-input v-model="business.companyOfficalStaffCount"></el-input>
                </el-form-item>
                <el-form-item label="自有车辆数量" class="is-required"  prop="companyCarCount">
                  <el-input v-model="business.companyCarCount"></el-input>
                </el-form-item>
                <el-form-item label="挂靠车辆数量" class="is-required"  prop="companyParkedCarCount">
                  <el-input v-model="business.companyParkedCarCount"></el-input>
                </el-form-item>
                <el-form-item label="月均支出（加油费、高速公路费、员工工资等）" class="is-required"  prop="companyMonthDisburse">
                  <el-input v-model="business.companyMonthDisburse"></el-input>
                </el-form-item>
                <div class="form-title">资产信息</div>
                <el-form-item label="企业资产总额（房、车、土地、设备）" class="is-required" prop="companyTotalAssets">
                  <el-input v-model="business.companyTotalAssets"></el-input>
                </el-form-item>
                <el-form-item label="企业负债总额（信用卡、贷款、民间借贷）" class="is-required" prop="companyTotalLiabilities">
                  <el-input v-model="business.companyTotalLiabilities"></el-input>
                </el-form-item>
                <el-form-item label="对外担保金额" class="is-required" prop="companyExternalGuaranteeAmount">
                  <el-input v-model="business.companyExternalGuaranteeAmount"></el-input>
                </el-form-item>
                <el-form-item label="每月应还款额" class="is-required" prop="companyMonthPaymentAmount">
                  <el-input v-model="business.companyMonthPaymentAmount"></el-input>
                </el-form-item>
                <el-form-item label="去年销售收入总额" class="is-required"  prop="grossSalesLastYear">
                  <el-input v-model="business.grossSalesLastYear"></el-input>
                </el-form-item>
                <el-form-item label="本年已实现销售收入总额" class="is-required"  prop="grossSalesThisYear">
                  <el-input v-model="business.grossSalesThisYear"></el-input>
                </el-form-item>

                <div class="buttons">
                  <el-button class="blue el-button el-button--primary" @click="onSubmit">确认提交</el-button>
                  <el-button>取消</el-button>
                </div>
              </el-form>
            </div>
          </div>
</template>
<script>
  // import china_json from '@/utils/city'
  import ajax from '@/utils/ajax'
  import {reconstructionCode} from "@/utils/tree";

  export default {
    beforeMount:function(){
      this.getCity();
    },
    data(){
      return {
        provinces:[],
        citys:[],
        areas:[],
        application_form:{
          readonly:true,
          loanAmount:'',
          factoringBusinessDeadline:'',
          companyProvinceCode:'',
          companyCityCode:'',
          companyAreaCode:'',
          city_code:null
        },
        application_rules:{
          loanAmount:[
            { required: true, message: '请输入金额', trigger: 'blur' },
          ],
          factoringBusinessDeadline:[
            { required: true, message: '请选择保理业务期限', trigger: 'change' },
          ],
          companyProvinceCode:[
            { required: true, message: '请选择省级地区', trigger: 'change' },
          ],
          companyCityCode:[
            { required: true, message: '请选择市级地区', trigger: 'change' },
          ],
          companyAreaCode:[
            { required: true, message: '请选择区级地区', trigger: 'change' },
          ],
        },
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
          ],
          companyOperateYear:[
            { required: true, message: '请输入申请人公司经营年限', trigger: 'blur' }
          ],
          companyOperateAddress:[
            { required: true, message: '请输入申请人公司经营地址', trigger: 'blur' }
          ],
          proposerName:[
            { required: true, message: '请输入申请人姓名', trigger: 'blur' }
          ],
          proposerIdno:[
            { required: true, message: '请输入申请人身份证', trigger: 'blur' }
          ],
          proposerAddress:[
            { required: true, message: '请输入申请人身份证', trigger: 'blur' }
          ],
          proposerPosition:[
            { required: true, message: '请输入申请人职务', trigger: 'blur' }
          ],
          proposerMobile:[
            { required: true, message: '请输入申请人手机号', trigger: 'blur' }
          ],
          proposerIsMarried:[
            { required: true, message: '请选择是否已婚', trigger: 'change' }
          ],
          companyLegalPerson:[
            { required: true, message: '请输入公司法人', trigger: 'blur' }
          ],
          companyLegalPersonIdno:[
            { required: true, message: '请输入公司法人身份证号', trigger: 'blur' }
          ],
          companyLegalPersonMobile:[
            { required: true, message: '请输入公司法人手机号', trigger: 'blur' }
          ],
          legalPersonActualControllerRelation:[
            { required: true, message: '请输入法人与实际控制人关系', trigger: 'blur' }
          ],
          companyOfficalStaffCount:[
            { required: true, message: '请输入公司正式员工数量', trigger: 'blur' }
          ],
          companyCarCount:[
            { required: true, message: '请输入公司自有车辆数量', trigger: 'blur' }
          ],
          companyParkedCarCount:[
            { required: true, message: '此项不能为空', trigger: 'blur' }
          ],
          companyMonthDisburse:[
            { required: true, message: '此项不能为空', trigger: 'blur' }
          ],
          companyTotalAssets:[
            { required: true, message: '此项不能为空', trigger: 'blur' }
          ],
          companyTotalLiabilities:[
            { required: true, message: '此项不能为空', trigger: 'blur' }
          ],
          companyExternalGuaranteeAmount:[
            { required: true, message: '此项不能为空', trigger: 'blur' }
          ],
          companyMonthPaymentAmount:[
            { required: true, message: '此项不能为空', trigger: 'blur' }
          ],
          grossSalesLastYear:[
            { required: true, message: '此项不能为空', trigger: 'blur' }
          ],
          grossSalesThisYear:[
            { required: true, message: '此项不能为空', trigger: 'blur' }
          ],
        }
      }
    },
     methods:{
      getCity:function(){
        var _this = this;
        let storage = JSON.parse(localStorage.getItem('city'));
        if(storage){
          _this.provinces = storage;
        }else{
         new Promise((resolve,reject) => {
          ajax({
            url:'/city',
            method:'get',
          }).then(function (res) {
            let data = res.data;
            if(data.code == 1){
              _this.provinces = reconstructionCode(data.data);

              localStorage.setItem('city',JSON.stringify(_this.provinces))
            }

          }).catch(error => {
            reject(error)
          })
         })
        }
      },
       choseProvince:function(e) {
        // 选省
        for (var index in this.provinces) {
          if (e === this.provinces[index].code) {
            this.citys = this.provinces[index].children
            this.areas =this.provinces[index].children[0].children;
            this.application_form.companyCityCode = this.provinces[index].children[0].code;
            this.application_form.companyAreaCode = null
          }
        }
      },
      // 选市
      choseCity:function(e) {
        for (var index3 in this.citys) {
          if (e === this.citys[index3].code) {
            this.areas = this.citys[index3].children;
            // console.log( this.citys[index3].children)
            // console.log( this.citys[index3].children[0].name)
            this.application_form.companyAreaCode = this.citys[index3].children[0].code;
          }
        }
      },
      // 选区
      choseBlock:function(e) {
      // console.log('选省',this.application_form.companyProvinceCode);
      // console.log('选市',this.application_form.companyCityCode);
      // console.log('选区',this.application_form.companyAreaCode);
      },
       getAjax:function(data){

         var _this = this;
         new Promise((resolve,reject) => {
          ajax({
            url:'/loan/loan-application/add',
            method:'post',
            data
          }).then(function (res) {
            let data = res.data;
            if(data.code == 1){

              _this.$message({
                type: 'success',
                message: '添加成功，请前往附件管理添加附件'
              });

              let value = {
                id : data.data.id,
                name:'attachment'
              }

              _this.$emit('childByValue',value)
            }

          }).catch(error => {
            reject(error)
          })
         })
       },
       onSubmit:function () {
         var _this = this;
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
          if (valid) {
            _this.$refs.business.validate((valid) => {
              console.log('business',valid);
              if (valid) {
                _this.getAjax(data);
              }else{
                _this.$message({
                  type: 'error',
                  message: '数据不能为空'
                });
              }
            });
          }else{
              _this.$message({
                type: 'error',
                message: '数据不能为空'
              });
          }

        });


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
<style lang="scss" scoped>

  .top-main{
    border: 1px solid #ccc;
    width: 1000px;
    margin: 50px auto 0;
    padding: 50px;
  }
    .container{
      width: 1000px;
      margin: 0 auto;
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
