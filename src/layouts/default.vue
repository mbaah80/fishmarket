<template>
<div>
    <Header/>
  <main class="app-content">
    <notifications />
     <router-view></router-view>
  </main>
    <Footer/>
</div>
</template>
<script>
import Header from '@/components/header/index.vue'
import Footer from '@/components/footer/index.vue'
export default {
  components: {Header, Footer},
  name: "default"
}
</script>

<style scoped>

</style>
