<template>
    <div>
        <p id="myp">{{msg}}</p>
        <ul id="myul">
            <li v-for="(item,i) in arr" :key="i">
                {{item}}
            </li>
        </ul>
        <button @click="arr.push('ee')">添加</button>
    </div> 
</template>

<script>

    export default {
        data() {
            return {
                msg: "hello vue",
                timer:null,
                arr:['aa','bb','cc','dd'],
            }
        },
        // 创建阶段
        // new Vue()以后,vue内部给实例对象添加了一些属性和方法，data和methods初始化之前
        beforeCreate(){
            console.log("beforeCreate");
            console.log(this.msg);//undefined
        },
        // data和methods初始化以后
        // 场景：网络请求，注册全局事件
        created(){
            console.log("created");
            console.log(this.msg);//hello vue
            this.timer =  setInterval(()=>{
                console.log("hahah");
            },5000);
        },
        // 挂载阶段
        // 真实dom挂载之前
        // 场景 预处理data 不会触发钩子函数
        beforeMount(){
            console.log("beforeMount");
            console.log(document.getElementById("myp"));//null
            this.msg = "haha";
        },
        // 真实dom挂载之后
        // 场景 使用真实的dom
        mounted(){
            console.log("mounted");
            console.log(document.getElementById("myp"));//p
        },
        // 更新阶段
        // data数据改变才执行
        // 更新前
        beforeUpdate(){
            console.log("beforeUpdate");
            console.log(document.querySelectorAll("#myul>li")[4]);//undefined
        },
        updated(){
            console.log("updated");
            console.log(document.querySelectorAll("#myul>li")[4]);//li
        },
        // 销毁
        // v-if ="false" 销毁vue实例
        // 场景 移除全局事件，当前组件，eventBus,定时器   $off
        beforeDestroy(){
            console.log("beforeDestroy");
            clearInterval(this.timer);
        },
        destroyed(){
            console.log("destroyed");
        },
    }
</script>

<style scoped>

</style>