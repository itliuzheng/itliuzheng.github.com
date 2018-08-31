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
      login(){
        var _this = this;
        console.log(this);
        console.log(_this.username+'===='+_this.password);
        _this.$http.post('/persion/login',{
          username:_this.username,
          password:_this.password
        },
          {emulateJSON:true}
          ).then(function (res) {
          var errorcode = res.data.code;
          if(errorcode == '200'){
            _this.$router.push({
              path:'/HelloWorld',
              query:{
                user:res.data.data
              }
            })
          }else{
            _this.$router.push({
              path:'/fail'
            })
          }
        }).catch(function (error) {
          console.log(error);
        })
      }
    }
  }
</script>
<style scoped>
</style>
