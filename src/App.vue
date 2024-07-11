<template>
  <div class="app-vue">
        <NavComponentVue/>
        <div class="main">
    <router-view/>
        </div>
    <footervueVue/>
  </div>
</template>

<script>
import BaseBtnVue from './components/BaseBtn.vue'
import footervueVue from './components/footervue.vue'
import NavComponentVue from './components/NavComponent.vue'
  export default {
    components:{
      BaseBtnVue,
      NavComponentVue,
      footervueVue
    }
  }
</script>

<style scoped>
  .app-vue{
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .main{
    flex-grow: 1;
  }
</style>