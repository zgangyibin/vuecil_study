import Vue from 'vue'
// 根组件
import App from './App.vue'
// 导入路由对象
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
  // 把路由对象注入到vue实例中  在任何一个组件中都可使用路由对象
  router,
  store,
  // 渲染根组件
  render: h => h(App)
}).$mount('#app')
//挂载到id=app上