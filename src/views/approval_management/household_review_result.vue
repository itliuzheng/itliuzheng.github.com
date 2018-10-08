<template>
  <div class="main">
    <div class="content entry-content household_review">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="firstName" name="first">

          <div class="top-main">
            <div class="information">
              <div class="p_inline">
                <p><span>申请提交时间：</span>{{topContext.createDate  | dateFormat}}</p>
                <p><span>申请金额：</span>{{topContext.loanAmount}}元</p>
              </div>
              <p><span>保理业务期限：</span>{{topContext.factoringBusinessDeadline}}个月</p>
              <div class="p_inline">
                <p><span>所属城市：</span>{{topContext.companyProvinceCode}}{{topContext.companyCityCode}}{{topContext.companyAreaCode}}</p>
                <p><span>公司名称：</span>{{topContext.companyName}}</p>

              </div>

              <p v-if="topContext.applyStatus == 1"><span>状态：</span>待审核</p>
              <p v-else-if="topContext.applyStatus == 2"><span>状态：</span>通过</p>
              <p v-else-if="topContext.applyStatus == 3"><span>状态：</span>不通过</p>
              <p v-else-if="topContext.applyStatus == 4"><span>状态：</span>下户中</p>
              <p v-else-if="topContext.applyStatus == 5"><span>状态：</span>已下户</p>
            </div>

          </div>
          <div class="entry-box">
              <el-form label-width="250px" :inline="true">
                <!--<div class="form-title">资料录入</div>-->
                <el-form-item label="上报机构" >
                  <el-input v-model="business.reportOrganisation" disabled="disabled"></el-input>
                </el-form-item>
                <el-form-item label="业务编号" class="is-required" >
                  <el-input v-model="business.businessNum" disabled="disabled"></el-input>
                </el-form-item>
                <el-form-item label="主办客户经理" class="is-required">
                  <el-input v-model="business.sponsorCustomerManager"  disabled="disabled"></el-input>
                </el-form-item>
                <el-form-item label="联系电话（手机）" class="is-required" >
                  <el-input v-model="business.sponsorCustomerManagerPhone" disabled="disabled"></el-input>
                </el-form-item>
                <el-form-item label="协办客户经理" class="is-required" >
                  <el-input v-model="business.supportCustomerManager" disabled="disabled"></el-input>
                </el-form-item>
                <el-form-item label="联系电话（手机）" class="is-required" >
                  <el-input v-model="business.supportCustomerManagerPhone" disabled="disabled"></el-input>
                </el-form-item>
                <el-form-item label="主办人员" class="is-required" >
                  <el-input v-model="business.sponsorPersonnel" disabled="disabled"></el-input>
                </el-form-item>
                <el-form-item label="协办人员" class="is-required" >
                  <el-input v-model="business.supportPersonnel" disabled="disabled"></el-input>
                </el-form-item>

                <div class="form-title">业务信息</div>
                <el-form-item label="产品名称" class="is-required"  >
                  <el-input v-model="business.businessInfo.projectName" disabled="disabled"></el-input>
                </el-form-item>
                <el-form-item label="申请金额" class="is-required" >
                  <el-input v-model="business.businessInfo.applyForAmount" disabled="disabled"></el-input>
                </el-form-item>
                <el-form-item label="申请日" class="is-required" >
                  <el-input v-model="business.businessInfo.applyForDate" disabled="disabled"></el-input>
                </el-form-item>
                <el-form-item label="到期日" class="is-required">
                  <el-input v-model="business.businessInfo.expireDate" disabled="disabled"></el-input>
                </el-form-item>
                <el-form-item label="月利率" class="is-required"  >
                  <el-input v-model="business.businessInfo.monthlyRate"  disabled="disabled"></el-input>
                </el-form-item>
                <el-form-item label="年利率" class="is-required">
                  <el-input v-model="business.businessInfo.annualRate"  disabled="disabled"></el-input>
                </el-form-item>
                <el-form-item label="是否首次" class="is-required" >
                  <el-input v-model="business.businessInfo.isFirst"  disabled="disabled"></el-input>
                </el-form-item>
                <el-form-item label="还款方式" class="is-required" >
                  <el-input v-model="business.businessInfo.paymentWay"  disabled="disabled"></el-input>
                </el-form-item>
                <div class="form-title">公司信息</div>
                <el-form-item
                  class="is-required"
                  v-for="(list,index) in business.companyInfo"
                  :label="list.investigationItemName"
                  :key="list.investigationItemName+index"
                >
                  <el-input v-model="list.investigationItemResult" disabled="disabled"></el-input>
                </el-form-item>

                <table class="list-table">
                  <tr>
                    <th>异常项目（问询）</th>
                    <th>询问结果</th>
                    <th>询问对象</th>
                  </tr>
                  <tr v-for="(list,index) in business.projectExceptionAskInfo"
                  :key="list.askName+index"
                  >
                    <td>{{list.askName}}</td>
                    <td>
                      <el-form-item>
                        <el-input v-model="list.askResult" disabled="disabled"></el-input>
                      </el-form-item>
                    </td>
                    <td>
                      <el-form-item>
                        <el-input v-model="list.askTarget" disabled="disabled"></el-input>
                      </el-form-item>
                    </td>
                  </tr>
                </table>
                <table class="list-table">
                  <tr>
                    <th>异常项目（观察）</th>
                    <th>观察结果</th>
                    <th>观察时间</th>
                  </tr>
                  <tr v-for="(list,index) in business.projectExceptionViewInfo"
                  :key="list.viewName+index">
                    <td>{{list.viewName}}</td>
                    <td>
                      <el-form-item>
                        <el-input v-model="list.viewResult" disabled="disabled"></el-input>
                      </el-form-item>
                    </td>
                    <td>
                      <el-form-item>
                        <el-input v-model="list.viewDate" disabled="disabled"></el-input>

                      </el-form-item>
                    </td>
                  </tr>
                </table>
                <table class="list-table">
                  <tr>
                    <th>单据项目</th>
                    <th>是否亲见原件</th>
                    <th>备注</th>
                  </tr>
                  <tr v-for="(list,index) in business.invoicesInfo"
                  :key="list.invoicesName+index">
                    <td>{{list.invoicesName}}</td>
                    <td>
                      <el-form-item>
                        <el-input v-model="list.isSeeYourself" disabled="disabled"></el-input>
                      </el-form-item>
                    </td>
                    <td>
                      <el-form-item>
                        <el-input v-model="list.remark" disabled="disabled"></el-input>
                      </el-form-item>
                    </td>
                  </tr>
                </table>
                <table class="list-table">
                  <tr>
                    <th>历史数据</th>
                    <th>（运单、回单、发票、打款记录、TMS、财务软件）</th>
                  </tr>
                  <tr v-for="(list,index) in business.historyData"
                  :key="list.dataName+index">
                    <td>{{list.dataName}}</td>
                    <td>
                      <el-form-item>
                        <el-input v-model="list.have" disabled="disabled"></el-input>
                      </el-form-item>
                    </td>
                  </tr>
                </table>
                <!-- projectRelatedInfo -->
                <table class="list-table">
                  <tr>
                    <th>项目名称</th>
                    <th>金额</th>
                    <th>备注</th>
                  </tr>
                  <tr v-for="(list,index) in business.projectRelatedInfo"
                  :key="list.projectRelatedName+index">
                    <td>{{list.projectRelatedName}}</td>
                    <td>
                      <el-form-item>
                        <el-input v-model="list.projectRelatedAmount" disabled="disabled"></el-input>
                      </el-form-item>
                    </td>
                    <td>
                      <el-form-item>
                        <el-input v-model="list.remark" disabled="disabled"></el-input>
                      </el-form-item>
                    </td>
                  </tr>
                </table>
                <!-- assetInfo -->
                <table class="list-table">
                  <tr>
                    <th>资产类型</th>
                    <th>金额</th>
                    <th>备注</th>
                  </tr>
                  <tr v-for="(list,index) in business.assetInfo"
                  :key="list.assetName+index">
                    <td>{{list.assetName}}</td>
                    <td>
                      <el-form-item>
                        <el-input v-model="list.assetAmount"  disabled="disabled" ></el-input>
                      </el-form-item>
                    </td>
                    <td>
                      <el-form-item>
                        <el-input v-model="list.remark" disabled="disabled"></el-input>
                      </el-form-item>
                    </td>
                  </tr>
                </table>
                <div class="form-title">负债信息</div>
                <!-- liabilitiesInfo -->
                <table class="list-table">
                  <tr>
                    <th>负债总额（自动计算项）</th>
                    <th>金额</th>
                    <th>备注</th>
                  </tr>
                  <tr v-for="(list,index) in business.liabilitiesInfo"
                  :key="list.liabilitiesName+index">
                    <td>{{list.liabilitiesName}}</td>
                    <td>
                      <el-form-item>
                        <el-input v-model="list.liabilitiesAmount"  disabled="disabled" ></el-input>
                      </el-form-item>
                    </td>
                    <td>
                      <el-form-item>
                        <el-input v-model="list.remark"  disabled="disabled" ></el-input>
                      </el-form-item>
                    </td>
                  </tr>
                </table>
                <!-- saleInfo -->

                <div class="form-title">销售情况</div>
                <ul class="table-ul clearfix">
                  <li v-for="(list,index) in business.saleInfo"
                  :key="list.name+index">
                    <el-form-item
                      class="is-required"
                      :label="list.name">
                      <el-input v-model="list.expenses" disabled="disabled"></el-input>
                    </el-form-item>
                  </li>
                </ul>
              </el-form>
            </div>
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

  export default {
    components:{
      AttachmentPreview,
    },
    beforeMount:function(){
      let id = this.$route.params.id;
      this.id = id;
      this.business.loanId = id;


      this.getInit(id);
    },
    data(){
      return {
        id:'',
        type:'',
        loading:false,
        activeName: 'first',
        firstName:'下户信息',
        topContext:{
          "createDate": '',
          "loanAmount": '',
          "factoringBusinessDeadline": '',
          "companyProvinceCode": '',
          "companyCityCode": '',
          "companyAreaCode": '',
          "companyName": '',
          "applyStatus": '5',
        },
        business:{
          "loanId": "",//int //借款申请表id（loan_application）
          "reportOrganisation": "", //string //上报机构
          "businessNum": "", //string //业务编号
          "sponsorCustomerManager": "",//string //主办客户经理
          "sponsorCustomerManagerPhone": "",//string //主办客户经理手机号
          "supportCustomerManager": "", //string //协办客户经理
          "supportCustomerManagerPhone": "",//string //协办客户经理手机号
          "sponsorPersonnel": "", //string //主办人员
          "supportPersonnel": "",//string //协办人员
          "businessInfo": {
              "projectName": "", //string //项目名称
              "applyForAmount": "", //string //申请借款金额
              "applyForDate": "", //date //申请日期
              "expireDate": "", //date //到期日期
              "monthlyRate": "",//string //月利率
              "annualRate": "", //string //年利率
              "isFirst": "", //boolean //是否首次
              "paymentWay": "" //string //还款方式
          },
          "companyInfo": [
            {
              "investigationItemName": "经营项目",//"string //调查项目名称",
              "investigationItemResult": "" // "string //调查结果"
            },
            {
              "investigationItemName": "行业分类",
              "investigationItemResult": ""
            },
            {
              "investigationItemName": "经营地址",
              "investigationItemResult": ""
            },
            {
              "investigationItemName": "法定代表人",
              "investigationItemResult": ""
            },
            {
              "investigationItemName": "实际经营年限",
              "investigationItemResult": ""
            },
            {
              "investigationItemName": "法人持股比例（%）",
              "investigationItemResult": ""
            },
            {
              "investigationItemName": "正式员工人数",
              "investigationItemResult": ""
            },
            {
              "investigationItemName": "异常情况",
              "investigationItemResult": ""
            },
          ],
          "projectExceptionAskInfo": [
            {
              "askName": "民间借贷情况", //string 询问名称
              "askResult": "",  //string 询问结果
              "askTarget": "",//string 询问对象
            },
            {
              "askName": "对企业发展前景是否有规划、是否具有前瞻性眼光",
              "askResult": "",
              "askTarget": ""
            },
            {
              "askName": "本人及配偶投资情况（股市、基金、期货、房产）",
              "askResult": "",
              "askTarget": ""
            },
            {
              "askName": "有无高利贷",
              "askResult": "",
              "askTarget": ""
            },
            {
              "askName": "有无黄赌毒不良嗜好",
              "askResult": "",
              "askTarget": ""
            },
            {
              "askName": "有无复杂社会背景",
              "askResult": "",
              "askTarget": ""
            },
          ],
          "projectExceptionViewInfo": [
            {
              "viewName": "办公地址与公司注册地址不一致",
              "viewResult": "",
              "viewDate": ""
            },
            {
              "viewName": "机器设备、物流车辆随意搁置",
              "viewResult": "",
              "viewDate": ""
            },
            {
              "viewName": "企业员工无所事事、表情异样",
              "viewResult": "",
              "viewDate": ""
            },
            {
              "viewName": "客流稀少、气氛低沉",
              "viewResult": "",
              "viewDate": ""
            },
            {
              "viewName": "线下现金收付款",
              "viewResult": "",
              "viewDate": ""
            },
            {
              "viewName": "企业有其他互斥的兼职业务,如物资代销",
              "viewResult": "",
              "viewDate": ""
            },
            {
              "viewName": "无紧急情况处置预案",
              "viewResult": "",
              "viewDate": ""
            },
            {
              "viewName": "重要场所（厂房、库房）无显著标识",
              "viewResult": "",
              "viewDate": ""
            },
            {
              "viewName": "经销商办公场所无样品/报价单",
              "viewResult": "",
              "viewDate": ""
            },
            {
              "viewName": "合同大多为新签订或格式异常",
              "viewResult": "",
              "viewDate": ""
            },
            {
              "viewName": "各种书面资料大多无法提供",
              "viewResult": "",
              "viewDate": ""
            },
            {
              "viewName": "与所述业务不匹配的经营环境",
              "viewResult": "",
              "viewDate": ""
            },
            {
              "viewName": "无关键库房/厂房的钥匙、管库人员不在",
              "viewResult": "",
              "viewDate": ""
            },
            {
              "viewName": "不合常理的业务安排",
              "viewResult": "",
              "viewDate": ""
            },
            {
              "viewName": "单据情况",
              "viewResult": "",
              "viewDate": ""
            },
          ],
          "invoicesInfo": [
            {
              "invoicesName": "身份证（借款人及配偶、法人）",
              "isSeeYourself": "",
              "remark": ""
            },
            {
              "invoicesName": "婚姻证明",
              "isSeeYourself": "",
              "remark": ""
            },
            {
              "invoicesName": "营业执照",
              "isSeeYourself": "",
              "remark": ""
            },
            {
              "invoicesName": "实际控制人证明",
              "isSeeYourself": "",
              "remark": ""
            },
            {
              "invoicesName": "固定居住地证明",
              "isSeeYourself": "",
              "remark": ""
            },
            {
              "invoicesName": "固定经营场所证明",
              "isSeeYourself": "",
              "remark": ""
            },
            {
              "invoicesName": "道路运输许可证",
              "isSeeYourself": "",
              "remark": ""
            },
            {
              "invoicesName": "申请人及配偶个人征信报告（要求查询时间在申请时间2个月内）",
              "isSeeYourself": "",
              "remark": ""
            },
            {
              "invoicesName": "企业征信报告（要求查询时间在申请时间2个月内）",
              "isSeeYourself": "",
              "remark": ""
            },
            {
              "invoicesName": "银行流水",
              "isSeeYourself": "",
              "remark": ""
            },
            {
              "invoicesName": "应收账款明细及账期",
              "isSeeYourself": "",
              "remark": ""
            },
            {
              "invoicesName": "主要经营合同",
              "isSeeYourself": "",
              "remark": ""
            },
          ],
          "historyData": [
            {
              "dataName": "纳税申报表及回执",
              "have": ""
            },
            {
              "dataName": "财报",
              "have": ""
            },
            {
              "dataName": "账户信息",
              "have": ""
            },
          ],
          "projectRelatedInfo": [
            {
              "projectRelatedName": "交易对手是否有小贷公司典当行",
              "projectRelatedAmount": "",
              "remark": ""
            },
            {
              "projectRelatedName": "是否有大额异常交易",
              "projectRelatedAmount": "",
              "remark": ""
            },
            {
              "projectRelatedName": "是否有法院",
              "projectRelatedAmount": "",
              "remark": ""
            },
            {
              "projectRelatedName": "资金是否整进整出",
              "projectRelatedAmount": "",
              "remark": ""
            },
            {
              "projectRelatedName": "月均出账金额",
              "projectRelatedAmount": "",
              "remark": ""
            },
            {
              "projectRelatedName": "月均进账",
              "projectRelatedAmount": "",
              "remark": ""
            },
            {
              "projectRelatedName": "近两季度结息金额",
              "projectRelatedAmount": "",
              "remark": ""
            },
            {
              "projectRelatedName": "所有银行经营账户近一年总日均",
              "projectRelatedAmount": "",
              "remark": ""
            },
            {
              "projectRelatedName": "资产负债信息",
              "projectRelatedAmount": "",
              "remark": ""
            },
          ],
          "assetInfo": [
            {
              "assetName": "房产（房产证、购房发票、实地照片）",
              "assetAmount": "",
              "placeholder": "需为借款人夫妻名下或贷款企业名下：中介询价（中介名片或电话）、网站截图、评估报告",
              "remark": ""
            },
            {
              "assetName": "车辆（行驶证、机动车登记证、实地照片）",
              "assetAmount": "",
              "placeholder": "需为借款人夫妻名下或贷款企业名下：中介询价（中介名片或电话）、网站截图、评估报告",
              "remark": ""
            },
            {
              "assetName": "机器设备（购买合同、发票）",
              "assetAmount": "",
              "placeholder": "需为借款人夫妻名下或贷款企业名下",
              "remark": ""
            },
            {
              "assetName": "土地证",
              "placeholder": "需为借款人夫妻名下或贷款企业名下、非集体所有、权属清晰",
              "assetAmount": "",
              "remark": ""
            },
            {
              "assetName": "应收账款",
              "placeholder": "应收账款：70%",
              "assetAmount": "",
              "remark": "",
            },
            {
              "assetName": "货币资产",
              "placeholder": "银行存款、国债：100%；理财产品、股票、基金、债券、信托：80％",
              "assetAmount": "",
              "remark": ""
            },
            {
              "assetName": "其他",
              "placeholder": "若有，则备注",
              "assetAmount": "",
              "remark": ""
            },
            {
              "assetName": "资产总额（自动计算项）",
              "placeholder": "",
              "assetAmount": "",
              "remark": ""
            },
          ],
          "liabilitiesInfo": [
            {
              "liabilitiesName": "信用卡",
              "liabilitiesAmount": "",
              "placeholder": "未销户贷记卡信息汇总——最近6个月平均使用额度",
              "remark": ""
            },
            {
              "liabilitiesName": "个人贷款",
              "liabilitiesAmount": "",
              "placeholder": "未结清贷款信息汇总——余额",
              "remark": ""
            },
            {
              "liabilitiesName": "企业贷款",
              "liabilitiesAmount": "",
              "placeholder": "负债信息概要合计——余额",
              "remark": ""
            },
            {
              "liabilitiesName": "应付账款",
              "liabilitiesAmount": "",
              "placeholder": "",
              "remark": ""
            },
            {
              "liabilitiesName": "民间借贷",
              "liabilitiesAmount": "",
              "placeholder": "交谈、银行异常流水核查",
              "remark": ""
            },
            {
              "liabilitiesName": "对外担保（按50%计算负债）",
              "liabilitiesAmount": "",
              "placeholder": "准入：对外担保≤净资产的3倍",
              "remark": ""
            },
            {
              "liabilitiesName": "月应还负债（人工计算项）",
              "liabilitiesAmount": "",
              "placeholder": "",
              "remark": ""
            },
            {
              "liabilitiesName": "负债总额（自动计算项）",
              "liabilitiesAmount": "",
              "placeholder": "",
              disabled:true,
              "remark": ""
            },
            {
              "liabilitiesName": "净资产（自动计算项）",
              "liabilitiesAmount": "",
              "placeholder": "资产总额-负债总额",
              disabled:true,
              "remark": ""
            },
            {
              "liabilitiesName": "资产负债率（自动计算项）",
              "liabilitiesAmount": "",
              disabled:true,
              "placeholder": "准入：（负债总额+本次申请金额）/资产总额≤70%",
              "remark": ""
            },
          ],
          "saleInfo": [
            {
              "name": "企业上年销售总额",
              "expenses": ""
            },
            {
              "name": "今年当前销售总额",
              "expenses": ""
            },
            {
              "name": "企业上年销售净利润",
              "expenses": ""
            },
            {
              "name": "今年当前销售净利润",
              "expenses": ""
            },
            {
              "name": "上年净利润率（自动计算项）",
              "expenses": "",
              disables:true
            },
            {
              "name": "今年净利润率（自动计算项）",
              "expenses": "",
              disables:true
            },
            {
              "name": "运营支出",
              "expenses": ""
            },
            {
              "name": "正式员工数",
              "expenses": ""
            },
            {
              "name": "员工工资（月）",
              "expenses": ""
            },
            {
              "name": "月加油费",
              "expenses": ""
            },
            {
              "name": "月高速公路费",
              "expenses": ""
            },
            {
              "name": "月车辆维修费",
              "expenses": ""
            },
            {
              "name": "月场地租赁费",
              "expenses": ""
            },
            {
              "name": "月车辆保险费",
              "expenses": ""
            },
            {
              "name": "保险费",
              "expenses": ""
            },
            {
              "name": "月均总支出（自动计算项）",
              "expenses": "",
              disables:true
            },
            {
              "name": "企业最近半年员工工资发放凭证及明细",
              "expenses": ""
            },
          ]
        },
      }
    },
     methods:{
      getInit(id){
        var _this = this;
         new Promise((resolve,reject) => {
          ajax({
            url:`/loan/offline-due-diligence/${id}`,
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

         new Promise((resolve,reject) => {
          ajax({
            url:`/loan/loan-application/getApprovalDetail/${id}`,
            method:'get',
          }).then(function (res) {
            let data = res.data;
            if(data.code == 1){
              _this.topContext = data.data;
            }

          }).catch(error => {
            reject(error)
          })
         })
      },
       handleClick:function (tab, e) {

       },
       onSubmit:function () {

         var _this = this;

         _this.loading = true;
         _this.getAjax();
       },
       getAjax(){
         var _this = this;
         // _this.business;

         // new Promise((resolve,reject) => {
         //  ajax({
         //    // url:`/loan/loan-application/${id}`,
         //    url:`/loan/offline-due-diligence/add`,
         //    method:'post',
         //    data:_this.business
         //  }).then(function (res) {
         //    let data = res.data;
         //    if(data.code == 1){
         //
         //      _this.$message({
         //        type: 'success',
         //        message: '提交成功'
         //      });
         //
         //    }else{
         //      _this.$message({
         //        type: 'error',
         //        message: '提交失败,请重新提交'
         //      });
         //    }
         //    _this.loading = false;
         //
         //  }).catch(error => {
         //    _this.loading = false;
         //    reject(error)
         //  })
         // })
       },
    },
    filters:{
      dateFormat(time){
        if(time){
          return time.substring(0,10)
        }else{
          return ''
        }
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

  .household_review{
    .review{
      text-align: center;
      margin-top: 30px;
    }
    .el-tabs__nav-wrap{
      padding-left: 30px;
    }
    .el-form-item__content{
      width: 200px;
    }
    .el-date-editor.el-input, .el-date-editor.el-input__inner{
      width: 200px;
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
    margin: 0 auto 0;
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
    width: 1000px;
    margin: 22px auto 0;
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


  .list-table{
    border: 1px solid #ccc;
    margin-bottom: 20px;
    tr{
      height: 60px;
      margin-bottom: 20px;
      th{
        background: $blue;
        color: #fff;
      }
    }
    td,th{
      border: none 0;
      text-align: center;
      .el-form-item {
        margin: 0;
      }
    }
  }
  .table-ul{
    list-style: none;
    li{
      float: left;
      width: 50%;
    }
  }
</style>
