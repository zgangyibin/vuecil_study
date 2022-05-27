import Vue from 'vue'
// 根组件
import App from './App.vue'
import router from './router'
import store from './store'

// 全局指令
Vue.directive("gfocus",{
  inserted(e){
    e.focus();
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  // 渲染根组件
  render: h => h(App)
}).$mount('#app')
//挂载到id=app上