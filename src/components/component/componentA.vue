<template>

</template>
<script>
  export default {
    props:{
      count:{
        // require:true
        default:0
      }
    },
    // props:['count'],
    // data:function () {
    //   return {
    //     count : this.count || 0
    //   }
    // },
    template:'<button v-on:click="count++">You Click Me {{count}} times</button>'
  };
</script>
