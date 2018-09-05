<template>
  <div class="fail">

    <h1>liuzheng</h1>
    <h2>{{message}}</h2>

    <component-a></component-a>
    <component-b></component-b>
  </div>
</template>
<script>
  import '@/assets/css/login/fail.css';
  export default {
    name:'fail',
    data(){
      return {
        message:'登录失败',
      }
    },
    http:{
      headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}
    },
    methods:{

    }
  }
</script>
<style scoped>
</style>
