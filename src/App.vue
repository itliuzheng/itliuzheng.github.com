<template>
  <div id="app">
    <!--<keep-alive>-->
     <router-view @userSignIn="userSignIn"></router-view>
     <!--<router-view ></router-view>-->
    <!--</keep-alive>-->
    <!--<router-view/>-->

  </div>
</template>

<script>
  let user_info = JSON.parse(localStorage.getItem('user_info'));

export default {
  name: 'App',
  data(){
    return{
      user_info:user_info,
      username:user_info?user_info.username:null
    }
  },
  methods:{
  //  子-》父
    userSignIn(user_info){
      // user_info = JSON.stringify(user_info);
      // localStorage.setItem('user_info',user_info);
      this.username = user_info?user_info.username:null;

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
}
</style>
