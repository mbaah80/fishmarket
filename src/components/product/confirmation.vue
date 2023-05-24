<template>
  <div id="app">
    <!-- Checkout-Confirmation-Page -->
    <div class="page-checkout-confirm">
      <div class="vertical-center">
        <div class="text-center">
          <h1>Thank you!</h1>
          <h5>If you haven't received it yet, click to
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
    name: "Confirmation",
    methods: {
      resend() {
        let emailDraft = {
          
        }
        firebase.auth().currentUser.sendEmailVerification()
      }
    }
  }
</script>

<style>
.page-checkout-confirm {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.vertical-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-center {
  text-align: center;
}

.thank-you-back {
  display: block;
  margin-top: 20px;
}
</style>
