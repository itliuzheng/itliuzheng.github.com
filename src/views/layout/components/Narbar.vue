<template>
  <div class="navbar">

    <hamburger :toggle-click="toggleSideBar"  class="hamburger-container"/>

    <breadcrumb class="breadcrumb-container"/>
    <!--<div class="right-menu">-->
      <!--<template >-->
        <!--<error-log class="errLog-container right-menu-item"/>-->

        <!--<el-tooltip :content="navbar.screenfull" effect="dark" placement="bottom">-->
          <!--<screenfull class="screenfull right-menu-item"/>-->
        <!--</el-tooltip>-->

        <!--<el-tooltip :content="navbar.screenfull" effect="dark" placement="bottom">-->
          <!--<size-select class="international right-menu-item"/>-->
        <!--</el-tooltip>-->

        <!--<lang-select class="international right-menu-item"/>-->

        <!--<el-tooltip :content="navbar.screenfull" effect="dark" placement="bottom">-->
          <!--<theme-picker class="theme-switch right-menu-item"/>-->
        <!--</el-tooltip>-->
      <!--</template>-->

      <!--<el-dropdown class="avatar-container right-menu-item" trigger="click">-->
        <!--<div class="avatar-wrapper">-->
          <!--<img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">-->
          <!--<i class="el-icon-caret-bottom"/>-->
        <!--</div>-->
        <!--<el-dropdown-menu slot="dropdown">-->
          <!--<router-link to="/">-->
            <!--<el-dropdown-item>-->
              <!--{{ navbar.dashboard }}-->
            <!--</el-dropdown-item>-->
          <!--</router-link>-->
          <!--<a target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/">-->
            <!--<el-dropdown-item>-->
              <!--{{ navbar.github }}-->
            <!--</el-dropdown-item>-->
          <!--</a>-->
          <!--<el-dropdown-item divided>-->
            <!--<span style="display:block;" @click="logout">{{ navbar.logOut }}</span>-->
          <!--</el-dropdown-item>-->
        <!--</el-dropdown-menu>-->
      <!--</el-dropdown>-->
    <!--</div>-->
  </div>
</template>
<script>
  import Hamburger from '@/components/Hamburger'
  import Breadcrumb from '@/components/Breadcrumb'

  export default {
    components:{
      Hamburger,
      Breadcrumb
    },
    methods:{
      toggleSideBar(){
        console.log('toggleSidBar');
        },
      logout(){
        console.log('logOut');
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .breadcrumb-container{
    float: left;
  }
  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
  .right-menu {
    float: right;
    height: 100%;
    &:focus{
     outline: none;
    }
    .right-menu-item {
      display: inline-block;
      margin: 0 8px;
    }
    .screenfull {
      height: 20px;
    }
    .international{
      vertical-align: top;
    }
    .theme-switch {
      vertical-align: 15px;
    }
    .avatar-container {
      height: 50px;
      margin-right: 30px;
      .avatar-wrapper {
        cursor: pointer;
        margin-top: 5px;
        position: relative;
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
