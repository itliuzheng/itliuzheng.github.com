<template>
  <div>
    <button v-on:click="count++">You Click Me {{count}} times--bbbbbbbbbbbbb</button>
  </div>
</template>
<script>
  export default {
    props:{
      count:{
        default:0
      }
    }
  }
</script>
