//引入vue vue-router和vue是深度集成的
import Vue from 'vue'
// 导入路由
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Part from '../views/Part.vue'
import Find from "../views/Find.vue"
import Detail from "../views/Detail.vue"
import MyDetail from "../views/MyDetail.vue"
import NotFound from "../views/NotFound.vue"

// 在vue中使用vue插件都需要调用Vue.use()
Vue.use(VueRouter)

// 创建路由规则 一一对应关系
const routes = [
  {
    path:"/home",    //路由地址
    // redirect:"/find",
    component:Home
  },
  {
    path:"/part",    //路由地址
    component:Part
  },
  {
    path:"/find",    //路由地址
    component:Find
  },
  // {
  //   path:"*",    //匹配所有路由
  //   redirect:'/',//重定向
  // },
  {
    path:"/detail",    //路由地址
    component:Detail
  },
  {
    path:"/mydetail/:users",    //路由地址   :说明是动态变量
    component:MyDetail
  },
  {
    path:"*",    //路由地址
    component:NotFound
  },
]

// 创建路由对象
const router = new VueRouter({
  //路由规则
  routes
})

// 暴露路由对象
export default router
