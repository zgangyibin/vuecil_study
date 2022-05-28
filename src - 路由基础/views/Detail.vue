<template>
    <div>
        detail
    </div>
</template>

<script>
    export default {
        created(){
            //可以操作data中得数据
            console.log(this.$route.query);
            console.log(this.$route.query.user);
        }
    }
</script>

<style scoped>

</style>