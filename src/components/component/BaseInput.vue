<template>

</template>
<script>
  export default {

    props:['type','placeholder'],
    // props:['count'],
    // data:function () {
    //   return {
    //     count : this.count || 0
    //   }
    // },
    template:'<input type="{{type}}" placeholder="{{placeholder}}">'

  }

</script>
