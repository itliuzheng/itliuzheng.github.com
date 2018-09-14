<script>
  export default {
    beforeCreate(){
      const path = this.$route.params.path;
      console.log(path);
      this.$route.replace(`/${path}`)
    },
    render:function (h) {
      console.log('----render---');
      console.log(h);
      return h();
    }
  }
</script>
