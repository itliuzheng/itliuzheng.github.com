<template>

</template>
<script>
  //判断用户名是否违法
   function isName(name){
     if(typeof name == 'string'){
       switch(name){
         case 'null':
           name = null;
           return name;
           break;
         case 'undefined':
           name = null;
           return name;
           break;
         case '':
           name = null;
           return name;
           break;
         default:
           break;
       }
     }
     return name
   }

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
