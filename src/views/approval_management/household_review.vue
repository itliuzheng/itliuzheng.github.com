<template>
  <div class="main">
    <div class="content entry-content">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="firstName" name="first">
          <div class="top-main">
            <div class="information">
              <div class="p_inline">
                <p><span>申请提交时间：</span>{{topContext.companyRegisterDate}}</p>
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
              <el-form ref="business" :rules="business_rules" :model="business" label-width="250px" :inline="true">
                <!--<div class="form-title">资料录入</div>-->
                <el-form-item label="上报机构" class="is-required" prop="reportOrganisation"
                  :rules=" [
                      { required: true, message: '此项不能为空', trigger: 'blur' }
                    ]">
                  <el-input v-model="business.reportOrganisation"></el-input>
                </el-form-item>
                <el-form-item label="业务编号" class="is-required" prop="businessNum"
                  :rules=" [
                      { required: true, message: '此项不能为空', trigger: 'blur' }
                    ]">
                  <el-input v-model="business.businessNum"></el-input>
                </el-form-item>
                <el-form-item label="主办客户经理" class="is-required" prop="sponsorCustomerManager"
                  :rules=" [
                      { required: true, message: '此项不能为空', trigger: 'blur' }
                    ]">
                  <el-input v-model="business.sponsorCustomerManager"></el-input>
                </el-form-item>
                <el-form-item label="联系电话（手机）" class="is-required" prop="sponsorCustomerManagerPhone"
                  :rules=" [
                      { required: true, message: '此项不能为空', trigger: 'blur' }
                    ]">
                  <el-input v-model="business.sponsorCustomerManagerPhone"></el-input>
                </el-form-item>
                <el-form-item label="协办客户经理" class="is-required" prop="supportCustomerManager"
                  :rules=" [
                      { required: true, message: '此项不能为空', trigger: 'blur' }
                    ]">
                  <el-input v-model="business.supportCustomerManager"></el-input>
                </el-form-item>
                <el-form-item label="联系电话（手机）" class="is-required" prop="supportCustomerManagerPhone"
                  :rules=" [
                      { required: true, message: '此项不能为空', trigger: 'blur' }
                    ]">
                  <el-input v-model="business.supportCustomerManagerPhone"></el-input>
                </el-form-item>
                <el-form-item label="主办人员" class="is-required" prop="sponsorPersonnel"
                  :rules=" [
                      { required: true, message: '此项不能为空', trigger: 'blur' }
                    ]">
                  <el-input v-model="business.sponsorPersonnel"></el-input>
                </el-form-item>
                <el-form-item label="协办人员" class="is-required" prop="supportPersonnel"
                  :rules=" [
                      { required: true, message: '此项不能为空', trigger: 'blur' }
                    ]">
                  <el-input v-model="business.supportPersonnel"></el-input>
                </el-form-item>

                <div class="form-title">业务信息</div>
                <el-form-item label="产品名称" class="is-required" prop="businessInfo.projectName"
                  :rules=" [
                      { required: true, message: '此项不能为空', trigger: 'blur' }
                    ]"
                >
                  <el-input v-model="business.businessInfo.projectName"></el-input>
                </el-form-item>
                <el-form-item label="申请金额" class="is-required" prop="businessInfo.applyForAmount"
                  :rules=" [
                      { required: true, message: '此项不能为空', trigger: 'blur' }
                    ]">
                  <el-input v-model="business.businessInfo.applyForAmount"></el-input>
                </el-form-item>
                <el-form-item label="申请日" class="is-required" prop="businessInfo.applyForDate"
                  :rules=" [
                      { required: true, message: '此项不能为空', trigger: 'blur' }
                    ]">
                  <el-date-picker   type="date" v-model="business.businessInfo.applyForDate" value-format="yyyy-MM-dd"></el-date-picker>
                </el-form-item>
                <el-form-item label="到期日" class="is-required" prop="businessInfo.expireDate"
                  :rules=" [
                      { required: true, message: '此项不能为空', trigger: 'blur' }
                    ]">
                  <el-date-picker   type="date" v-model="business.businessInfo.expireDate" value-format="yyyy-MM-dd"></el-date-picker>
                </el-form-item>
                <el-form-item label="月利率" class="is-required"  prop="businessInfo.monthlyRate"
                  :rules=" [
                      { required: true, message: '此项不能为空', trigger: 'blur' }
                    ]">
                  <el-input v-model="business.businessInfo.monthlyRate"></el-input>
                </el-form-item>
                <el-form-item label="年利率" class="is-required"  prop="businessInfo.annualRate"
                  :rules=" [
                      { required: true, message: '此项不能为空', trigger: 'blur' }
                    ]">
                  <el-input v-model="business.businessInfo.annualRate"></el-input>
                </el-form-item>
                <el-form-item label="是否首次" class="is-required" prop="businessInfo.isFirst"
                  :rules=" [
                      { required: true, message: '此项不能为空', trigger: 'blur' }
                    ]">
                  <el-select v-model="business.businessInfo.isFirst" placeholder="请选择">
                    <el-option label="是" value="true"></el-option>
                    <el-option label="否" value="false"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="还款方式" class="is-required" prop="businessInfo.paymentWay"
                  :rules=" [
                      { required: true, message: '此项不能为空', trigger: 'blur' }
                    ]">
                  <el-select v-model="business.businessInfo.paymentWay" placeholder="请选择">
                    <el-option label="等额本息" value="等额本息"></el-option>
                    <el-option label="还本付息" value="还本付息"></el-option>
                  </el-select>
                </el-form-item>
                <div class="form-title">公司信息</div>
                <el-form-item
                  class="is-required"
                  v-for="(list,index) in business.companyInfo"
                  :label="list.investigationItemName"
                  :key="list.investigationItemName+index"
                  :prop="'companyInfo.'+index+'.investigationItemResult'"
                  :rules="{
                    required: true, message: '此项不能为空', trigger: 'blur'
                  }"
                >
                  <el-input v-model="list.investigationItemResult"></el-input>
                </el-form-item>

                <table class="list-table">
                  <tr>
                    <th>异常项目（问询）</th>
                    <th>询问结果</th>
                    <th>询问对象</th>
                  </tr>
                  <tr v-for="(list,index) in business.projectExceptionAskInfo">
                    <td>{{list.askName}}</td>
                    <td>
                      <el-form-item
                        :prop="'projectExceptionAskInfo.'+index+'.askResult'"
                        :rules="{
                          required: true, message: '此项不能为空', trigger: 'blur'
                        }"
                        :show-message="false">
                        <el-input v-model="list.askResult"></el-input>
                      </el-form-item>
                    </td>
                    <td>
                      <el-form-item
                        :show-message="false">
                        <el-input v-model="list.askTarget"></el-input>
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
                  <tr v-for="(list,index) in business.projectExceptionViewInfo">
                    <td>{{list.viewName}}</td>
                    <td>
                      <el-form-item
                        :prop="'projectExceptionViewInfo.'+index+'.viewResult'"
                        :rules="{
                          required: true, message: '此项不能为空', trigger: 'blur'
                        }"
                        :show-message="false">
                        <el-input v-model="list.viewResult"></el-input>
                      </el-form-item>
                    </td>
                    <td>
                      <el-form-item
                        :prop="'projectExceptionViewInfo.'+index+'.viewDate'"
                        :rules="{
                          required: true, message: '', trigger: 'change'
                        }"
                        :show-message="false">
                        <!--<el-input v-model="list.viewDate"></el-input>-->
                        <el-date-picker   type="date" v-model="list.viewDate" value-format="yyyy-MM-dd"></el-date-picker>

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
                  <tr v-for="(list,index) in business.invoicesInfo">
                    <td>{{list.invoicesName}}</td>
                    <td>
                      <el-form-item
                        :prop="'invoicesInfo.'+index+'.isSeeYourself'"
                        :rules="{
                          required: true, message: '', trigger: 'change'
                        }"
                        :show-message="false">
                        <el-select v-model="list.isSeeYourself" placeholder="请选择">
                          <el-option label="是" value="是"></el-option>
                          <el-option label="否" value="否"></el-option>
                        </el-select>
                      </el-form-item>
                    </td>
                    <td>
                      <el-form-item
                        :show-message="false">
                        <el-input v-model="list.remark"></el-input>
                      </el-form-item>
                    </td>
                  </tr>
                </table>
                <table class="list-table">
                  <tr>
                    <th>历史数据</th>
                    <th>（运单、回单、发票、打款记录、TMS、财务软件）</th>
                  </tr>
                  <tr v-for="(list,index) in business.historyData">
                    <td>{{list.dataName}}</td>
                    <td>
                      <el-form-item
                        :prop="'historyData.'+index+'.have'"
                        :rules="{
                          required: true, message: '', trigger: 'change'
                        }"
                        :show-message="false">
                        <!--<el-input v-model="list.have"></el-input>-->
                        <el-select v-model="list.have" placeholder="请选择">
                          <el-option label="有" value="有"></el-option>
                          <el-option label="没有" value="没有"></el-option>
                        </el-select>
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
                  <tr v-for="(list,index) in business.projectRelatedInfo">
                    <td>{{list.projectRelatedName}}</td>
                    <td>
                      <el-form-item
                        :prop="'projectRelatedInfo.'+index+'.projectRelatedAmount'"
                        :rules="{
                          required: true, message: '', trigger: 'blur'
                        }"
                        :show-message="false">
                        <el-input v-model="list.projectRelatedAmount"></el-input>
                      </el-form-item>
                    </td>
                    <td>
                      <el-form-item
                        :show-message="false">
                        <el-input v-model="list.remark"></el-input>
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
                  <tr v-for="(list,index) in business.assetInfo">
                    <td>{{list.assetName}}</td>
                    <td>
                      <el-form-item
                        :prop="'assetInfo.'+index+'.assetAmount'"
                        :rules="{
                          required: true, message: '', trigger: 'blur'
                        }"
                        :show-message="false"
                      >
                        <el-input v-model="list.assetAmount" @change="autoChange()" :disabled="list.disabled" :placeholder="list.placeholder"></el-input>
                      </el-form-item>
                    </td>
                    <td>
                      <el-form-item
                        :show-message="false">
                        <el-input v-model="list.remark"></el-input>
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
                  <tr v-for="(list,index) in business.liabilitiesInfo">
                    <td>{{list.liabilitiesName}}</td>
                    <td>
                      <el-form-item
                        :prop="'liabilitiesInfo.'+index+'.liabilitiesAmount'"
                        :rules="{
                          required: true, message: '', trigger: 'blur'
                        }"
                        :show-message="false">
                        <el-input v-model="list.liabilitiesAmount" @change="autoChange(list)"  :disabled="list.disabled" :placeholder="list.placeholder"></el-input>
                      </el-form-item>
                    </td>
                    <td>
                      <el-form-item
                        :show-message="false">
                        <el-input v-model="list.remark"></el-input>
                      </el-form-item>
                    </td>
                  </tr>
                </table>
                <!-- saleInfo -->

                <div class="form-title">销售情况</div>
                <ul class="table-ul clearfix">
                  <li v-for="(list,index) in business.saleInfo">
                    <el-form-item
                      class="is-required"
                      :label="list.name"
                      :key="list.name+index"
                      :prop="'saleInfo.'+index+'.expenses'"
                      :rules="{
                        required: true, message: '此项不能为空', trigger: 'blur'
                      }"
                    >
                      <el-input v-model="list.expenses" :disabled="list.disables" @change="autoCalc()"></el-input>
                    </el-form-item>
                  </li>
                </ul>

                <div class="buttons">
                  <el-button class="blue el-button el-button--primary" :loading="loading" @click="onSubmit">确认提交</el-button>
                </div>
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
        loading:false,
        activeName: 'first',
        firstName:'下户信息',
        topContext:{
          "companyRegisterDate": '',
          "loanAmount": '',
          "factoringBusinessDeadline": '',
          "companyProvinceCode": '',
          "companyCityCode": '',
          "companyAreaCode": '',
          "companyName": '',
          "applyStatus": '4',
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
          }
          ,
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
              "disabled":true,
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
        business_rules:{}
      }
    },
     methods:{
      getInit(id){
        var _this = this;
         new Promise((resolve,reject) => {
          ajax({
            url:`/loan/loan-application/${id}`,
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
       liabilities(){
         let amount = '';
        let _this = this;
         _this.business.liabilitiesInfo.forEach((value1,index1) =>{
           let amount1 = parseFloat(value1.liabilitiesAmount);
           if(value1.liabilitiesName == '信用卡'){
             if(!isNaN(amount1)){
               amount = amount*1 + amount1*1
             }
           }else if(value1.liabilitiesName == '个人贷款'){
             if(!isNaN(amount1)){
               amount = amount*1 + amount1*1
             }
           }else if(value1.liabilitiesName == '企业贷款'){
             if(!isNaN(amount1)){
               amount = amount*1 + amount1*1
             }
           }else if(value1.liabilitiesName == '应付账款'){
             if(!isNaN(amount1)){
               amount = amount*1 + amount1*1
             }
           }else if(value1.liabilitiesName == '民间借贷'){
             if(!isNaN(amount1)){
               amount = amount*1 + amount1*1
             }
           }else if(value1.liabilitiesName == '对外担保（按50%计算负债）'){
             if(!isNaN(amount1)){
               amount = amount*1 + amount1*1
             }
           }
         })
         return amount
       },
       assetsTotal(){
         let amount = '';
        let _this = this;
         _this.business.assetInfo.forEach((value1,index1) =>{
           let amount1 = parseFloat(value1.assetAmount);
           let name = value1.assetName;

           if(name == '房产（房产证、购房发票、实地照片）'){
             if(!isNaN(amount1)){
               amount = amount*1 + amount1*1
             }
           }else if(name == '车辆（行驶证、机动车登记证、实地照片）'){
             if(!isNaN(amount1)){
               amount = amount*1 + amount1*1
             }
           }else if(name == '机器设备（购买合同、发票）'){
             if(!isNaN(amount1)){
               amount = amount*1 + amount1*1
             }
           }else if(name == '土地证'){
             if(!isNaN(amount1)){
               amount = amount*1 + amount1*1
             }
           }else if(name == '应收账款'){
             if(!isNaN(amount1)){
               amount = amount*1 + amount1*1
             }
           }else if(name == '货币资产'){
             if(!isNaN(amount1)){
               amount = amount*1 + amount1*1
             }
           }else if(name == '其他'){
             if(!isNaN(amount1)){
               amount = amount*1 + amount1*1
             }
           }
         })
         return amount
       },
       profilTotle(){
        const json = {
          firstHalf:'',
          firstHalf_profil:'',
          yearHalf:'',
          yearHalf_profil:'',
          total_month:""
        };
        let amount = '0';
         this.business.saleInfo.forEach((value,index)=>{
           if(value.name == '企业上年销售总额'){
             json.firstHalf = parseFloat(value.expenses);
           }else if(value.name == '企业上年销售净利润'){
             json.firstHalf_profil = parseFloat(value.expenses);
           }else if(value.name == '今年当前销售总额'){
             json.yearHalf = parseFloat(value.expenses);
           }else if(value.name == '今年当前销售净利润'){
             json.yearHalf_profil = parseFloat(value.expenses);
           }
         //  运营支出

           let amount1 = parseFloat(value.expenses);
           if(value.name == '运营支出'){
             if(!isNaN(amount1)){
               amount = amount*1 + amount1*1
             }
           }else if(value.name == '员工工资（月）'){
             if(!isNaN(amount1)){
               amount = amount*1 + amount1*1
             }
           }else if(value.name == '月加油费'){
             if(!isNaN(amount1)){
               amount = amount*1 + amount1*1
             }
           }else if(value.name == '月高速公路费'){
             if(!isNaN(amount1)){
               amount = amount*1 + amount1*1
             }
           }else if(value.name == '月车辆维修费'){
             if(!isNaN(amount1)){
               amount = amount*1 + amount1*1
             }
           }else if(value.name == '月场地租赁费'){
             if(!isNaN(amount1)){
               amount = amount*1 + amount1*1
             }
           }else if(value.name == '月车辆保险费'){
             if(!isNaN(amount1)){
               amount = amount*1 + amount1*1
             }
           }else if(value.name == '保险费'){
             if(!isNaN(amount1)){
               amount = amount*1 + amount1*1
             }
           }

         })

         json.total_month = amount;
         return json;
       },
       autoChange(list){
        let _this = this;
        // 负债总额（自动计算项）
         this.business.liabilitiesInfo.forEach((value,index)=>{
           switch (value.liabilitiesName){
             case '负债总额（自动计算项）':
               value.liabilitiesAmount = _this.liabilities();
               break;
             case '净资产（自动计算项）':
               let amount = _this.assetsTotal();
               value.liabilitiesAmount = amount - _this.liabilities() ;
               break;
             case '资产负债率（自动计算项）':
               //（负债总额+本次申请金额）/资产总额
               let total = _this.liabilities();
                value.liabilitiesAmount = parseFloat((total + _this.topContext.loanAmount*1) / _this.assetsTotal()) * 100 +'%';
               break;
             default:
               break;
           }
         })

        // 资产总额（自动计算项）
         this.business.assetInfo.forEach((value,index)=>{
           switch (value.assetName){
             case '资产总额（自动计算项）':
               value.assetAmount = _this.assetsTotal();
               break;
             default:
               break;
           }
         })
       },
       autoCalc(list){
        let _this = this;
        // 负债总额（自动计算项）
         this.business.saleInfo.forEach((value,index)=>{
           const json = _this.profilTotle();
           switch (value.name){
             case '上年净利润率（自动计算项）':
               // （净利润/主营业务收入）×100%
               let firstNumber = parseFloat(json.firstHalf_profil / json.firstHalf).toFixed(4);
               if(!isNaN(firstNumber)){
                 value.expenses = firstNumber * 100+'%';
               }else{
                 value.expenses ='0%';
               }
               break;
             case '今年净利润率（自动计算项）':
               let amount = _this.assetsTotal();
               let number = parseFloat(json.yearHalf_profil / json.yearHalf).toFixed(4);
               if(!isNaN(number)){
                 value.expenses = number * 100+'%';
               }else{
                 value.expenses ='0%';
               }
               break;
             case '月均总支出（自动计算项）':
               value.expenses = json.total_month;
               break;
             default:
               break;
           }
         })
       },
       onSubmit:function () {

         var _this = this;

         _this.loading = true;
        this.$refs.business.validate((valid) => {
          if (valid) {
            _this.getAjax();
          }else{
              _this.$message({
                type: 'error',
                message: '数据不能为空'
              });
              _this.loading = false;
          }

        });
       },
       getAjax(){
         var _this = this;
         // _this.business;

         new Promise((resolve,reject) => {
          ajax({
            // url:`/loan/loan-application/${id}`,
            url:`/loan/offline-due-diligence/add`,
            method:'post',
            data:_this.business
          }).then(function (res) {
            let data = res.data;
            if(data.code == 1){

              _this.$message({
                type: 'success',
                message: '提交成功'
              });

            }else{
              _this.$message({
                type: 'error',
                message: '提交失败,请重新提交'
              });
            }
            _this.loading = false;

          }).catch(error => {
            _this.loading = false;
            reject(error)
          })
         })
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
