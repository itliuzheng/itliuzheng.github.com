<template>
  <div class="login">

    <h1>liuzheng</h1>
    {{message}}<br>
    <form v-on:submit.prevent="login()">
      <input  type="text" v-model="username" placeholder="用户名"><br>
      <input  type="password" v-model="password" placeholder="密码"><br>
      <p v-show="form.is_show">{{form.msg}}</p>
      <button>登录</button>
    </form>
    <component-a count="123"></component-a>
    <component-b count="123"></component-b>
  </div>
</template>
<script>
  import '@/assets/css/login/login.css';
  import store from '@/store'
  import ComponentB from '@/components/component/componentB.vue'
  import tool from '@/components/component/tool'

  Vue.prototype.$tool = tool;

  // console.log(ComponentB);
  // var componentB = {
  //   props:{
  //     count:{
  //       // require:true
  //       default:0
  //     }
  //   },
  //   // props:['count'],
  //   // data:function () {
  //   //   return {
  //   //     count : this.count || 0
  //   //   }
  //   // },
  //   template:'<button v-on:click="count++">You Click Me {{count}} times</button>'
  // };

  // Vue.component('component-a',{
  //   props:{
  //     count:{
  //       // require:true
  //       default:0
  //     }
  //   },
  //   template:'<button v-on:click="count++">You Click Me {{count}} times</button>'
  // });

  export default {
    name:'login',
    components:{
      ComponentB
    },
    data(){
      return {
        message:'欢迎进入登录页面',
        username:'',
        password:'',
        isLogin:store.getters.isLogin,
        form:{
          msg:'',
          is_show:false
        }
      }
    },
   beforeCreate: function () {
           //  console.log('beforeCreate 创建前状态===============》');
           // console.log("color:red" , "el     : " + this.$el); //undefined
           // console.log("color:red","data   : " + this.$data); //undefined
           // console.log("color:red","message: " + this.message);
           // console.log("color:red","message: " , this.$store)



      // let username = isName(localStorage.username);
      let username = localStorage.getItem('username');
      let token = localStorage.getItem('userToken');

      if(username){
        this.$store.dispatch('setUser',username);
        this.$store.dispatch('setToken',token);

        this.$router.push({path:'/HelloWorld'})
      }else{
        localStorage.setItem('userToken',null);
      }

    },
    created: function () {
        // console.log('created 创建完毕状态===============》');
        // console.log("color:red","el     : " + this.$el); //undefined
        //    console.log("color:red","data   : " + this.$data); //已被初始化
        //    console.log("color:red","message: " + this.message); //已被初始化

    },
    beforeMount: function () {
        // console.log('beforeMount 挂载前状态===============》');
        // console.log("color:red","el     : " + (this.$el)); //已被初始化
        // console.log(this.$el);
        //    console.log("color:red","data   : " + this.$data); //已被初始化
        //    console.log("color:red","message: " + this.message); //已被初始化
    },
    mounted: function () {
        // console.log('mounted 挂载结束状态===============》');
        // console.log("color:red","el     : " + this.$el); //已被初始化
        // console.log(this.$el);
        //  console.log("color:red","data   : " + this.$data); //已被初始化
        //  console.log("color:red","message: " + this.message); //已被初始化
      if(window.history && window.history.pushState){
        history.pushState(null,null,document.URL);
        window.addEventListener('popstate',this.goBack,false);
      }
    },
    beforeUpdate: function () {
      // console.log('beforeUpdate 更新前状态===============》');
      // console.log("color:red","el     : " + this.$el);
      // console.log(this.$el);
      // console.log("color:red","data   : " + this.$data);
      // console.log("color:red","message: " + this.message);

    },
    updated: function () {
        // console.log('updated 更新完成状态===============》');
        // console.log("color:red","el     : " + this.$el);
        // console.log(this.$el);
        //    console.log("color:red","data   : " + this.$data);
        //    console.log("color:red","message: " + this.message);
    },
    beforeDestroy: function () {
        // console.log('beforeDestroy 销毁前状态===============》');
        // console.log("color:red","el     : " + this.$el);
        // console.log(this.$el);
        //    console.log("color:red","data   : " + this.$data);
        //    console.log("color:red","message: " + this.message);
    },
    destroyed: function () {
      // console.log('destroyed 销毁完成状态===============》');
      // console.log("color:red","el     : " + this.$el);
      // console.log(this.$el);
      //  console.log("color:red","data   : " + this.$data);
      //  console.log("color:red","message: " + this.message);
      window.removeEventListener('popstate',this.goBack,false);
    },
    methods:{
      goBack(){
        console.log('isLogin====',this.$store.getters.isLogin);
        if(this.$store.getters.isLogin){
          this.$router.replace({path:'/HelloWorld'})
        }
      },
      validate(){
        var _this = this;
        console.log(this);
        console.log(_this.username+'===='+_this.password);

        let _name = _this.$tool.validateRealName(_this.username);
        let _password = _this.$tool.validatePassword(_this.password);

        if(!_name.boolean){
          _this.form.is_show = true;
          _this.form.msg = _name.msg;
          return false;
        }

        if(!_password.boolean){
          _this.form.is_show = true;
          _this.form.msg = _password.msg;
          return false;
        }

        _this.form.is_show = false;
        return true;
      },
      login(){
        var _this = this;

        if(!_this.validate()){
          return false;
        }

        _this.$http.post('http://119.147.171.111/user/login',{
        // _this.$http.post('http://192.168.11.116:8105/user/login',{
          loginName:_this.username,
          password:_this.password
        },
          {emulateJSON:true}
          ).then(function (res) {
            console.log(res);
            console.log(res.headers);
          var code = res.data.respCode;
          if(code == '00'){
            let token = res.headers.authorization;
            localStorage.setItem('username',_this.username);
            localStorage.setItem('userToken',token);

            console.log( '$store===',_this.$store);
            console.log( '$store===',_this.$store.state);
            _this.$store.dispatch('setUser',_this.username);
            _this.$store.dispatch('setToken',token);

            console.log('islogin===',_this.$store.state.isLogin);
              _this.$router.push({
                path:'/HelloWorld'
                // query:{
                //   user:_this.username
                // }
              });
            _this.$emit('userSignIn', _this.username);
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
<style scoped lang="scss">
  /*@import '@/assets/css/login/login.css'*/
  input{
    margin-bottom: 10px;
  }
</style>
