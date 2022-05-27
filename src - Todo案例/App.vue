<template>
  <div class="todo">
    <todo-head :list="list" @create="createFn"></todo-head>
    <todo-main :arr="showArr" @delEvent="deleteFn"></todo-main>
    <todo-foot :farr="showArr" @changeType="typeFn" @clearEvent="clearFun"></todo-foot>
  </div>
</template>

<script>
import TodoFoot from './components/TodoFoot.vue'
import TodoHead from './components/TodoHead.vue'
import TodoMain from './components/TodoMain.vue'

  export default {
  components: { TodoHead,TodoMain, TodoFoot },
  data() {
    return {
      list: JSON.parse(localStorage.getItem('list') || '[]'),
        
      getSel:"all",//默认显示全部
    }
  },
  watch:{
    list:{
      deep:true,
      handler(newval){
        localStorage.setItem('list',JSON.stringify(newval));
      },
    },
  },
  computed:{
    showArr(){
      switch(this.getSel){
        case "all":return this.list;break;
        case "yes":return this.list.filter((item)=>item.ischeck == true);break; 
        case "no":return this.list.filter((item)=>item.ischeck == false);break; 
      }
    },
  },
  methods: {
        clearFun(){
          this.list = this.list.filter((item)=>item.ischeck == false);
        },
        createFn(name) {
            var id=
            (this.list.length===0)?100:(this.list[this.list.length-1].id+1);
            this.list.push({
                id:id,
                name:name,
                ischeck:false
            })
        },
        deleteFn(id){
          // 删除
          let index = this.list.findIndex((item)=>item.id === id);
          this.list.splice(index,1);
        },
        typeFn(sel){
          //点击底部的类型
          this.getSel = sel;
        },
    },
 
  }
</script>

<style scoped>
.todo {
  width: 500px;
  height: 500px;
  border: 1px solid #333;
  margin: 0 auto;
}
</style>