<template>
  <div>
    <my-life-cycle v-if="show"></my-life-cycle>
    <button @click="show =false">销毁组件</button>
  </div>
</template>

<script>
import MyLifeCycle from './components/MyLifeCycle.vue'

  export default {
  components: { MyLifeCycle },
  data() {
    return {
      show: true,
    }
  },
    
  }
</script>

<style scoped>

</style>