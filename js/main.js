(function(){
  'use strict';

  var vm = new Vue({
    el: '#app1',
    data: {
      name: 'taguchi'
    }
  });
  var vm = new Vue({
    el: '#app2',
    data: {
      newItem: '',
      todos: []
    },
    watch: {
      todos: {
        handler: function(){
          localStorage.setItem('todos', JSON.stringify(this.todos));
          // セーブできているか確認用
          // alert('Data saved!');
        },
        deep: true
      }
    },
    mounted: function(){
      this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    },
    methods: {
      addItem: function(){
        var item = {
          title: this.newItem,
          isDone: false
        };
        this.todos.push(item);
        this.newItem = '';
      },
      deleteItem: function(index){
        if (confirm('are you sure?')){
          this.todos.splice(index, 1);
        }
      },
      purge: function(){
        if (!confirm('delete finished?')){
          return;
        }
        this.todos = this.remaining;
      }
    },
    computed: {
      remaining: function(){
        // var items = this.todos.filter(function(todo){
        //   return !todo.isDone;
        // });
        // return items.length;
        return this.todos.filter(function(todo){
          return !todo.isDone;
        });
      }
    }
  });

  var likeComponent =Vue.extend({
    props: {
      message: {
        type: String,
        default: 'like'
      }
    },
    data: function(){
      return{
        count: 0
      }
    },
    template: '<button @click="countUp">{{ message }} {{ count }}</button>',
    methods: {
      countUp: function(){
        this.count++;
        this.$emit('increment');
      }
    }
  });
  var app = new Vue({
    el: '#app3',
    components: {
      'like-component': likeComponent
    },
    data: {
      total: 0
    },
    methods: {
      incrementTotal: function(){
        this.total++;
      }
    }
  });
})();