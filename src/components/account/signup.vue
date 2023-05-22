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

                <router-link to="/">Home</router-link></li>
              <li class="is-marked">

                <router-link to="/signup">Signup</router-link></li>
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
              <h1 class="section__heading u-c-secondary">CREATE AN ACCOUNT</h1>
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
                <h1 class="gl-h1">PERSONAL INFORMATION</h1>
                <div class="l-f-o__form">
                 
                  <div class="u-s-m-b-30">
                    <div class="error"  v-if="error">
                      {{error}}
                    </div>
                    <label class="gl-label" for="reg-fname">FIRST NAME *</label>

                    <input class="input-text input-text--primary-style" type="text" v-model="fname" id="reg-fname" placeholder="First Name"></div>
                  <div class="u-s-m-b-30">

                    <label class="gl-label" for="reg-lname">LAST NAME *</label>

                    <input class="input-text input-text--primary-style" type="text" v-model="lname" id="reg-lname" placeholder="Last Name"></div>
                  <div class="u-s-m-b-30">

                    <label class="gl-label" for="reg-email">E-MAIL *</label>

                    <input class="input-text input-text--primary-style" type="emaill" v-model="email" id="reg-email" placeholder="Enter E-mail"></div>
                  <div class="u-s-m-b-30">

                    <label class="gl-label" for="reg-password">PASSWORD *</label>

                    <input class="input-text input-text--primary-style" type="password" v-model="password" id="reg-password" placeholder="Enter Password"></div>
                  <div class="u-s-m-b-15">

                    <button class="btn btn--e-transparent-brand-b-2" @click="signup">CREATE</button></div>

                  <router-link class="gl-link" to="/">Return to Store</router-link>
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
import firebase from 'firebase'
export default {
  name: "signup",
  data() {
    return {
      fname: '',
      lname: '',
      email: '',
      password: '',
      error:''
    }
  },
  methods: {
    signup() {
     if (this.fname === '' || this.lname === '' || this.email === '' || this.password === '') {
       this.$notify({
         type: "error",
         text: "Please fill all the fields"
       });
     }else if(this.password.length < 6) {
       this.$notify({
         type: "error",
         text: "Password must be at least 6 characters"
       });
     } else {
       firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
           .then((userCredential) => {
             const user = userCredential.user;
             firebase.auth().currentUser.updateProfile({
               displayName: this.fname + ' ' + this.lname
             })
             firebase.firestore().collection('users').doc(user.uid).set({
               firstname: this.fname,
               lastname: this.lname,
               email: this.email,
               password: this.password
             })
             this.$notify({
               type: "success",
               text: "Account created successfully"
             });
             this.$router.push('/shop')
           })
           .catch((error) => {
             if(error.message === 'The email address is already in use by another account.'){
                this.error = 'The email address is already in use by another account.'
              }else{
                this.error = error.message
              }
           })
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
