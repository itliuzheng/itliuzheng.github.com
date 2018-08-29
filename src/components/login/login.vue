<template>
  <div class="login">

    <h1>liuzheng</h1>
    {{message}}<br>
    <input  type="text" v-model="username" placeholder="用户名"><br>
    <input  type="password" v-model="password" placeholder="密码"><br>
    <button v-on:click="login">登录</button>
  </div>
</template>
<script>
  export default {
    name:'login',
    data(){
      return {
        message:'欢迎进入登录页面',
        username:'',
        password:''
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

        if(_this.password == '111111'){
            _this.$router.push({
              path:'/HelloWorld',
              query:{
                user:_this.username
              }
            })
        }else{
            _this.$router.push({
              path:'/fail'
            })
        }

        // _this.$http.post('/persion/login',{
        //   username:_this.username,
        //   password:_this.password
        // },
        //   {emulateJSON:true}
        //   ).then(function (res) {
        //   var errorcode = res.data.code;
        //   if(errorcode == '200'){
        //     _this.$router.push({
        //       path:'/HelloWorld',
        //       query:{
        //         user:res.data.data
        //       }
        //     })
        //   }else{
        //     _this.$router.push({
        //       path:'/fail'
        //     })
        //   }
        // }).catch(function (error) {
        //   console.log(error);
        // })
      }
    }
  }
</script>
<style scoped>
  h1{
    color: pink;
  }
  input{
    margin-bottom: 10px;
  }
</style>
