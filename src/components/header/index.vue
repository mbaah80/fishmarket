<template>
  <!--====== Main Header ======-->
  <div class="header--style-1">


    <!--====== Nav 2 ======-->
    <nav class="secondary-nav-wrapper">
      <div class="container">

        <!--====== Secondary Nav ======-->
        <div class="secondary-nav">

          <!--====== Dropdown Main plugin ======-->
          <div class="menu-init" id="navigation1">
            <router-link class="main-logo" to="/">

              <img src="/images/logo/logo.png" class="app-brand-logo" alt=""></router-link>
          </div>
          <!--====== End - Dropdown Main plugin ======-->


          <!--====== Dropdown Main plugin ======-->
          <div class="menu-init" id="navigation2">

            <button class="btn btn--icon toggle-button toggle-button--secondary fas fa-cog" type="button"></button>

            <!--====== Menu ======-->
            <div class="ah-lg-mode">

              <span class="ah-close">✕ Close</span>

              <!--====== List ======-->
              <ul class="ah-list ah-list--design2 ah-list--link-color-secondary">
                <li>

                  <router-link to="/">New In</router-link></li>
                <li >

                  <router-link to="/shop">Shop</router-link>
                </li>
                <li >

                    <router-link to="/shop">Lookbook </router-link>
                </li>
                <li>

                  <router-link to="/about">About Us</router-link></li>
                <li>

                  <router-link to="/contact">Contact Us</router-link></li>
              </ul>
              <!--====== End - List ======-->
            </div>
            <!--====== End - Menu ======-->
          </div>
          <!--====== End - Dropdown Main plugin ======-->


          <!--====== Dropdown Main plugin ======-->
          <div class="menu-init" id="navigation3">

            <button class="btn btn--icon toggle-button toggle-button--secondary fas fa-shopping-bag toggle-button-shop" type="button"></button>

            <span class="total-item-round">2</span>

            <!--====== Menu ======-->
            <div class="ah-lg-mode">

              <span class="ah-close">✕ Close</span>

              <!--====== List ======-->
              <ul class="ah-list ah-list--design1 ah-list--link-color-secondary">
                <li class="has-dropdown" data-tooltip="tooltip" data-placement="left" title="Account">

                  <a><i class="far fa-user-circle"></i></a>

                  <!--====== Dropdown ======-->

                  <span class="js-menu-toggle"></span>
                  <ul style="width:120px">
                    <li v-if="user">

                      <router-link to="/dashboard"><i class="fas fa-user-circle u-s-m-r-6"></i>

                        <span>Account</span></router-link></li>
                    <li v-if="!user">

                      <router-link to="/signup"><i class="fas fa-user-plus u-s-m-r-6"></i>

                        <span>Signup</span></router-link></li>
                    <li v-if="!user">

                      <router-link to="/account"><i class="fas fa-lock u-s-m-r-6"></i>

                        <span>Signin</span>
                      </router-link>
                    </li>
                    <li v-if="user">

                      <a href="javascript:void(0)" @click="Signout"><i class="fas fa-lock-open u-s-m-r-6">

                      </i>

                        <span>Signout</span></a>
                    </li>
                  </ul>
                  <!--====== End - Dropdown ======-->
                </li>
                <li class="has-dropdown" data-tooltip="tooltip" data-placement="left" title="Settings">

                  <a><i class="fas fa-user-cog"></i></a>

                  <!--====== Dropdown ======-->

                  <span class="js-menu-toggle"></span>
                  <ul style="width:120px">
                    <li class="has-dropdown has-dropdown--ul-right-100">

                      <a>Language<i class="fas fa-angle-down u-s-m-l-6"></i></a>

                      <!--====== Dropdown ======-->

                      <span class="js-menu-toggle"></span>
                      <ul style="width:120px">
                        <li>

                          <a class="u-c-brand">ENGLISH</a></li>
                        <li>

                          <a>ARABIC</a></li>
                        <li>

                          <a>FRANCAIS</a></li>
                        <li>

                          <a>ESPANOL</a></li>
                      </ul>
                      <!--====== End - Dropdown ======-->
                    </li>
                    <li class="has-dropdown has-dropdown--ul-right-100">

                      <a>Currency<i class="fas fa-angle-down u-s-m-l-6"></i></a>

                      <!--====== Dropdown ======-->

                      <span class="js-menu-toggle"></span>
                      <ul style="width:225px">
                        <li>

                          <a class="u-c-brand">$ - US DOLLAR</a></li>
                        <li>

                          <a>£ - BRITISH POUND STERLING</a></li>
                        <li>

                          <a>€ - EURO</a></li>
                      </ul>
                      <!--====== End - Dropdown ======-->
                    </li>
                  </ul>
                  <!--====== End - Dropdown ======-->
                </li>

                <li class="has-dropdown">

                  <a class="mini-cart-shop-link"><i class="fas fa-shopping-bag"></i>

                    <span class="total-item-round">{{cart.length}}</span></a>

                  <!--====== Dropdown ======-->

                  <span class="js-menu-toggle"></span>
                  <div class="mini-cart" v-if="cart.length > 0">

                    <!--====== Mini Product Container ======-->
                    <div class="mini-product-container gl-scroll u-s-m-b-15">

                      <!--====== Card for mini cart ======-->
                      <div class="card-mini-product" v-for="ct in cart" :key="ct.id">
                        <div class="mini-product">
                          <div class="mini-product__image-wrapper">

                            <router-link class="mini-product__link" :to="`/product/${ct.id}`">

                              <img class="u-img-fluid" :src="ct.image" alt=""></router-link></div>
                          <div class="mini-product__info-wrapper">

                                                            <span class="mini-product__category">

                                                              <router-link :to="`/product/${ct.id}`">{{ct.category}}</router-link></span>

                            <span class="mini-product__name">

                                                                <router-link :to="`/product/${ct.id}`">{{ct.name}}</router-link></span>

                            <span class="mini-product__quantity">{{ct.quantity}} x</span>

                            <span class="mini-product__price">${{ct.price}}</span></div>
                        </div>

                        <a class="mini-product__delete-link far fa-trash-alt" href="javascript:void(0)" @click="deleteCartItem(ct.id)"></a>
                      </div>
                      <!--====== End - Card for mini cart ======-->

                    </div>
                    <!--====== End - Mini Product Container ======-->


                    <!--====== Mini Product Statistics ======-->
                    <div class="mini-product-stat">
                      <div class="mini-total">

                        <span class="subtotal-text">SUBTOTAL</span>

                        <span class="subtotal-value">{{subtotal}}</span></div>
                      <div class="mini-action">

                        <router-link class="mini-link btn--e-brand-b-2" to="/product/checkout">PROCEED TO CHECKOUT</router-link>

                        <router-link class="mini-link btn--e-transparent-secondary-b-2" to="/product/cart">VIEW CART</router-link></div>
                    </div>
                    <!--====== End - Mini Product Statistics ======-->
                  </div>
                  <!--====== End - Dropdown ======-->
                </li>
              </ul>
              <!--====== End - List ======-->
            </div>
            <!--====== End - Menu ======-->
          </div>
          <!--====== End - Dropdown Main plugin ======-->
        </div>
        <!--====== End - Secondary Nav ======-->
      </div>
    </nav>
    <!--====== End - Nav 2 ======-->
  </div>
  <!--====== End - Main Header ======-->
</template>

<script>
import firebase from 'firebase/app'
export default {
  name: "header",
  data(){
    return{
      cart: [],
      quantity: 1,
      subtotal: 0,
      total: 0,
      user: null,
    }
  },
  async mounted() {
    this.getUserName()
    this.getCart();


  },
  methods: {
    getCart(){
      firebase.firestore().collection('cart').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let product = doc.data();
          product.id = doc.id;
          this.cart.push(product);
          this.checkTotal();
        })
      })
    },
    checkTotal() {
      this.subtotal = this.cart.reduce((total, product) => {
        return  total + (product.price * product.quantity);
      }, 0);
      this.total = this.subtotal + 4;
    },
    deleteCartItem(id){
      let product = this.cart.find(p => p.id === id);
      if(product){
        firebase.firestore().collection('cart').doc(product.id).delete().then(() => {
          this.cart = this.cart.filter(p => p.id !== id);
          this.checkTotal();
        })
      }
    },
    Signout(){
      firebase.auth().signOut().then(() => {
        this.$router.push('/');
      })
    },
    getUserName(){
      firebase.auth().onAuthStateChanged((user) => {
        if(user){
          this.user = user;
        }
      })
    }
  },

}
</script>

<style scoped>
.app-brand-logo{
  width: 200px;
  height: 100px;
  object-fit: contain;
}
.header--style-1{
  margin-bottom: 20px;
}
</style>
