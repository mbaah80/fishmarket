<template>
  <div>
    <!--====== Section 1 ======-->
    <div class="u-s-p-t-90">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">

            <!--====== Product Breadcrumb ======-->
            <div class="pd-breadcrumb u-s-m-b-30">
              <ul class="pd-breadcrumb__list">
                <li class="has-separator">

                  <router-link to="/">Home</router-link>
                </li>
                <li class="is-marked">
                  <router-link :to="`/product/${product.id}`">{{ product.title }}</router-link>
                </li>
              </ul>
            </div>
            <!--====== End - Product Breadcrumb ======-->


            <!--====== Product Detail Zoom ======-->
            <div class="pd u-s-m-b-30">
              <div class="pd-wrap">
                <div id="pd-o-initiate">
                  <div class="pd-o-img-wrap" :data-src="product.image">
                    <img class="u-img-fluid" :src="product.image" :data-zoom-image="product.image" alt="">
                  </div>
                  <div class="pd-o-img-wrap" :data-src="product.image"></div>

                  <span class="pd-text">Click for larger zoom</span>
                </div>
                <div class="u-s-m-t-15">
                  <div class="owl-carousel">
                    <div id="pd-o-thumbnail">
                      <div>
                        <img class="u-img-fluid" :src="product.image" :alt="product.title">
                      </div>

                    </div>
                    <div id="pd-o-thumbnail">
                      <div>
                        <img class="u-img-fluid" :src="product.image" :alt="product.title">
                      </div>

                    </div>
                    <div id="pd-o-thumbnail">
                      <div>
                        <img class="u-img-fluid" :src="product.image" :alt="product.title">
                      </div>

                    </div>
                    <div id="pd-o-thumbnail">
                      <div>
                        <img class="u-img-fluid" :src="product.image" :alt="product.title">
                      </div>

                    </div>
                    <div id="pd-o-thumbnail">
                      <div>
                        <img class="u-img-fluid" :src="product.image" :alt="product.title">
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--====== End - Product Detail Zoom ======-->
          </div>
          <div class="col-lg-7">

            <!--====== Product Right Side Details ======-->
            <div class="pd-detail">
              <div>

                <span class="pd-detail__name">{{ product.title }}</span>
              </div>
              <div>
                <div class="pd-detail__inline">

                  <span class="pd-detail__price"> {{ currency }}{{ product.price }}</span>

                  <span class="pd-detail__discount">(20% OFF)</span><del class="pd-detail__del"> {{ currency }}{{ product.discountPrice
                  }}</del>
                </div>
              </div>
              <div class="u-s-m-b-15">
                <div class="pd-detail__inline">

                  <span class="pd-detail__stock">{{ product.productQuantity }} in stock</span>

                  <span class="pd-detail__left">Only 2 left</span>
                </div>
              </div>
              <div class="u-s-m-b-15">

                <span class="pd-detail__preview-desc" v-html="product.productDescription"></span>
              </div>
              <div class="u-s-m-b-15">
                <div class="pd-detail__inline">

                  <span class="pd-detail__click-wrap"><i class="far fa-heart u-s-m-r-6"></i>

                    <a href="javascript:void(0)" @click="wishListProduct(product.id)">Add to Wishlist</a>

                    <span class="pd-detail__click-count">(222)</span></span>
                </div>
              </div>
              <div class="u-s-m-b-15">
                <div class="pd-detail__inline">

                  <span class="pd-detail__click-wrap"><i class="far fa-envelope u-s-m-r-6"></i>

                    <a href="javascript:void(0)" @click="emailProduct">Email me When the price drops</a>

                    <span class="pd-detail__click-count">(20)</span></span>
                </div>
              </div>
              <div class="u-s-m-b-15">
                <ul class="pd-social-list">
                  <li>

                    <a class="s-fb--color-hover" href="#"><i class="fab fa-facebook-f"></i></a>
                  </li>
                  <li>

                    <a class="s-tw--color-hover" href="#"><i class="fab fa-twitter"></i></a>
                  </li>
                  <li>

                    <a class="s-insta--color-hover" href="#"><i class="fab fa-instagram"></i></a>
                  </li>
                  <li>

                    <a class="s-wa--color-hover" href="#"><i class="fab fa-whatsapp"></i></a>
                  </li>
                  <li>

                    <a class="s-gplus--color-hover" href="#"><i class="fab fa-google-plus-g"></i></a>
                  </li>
                </ul>
              </div>
              <div class="u-s-m-b-15">
                <div class="pd-detail__form">
                  <div class="pd-detail-inline-2">
                    <div class="u-s-m-b-15">

                      <!--====== Input Counter ======-->
                      <div class="input-counter">

                        <span class="input-counter__minus fas fa-minus" @click="minusInput"></span>

                        <input class="input-counter__text input-counter--text-primary-style" v-model="quantity"
                          type="text" data-min="1" data-max="1000">

                        <span class="input-counter__plus fas fa-plus" @click="plusInput"></span>
                      </div>
                      <!--====== End - Input Counter ======-->
                    </div>
                    <div class="u-s-m-b-15">

                      <button class="btn btn--e-brand-b-2" @click="addToCart()">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="u-s-m-b-15">

                <span class="pd-detail__label u-s-m-b-8">Product Policy:</span>
                <ul class="pd-detail__policy-list">
                  <li><i class="fas fa-check-circle u-s-m-r-8"></i>

                    <span>Buyer Protection.</span>
                  </li>
                  <li><i class="fas fa-check-circle u-s-m-r-8"></i>

                    <span>Full Refund if you don't receive your order.</span>
                  </li>
                  <li><i class="fas fa-check-circle u-s-m-r-8"></i>

                    <span>Returns accepted if product not as described.</span>
                  </li>
                </ul>
              </div>
            </div>
            <!--====== End - Product Right Side Details ======-->
          </div>
        </div>
      </div>
    </div>

    <!--====== Product Detail Tab ======-->
    <div class="u-s-p-y-90">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="pd-tab">
              <div class="u-s-m-b-30">
                <ul class="nav pd-tab__list">
                  <li class="nav-item">

                    <a class="nav-link active" data-toggle="tab" href="#pd-desc">DESCRIPTION</a>
                  </li>
                 
                </ul>
              </div>
              <div class="tab-content">

                <!--====== Tab 1 ======-->
                <div class="tab-pane fade show active" id="pd-desc">
                  <div class="pd-tab__desc">
                    <div class="u-s-m-b-15">
                      <p v-html="product.productDescription"></p>
                    </div>
                    <div class="u-s-m-b-30">
                      <ul>
                        <li><i class="fas fa-check u-s-m-r-8"></i>

                          <span>Buyer Protection.</span>
                        </li>
                        <li><i class="fas fa-check u-s-m-r-8"></i>

                          <span>Full Refund if you don't receive your order.</span>
                        </li>
                        <li><i class="fas fa-check u-s-m-r-8"></i>

                          <span>Returns accepted if product not as described.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!--====== End - Tab 1 ======-->


                <!--====== Tab 3 ======-->
                <div class="tab-pane" id="pd-rev">
                  <div class="pd-tab__rev">
                    <div class="u-s-m-b-30">
                      <form class="pd-tab__rev-f1">
                        <div class="rev-f1__group">
                          <div class="u-s-m-b-15">
                            <h2>23 Review(s) for Man Ruched Floral Applique Tee</h2>
                          </div>
                          <div class="u-s-m-b-15">

                            <label for="sort-review"></label><select class="select-box select-box--primary-style"
                              id="sort-review">
                              <option selected>Sort by: Best Rating</option>
                              <option>Sort by: Worst Rating</option>
                            </select>
                          </div>
                        </div>
                        <div class="rev-f1__review">
                          <div class="review-o u-s-m-b-15">
                            <div class="review-o__info u-s-m-b-8">

                              <span class="review-o__name">John Doe</span>

                              <span class="review-o__date">27 Feb 2018 10:57:43</span>
                            </div>
                            <div class="review-o__rating gl-rating-style u-s-m-b-8"><i class="fas fa-star"></i><i
                                class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                class="far fa-star"></i>

                              <span>(4)</span>
                            </div>
                            <p class="review-o__text">Lorem Ipsum is simply dummy text of the printing and typesetting
                              industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                              an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                          </div>
                          <div class="review-o u-s-m-b-15">
                            <div class="review-o__info u-s-m-b-8">

                              <span class="review-o__name">John Doe</span>

                              <span class="review-o__date">27 Feb 2018 10:57:43</span>
                            </div>
                            <div class="review-o__rating gl-rating-style u-s-m-b-8"><i class="fas fa-star"></i><i
                                class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                class="far fa-star"></i>

                              <span>(4)</span>
                            </div>
                            <p class="review-o__text">Lorem Ipsum is simply dummy text of the printing and typesetting
                              industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                              an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                          </div>
                          <div class="review-o u-s-m-b-15">
                            <div class="review-o__info u-s-m-b-8">

                              <span class="review-o__name">John Doe</span>

                              <span class="review-o__date">27 Feb 2018 10:57:43</span>
                            </div>
                            <div class="review-o__rating gl-rating-style u-s-m-b-8"><i class="fas fa-star"></i><i
                                class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                class="far fa-star"></i>

                              <span>(4)</span>
                            </div>
                            <p class="review-o__text">Lorem Ipsum is simply dummy text of the printing and typesetting
                              industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                              an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="u-s-m-b-30">
                      <form class="pd-tab__rev-f2">
                        <h2 class="u-s-m-b-15">Add a Review</h2>

                        <span class="gl-text u-s-m-b-15">Your email address will not be published. Required fields are
                          marked *</span>
                        <div class="u-s-m-b-30">
                          <div class="rev-f2__table-wrap gl-scroll">
                            <table class="rev-f2__table">
                              <thead>
                                <tr>
                                  <th>
                                    <div class="gl-rating-style-2"><i class="fas fa-star"></i>

                                      <span>(1)</span>
                                    </div>
                                  </th>
                                  <th>
                                    <div class="gl-rating-style-2"><i class="fas fa-star"></i><i
                                        class="fas fa-star-half-alt"></i>

                                      <span>(1.5)</span>
                                    </div>
                                  </th>
                                  <th>
                                    <div class="gl-rating-style-2"><i class="fas fa-star"></i><i class="fas fa-star"></i>

                                      <span>(2)</span>
                                    </div>
                                  </th>
                                  <th>
                                    <div class="gl-rating-style-2"><i class="fas fa-star"></i><i
                                        class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>

                                      <span>(2.5)</span>
                                    </div>
                                  </th>
                                  <th>
                                    <div class="gl-rating-style-2"><i class="fas fa-star"></i><i
                                        class="fas fa-star"></i><i class="fas fa-star"></i>

                                      <span>(3)</span>
                                    </div>
                                  </th>
                                  <th>
                                    <div class="gl-rating-style-2"><i class="fas fa-star"></i><i
                                        class="fas fa-star"></i><i class="fas fa-star"></i><i
                                        class="fas fa-star-half-alt"></i>

                                      <span>(3.5)</span>
                                    </div>
                                  </th>
                                  <th>
                                    <div class="gl-rating-style-2"><i class="fas fa-star"></i><i
                                        class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>

                                      <span>(4)</span>
                                    </div>
                                  </th>
                                  <th>
                                    <div class="gl-rating-style-2"><i class="fas fa-star"></i><i
                                        class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                        class="fas fa-star-half-alt"></i>

                                      <span>(4.5)</span>
                                    </div>
                                  </th>
                                  <th>
                                    <div class="gl-rating-style-2"><i class="fas fa-star"></i><i
                                        class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                        class="fas fa-star"></i>

                                      <span>(5)</span>
                                    </div>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>

                                    <!--====== Radio Box ======-->
                                    <div class="radio-box">

                                      <input type="radio" id="star-1" name="rating">
                                      <div class="radio-box__state radio-box__state--primary">

                                        <label class="radio-box__label" for="star-1"></label>
                                      </div>
                                    </div>
                                    <!--====== End - Radio Box ======-->
                                  </td>
                                  <td>

                                    <!--====== Radio Box ======-->
                                    <div class="radio-box">

                                      <input type="radio" id="star-1.5" name="rating">
                                      <div class="radio-box__state radio-box__state--primary">

                                        <label class="radio-box__label" for="star-1.5"></label>
                                      </div>
                                    </div>
                                    <!--====== End - Radio Box ======-->
                                  </td>
                                  <td>

                                    <!--====== Radio Box ======-->
                                    <div class="radio-box">

                                      <input type="radio" id="star-2" name="rating">
                                      <div class="radio-box__state radio-box__state--primary">

                                        <label class="radio-box__label" for="star-2"></label>
                                      </div>
                                    </div>
                                    <!--====== End - Radio Box ======-->
                                  </td>
                                  <td>

                                    <!--====== Radio Box ======-->
                                    <div class="radio-box">

                                      <input type="radio" id="star-2.5" name="rating">
                                      <div class="radio-box__state radio-box__state--primary">

                                        <label class="radio-box__label" for="star-2.5"></label>
                                      </div>
                                    </div>
                                    <!--====== End - Radio Box ======-->
                                  </td>
                                  <td>

                                    <!--====== Radio Box ======-->
                                    <div class="radio-box">

                                      <input type="radio" id="star-3" name="rating">
                                      <div class="radio-box__state radio-box__state--primary">

                                        <label class="radio-box__label" for="star-3"></label>
                                      </div>
                                    </div>
                                    <!--====== End - Radio Box ======-->
                                  </td>
                                  <td>

                                    <!--====== Radio Box ======-->
                                    <div class="radio-box">

                                      <input type="radio" id="star-3.5" name="rating">
                                      <div class="radio-box__state radio-box__state--primary">

                                        <label class="radio-box__label" for="star-3.5"></label>
                                      </div>
                                    </div>
                                    <!--====== End - Radio Box ======-->
                                  </td>
                                  <td>

                                    <!--====== Radio Box ======-->
                                    <div class="radio-box">

                                      <input type="radio" id="star-4" name="rating">
                                      <div class="radio-box__state radio-box__state--primary">

                                        <label class="radio-box__label" for="star-4"></label>
                                      </div>
                                    </div>
                                    <!--====== End - Radio Box ======-->
                                  </td>
                                  <td>

                                    <!--====== Radio Box ======-->
                                    <div class="radio-box">

                                      <input type="radio" id="star-4.5" name="rating">
                                      <div class="radio-box__state radio-box__state--primary">

                                        <label class="radio-box__label" for="star-4.5"></label>
                                      </div>
                                    </div>
                                    <!--====== End - Radio Box ======-->
                                  </td>
                                  <td>

                                    <!--====== Radio Box ======-->
                                    <div class="radio-box">

                                      <input type="radio" id="star-5" name="rating">
                                      <div class="radio-box__state radio-box__state--primary">

                                        <label class="radio-box__label" for="star-5"></label>
                                      </div>
                                    </div>
                                    <!--====== End - Radio Box ======-->
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div class="rev-f2__group">
                          <div class="u-s-m-b-15">

                            <label class="gl-label" for="reviewer-text">YOUR REVIEW *</label><textarea
                              class="text-area text-area--primary-style" id="reviewer-text"></textarea>
                          </div>
                          <div>
                            <p class="u-s-m-b-30">

                              <label class="gl-label" for="reviewer-name">NAME *</label>

                              <input class="input-text input-text--primary-style" type="text" id="reviewer-name">
                            </p>
                            <p class="u-s-m-b-30">

                              <label class="gl-label" for="reviewer-email">EMAIL *</label>

                              <input class="input-text input-text--primary-style" type="text" id="reviewer-email">
                            </p>
                          </div>
                        </div>
                        <div>

                          <button class="btn btn--e-brand-shadow" type="submit">SUBMIT</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <!--====== End - Tab 3 ======-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--====== End - Product Detail Tab ======-->
    
    <!--====== End - Section 1 ======-->
  </div>
</template>
 
<script>
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import firebase from 'firebase/app'
export default {
  name: "productDetail",
  data() {
    return {
      product: {},
      quantity: 1,
      relatedProducts: [],
      cart: [],
      currency:null
    }
  },
  async mounted() {
    await this.checkParams();
    this.getProduct();
    this.getCart();
    this.currency = localStorage.getItem('currency')
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      items: 4
    });
  },
  methods: {
    checkParams() {
      if (this.$route.params.id) {
        this.getProduct();
      } else {
        this.$router.push('/shop');
      }
    },
    getProduct() {
      firebase.firestore().collection('products').doc(this.$route.params.id).get().then((doc) => {
        if (doc.exists) {
          let product = doc.data();
          product.id = doc.id;
          this.product = product;
        } else {
          this.$router.push('/shop');
        }
      })
    },
    emailProduct() {

    },
    wishListProduct(id) {
      //
    },
    minusInput() {
      if (this.quantity > 1) {
        this.quantity--;
      } else {
        this.quantity = 1;
      }
    },
    plusInput() {
      this.quantity++;
    },
    addToCart() {
      const product = {
        id: this.product.id,
        name: this.product.title,
        image: this.product.image,
        price: this.product.price,
        quantity: this.quantity,
      };

      const currentUser = firebase.auth().currentUser;

      if (currentUser) {
        // User is logged in, save the product in the cart collection
        const userId = currentUser.uid;

        firebase
          .firestore()
          .collection('cart')
          .where('id', '==', product.id)
          .get()
          .then((querySnapshot) => {
            if (!querySnapshot.empty) {
              this.$notify({
                text: 'Product already in cart',
                type: 'error'
              });
              return;
            }

            firebase
              .firestore()
              .collection('cart')
              .add({
                userId: userId,
                ...product
              })
              .then(() => {
                this.$notify({
                  text: 'Product added to cart',
                  type: 'success'
                });
                this.getCart();
                this.$router.push('/product/cart');
              })
              .catch((error) => {
                this.$notify({
                  text: 'Error adding product to cart',
                  type: 'error'
                });
              });
          })
          .catch((error) => {
            this.$notify({
              text: 'Error checking cart',
              type: 'error'
            });
          });
      } else {
        // User is not logged in, save the product in localStorage
        let guestCart = localStorage.getItem('guestCart');

        if (!guestCart) {
          guestCart = [];
        } else {
          guestCart = JSON.parse(guestCart);
        }

        // Check if the product already exists in the guestCart
        const existingProduct = guestCart.find((item) => item.id === product.id);
        if (existingProduct) {
          this.$notify({
            text: 'Product already in cart',
            type: 'error'
          });
          return;
        }

        guestCart.push(product);
        localStorage.setItem('guestCart', JSON.stringify(guestCart));

        this.$notify({
          text: 'Product added to cart',
          type: 'success'
        });
        this.$router.push('/product/cart');
      }
    },
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
          })
          .catch((error) => {
            this.$notify({
              text: 'Error getting cart',
              type: 'error'
            });
          });
      } else {
        // Guest user, retrieve cart from localStorage
        const guestCart = localStorage.getItem('guestCart');

        if (guestCart) {
          this.cart = JSON.parse(guestCart);
        } else {
          this.cart = [];
        }
      }
    }

  },
}
</script>

<style scoped></style>
