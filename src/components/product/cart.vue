<template>
  <div>
    <!--====== Section 1 ======-->
    <div class="u-s-p-y-60">

      <!--====== Section Content ======-->
      <div class="section__content">
        <div class="container">
          <div class="breadcrumb">
            <div class="breadcrumb__wrap">
              <ul class="breadcrumb__list">
                <li class="has-separator">

                  <router-link to="/">Home</router-link>
                </li>
                <li class="is-marked">

                  <router-link to="/product/cart">Cart</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--====== End - Section 1 ======-->


    <!--====== Section 2 ======-->
    <div class="u-s-p-b-60" v-if="cart.length > 0">

      <!--====== Section Intro ======-->
      <div class="section__intro u-s-m-b-60">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section__text-wrap">
                <h1 class="section__heading u-c-secondary">SHOPPING CART</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--====== End - Section Intro ======-->


      <!--====== Section Content ======-->
      <div class="section__content">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 u-s-m-b-30">
              <div class="table-responsive">
                <table class="table-p">
                  <tbody>

                    <!--====== Row ======-->
                    <tr v-for="ct in cart" :key="ct.id">
                      <td>
                        <div class="table-p__box">
                          <div class="table-p__img-wrap">

                            <img class="u-img-fluid" :src="ct.image" :alt="ct.name">
                          </div>
                          <div class="table-p__info">

                            <span class="table-p__name">

                              <router-link :to="`/product/${ct.id}`">{{ ct.name }}</router-link></span>

                            <ul class="table-p__variant-list">
                              <li>
                                <span>Quantity: {{ ct.quantity }}</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                      <td>

                        <span class="table-p__price">{{ currency}}{{ ct.price }}</span>
                      </td>
                      <td>
                        <div class="table-p__input-counter-wrap">

                          <!--====== Input Counter ======-->
                          <div class="input-counter">

                            <span class="input-counter__minus fas fa-minus" @click="minusInput(ct.id)"></span>

                            <input class="input-counter__text input-counter--text-primary-style" type="text"
                              v-model="quantity" data-min="1" data-max="1000">

                            <span class="input-counter__plus fas fa-plus" @click="plusInput(ct.id)"></span>
                          </div>
                          <!--====== End - Input Counter ======-->
                        </div>
                      </td>
                      <td>
                        <div class="table-p__del-wrap">

                          <a class="far fa-trash-alt table-p__delete-link" @click="deleteCartItem(ct.id)"
                            href="javascript:void(0)"></a>
                        </div>
                      </td>
                    </tr>
                    <!--====== End - Row ======-->
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="route-box">
                <div class="route-box__g1">

                  <router-link class="route-box__link" to="/shop"><i class="fas fa-long-arrow-alt-left"></i>

                    <span>CONTINUE SHOPPING</span>
                  </router-link>
                </div>
                <div class="route-box__g2">

                  <a class="route-box__link" href="javascript:void(0)" @click="clearCart"><i class="fas fa-trash"></i>

                    <span>CLEAR CART</span></a>

                  <a class="route-box__link" href="javascript:void(0)" @click="updateCart"><i class="fas fa-sync"></i>

                    <span>UPDATE CART</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <!--====== End - Section Content ======-->
    </div>
    <!--====== End - Section 2 ======-->

    <div class="u-s-p-y-60" v-else>

      <!--====== Section Content ======-->
      <div class="section__content">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 u-s-m-b-30">
              <div class="empty">
                <div class="empty__wrap">

                  <span class="empty__big-text">EMPTY</span>

                  <span class="empty__text-1">No items found on your cart.</span>

                  <router-link class="empty__redirect-link btn--e-brand" to="/shop">CONTINUE SHOPPING</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--====== End - Section Content ======-->
    </div>

    <!--====== Section 3 ======-->
    <div class="u-s-p-b-60" v-if="cart.length > 0">

      <!--====== Section Content ======-->
      <div class="section__content">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 u-s-m-b-30">
              <form class="f-cart" @submit.prevent="checkOut">
                <div class="row">
                  
                  <div class="col-lg-6 col-md-6 u-s-m-b-30">
                    <div class="f-cart__pad-box">
                      <div class="u-s-m-b-30">
                        <table class="f-cart__table">
                          <tbody>
                            <tr>
                              <td>SHIPPING</td>
                              <td>{{ currency}}4.00</td>
                            </tr>
                            <tr>
                              <td>TAX</td>
                              <td>{{ currency }}0.00</td>
                            </tr>
                            <tr>
                              <td>SUBTOTAL</td>
                              <td>
                                <span class="f-cart__subtotal">{{ currency}}{{ subtotal }}</span>
                              </td>
                            </tr>
                            <tr>
                              <td>GRAND TOTAL</td>
                              <td>
                                <span class="f-cart__grand-total">{{ currency }}{{ total }}</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>

                        <router-link class="btn btn--e-brand-b-2" to="/product/checkout"> PROCEED TO
                          CHECKOUT</router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!--====== End - Section Content ======-->
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
let guestCart = [];



export default {
  name: "productDetail",
  data() {
    return {
      cart: [],
      quantity: 1,
      subtotal: 0,
      total: 0,
      currency:null
    }
  },
  async mounted() {
    this.getCart();
    this.currency = localStorage.getItem('currency')
  },
  methods: {
    getCart() {
      const currentUser = firebase.auth().currentUser;

      if (currentUser) {
        const userId = currentUser.uid;

        firebase
          .firestore()
          .collection('cart')
          .where('userId', '==', userId)
          .get()
          .then((querySnapshot) => {
            this.cart = [];
            querySnapshot.forEach((doc) => {
              let product = doc.data();
              product.id = doc.id;
              this.cart.push(product);
            });
            this.checkTotal();
            console.log(this.cart, 'cart');
          })
          .catch((error) => {
            console.error('Error retrieving cart:', error);
          });
      } else {
        // Guest user, retrieve cart from localStorage
        const guestCart = localStorage.getItem('guestCart');

        if (guestCart) {
          this.cart = JSON.parse(guestCart);
          this.checkTotal();
          console.log(this.cart, 'cart');
        } else {
          this.cart = [];
        }
      }
    },
    minusInput(id) {
      let product = this.cart.find(ct => ct.id === id);
      if (product && product.quantity > 1 && this.quantity > 1) {
        product.quantity--;
        this.quantity--;
        firebase.firestore().collection('cart').doc(product.id).update({
          quantity: product.quantity
        }).then(() => {
          this.checkTotal();
        })
      }
    },
    plusInput(id) {
      let product = this.cart.find(p => p.id === id);
      if (product) {
        this.quantity++;
        product.quantity++;
        firebase.firestore().collection('cart').doc(product.id).update({
          quantity: product.quantity
        }).then(() => {
          this.checkTotal()
        })
      }
    },
    checkTotal() {
      this.subtotal = this.cart.reduce((total, product) => {
        return total + (product.price * product.quantity);
      }, 0);
      this.total = this.subtotal + 4;
    },
    deleteCartItem(id) {
      let product = this.cart.find(p => p.id === id);
      if (product) {
        firebase.firestore().collection('cart').doc(product.id).delete().then(() => {
          this.cart = this.cart.filter(p => p.id !== id);
          this.checkTotal();
        })
      }
    },
    clearCart() {
      firebase.firestore().collection('cart').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          firebase.firestore().collection('cart').doc(doc.id).delete().then(() => {
            this.cart = [];
            this.checkTotal();
          })
        })
      })
    },
    updateCart() {
      firebase.firestore().collection('cart').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let product = doc.data();
          product.id = doc.id;
          firebase.firestore().collection('cart').doc(product.id).update({
            quantity: product.quantity
          }).then(() => {
            this.checkTotal();
          })
        })
      })
    },
    checkOut() {
      this.$router.push('/product/checkout')
    }
  },

}
</script>

<style scoped>
.u-img-fluid {
  height: 120px;
  width: 150px;
  object-fit: contain;
}
</style>
