<template>
  <div class="main">
    <div class="top-main">
      <el-form :inline="true" ref="management" :model="management" label-position="top">
        <el-form-item label="申请人姓名:">
          <el-input v-model="management.name"></el-input>
        </el-form-item>
        <el-form-item label="申请公司名称:">
          <el-input v-model="management.company"></el-input>
        </el-form-item>
        <el-form-item label="申请人身份证号:">
          <el-input v-model="management.id_number"></el-input>
        </el-form-item>
        <el-form-item label="资料审核状态:">
          <el-select v-model="management.review" >
            <el-option label="待审核" value="1"></el-option>
            <el-option label="待下户" value="3"></el-option>
            <el-option label="已下户" value="6"></el-option>
            <el-option label="待录入人行报告" value="9"></el-option>
            <el-option label="已录入人行报告" value="12"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="申请日期:">
          <!--<el-input v-model="management.date"></el-input>-->

          <el-date-picker
            v-model="management.date"
            type="date"
            placeholder="">
          </el-date-picker>
        </el-form-item>
        <div class="inquire">
          <el-button class="el-button el-button--primary" @click="inquire">查询</el-button>
        </div>
      </el-form>
    </div>
    <div class="content">
      <el-table
        :data="tableData"
        border
        style="width: 100%;">
        <el-table-column
          prop="company"
          label="申请公司名称"
          width="240">
        </el-table-column>
        <el-table-column
          prop="date"
          label="申请时间"
          width="100px">
        </el-table-column>
        <el-table-column
          prop="name"
          label="申请人姓名"
          width="100px">
        </el-table-column>
        <el-table-column
          prop="id_number"
          label="申请人身份证号"
          width="150px">
        </el-table-column>
        <el-table-column
          prop="state"
          label="状态"
          width="120px">
        </el-table-column>
        <el-table-column
          prop="people"
          label="审核人员"
          width="80px">
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button v-if="scope.row.operating == '审核'"  @click="handleClick(scope.row)" type="text" size="small">{{scope.row.operating}}</el-button>
            <el-button v-else  @click="lookClick(scope.row)" type="text" size="small">{{scope.row.operating}}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        management:{
          name:'',
          company:'',
          id_number:'',
          review:'1',
          date:'',
        },
        tableData: [
          {
            company:'中网中网中网中网中网中网',
            date: '2016-05-02',
            name: '王小虎',
            state:'待审核',
            id_number: '110101199206301212',
            people:'陶笛',
            operating:'审核'
        },
          {
          company:'中网中网中网中网中网中网',
          date: '2016-05-02',
          name: '王小虎',
          state:'待下户',
          id_number: '110101199206301212',
          people:'陶笛', operating:'查看'

        },
          {
          company:'中网中网中网中网中网中网',
          date: '2016-05-02',
          name: '王小虎',
          state:'待录入人行报告',
          id_number: '110101199206301212',
          people:'陶笛', operating:'审核'
        },
        ]
      }
    },
    methods:{
      inquire(){
        console.log('查询');
      },
      handleClick(row){
        console.log('审核');
        var id = row.id;
        this.$router.push({path:`/review/detail/14`})
        // this.$router.push({path:`/review/detail/${id}`})
      },
      lookClick(row){
        console.log('lookClick');
      }
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
  .inquire{

  }
</style>
