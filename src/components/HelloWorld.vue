<template>
  <div>
    <form v-on:submit.prevent="logon">
      <label for="new-todo">ADD a Todo</label>
      <button>登出</button>
    </form>
    <base-add></base-add>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <h2>Essential Links</h2>
      <h2 v-on:click="clickUserName">Ecosystem</h2>
      <template v-if="value2">
        <h1>YES</h1>
      </template>
      <template v-else>
        <h1>NO</h1>
      </template>
      <el-switch
        v-model="value2"
        active-color="#13ce66"
        inactive-color="#ff4949">
      </el-switch>
    </div>
    <div id="todo-list-example">
      <form v-on:submit.prevent="addNewTodo">
        <BaseInput placeholder="asdfasdf"></BaseInput>
        <input type="text"
                id="new-todo"
               v-model="newTodoText"
               placeholder="e.g. Feed the cat"
        >
        <button>Add</button>
      </form>
      <ul>
        <li
          is="todo-item"
          v-for="(todo,index) in todos"
          :key="todo.id"
          :title="todo.title"
          v-on:removes="todos.splice(index,1)"
        ></li>
      </ul>
    </div>
    <base-add count="123"></base-add>
    <component-b count="123"></component-b>
    <base-b count="123"></base-b>
    <base-input
      type="text"
      v-model="username"
      class="username-input"
      placeholder="Enter your username"
      label="用户名"
      v-on:input="input"
    ></base-input>
  </div>

</template>

<script>
  import ComponentB from '@/components/component/componentB.vue'

  Vue.component('todo-item',{
    template:'\
      <li>\
        {{title}}\
        <button v-on:click="$emit(\'removes\')">Remove</button>\
      </li>   \
     ',
    props:['title']
  });

  export default {
    name: 'HelloWorld',
    components:{
      ComponentB
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        username:'',
        value2:true,
        newTodoText:'',
        todos:[
          {
            id:1,
            title:'one'
          },
          {
            id:2,
            title:'two'
          },
          {
            id:3,
            title:'three'
          }
        ],
        nextTodoId:4
      }
    },
    methods:{
      clickUserName(){
        console.log(localStorage.getItem('user_info'));
      },
      addNewTodo(){
        this.todos.push({
          id:this.nextTodoId++,
          title:this.newTodoText
        });
        this.newTodoText = ''
      },
      logon(){
        this.$store.dispatch('setUserInfo',null,null);
        this.$emit('userSignIn',null);
        this.$router.push({path:'/'})
      },
      input(value){
        console.log(value);
        console.log(event);
        return this.username = value
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h1{
      color: blue;
    }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 10px 0 0;
    li{
      display: block;
      margin-bottom: 10px;
    }
  }
  a {
    color: #42b983;
  }
  .username-input{
    /deep/ input{
      height: 20px;
    }
  }
</style>
