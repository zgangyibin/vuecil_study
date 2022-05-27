<template>
    <div>
        子组件
        <hr>
        
        {{num}}--{{str}}--{{flag}}
        <ul>
            <li v-for="(item,i) in arr" :key="i">{{item}}</li>
        </ul>
        {{obj.name}}

        <hr>
        <!-- 子组件不能更改父组件值 -->
        <!-- <button @click="num++">num++</button> -->

        <!-- 可以更改对象属性 -->
        <button @click="obj.name='ls'">更改对象属性</button>

        <button @click="updateArr">更改数组</button>
    </div>
    
</template>

<script>
    export default {
        // props只读
        // props:['num','str','flag','arr','obj'],
        props:{
            // num必须是数字类型
            num:Number,
            // 必须为数值类型或字符串类型
            str:[String,Number],
            flag:{
                // 布尔类型
                type:Boolean,
                // 默认为true
                default:true,
            },
            arr:{
                type:Array,
                // 必传
                require:true,
            },
            // 如果是一个对象或数组，默认必须是一个函数返回
            obj:{
                type:Object,
                default:function(){
                    return{}
                },
            }
          
        },
        methods: {
            updateArr() {
                this.arr.push("eee")
                // this.arr=[1,2,3]//不能直接值，可更改
            }
        },
    }
</script>

<style scoped>

</style>