<template>
  <!-- Men-Clothing -->
  <div class="u-s-p-b-60">

    <!--====== Section Intro ======-->
    <div class="section__intro u-s-m-b-16">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section__text-wrap">
              <h1 class="section__heading u-c-secondary u-s-m-b-12 mt-20" style="margin-top:40px">TOP TRENDING</h1>
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
          <div class="col-lg-12">
            <div class="filter__grid-wrapper u-s-m-t-30">
              <div class="row">
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30 filter__item headphone" v-for="product in products" :key="product.id">
                  <div class="product-o product-o--hover-on product-o--radius">
                    <div class="product-o__wrap">

                      <router-link class="aspect aspect--bg-grey aspect--square u-d-block" :to="`/product/${product.id}`">

                        <img class="aspect__img" :src="product.image" alt=""></router-link>
                      <div class="product-o__action-wrap">
                        <ul class="product-o__action-list">
                          <li>

                            <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i class="fas fa-search-plus"></i></a></li>
                          <li>

                            <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i class="fas fa-plus-circle"></i></a></li>
                          <li>

                            <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i class="fas fa-heart"></i></a></li>

                        </ul>
                      </div>
                    </div>

                    <span class="product-o__category">

                                                    <router-link to="/product/123">{{product.category}}</router-link></span>

                    <span class="product-o__name">

                                                    <router-link :to="`/product/${product.id}`">{{product.title}}</router-link></span>
                    <div class="product-o__rating gl-rating-style"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>

                      <span class="product-o__review">(23)</span></div>

                    <span class="product-o__price">${{ product.price }}<span class="product-o__discount">(20% OFF)</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="load-more">

              <router-link class="btn btn--e-brand" to="/shop">Load More</router-link></div>
          </div>
        </div>
      </div>
    </div>
    <!--====== End - Section Content ======-->
    <!--====== Quick Look Modal ======-->
    <div class="modal fade" id="quick-look">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content modal--shadow">

          <button class="btn dismiss-button fas fa-times" type="button" data-dismiss="modal"></button>
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-5">

                <!--====== Product Breadcrumb ======-->
                <div class="pd-breadcrumb u-s-m-b-30">
                  <ul class="pd-breadcrumb__list">
                    <li class="has-separator">

                      <a href="index.hml">Home</a></li>
                    <li class="has-separator">

                      <a href="shop-side-version-2.html">Electronics</a></li>
                    <li class="has-separator">

                      <a href="shop-side-version-2.html">DSLR Cameras</a></li>
                    <li class="is-marked">

                      <a href="shop-side-version-2.html">Nikon Cameras</a></li>
                  </ul>
                </div>
                <!--====== End - Product Breadcrumb ======-->


                <!--====== Product Detail ======-->
                <div class="pd u-s-m-b-30">
                  <div class="pd-wrap">
                    <div id="js-product-detail-modal">
                      <div>

                        <img class="u-img-fluid" src="images/product/product-d-1.jpg" alt=""></div>
                      <div>

                        <img class="u-img-fluid" src="images/product/product-d-2.jpg" alt=""></div>
                      <div>

                        <img class="u-img-fluid" src="images/product/product-d-3.jpg" alt=""></div>
                      <div>

                        <img class="u-img-fluid" src="images/product/product-d-4.jpg" alt=""></div>
                      <div>

                        <img class="u-img-fluid" src="images/product/product-d-5.jpg" alt=""></div>
                    </div>
                  </div>
                  <div class="u-s-m-t-15">
                    <div id="js-product-detail-modal-thumbnail">
                      <div>

                        <img class="u-img-fluid" src="images/product/product-d-1.jpg" alt=""></div>
                      <div>

                        <img class="u-img-fluid" src="images/product/product-d-2.jpg" alt=""></div>
                      <div>

                        <img class="u-img-fluid" src="images/product/product-d-3.jpg" alt=""></div>
                      <div>

                        <img class="u-img-fluid" src="images/product/product-d-4.jpg" alt=""></div>
                      <div>

                        <img class="u-img-fluid" src="images/product/product-d-5.jpg" alt=""></div>
                    </div>
                  </div>
                </div>
                <!--====== End - Product Detail ======-->
              </div>
              <div class="col-lg-7">

                <!--====== Product Right Side Details ======-->
                <div class="pd-detail">
                  <div>

                    <span class="pd-detail__name">Nikon Camera 4k Lens Zoom Pro</span></div>
                  <div>
                    <div class="pd-detail__inline">

                      <span class="pd-detail__price">$6.99</span>

                      <span class="pd-detail__discount">(76% OFF)</span><del class="pd-detail__del">$28.97</del></div>
                  </div>
                  <div class="u-s-m-b-15">
                    <div class="pd-detail__rating gl-rating-style"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>

                      <span class="pd-detail__review u-s-m-l-4">

                                                <a href="product-detail.html">23 Reviews</a></span></div>
                  </div>
                  <div class="u-s-m-b-15">
                    <div class="pd-detail__inline">

                      <span class="pd-detail__stock">200 in stock</span>

                      <span class="pd-detail__left">Only 2 left</span></div>
                  </div>
                  <div class="u-s-m-b-15">

                    <span class="pd-detail__preview-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></div>
                  <div class="u-s-m-b-15">
                    <div class="pd-detail__inline">

                                            <span class="pd-detail__click-wrap"><i class="far fa-heart u-s-m-r-6"></i>

                                                <a href="signin.html">Add to Wishlist</a>

                                                <span class="pd-detail__click-count">(222)</span></span></div>
                  </div>
                  <div class="u-s-m-b-15">
                    <div class="pd-detail__inline">

                                            <span class="pd-detail__click-wrap"><i class="far fa-envelope u-s-m-r-6"></i>

                                                <a href="signin.html">Email me When the price drops</a>

                                                <span class="pd-detail__click-count">(20)</span></span></div>
                  </div>
                  <div class="u-s-m-b-15">
                    <ul class="pd-social-list">
                      <li>

                        <a class="s-fb--color-hover" href="#"><i class="fab fa-facebook-f"></i></a></li>
                      <li>

                        <a class="s-tw--color-hover" href="#"><i class="fab fa-twitter"></i></a></li>
                      <li>

                        <a class="s-insta--color-hover" href="#"><i class="fab fa-instagram"></i></a></li>
                      <li>

                        <a class="s-wa--color-hover" href="#"><i class="fab fa-whatsapp"></i></a></li>
                      <li>

                        <a class="s-gplus--color-hover" href="#"><i class="fab fa-google-plus-g"></i></a></li>
                    </ul>
                  </div>
                  <div class="u-s-m-b-15">
                    <form class="pd-detail__form">
                      <div class="pd-detail-inline-2">
                        <div class="u-s-m-b-15">

                          <!--====== Input Counter ======-->
                          <div class="input-counter">

                            <span class="input-counter__minus fas fa-minus"></span>

                            <input class="input-counter__text input-counter--text-primary-style" type="text" value="1" data-min="1" data-max="1000">

                            <span class="input-counter__plus fas fa-plus"></span></div>
                          <!--====== End - Input Counter ======-->
                        </div>
                        <div class="u-s-m-b-15">

                          <button class="btn btn--e-brand-b-2" type="submit">Add to Cart</button></div>
                      </div>
                    </form>
                  </div>
                  <div class="u-s-m-b-15">

                    <span class="pd-detail__label u-s-m-b-8">Product Policy:</span>
                    <ul class="pd-detail__policy-list">
                      <li><i class="fas fa-check-circle u-s-m-r-8"></i>

                        <span>Buyer Protection.</span></li>
                      <li><i class="fas fa-check-circle u-s-m-r-8"></i>

                        <span>Full Refund if you don't receive your order.</span></li>
                      <li><i class="fas fa-check-circle u-s-m-r-8"></i>

                        <span>Returns accepted if product not as described.</span></li>
                    </ul>
                  </div>
                </div>
                <!--====== End - Product Right Side Details ======-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--====== End - Quick Look Modal ======-->
  </div>
  <!-- Men-Clothing-Timing-Section -->
</template>

<script>
import Card from '../../product/card'
import firebase from 'firebase/app'
export default {
  name: "index",
  components:{
    Card
  },
  data(){
    return{
      products: []
    }
  },
  mounted(){
    this.getProducts()
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
            console.log(error)
          })
    },
  }
}
</script>

<style scoped>
.btn--e-brand{
  padding: 20px 30px;
  border-radius: 14px;
}
.btn--e-brand:hover{
  background-color: #fff;
  border: 1px solid #000;
  color: #000;
}
.aspect__img{
  object-fit: cover;
}
</style>
