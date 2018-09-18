<template>
  <div class="main">
    <el-tabs class="tabs" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="审核详情" name="first">
        <div class="pane">
          <a class="btn el-button--primary" href="javascript:;">查看线上报告</a>
        </div>
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
          <div class="result">
            <p>审批结果</p>
            <p>不通过</p>
          </div>
        </div>
        <div class="review_result">
          <el-form ref="review" :model="review">
            <template :inline="true">
              <span class="review_label">审核结果</span>
              <el-select v-model="review.result" placeholder="请选择">
                <el-option
                  v-for="list in review.list"
                  :key="list.value"
                  :label="list.name"
                  :value="list.value"
                ></el-option>
              </el-select>
              <template v-if="review.result == '0'">
                <span class="review_label">不通过原因</span>
                <el-select v-model="review.reason" placeholder="请选择">
                  <el-option
                    v-for="list in review.reason_list"
                    :key="list.value"
                    :label="list.name"
                    :value="list.value"
                  ></el-option>
                </el-select>
              </template>
              <el-button class="el-button el-button--success">确认审批结果</el-button>
            </template>
            <div class="input-box">
              <span class="review_label">审批额度</span>
              <el-input class="review-input"></el-input>
            </div>
            <div class="input-box">
              <span class="review_label">审核备注</span>
              <el-input class="review-input max-width"></el-input>
            </div>
          </el-form>
        </div>
        <el-tabs class="info_tab" v-model="review_info" type="card" @tab-click="infoClick">
          <el-tab-pane label="申请信息" name="1"><application-information></application-information></el-tab-pane>
          <el-tab-pane label="企业资质" name="2"><qualification></qualification></el-tab-pane>
          <el-tab-pane label="企业风险信息" name="3"><enterprise-risk-information></enterprise-risk-information></el-tab-pane>
          <el-tab-pane label="个人资质" name="4"><personal-qualification></personal-qualification></el-tab-pane>
          <el-tab-pane label="个人风险信息" name="5"><personal-risk-information></personal-risk-information></el-tab-pane>
          <el-tab-pane label="附件预览" name="6"><attachment-preview></attachment-preview></el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="审核历史记录" name="second"><history></history></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import { History , ApplicationInformation , Qualification , EnterpriseRiskInformation , PersonalQualification , PersonalRiskInformation , AttachmentPreview} from './components'

  export default {
    components:{
      History,
      ApplicationInformation,
      Qualification,
      EnterpriseRiskInformation,
      PersonalQualification,
      PersonalRiskInformation,
      AttachmentPreview
    },
    data(){
      return {
        activeName: 'first',
        review:{
          result:'',
          list:[
            {
              value:'0',
              name:'不通过'
            },
            {
              value:'1',
              name:'需要下户'
            },
            {
              value:'2',
              name:'通过'
            }
          ],
          reason:'',
          reason_list:[
            {
              value:'0',
              name:'缺少资料'
            },
            {
              value:'1',
              name:'账户流水不足'
            },
            {
              value:'2',
              name:'负债过多'
            },
          ]
        },
        review_info:'1'
      }
    },
    methods:{
      handleClick(tab, event) {
        console.log(tab, event);
      },
      infoClick(tab, event){

      }
    }
  }
</script>
<style lang="scss">
  $blue : #409EFF;

  .el-tabs__item{
    width: 200px;
    text-align: center;
  }
  .info_tab{
    margin-top: 40px;
    .el-tabs__item{
      width: auto;
      background: $blue;
      color: #fff;
      border-bottom-color: $blue;
      &.is-active{
        background: #fff;
        color: $blue;
        border-bottom-color: #fff;
      }
    }
  }
  .review_result{
    .el-select{
      margin-right: 20px;
      width: 150px;
    }
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

  .pane{
    .btn{
      display: block;
      width: 140px;
      height: 40px;
      line-height: 40px;
      margin: 40px 0 0 200px;
      text-align: center;
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      border-radius: 4px;
      font-size: 14px;
    }
  }

  .information{
    width: 1000px;
    margin: 20px auto 0;
    border: 1px solid #ccc;
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
    .result{
      width: 100%;
      border-top: 1px solid #ccc;
      background: #999;
      margin-top: 20px;
      p{
        display: inline-block;
        text-align: left;
        width: auto;
        height: 40px;
        line-height: 40px;
        margin:0 50px 0 0;
        padding-left: 20px;
        font-size: 14px;
      }
    }
  }
  .review_result{
    width: 800px;
    margin: 20px auto 0;
    .review_label{
      margin-right: 20px;
    }
    .input-box{
      margin-top: 20px;
      .max-width{
        width: 500px;
      }
    }
    .review-input{
      display: inline-block;
      width: 150px;
    }
  }
</style>
