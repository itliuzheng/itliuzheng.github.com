<template>
  <div id="app">
    <BaseInput type="checkout"></BaseInput>
    <input type="text" v-model="username" id="username">
    <keep-alive>
     <router-view @userSignIn="userSignIn"></router-view>
    </keep-alive>
    <!--<router-view/>-->
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      username:sessionStorage.username == 'null'? '':sessionStorage.username
    }
  },
  methods:{
  //  子-》父
    userSignIn(username){
      console.log(username);
      sessionStorage.username = username;
      this.username = sessionStorage.username;

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
