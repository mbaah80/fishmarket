<template>
  <div class="u-s-p-y-90">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <div class="shop-p">
            <div class="shop-p__toolbar u-s-m-b-30">

              <div class="shop-p__tool-style">
                <div class="tool-style__group u-s-m-b-8">

                </div>
                <form>
                  <div class="tool-style__form-wrap">
                    <div class="u-s-m-b-8"><select class="select-box select-box--transparent-b-2">
                      <option>Show: 8</option>
                      <option selected>Show: 12</option>
                      <option>Show: 16</option>
                      <option>Show: 28</option>
                    </select></div>
                    <div class="u-s-m-b-8"><select class="select-box select-box--transparent-b-2">
                      <option selected>Sort By: Newest Items</option>
                      <option>Sort By: Latest Items</option>
                      <option>Sort By: Best Selling</option>
                      <option>Sort By: Best Rating</option>
                      <option>Sort By: Lowest Price</option>
                      <option>Sort By: Highest Price</option>
                    </select></div>
                  </div>
                </form>
              </div>
            </div>
            <div class="shop-p__collection">
              <div class="row is-grid-active">
                <div class="col-lg-3 col-md-3 col-sm-3" v-for="prod in products" :key="prod.id">
                  <div class="product-m">
                    <div class="product-m__thumb">

                      <router-link class="aspect aspect--bg-grey aspect--square u-d-block" :to="`product/${prod.id}`">

                        <img class="aspect__img" :src="prod.image" alt=""></router-link>
                      <div class="product-m__quick-look">

                        <a class="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look"></a></div>
<!--                      <div class="product-m__add-cart">-->

<!--                        <a class="btn&#45;&#45;e-brand" href="javascript:void(0)" @click="addToCart(prod.id)">Add to Cart</a></div>-->
                    </div>
                    <div class="product-m__content">
                      <div class="product-m__category">

                        <a href="shop-side-version-2.html">{{prod.category}}</a></div>
                      <div class="product-m__name">

                        <router-link :to="`product/${prod.id}`">{{ prod.title }}</router-link></div>
                      <div class="product-m__rating gl-rating-style"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i><i class="far fa-star"></i><i class="far fa-star"></i>

                        <span class="product-m__review">(23)</span></div>
                      <div class="product-m__price">
                        {{ currency }}
                        {{prod.price}}<span class="product-o__discount">(20% OFF)</span></div>
                      <div class="product-m__hover">
                        <div class="product-m__preview-description">

                          <span v-html="prod.productDescription"></span>
                        </div>
                        <div class="product-m__wishlist">

                          <a class="far fa-heart" href="#" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="u-s-p-y-60">

              <!--====== Pagination ======-->
              <ul class="shop-p__pagination">
                <li class="is-active">

                  <a href="#">1</a></li>
                <li>

                  <a href="#">2</a></li>
                <li>

                  <a href="#">3</a></li>
                <li>

                  <a href="#">4</a></li>
                <li>

                  <a class="fas fa-angle-right" href="#"></a></li>
              </ul>
              <!--====== End - Pagination ======-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
export default {
  name: "index",
  data() {
    return {
      products: [],
      currency: null
    };
  },
  mounted() {
    this.getProducts();
    this.currency = localStorage.getItem('currency')
  },
  methods: {
    getProducts(){
      let db = firebase.firestore();
      db.collection("products").get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              let product = doc.data()
              product.id = doc.id;
              this.products.push(product)
            });
          })
          .catch((error)=>{

          })
    },
    addToCart(id) {
      let product = this.products.find((prod) => prod.id === id);
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {

          firebase.firestore().collection('cart').where('product.id', '==', product.id).where('user.id', '==', user.uid).get()
              .then((querySnapshot) => {
                if (!querySnapshot.empty) {
                  this.$notify({
                    text: 'Product already in cart',
                    type: 'error'
                  });
                  return;
                }
                let db = firebase.firestore();
                db.collection("users").doc(user.uid).collection("cart").doc(id).set(product)
                    .then(() => {
                      this.$notify({
                        text: 'Product added to cart',
                        type: 'success'
                      });
                    })
                    .catch((error) => {
                      this.$notify({
                        text: error.message,
                        type: 'error'
                      });
                    });
              })
              .catch((error) => {
              });
        } else {
          this.$router.push("/account");
        }
      });
    },
  }
}
</script>

<style scoped>
.aspect__img{
  object-fit: cover;
}
</style>
