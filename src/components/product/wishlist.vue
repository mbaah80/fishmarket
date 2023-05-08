<template>
<div >
  <!--====== Section 1 ======-->
  <div class="u-s-p-y-60">

    <!--====== Section Content ======-->
    <div class="section__content">
      <div class="container">
        <div class="breadcrumb">
          <div class="breadcrumb__wrap">
            <ul class="breadcrumb__list">
              <li class="has-separator">

                <router-link to="/">Home</router-link></li>
              <li class="is-marked">

                <router-link to="/product/wishlist">Wishlist</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--====== End - Section 1 ======-->


  <!--====== Section 2 ======-->
  <div class="u-s-p-b-60">

    <!--====== Section Intro ======-->
    <div class="section__intro u-s-m-b-60">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section__text-wrap">
              <h1 class="section__heading u-c-secondary">Wishlist</h1>
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
          <div class="col-lg-12 col-md-12 col-sm-12">

            <!--====== Wishlist Product ======-->
            <div class="w-r u-s-m-b-30">
              <div class="w-r__container">
                <div class="w-r__wrap-1">
                  <div class="w-r__img-wrap">

                    <img class="u-img-fluid" src="/images/product/electronic/product3.jpg" alt=""></div>
                  <div class="w-r__info">

                                                <span class="w-r__name">

                                                    <router-link to="/product/123">Yellow Wireless Headphone</router-link></span>

                    <span class="w-r__category">

                                                    <router-link to="/product/123">Electronics</router-link></span>

                    <span class="w-r__price">$125.00

                                                    <span class="w-r__discount">$160.00</span></span></div>
                </div>
                <div class="w-r__wrap-2">

                  <a class="w-r__link btn--e-brand-b-2" data-modal="modal" data-modal-id="#add-to-cart">ADD TO CART</a>

                  <router-link class="w-r__link btn--e-transparent-platinum-b-2" to="/product/123">VIEW</router-link>

                  <a class="w-r__link btn--e-transparent-platinum-b-2" href="#">REMOVE</a></div>
              </div>
            </div>
            <!--====== End - Wishlist Product ======-->

            <!--====== End - Wishlist Product ======-->
          </div>
          <div class="col-lg-12">
            <div class="route-box">
              <div class="route-box__g">

                <router-link class="route-box__link" to="/shop"><i class="fas fa-long-arrow-alt-left"></i>

                  <span>CONTINUE SHOPPING</span></router-link></div>
              <div class="route-box__g">

                <a class="route-box__link" href="wishlist.html"><i class="fas fa-trash"></i>

                  <span>CLEAR WISHLIST</span></a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--====== End - Section Content ======-->
  </div>
  <!--====== End - Section 2 ======-->
</div>
</template>

<script>
export default {
  name: "wishlist"
}
</script>

<style scoped>

</style>
