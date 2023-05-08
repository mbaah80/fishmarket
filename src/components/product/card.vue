<template>
<!--  <div class="product-o product-o&#45;&#45;hover-on product-o&#45;&#45;radius">-->
<!--    <div class="product-o__wrap">-->

<!--      <router-link class="aspect aspect&#45;&#45;bg-grey aspect&#45;&#45;square u-d-block" :to="`/product/${product.id}`">-->

<!--        <img class="aspect__img" :src="product.image" alt=""></router-link>-->
<!--      <div class="product-o__action-wrap">-->
<!--        <ul class="product-o__action-list">-->
<!--          <li>-->

<!--            <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i class="fas fa-search-plus"></i></a></li>-->
<!--          <li>-->

<!--            <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i class="fas fa-plus-circle"></i></a></li>-->
<!--          <li>-->

<!--            <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i class="fas fa-heart"></i></a></li>-->

<!--        </ul>-->
<!--      </div>-->
<!--    </div>-->

<!--    <span class="product-o__category">-->

<!--                                                    <router-link to="/product/123">{{product.category}}</router-link></span>-->

<!--    <span class="product-o__name">-->

<!--                                                    <router-link :to="`/product/${product.id}`">{{product.title}}</router-link></span>-->
<!--    <div class="product-o__rating gl-rating-style"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>-->

<!--      <span class="product-o__review">(23)</span></div>-->

<!--    <span class="product-o__price">${{ product.price }}<span class="product-o__discount">(20% OFF)</span></span>-->
<!--  </div>-->
</template>

<script>

export default {
  props: ['product'],
}
</script>

<style scoped>

</style>
