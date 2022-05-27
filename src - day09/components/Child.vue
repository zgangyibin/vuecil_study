<template>
    <div>
        <p>我是Child组件</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: "hello",
            }
        },
        methods: {
            fn() {
                console.log("child组件内部方法被调用");
            }
        },
    }
</script>

<style scoped>

</style>