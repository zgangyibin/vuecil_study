<template>
    <div class="todo-foot">
        <div>剩余{{farr.length}}--{{allNum}}</div>
        <ul @click="fn">
            <li @click="isSel='all'" :class="{active:isSel==='all'}">全部</li>
            <li @click="isSel='yes'" :class="{active:isSel==='yes'}">已完成</li>  
            <li @click="isSel='no'" :class="{active:isSel==='no'}">未完成</li>
        </ul>
        <button @click="clearFn">清空已完成</button>
    </div>
</template>

<script>
import { fromByteArray } from 'ipaddr.js'

    export default {
        props:['farr'],
        data() {
            return {
                // 1、变量isSel
                isSel: "all",//all全部,yes已完成,no未完成
            }
        },
        computed:{
            // 计算属性的写法
            allNum(){
                return this.farr.length;
            },
        },
        methods: {
            fn() {//点击全部、已完成、未完成
                // 子传父，把isSel值传给App.vue
                this.$emit("changeType",this.isSel);
            },
            clearFn(){
                // 清空已完成
                // 触发父组件中得事件
                this.$emit("clearEvent");
            }
        },
    }
</script>

<style scoped>
.todo-foot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    border-top: 1px solid red;
}
ul {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
    height: 50px;
   
}
li {
    cursor: pointer;
}
ul .active {

    border: 1px saddlebrown solid;
}
</style>