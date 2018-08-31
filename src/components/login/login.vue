<template>
  <div class="login">

    <h1>liuzheng</h1>
    {{message}}<br>
    <form v-on:submit.prevent="login()">
      <input  type="text" v-model="username" placeholder="用户名"><br>
      <input  type="password" v-model="password" placeholder="密码"><br>
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
        isLogin:store.getters.isLogin
      }
    },
    http:{
      headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}
    },

   beforeCreate: function () {
           //  console.log('beforeCreate 创建前状态===============》');
           // console.log("color:red" , "el     : " + this.$el); //undefined
           // console.log("color:red","data   : " + this.$data); //undefined
           // console.log("color:red","message: " + this.message);
           // console.log("color:red","message: " , this.$store)

     //判断用户名是否违法
     function isName(name){
       if(typeof name == 'string'){
         switch(name){
           case 'null':
             name = null;
             return name;
             break;
           case 'undefined':
             name = null;
             return name;
             break;
           case '':
             name = null;
             return name;
             break;
           default:
             break;
         }
       }
       return name
     }

      let username = isName(sessionStorage.username);
      let token = sessionStorage.userToken;


      if(username){
        this.$store.dispatch('setUser',username);
        this.$store.dispatch('setToken',token);

        this.$router.push({path:'/HelloWorld'})
      }else{
        sessionStorage.userToken = '';
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
        console.log(this.$store.getters.isLogin);
        if(this.$store.getters.isLogin){
          this.$router.replace({path:'/HelloWorld'})
        }
      },
      login(){
        var _this = this;
        console.log(this);
        console.log(_this.username+'===='+_this.password);


        if(_this.password == '111111'){
          let token = Math.random();
          sessionStorage.setItem('username',_this.username);
          sessionStorage.setItem('userToken',token);

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
            })


          _this.$emit('userSignIn', _this.username);

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
<style scoped lang="scss">
  /*@import '@/assets/css/login/login.css'*/
  input{
    margin-bottom: 10px;
  }
</style>
