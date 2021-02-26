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
      todos: [
        'task 1 ',
        'task 2 ',
        'task 3 '
      ]
    }
  });
})();