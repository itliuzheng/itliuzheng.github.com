<template>
  <div class="main">
    <el-tabs class="tabs" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="审核详情" name="first">
        <!--<div class="pane">-->
          <!--<a class="btn el-button&#45;&#45;primary" href="javascript:;">查看线上报告</a>-->
        <!--</div>-->
        <div class="information">
          <div class="p_inline">
            <p><span>申请提交时间：</span>{{data.createDate}}</p>
            <p><span>申请金额：</span>{{data.loanAmount}}</p>
          </div>
          <p><span>保理业务期限：</span>{{data.factoringBusinessDeadline}}个月</p>
          <div class="p_inline">
            <p><span>所属城市：</span>{{data.companyProvinceCode}}  {{data.companyCityCode}}  {{data.companyAreaCode}}</p>
            <p><span>公司名称：</span>{{data.companyName}}</p>
          </div>
          <p v-if="data.applyStatus == 1"><span>状态：</span>待审核</p>
          <p v-else-if="data.applyStatus == 2"><span>状态：</span>通过</p>
          <p v-else-if="data.applyStatus == 3"><span>状态：</span>不通过</p>
          <p v-else-if="data.applyStatus == 4"><span>状态：</span>下户中</p>
          <p v-else-if="data.applyStatus == 5"><span>状态：</span>已下户</p>
        </div>

        <div class="result" v-if="data.applyStatus != 1">
          <p>审批结果</p>
          <p>
            <span v-if="data.applyStatus == 2">通过</span>
            <span v-else-if="data.applyStatus == 3">不通过 --</span>
            <span v-else-if="data.applyStatus == 4">下户</span>
            {{data.reason}}
          </p>
        </div>
        <template v-if="taskId != 0">

          <div v-if="data.applyStatus == 1" class="review_result">
            <el-form ref="review" :model="review" :rules="reviewRules" label-width="100px">
              <template>
                <el-form-item class="inline-block" prop="result" label="审核结果">
                  <!--<span class="review_label">审核结果</span>-->
                  <el-select v-model="review.result" placeholder="请选择" >
                    <el-option
                      v-for="list in review.list"
                      :key="list.value"
                      :label="list.name"
                      :value="list.value"
                    ></el-option>
                  </el-select>
                </el-form-item>

                <template v-if="review.result == '3'">
                  <el-form-item class="inline-block"  prop="reason" label="不通过原因">
                    <!--<span class="review_label">不通过原因</span>-->
                    <el-select v-model="review.reason" placeholder="请选择">
                      <el-option
                        v-for="list in review.reason_list"
                        :key="list.value"
                        :label="list.name"
                        :value="list.name"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </template>
                <el-button class="el-button el-button--success" @click="reviewResult">确认审批结果</el-button>
              </template>
              <el-form-item class="input-box" prop="amount" label="审批额度">
                <el-input v-if="review.result != '3'" class="review-input" v-model="review.amount"></el-input>
                <el-input v-else class="review-input" v-model="review.amount" disabled="true"></el-input>
              </el-form-item>
              <el-form-item class="input-box" prop="remark" label="审核备注">
                <el-input class="review-input max-width" v-model="review.remark" ></el-input>
              </el-form-item>
            </el-form>
          </div>
        </template>

        <el-tabs class="info_tab" v-model="review_info" type="card" @tab-click="infoClick">
          <el-tab-pane label="申请信息" name="1"><application-information :id="id"  :business="data"></application-information></el-tab-pane>
          <!--<el-tab-pane label="企业资质" name="2"><qualification :id="id"></qualification></el-tab-pane>-->
          <!--<el-tab-pane label="企业风险信息" name="3"><enterprise-risk-information :id="id"></enterprise-risk-information></el-tab-pane>-->
          <!--<el-tab-pane label="个人资质" name="4"><personal-qualification :id="id"></personal-qualification></el-tab-pane>-->
          <!--<el-tab-pane label="个人风险信息" name="5"><personal-risk-information :id="id"></personal-risk-information></el-tab-pane>-->
          <el-tab-pane label="附件预览" name="6"><attachment-preview-id :uploadId="id"></attachment-preview-id></el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="审核历史记录" name="history"><history :id="id" :page="page"></history></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import { History , ApplicationInformation ,
    Qualification , EnterpriseRiskInformation ,
    PersonalQualification , PersonalRiskInformation ,
    AttachmentPreviewId} from './components'
  import ajax from '@/utils/ajax'
  import { Message } from 'element-ui'

  export default {
    components:{
      History,
      ApplicationInformation,
      Qualification,
      EnterpriseRiskInformation,
      PersonalQualification,
      PersonalRiskInformation,
      AttachmentPreviewId
    },
    beforeMount:function(){
      this.id = this.$route.params.id;
      this.taskId = this.$route.params.taskId;

      this.getInit(this.id,this.taskId);
    },
    data(){
      let validatorAmount = function (rule, value, callback) {

        let reg = /^\d+$/g;

        if(reg.test(value)){
          if(value === '0'){
            callback(new Error('审核金额不能为0'))
          }else{
            callback();
          }
        }else{
          callback(new Error('请输入审核金额'));
        }
      }
      return {
        id:'',
        taskId:"",
        activeName: 'first',
        review:{
          result:'',
          list:[
            {
              value:'3',
              name:'不通过'
            },
            {
              value:'4',
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
          ],
          amount:'',
          remark:'',
          disabled:false
        },
        reviewRules:{
          result:[
            { required: true, message: '请选择审核结果', trigger: 'change' }
          ],
          amount:[
            { required: true, validator:validatorAmount , trigger: 'blur' },
          ],
          remark:[
            { required: true, message: '请填写备注', trigger: 'blur' }
          ],
        },
        review_info:'1',
        data:{
          companyName:'',
          loanAmount:'',
          createDate:'',
          factoringBusinessDeadline:'',
          applyStatus:'',
          companyProvinceCode:'',
          companyCityCode:'',
          companyAreaCode:'',
          approvalAmount:''
        },
        page:[
            {
              "id": "int //主键",
              "applyCompany": "string //申请公司名称",
              "applyUser": "string //申请人姓名",
              "approvalUser": "string //处理人名称",
              "approvalStatus": "int //处理结果：2-通过，3-不通过，4-待下户，5-已下户，6-下户驳回",
              "approvalDate": "date //处理时间",
              "nextApprovalUser": "string //下一步处理人姓名",
              "approvalOpinion": "string //审批意见",
              "rejectCause": "string //拒绝原因",
              "loanId": "int //关联loan_application表的从键"
            }
          ],
      }
    },
    methods:{
      handleClick(tab, event) {
        if(tab.name == 'history'){
          this.getAjax();
        }
      },
      infoClick(tab, event){
      },
      reviewResult(){
        var _this = this;
        let data = {
          taskId:this.$route.params.taskId,
          status:this.review.result,
          approvalAmount:this.review.amount,
          remark:this.review.remark,
          reason:this.review.reason,
        }

        this.$refs.review.validate((valid)=>{
          console.log(valid);
          if(valid){
            _this.reviewAjax(data)
          }
        })
      },
      reviewAjax(data){
        var _this = this;
        new Promise((resolve,reject) => {
          ajax({
            url:`/approval/app`,
            method:'post',
            data,
          }).then(function (res) {
            let data = res.data;
            if(data.code == 1){
              _this.$message({
                message: data.msg
              });
              _this.$router.push({path:'/approval_management/approval_list'});
            }

          }).catch(error => {
            reject(error)
          })
        })
      },
      getInit(id,taskId) {
        var _this = this;
         new Promise((resolve,reject) => {
          ajax({
            // url:`/approval/taskInfo/${taskId}/${id}`,
            url:`/approval/taskInfo/${id}?taskId=${taskId}`,
            method:'get',
          }).then(function (res) {
            let data = res.data;
            if(data.code == 1){

              _this.data = data.data.loan;
              _this.review.amount = _this.data.approvalAmount;
            }

          }).catch(error => {
            reject(error)
          })
         })
      },
      getAjax(){
        var _this = this;
         new Promise((resolve,reject) => {
          ajax({
            url:`/loan/loan-application-history/${this.id}`,
            method:'get'
          }).then(function (res) {
            let data = res.data;
            if(data.code == 1){
              _this.page = data.data;
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

  .inline-block{
    display: inline-block;
    margin-bottom: 0;
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
    padding-bottom: 20px;
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
  .result{
    width: 1000px;
    border-top: 1px solid #ccc;
    background: #999;
    margin: 20px auto 0;
    p{
      display: inline-block;
      text-align: left;
      width: auto;
      height: 40px;
      line-height: 40px;
      margin:0 50px 0 0;
      padding-left: 20px;
      font-size: 14px;
      vertical-align: top;
    }
  }
  .review_result{
    width: 800px;
    margin: 20px auto 0;
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
