<template>
  <div :class="classObj" class="app-wrapper">
    <!--<div class="drawer-bg" @click="handleClickOutside"/>-->
    <div class="drawer-bg"/>
    <sidebar class="sidebar-container"/>
    <div class="main-container">
      <navbar></navbar>
      <tags-view/>
      <back-main></back-main>
    </div>
  </div>
</template>
<script>
  import { Navbar,Sidebar,BackMain,TagsView } from './components'

  export default {
    name:'layout',
    components:{
      Navbar,
      Sidebar,
      BackMain,
      TagsView
    },
    mizins:[],
    computed:{
      sidebar() {
        return this.$store.state.app.sidebar
      },
      device() {
        return this.$store.state.app.device
      },
      classObj() {
        return {
          hideSidebar: !this.sidebar.opened,
          openSidebar: this.sidebar.opened,
          withoutAnimation: this.sidebar.withoutAnimation,
          mobile: this.device === 'mobile'
        }
      }
    },
    methods:{
      handleClickOutside(){
      }
    }
  }
</script>
<style lang="scss">
</style>
<style scoped lang="scss">

  .el-container{
    height: 100%;
  }

  .el-aside{
    background: #b3c0d1;
  }

</style>


