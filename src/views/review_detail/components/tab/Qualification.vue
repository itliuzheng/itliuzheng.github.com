<template>
  <!--企业资质-->
  <div class="table-box">
    <table border="1px">
      <tr>
        <td>公司名称</td>
        <td></td>
        <td>注册日期</td>
        <td></td>
      </tr>
      <tr>
        <td>实际经营年限</td>
        <td></td>
        <td>实际经营地址</td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>申请人姓名</td>
        <td></td>
        <td>申请人职务</td>
        <td></td>
      </tr>
      <tr>
        <td>申请人身份证号</td>
        <td></td>
        <td>申请人手机</td>
        <td></td>
      </tr>
      <tr>
        <td>申请人固定居住地址</td>
        <td></td>
        <td>申请人婚姻状态</td>
        <td></td>
      </tr>
      <tr>
        <td>申请人配偶姓名</td>
        <td></td>
        <td>申请人配偶身份证号</td>
        <td></td>
      </tr>
      <tr>
        <td>申请人配偶手机</td>
        <td></td>
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
        <td></td>
        <td>法人身份证号</td>
        <td></td>
      </tr>
      <tr>
        <td>法人手机</td>
        <td></td>
        <td>法人与实际控制人关系</td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>正式员工数</td>
        <td></td>
        <td>自有车辆数量</td>
        <td></td>
      </tr>
      <tr>
        <td>挂靠车辆数量</td>
        <td></td>
        <td>月均支出（加油费、高速公路费、员工工资等）</td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>企业资产总额（房、车、土地、设备）</td>
        <td></td>
        <td>企业负债总额（信用卡、贷款、民间借贷）</td>
        <td></td>
      </tr>
      <tr>
        <td>对外担保金额</td>
        <td></td>
        <td>每月应还款额</td>
        <td></td>
      </tr>

    </table>


  </div>
</template>
<script>
  export default {
    data(){
      return {
        business:{
          name:''
        }
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
