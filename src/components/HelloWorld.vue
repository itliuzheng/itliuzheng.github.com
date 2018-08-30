<template>
  <div>
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
        <label for="new-todo">ADD a Todo</label>
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
          v-on:remove="todos.splice(index,1)"
        ></li>
      </ul>
    </div>
  </div>

</template>

<script>
  Vue.component('todo-item',{
    template:'\
      <li>\
        {{title}}\
        <button v-on:click="$emit(\'remove\')">Remove</button>\
        <button @:click="$emit(remove)">Remove</button>\
      </li>   \
     ',
    props:['title']
  });
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
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
        console.log(sessionStorage.username);
      },
      addNewTodo(){
        this.todos.push({
          id:this.nextTodoId++,
          title:this.newTodoText
        });
        this.newTodoText = ''
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
</style>
