<template>
    <div>
        <p @click="tzHome">首页</p>
    </div>
</template>

<script>
    export default {
        methods: {
            tzHome() {
                // this.$router.push("/home");//跳转首页
                this.$router.push({//跳转首页
                    // path:"/home",
                    name:"home",
                    // 虽然用name跳转，但是url的hash值还是切换path值
                })
            },
        },
    }
</script>

<style scoped>

</style>