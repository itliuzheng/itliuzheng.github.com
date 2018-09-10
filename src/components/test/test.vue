<template>
  <div>
    <h2>{{title}}</h2>
    <h3>{{$route.params.id}}</h3>
    <router-view></router-view>
    <form v-on:submit.prevent="href()">
      <input type="text" placeholder="链接地址" v-model="address">
      <button>跳转链接</button>
    </form>
  </div>
</template>
<script>

  export default {
    name:'test',
    data(){
      return {
        is_ok:true,
        message:'',
        title:'test',
        address:''
      }
    },
    methods:{
      href(){
        this.$router.push({path:this.address});
        this.address = '';
      }
    }
  }

</script>
<style scoped>

</style>
