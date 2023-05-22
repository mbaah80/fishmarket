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

                  <router-link to="/account">Signin</router-link>
                </li>
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
                <h1 class="section__heading u-c-secondary">ALREADY REGISTERED?</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--====== End - Section Intro ======-->


      <!--====== Section Content ======-->
      <div class="section__content">
        <div class="container">
          <div class="row row--center">
            <div class="col-lg-6 col-md-8 u-s-m-b-30">
              <div class="l-f-o">
                <div class="l-f-o__pad-box">
                  <h1 class="gl-h1">I'M NEW CUSTOMER</h1>

                  <span class="gl-text u-s-m-b-30">By creating an account with our store, you will be able to move through
                    the checkout process faster, store shipping addresses, view and track your orders in your account and
                    more.</span>
                  <div class="u-s-m-b-15">

                    <router-link class="l-f-o__create-link btn--e-transparent-brand-b-2" to="/signup">CREATE AN
                      ACCOUNT</router-link>
                  </div>
                  <h1 class="gl-h1">SIGNIN</h1>

                  <span class="gl-text u-s-m-b-30">If you have an account with us, please log in.</span>
                  <div class="l-f-o__form">
                   
                   <div class="error"  v-if="error">
                      {{error}}
                    </div>
                    <div class="u-s-m-b-30">

                      <label class="gl-label" for="login-email">E-MAIL *</label>

                      <input class="input-text input-text--primary-style" type="text" v-model="email" id="login-email"
                        placeholder="Enter E-mail">
                    </div>
                    <div class="u-s-m-b-30">

                      <label class="gl-label" for="login-password">PASSWORD *</label>

                      <input class="input-text input-text--primary-style" type="password" v-model="password"
                        id="login-password" placeholder="Enter Password">
                    </div>
                    <div class="gl-inline">
                      <div class="u-s-m-b-30">

                        <button class="btn btn--e-transparent-brand-b-2" @click="login">LOGIN</button>
                      </div>
                      <div class="u-s-m-b-30">

                        <router-link class="gl-link" to="/lost-password">Lost Your Password?</router-link>
                      </div>
                    </div>
                    <div class="u-s-m-b-30">

                      <!--====== Check Box ======-->
                      <div class="check-box">

                        <input type="checkbox" id="remember-me">
                        <div class="check-box__state check-box__state--primary">

                          <label class="check-box__label" for="remember-me">Remember Me</label>
                        </div>
                      </div>
                      <!--====== End - Check Box ======-->
                    </div>
                  </div>
                </div>
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
import firebase from "firebase";
export default {
  name: "account",
  data() {
    return {
      email: "",
      password: "",
      error:''
    }
  },
  methods: {
    login() {
      if (this.email === "" || this.password === "") {
        this.$notify({
          type: "error",
          text: "Please fill all the fields"
        });
      } else {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => {
            this.$notify({
              type: "success",
              text: "Login successful"
            });

            // Save token in localStorage
            const user = userCredential.user;
            user.getIdToken().then((token) => {
              localStorage.setItem("token", token);
            });

            this.$router.push("/");
          })
          .catch((error) => {
            if( error.code === "auth/user-not-found" || error.code === "auth/wrong-password"){
              this.error = "Invalid email or password"
            }else{
              this.error = error.message
            }
          });
  }
   }
  }
}
</script>

<style scoped>
.error{
  background-color:rgb(160, 50, 50);
  color:#fff;
  padding:10px;
  text-align: center;
  margin-bottom: 20px;
}
</style>
