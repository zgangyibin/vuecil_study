
<template>
  <div>
     <MyProduct :num="n" :str="str" :flag="flag" :arr="arr" :obj="obj"></MyProduct>

     <button @click="n++">num++</button>
  </div>
</template>

<script>
import MyProduct from './components/MyProduct.vue'
  export default {
    components:{
      MyProduct,
    },
    data() {
      return {
        n: 10,
        str:"hello",
        flag:false,
        arr:['aa','bb','cc'],
        obj:{
          name:"zs",
          age:12
        }
      }
    },
    
  }
</script>

<style scoped>

</style>





















<!-- <template>
  <div>
    <myhead></myhead>
    <myhead></myhead>
    <myhead></myhead> 
     使用 
   <home-view v-for="item in arr" :title="item"></home-view>
 

  </div>
</template>
<script>
// import myhead from './components/myhead.vue'


// 引入
// import homeview from "./views/HomeView"
import homeView from './views/HomeView.vue'

export default{
  data(){
    return{
      tit:"标题",
      arr:['标题1','标题2','标题3']
    }
  },
  // 局部注册
  components: {
    //  myhead 
    // homeview:homeview
    homeView

     },

}
</script>
<style>
</style> -->
<!-- <template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style> -->
