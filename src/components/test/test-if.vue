<template>
  <div>

      <!--<el-switch-->
        <!--v-model="value2"-->
        <!--active-color="#13ce66"-->
        <!--inactive-color="#ff4949">-->
      <!--</el-switch>-->
    <el-switch
      v-model="is_ok"
    >

    </el-switch>
    <h1 v-if="is_ok">Yes</h1>
    <h1 v-else>No</h1>

    <div v-if="type == 'username' ">
      <label>Username</label>
      <input class="ignore" type="text" placeholder="Enter your name" key="username">
    </div>
    <div v-else>
      <label>Email</label>
      <input type="text" placeholder="Enter your email" key="email">
    </div>
    <div>
      <button v-on:click="toggleType">Toggle Type</button>
    </div>
    <div aspectratio w-188-246 class="box" id="example"></div>
  </div>
</template>
<script>

  export default {
    name:'if',
    data(){
      return {
        is_ok:true,
        message:'',
        title:'条件渲染',
        type:'username'
      }
    },
    methods:{
      toggleType(){
        console.log(this.type);
        this.type = this.type == 'username'? 'email':'username';
      }
    }
  }

</script>
<style scoped>
  input{
    border: 0.5px solid black;
    font-size: 14px;
    line-height: 20px;
  }
  .ignore{
    margin-top: 10px;
  }
  .box{
    width: 188px;
    margin: 0 auto;
  }


</style>
