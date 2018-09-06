<template>
  <div id="app">
    <input type="text" v-model="username" id="username">
    <keep-alive>
     <router-view @userSignIn="userSignIn"></router-view>
     <!--<router-view ></router-view>-->
    </keep-alive>
    <!--<router-view/>-->

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      user_info:JSON.parse(localStorage.getItem('user_info')),
      username:this.user_info?this.user_info.username:null
    }
  },
  methods:{
  //  子-》父
    userSignIn(user_info){
      console.log(user_info);
      // user_info = JSON.stringify(user_info);
      // localStorage.setItem('user_info',user_info);
      // this.username = localStorage.user_info.username;

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  h1{
    color: red;
  }
</style>
