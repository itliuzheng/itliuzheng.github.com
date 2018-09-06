<template>
  <label>
    {{label}}
    <input
      v-bind="$attrs"
      v-bind:value="value"
      v-on:input="$emit('input',$event.target.value)"
    >
  </label>
</template>
<script>
  export default {
    inheritAttrs:false,
    props:['label','value']
    // template:`
    //   <label>
    //     {{label}}
    //     <input
    //       type="type"
    //       v-bind="$attrs"
    //       v-bind:value="value"
    //       v-on:input="$emit('input',$event.target.value)"
    //     >
    //   </label>
    //   `
  }
</script>
<style lang="scss">
  .username-input{
    input{
      border: 1px solid #ccc;
      width: 200px;
      height: 40px;
      line-height: 40px;
      font-size: 14px;
    }
  }
</style>
