<template>
  <div>
    <button v-on:click="count++">You Click Me {{count}} times--aaaaaaaaaaaaaa</button>
  </div>
</template>
<script>
  export default {
    props:{
      count:{
        default:0
      }
    }
    // template:'<button v-on:click="count++">You Click Me {{count}} times--阿斯蒂芬斯蒂芬</button>'
  }
</script>
