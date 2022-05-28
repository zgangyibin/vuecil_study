//引入vue vue-router和vue是深度集成的
import Vue from 'vue'
// 导入路由
import VueRouter from 'vue-router'

import Find from "../views/Find.vue"
import My from "../views/My.vue"

import Ranking from "../views/second/Ranking.vue"
import Recommend from "../views/second/Recommend.vue"
import SongList from "../views/second/SongList.vue"

// 在vue中使用vue插件都需要调用Vue.use()
Vue.use(VueRouter)

// 创建路由规则 一一对应关系
const routes = [
  {
    path:"/find",
    component:Find,
    children:[
      {
        path:"ranking",
        component:Ranking,
      },
      {
        path:"recommend",
        component:Recommend,
      },
      {
        path:"songlist",
        component:SongList,
      },
    ],
  },
  {
    path:"/my",
    component:My,
  },

]

// 创建路由对象
const router = new VueRouter({
  //路由规则
  routes,
  mode:"history"   //打包上线后需要后台的支持，否则找的是文件夹，默认模式为hash
})

// 暴露路由对象
export default router
