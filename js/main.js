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
      todos: [
        'task 1 ',
        'task 2 ',
        'task 3 '
      ]
    },
    methods: {
      // addItem: function(e){
      //   // e.preventDefault();
      //   this.todos.push(this.newItem);
      // }
      addItem: function(){
        this.todos.push(this.newItem);
        this.newItem = '';
      },
      deleteItem: function(index){
        if (confirm('are you sure?')){
          this.todos.splice(index, 1);
        }
      }
    }
  });
})();