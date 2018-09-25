
<template>
  <!--企业风险信息-->
  <div class="table-box">
      <table border="1px">
        <tr>
          <td>公司名称</td>
          <td>{{business.companyName}}</td>
          <td>注册日期</td>
          <td>{{business.companyRegisterDate}}</td>
        </tr>
        <tr>
          <td>实际经营年限</td>
          <td>{{business.companyOperateYear}}</td>
          <td>实际经营地址</td>
          <td>{{business.companyOperateAddress}}</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>申请人姓名</td>
          <td>{{business.proposerName}}</td>
          <td>申请人职务</td>
          <td>{{business.proposerPosition}}</td>
        </tr>
        <tr>
          <td>申请人身份证号</td>
          <td>{{business.proposerIdno}}</td>
          <td>申请人手机</td>
          <td>{{business.proposerMobile}}</td>
        </tr>
        <tr>
          <td>申请人固定居住地址</td>
          <td>{{business.proposerAddress}}</td>
          <td>申请人婚姻状态</td>
          <td v-if="business.proposerIsMarried == 1">已婚</td>
          <td v-else>未婚</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>申请人配偶姓名</td>
          <td>{{business.proposerSpouseName}}</td>
          <td>申请人配偶身份证号</td>
          <td>{{business.proposerSpouseIdno}}</td>
        </tr>
        <tr>
          <td>申请人配偶手机</td>
          <td>{{business.proposerSpouseMobile}}</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>法人姓名</td>
          <td>{{business.companyLegalPerson}}</td>
          <td>法人身份证号</td>
          <td>{{business.companyLegalPersonIdno}}</td>
        </tr>
        <tr>
          <td>法人手机</td>
          <td>{{business.companyLegalPersonMobile}}</td>
          <td>法人与实际控制人关系</td>
          <td>{{business.legalPersonActualControllerRelation}}</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>正式员工数</td>
          <td>{{business.companyOfficalStaffCount}}</td>
          <td>自有车辆数量</td>
          <td>{{business.companyCarCount}}</td>
        </tr>
        <tr>
          <td>挂靠车辆数量</td>
          <td>{{business.companyParkedCarCount}}</td>
          <td>月均支出（加油费、高速公路费、员工工资等）</td>
          <td>{{business.companyMonthDisburse}}</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>企业资产总额（房、车、土地、设备）</td>
          <td>{{business.companyTotalAssets}}</td>
          <td>企业负债总额（信用卡、贷款、民间借贷）</td>
          <td>{{business.companyTotalLiabilities}}</td>
        </tr>
        <tr>
          <td>对外担保金额</td>
          <td>{{business.companyExternalGuaranteeAmount}}</td>
          <td>每月应还款额</td>
          <td>{{business.companyMonthPaymentAmount}}</td>
        </tr>

      </table>
  </div>
</template>
<script>
  import ajax from '@/utils/ajax'

  export default {
    props:['id'],
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
    beforeMount:function(){
      this.getAjac(this.id);
    },
     methods:{
      getAjac:function (id) {
        var _this = this;
         new Promise((resolve,reject) => {
          ajax({
            url:`/loan/loan-application/${id}`,
            method:'get',
          }).then(function (res) {
            let data = res.data;
            if(data.code == 1){

              _this.business = data.data;


            }

          }).catch(error => {
            reject(error)
          })
         })
      }
    }
  }
</script>
<style scoped lang="scss">
  .table-box{
    width: 1000px;
    margin: 0 auto;
    padding-bottom: 50px;
    margin-top: 20px;
    table{
      border-color: #dcdfe6;
      td{
        width: 25%;
        text-align: center;
        line-height: 1;
        padding: 10px;
      }
    }
  }
</style>
