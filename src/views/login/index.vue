<template>
  <div class="login-container">

    <el-form
      class="login-form"
      ref="loginForm"
      :model="loginForm"
      auto-complete="on"
      label-position="left"
      :rules="loginRules">

      <div class="title-container">
        <h3>{{lang.title}}</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container svg-container_login" >
          <svg-icon icon-class="user"></svg-icon>
        </span>
        <el-input
          v-model="loginForm.username"
          :placeholder="lang.username"
          name="username"
          type="text"
          auto-complete="on"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container" >
          <svg-icon icon-class="password"></svg-icon>
        </span>
        <el-input
          v-model="loginForm.password"
          :placeholder="lang.password"
          name="passwod"
          type="password"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        ></el-input>
      </el-form-item>
      <p class="error" v-if="error">用户名或密码错误</p>
      <el-button class="login-button" :loading="loading" type="primary" @click.native.prevent="handleLogin" >{{lang.logIn}}</el-button>
    </el-form>
  </div>
</template>
<script>
  import tool from '@/components/component/tool'

  export default {
    name:'login',
    data(){
      const validateUsername = (rule,value,callback) =>{
        let validate = tool.validateRealName(value);
        if(!validate.boolean){
          callback(new Error(validate.msg));
        }else{
          callback();
        }
      }
      const validatePassword = (rule,value,callback)=>{
        let validate = tool.validatePassword(value);
        if(!validate.boolean){
          callback(new Error(validate.msg));
        }else{
          callback();
        }
      }
      return {
        loginRules:{
          username:[{required:true,trigger:'blur',validator:validateUsername,message:'请填写用户名'}],
          password:[{required:true,trigger:'blur',validator:validatePassword}]
        },
        loginForm:{
          username:'',
          password:''
        },
        lang:{
          title:'系统登录',
          username:'用户名',
          password:'密码',
          logIn:'登录'
        },
        loading:false,
        redirect:null,
        error:null
      }
    },
    watch:{
      $route:{
        handler:function(route){   //其值是一个回调函数。即监听到变化时应该执行的函数
          this.redirect = route.query && route.query.redirect
        },
        // deep  其值是true或false；确认是否深入监听。（一般监听时是不能监听到对象属性值的变化的，数组的值变化可以听到。）
        immediate:true //其值是true或false；确认是否以当前的初始值执行handler的函数。
      }
    },
    methods:{
      handleLogin(){
        var _this = this;
        this.$refs.loginForm.validate(valid => {

          _this.error = false;
          if(valid){
            _this.loading = true;

            _this.$store.dispatch('LoginByUsername',_this.loginForm).then(()=>{
              _this.loading = false;
              _this.$router.push({path:_this.redirect||'/'});
            }).catch((error)=>{
              _this.loading = false;
              _this.error = true;
            })

          }else{
            console.log('error submit!');
            return false;
          }
        })
      }
    }
  }
</script>


<style rel="stylesheet/scss"  lang="scss">
  /* 修复input 背景不协调 和光标变色 */

  $bg:#283443;
  $light_gray:#eee;
  $cursor: #fff;
    @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
      .login-container .el-input input{
        color: $cursor;
        &::first-line {
          color: $light_gray;
        }
      }
    }

    /* reset element-ui css */
    .login-container {
      .el-form-item__content{
        text-align: left;
      }
      .el-input {
        display: inline-block;
        height: 47px;
        width: 85%;
        input {
          background: transparent;
          border: 0px;
          -webkit-appearance: none;
          border-radius: 0px;
          padding: 12px 5px 12px 15px;
          color: $light_gray;
          height: 47px;
          caret-color: $cursor;
          &:-webkit-autofill {
            -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
            -webkit-text-fill-color: $cursor !important;
          }
        }
      }
      .el-form-item {
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        color: #454545;
      }
      .login-button{
        width: 100%;
        margin-top: 30px;
      }
    }

</style>


<style rel="stylesheet/scss"  scoped lang="scss">
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

  .login-container{
    position: fixed;
    width: 100%;
    height: 100%;
    background: $bg;
    .title-container{
      text-align: center;
      color: #fff;
      font-weight: 500;
      margin-bottom: 30px;
    }
    .login-form{
      position: absolute;
      width: 520px;
      right: 0;
      left: 0;
      max-width: 100%;
      margin: 120px auto;
      padding: 35px;
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
      &_login {
        font-size: 20px;
      }
    }
    .error{
      text-align: center;
      color: #f56c6c;
      font-size: 12px;
      line-height: 1;
      height: 12px;
    }
  }

</style>
