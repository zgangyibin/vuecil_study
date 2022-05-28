<template>
    <div>
       <router-link to="/detail?user=牛牛">hello--牛牛</router-link>
        <hr>
        <router-link to="/mydetail/贝贝">hello--贝贝</router-link>

        <p @click="toDetail">hello--牛牛</p>
        <p @click="toMyDetail">hello--贝贝</p>
    </div>
</template>

<script>
    export default {
        methods: {
            toDetail() {
                this.$router.push({
                    path:"/detail",
                    query:{
                        user:"hello",
                    }
                })
            },
             toMyDetail() {
                //  path会自动忽略params
                this.$router.push({
                    name:"mydetail",
                    params:{
                        users:"hello贝贝",
                    }
                })
            },
        },
    }
</script>

<style scoped>

</style>