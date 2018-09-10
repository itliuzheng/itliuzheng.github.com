<template>
  <div>
    <h2>{{title}}</h2>
    <h3>{{$route.params.id}}</h3>
    <ul>
      <li v-for="list in items">{{list.message}}</li>
      <li v-for="(list,index) in items" :key="list.id">{{index}}:{{list.message}}</li>
      <li v-for="list in object">{{list}}</li>
      <li v-for="(value,key) in object">
        {{key}}:{{value}}
      </li>
      <li v-for="(value,key,index) in object">
        {{index}}--{{key}}:{{value}}
      </li>
    </ul>
    <div>
      <form v-on:submit.prevent="push()">
        <input type="text" v-model="arr_text">
        <button>add</button>
      </form>
    </div>
    <ul class="print">
      <li v-for="list in lists">{{list}}</li>
    </ul>
  </div>
</template>
<script>

  export default {
    name:'for',
    data(){
      return {
        is_ok:true,
        message:'',
        title:'列表循环',
        items:[
          {message:'liu',id:1},
          {message:'zhang',id:2},
          {message:'zhao',id:3},
          {message:'lalala',id:4}
        ],
        object:{
          firstName:'liu',
          lastName:'zheng',
          age:27
        },
        value:'',
        lists:[
          {message:'Foo'},
          {message:'Bar'},
          {message:'Var'}
        ]
      }
    },
    //方法
    methods:{
      push(){
        var _this = this;
        _this.lists.push({message:_this.arr_text})
      }
    }
  }

</script>
<style scoped>

</style>

<style  lang="scss">
  ul.print{
    margin: 20px 0 20px;
    li{
      font-size: 14px;
      color: #999;
    }
  }
</style>
