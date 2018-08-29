<template>
  <div class="fail">

    <h1>liuzheng</h1>
    <h2>{{message}}</h2>
  </div>
</template>
<script>
  export default {
    name:'fail',
    data(){
      return {
        message:'404',
      }
    }
  }
</script>
<style scoped>
  h1{
    color: blueviolet;
  }
</style>
