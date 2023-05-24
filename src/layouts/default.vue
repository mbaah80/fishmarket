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
  name: "default",
  data(){
    return{
      country:null,
      currency:null
    }
  },
  mounted(){
    this.getUserCountry()
  },
  methods:{
    getUserCountry() {
      fetch('https://json.geoiplookup.io/')
        .then(res => res.json())
        .then(response => {
          this.country = response.country_name;
          this.currency = response.currency_code;

          localStorage.setItem('country', this.country);
          localStorage.setItem('currency', this.currency);
         
        })
        .catch(error => {
          console.log('Request failed:', error);
        });
    }
  }
}
</script>

<style scoped>

</style>
