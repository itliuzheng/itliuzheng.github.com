<template>
  <div class="main">
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
    <div class="content">
      <div class="header clearfix">
        <!--<div class="tab">资料录入</div>-->
      </div>
      <div class="entry-box">
        <el-form ref="business" :model="business" label-width="250px" :inline="true">
          <div class="form-title">资料录入</div>
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
            <!--<el-button class="blue el-button el-button&#45;&#45;primary" @click="onSubmit">提交审核</el-button>-->
          </div>
        </el-form>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
      }
    },
    methods:{
    }
  }
</script>
<style lang="scss">
  .content{
    tr,td{
      .cell{
        text-align: center;
        font-size: 12px;
      }
    }
  }
</style>
<style lang="scss" scoped>
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
<style lang="scss" scoped>
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
