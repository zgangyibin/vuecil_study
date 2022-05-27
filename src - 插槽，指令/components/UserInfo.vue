<template>
    <div>
        UserInfo
    </div>
</template>

<script>
    export default {
         created(){
            console.log("userinfo组件被创建");
        },
        activated(){
            console.log("userinfo组件被激活");
        },
        deactivated(){
            console.log("userinfo组件失去激活");
        },
        beforeDestroy(){
            console.log("userinfo组件被销毁");
        },
    }
</script>

<style scoped>

</style>