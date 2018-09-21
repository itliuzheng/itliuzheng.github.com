<template>
  <div class="container">

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
          <p><span>状态：</span>待审核</p>
        </div>
    </div>
    <div class="entry-box">
      <el-form ref="business" :model="business" label-width="250px" :inline="true">
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
  import ajax from '@/utils/ajax'

  export default {

    data(){
      return {
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
      }
    },
     methods:{
      getAjac:function () {

         new Promise((resolve,reject) => {
          ajax({
            url:'/loan/loan-application/add',
            method:'post',
            data
          }).then(function (res) {
            let data = res.data;
            if(data.code == 1){

              _this.id = data.data.id;
              _this.$message({
                type: 'success',
                message: '添加成功，请前往附件管理添加附件'
              });

              _this.activeName = 'attachment';

            }

          }).catch(error => {
            reject(error)
          })
         })
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
    margin:0 auto 0;
    padding: 50px;
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
