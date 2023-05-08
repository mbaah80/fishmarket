<template>
<div id="app">
  <!-- Checkout-Confirmation-Page -->
  <div class="page-checkout-confirm">
    <div class="vertical-center">
      <div class="text-center">
        <h1>Thank you!</h1>
        <h5>If you haven't received it yet. click to
          <button @click="resend">resend confirmation email</button>.</h5>
        <router-link to="/" class="thank-you-back">Back to homepage</router-link>
      </div>
    </div>
  </div>
  <!-- Checkout-Confirmation-Page /- -->
</div>
</template>

<script>
export default {
  name: "confirmation",
  methods: {
    resend() {

    }
  }
}
</script>

<style scoped>

</style>
