<template>
    <div>
      UserName
    </div>
</template>

<script>
    export default {
      
        created(){
            console.log("username组件被创建");
        },
        activated(){
            console.log("username组件被激活");
        },
        deactivated(){
            console.log("username组件失去激活");
        },
        beforeDestroy(){
            console.log("username组件被销毁");
        },
    }
</script>

<style scoped>

</style>