Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    loginType: 'username',
  },
  methods:{
    doSomething: function () {
      if(loginType === 'username'){
        this.loginType = "email";
      }
      else {
        this.loginType = 'username'
      }
    }
  }
})