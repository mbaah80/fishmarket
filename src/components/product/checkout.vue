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

                  <router-link to="/product/checkout">Checkout</router-link>
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

      <!--====== Section Content ======-->
      <div class="section__content" v-if="!user">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div id="checkout-msg-group">
                <div class="msg u-s-m-b-30">

                  <span class="msg__text">Returning customer?

                    <a class="gl-link" href="#return-customer" data-toggle="collapse">Click here to login</a></span>
                  <div class="collapse" id="return-customer" data-parent="#checkout-msg-group">
                    <div class="l-f u-s-m-b-16">

                      <span class="gl-text u-s-m-b-16">If you have an account with us, please log in.</span>
                      <div class="l-f__form">
                        <div class="gl-inline">
                          <div class="u-s-m-b-15">

                            <label class="gl-label" for="login-email">E-MAIL *</label>

                            <input class="input-text input-text--primary-style" v-model="email" type="text"
                              id="login-email" placeholder="Enter E-mail">
                          </div>
                          <div class="u-s-m-b-15">

                            <label class="gl-label" for="login-password">PASSWORD *</label>

                            <input class="input-text input-text--primary-style" v-model="password" type="text"
                              id="login-password" placeholder="Enter Password">
                          </div>
                        </div>
                        <div class="gl-inline">
                          <div class="u-s-m-b-15">

                            <button class="btn btn--e-transparent-brand-b-2" type="submit" @click="login">LOGIN</button>
                          </div>
                          <div class="u-s-m-b-15">

                            <a class="gl-link" href="lost-password.html">Lost Your Password?</a>
                          </div>
                        </div>

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
                <div class="msg">

                  <span class="msg__text">Have a coupon?

                    <a class="gl-link" href="#have-coupon" data-toggle="collapse">Click Here to enter your code</a></span>
                  <div class="collapse" id="have-coupon" data-parent="#checkout-msg-group">
                    <div class="c-f u-s-m-b-16">

                      <span class="gl-text u-s-m-b-16">Enter your coupon code if you have one.</span>
                      <div class="c-f__form">
                        <div class="u-s-m-b-16">
                          <div class="u-s-m-b-15">

                            <label for="coupon"></label>

                            <input class="input-text input-text--primary-style" type="text" id="coupon"
                              placeholder="Coupon Code">
                          </div>
                          <div class="u-s-m-b-15">

                            <button class="btn btn--e-transparent-brand-b-2" type="submit">APPLY</button>
                          </div>
                        </div>
                      </div>
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


    <!--====== Section 3 ======-->
    <div class="u-s-p-b-60">

      <!--====== Section Content ======-->
      <div class="section__content">
        <div class="container">
          <div class="checkout-f">
            <div class="row">
              <div class="col-lg-6">
                <h1 class="checkout-f__h1">DELIVERY INFORMATION</h1>
                <div class="checkout-f__delivery">
                  <div class="u-s-m-b-30">
                    <div class="u-s-m-b-15">

                      <!--====== Check Box ======-->
                      <div class="check-box">

                        <input type="checkbox" id="get-address">
                        <div class="check-box__state check-box__state--primary">

                          <label class="check-box__label" for="get-address">Use default shipping and billing address from
                            account</label>
                        </div>
                      </div>
                      <!--====== End - Check Box ======-->
                    </div>

                    <!--====== First Name, Last Name ======-->
                    <div class="gl-inline">
                      <div class="u-s-m-b-15">

                        <label class="gl-label" for="billing-fname">FIRST NAME *</label>

                        <input class="input-text input-text--primary-style" v-model="billingInformation.firstName"
                          type="text" id="billing-fname" data-bill="">
                      </div>
                      <div class="u-s-m-b-15">

                        <label class="gl-label" for="billing-lname">LAST NAME *</label>

                        <input class="input-text input-text--primary-style" v-model="billingInformation.lastName"
                          type="text" id="billing-lname" data-bill="">
                      </div>
                    </div>
                    <!--====== End - First Name, Last Name ======-->


                    <!--====== E-MAIL ======-->
                    <div class="u-s-m-b-15">

                      <label class="gl-label" for="billing-email">E-MAIL *</label>

                      <input class="input-text input-text--primary-style" v-model="billingInformation.email" type="text"
                        id="billing-email" data-bill="">
                    </div>
                    <!--====== End - E-MAIL ======-->


                    <!--====== PHONE ======-->
                    <div class="u-s-m-b-15">

                      <label class="gl-label" for="billing-phone">PHONE *</label>

                      <input class="input-text input-text--primary-style" v-model="billingInformation.phone" type="text"
                        id="billing-phone" data-bill="">
                    </div>
                    <!--====== End - PHONE ======-->


                    <!--====== Street Address ======-->
                    <div class="u-s-m-b-15">

                      <label class="gl-label" for="billing-street">STREET ADDRESS *</label>

                      <input class="input-text input-text--primary-style" v-model="billingInformation.address" type="text"
                        id="billing-street" placeholder="House name and street name" data-bill="">
                    </div>
                    <div class="u-s-m-b-15">

                      <label for="billing-street-optional"></label>

                      <input class="input-text input-text--primary-style" type="text"
                        v-model="billingInformation.addressOption" id="billing-street-optional"
                        placeholder="Apartment, suite unit etc. (optional)" data-bill="">
                    </div>
                    <!--====== End - Street Address ======-->


                    <!--====== Country ======-->
                    <div class="u-s-m-b-15">

                      <!--====== Select Box ======-->

                      <label class="gl-label" for="billing-country">COUNTRY *</label>
                      <select class="select-box select-box--primary-style" v-model="billingInformation.country"
                        id="billing-country" data-bill="">
                        <option selected value="">Choose Country</option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                        <option value="Botswana">Botswana</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Brunei">Brunei</option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Cabo Verde">Cabo Verde</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Canada">Canada</option>
                        <option value="Central African Republic">Central African Republic</option>
                        <option value="Chad">Chad</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="Congo, Democratic Republic of the">Congo, Democratic Republic of the</option>
                        <option value="Congo, Republic of the">Congo, Republic of the</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Côte d'Ivoire">Côte d'Ivoire</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech Republic">Czech Republic</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="East Timor">East Timor</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt">Egypt</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Eswatini">Eswatini</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="Gabon">Gabon</option>
                        <option value="Gambia">Gambia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Germany">Germany</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Greece">Greece</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guinea">Guinea</option>
                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iran">Iran</option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Korea, North">Korea, North</option>
                        <option value="Korea, South">Korea, South</option>
                        <option value="Kosovo">Kosovo</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Laos">Laos</option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libya">Libya</option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall Islands">Marshall Islands</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Micronesia">Micronesia</option>
                        <option value="Moldova">Moldova</option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montenegro">Montenegro</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Myanmar">Myanmar</option>
                        <option value="Namibia">Namibia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="North Macedonia">North Macedonia</option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau">Palau</option>
                        <option value="Palestine">Palestine</option>
                        <option value="Panama">Panama</option>
                        <option value="Papua New Guinea">Papua New Guinea</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Romania">Romania</option>
                        <option value="Russia">Russia</option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                        <option value="Saint Lucia">Saint Lucia</option>
                        <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                        <option value="Samoa">Samoa</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Solomon Islands">Solomon Islands</option>
                        <option value="Somalia">Somalia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="South Sudan">South Sudan</option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Sudan">Sudan</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Syria">Syria</option>
                        <option value="Taiwan">Taiwan</option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania">Tanzania</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Togo">Togo</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Emirates">United Arab Emirates</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Vatican City">Vatican City</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Vietnam">Vietnam</option>
                        <option value="Yemen">Yemen</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>

                      </select>
                      <!--====== End - Select Box ======-->
                    </div>
                    <!--====== End - Country ======-->


                    <!--====== Town / City ======-->
                    <div class="u-s-m-b-15">

                      <label class="gl-label" for="billing-town-city">TOWN/CITY *</label>

                      <input class="input-text input-text--primary-style" v-model="billingInformation.city" type="text"
                        id="billing-town-city" data-bill="">
                    </div>
                    <!--====== End - Town / City ======-->

                    <!--====== ZIP/POSTAL ======-->
                    <div class="u-s-m-b-15">

                      <label class="gl-label" for="billing-zip">ZIP/POSTAL CODE *</label>

                      <input class="input-text input-text--primary-style" v-model="billingInformation.zip" type="text"
                        id="billing-zip" placeholder="Zip/Postal Code" data-bill="">
                    </div>
                    <!--====== End - ZIP/POSTAL ======-->
                    <div class="u-s-m-b-10">

                      <!--====== Check Box ======-->
                      <div class="check-box">

                        <input type="checkbox" id="make-default-address" data-bill=""
                          v-model="billingInformation.makeShippingDefaultAddress">
                        <div class="check-box__state check-box__state--primary">

                          <label class="check-box__label" for="make-default-address">Make default shipping and billing
                            address</label>
                        </div>
                      </div>
                      <!--====== End - Check Box ======-->
                    </div>
                    <div class="u-s-m-b-10">

                      <a class="gl-link" href="#create-account" data-toggle="collapse">Want to create a new account?</a>
                    </div>
                    <div class="collapse u-s-m-b-15" id="create-account">

                      <span class="gl-text u-s-m-b-15">Create an account by entering the information below. If you are a
                        returning customer please login at the top of the page.</span>
                      <div>

                        <label class="gl-label" for="reg-password">Account Password *</label>

                        <input class="input-text input-text--primary-style" type="text" data-bill id="reg-password">
                      </div>
                    </div>
                    <div class="u-s-m-b-10">

                      <label class="gl-label" for="order-note">ORDER NOTE</label><textarea
                        v-model="billingInformation.note" class="text-area text-area--primary-style"
                        id="order-note"></textarea>
                    </div>
                    <div>

                      <button class="btn btn--e-transparent-brand-b-2" type="submit"
                        @click="saveBillingAddress">SAVE</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <h1 class="checkout-f__h1">ORDER SUMMARY</h1>

                <!--====== Order Summary ======-->
                <div class="o-summary">
                  <div class="o-summary__section u-s-m-b-30" v-if="cart.length > 0">
                    <div class="o-summary__item-wrap gl-scroll" v-if="cart.length > 0">
                      <div class="o-card" v-for="ct in cart" :key='ct.id'>
                        <div class="o-card__flex">
                          <div class="o-card__img-wrap">

                            <img class="u-img-fluid" :src="ct.image" :alt="ct.name">
                          </div>
                          <div class="o-card__info-wrap">

                            <span class="o-card__name">

                              <router-link :to="`/product/${ct.id}`">{{ ct.name }}</router-link></span>

                            <span class="o-card__quantity">Quantity x {{ ct.quantity }}</span>


                            <span class="o-card__price">${{ ct.price }}</span>
                          </div>
                        </div>

                        <a class="o-card__del far fa-trash-alt" @click='deleteCartItem(ct.id)'
                          href="javascript:void(0)"></a>
                      </div>
                    </div>
                  </div>
                  <div class="o-summary__section u-s-m-b-30" v-if="!user">
                    <div class="o-summary__box">
                      <h1 class="checkout-f__h1">SHIPPING & BILLING</h1>
                      <div class="ship-b">

                        <span class="ship-b__text">Ship to:</span>
                        <div class="ship-b__box u-s-m-b-10">
                          <p class="ship-b__p">{{ billingInformation.zip }} - {{ billingInformation.address }} -
                            {{ billingInformation.city }} - {{ billingInformation.country }} - {{ billingInformation.phone }}
                          </p>

                          <button class="ship-b__edit btn--e-transparent-platinum-b-2"
                            @click="editAddress(billingInformation.id)">Edit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="o-summary__section u-s-m-b-30">
                    <div class="o-summary__box">
                      <table class="o-summary__table">
                        <tbody>
                          <tr>
                            <td>SHIPPING</td>
                            <td>$4.00</td>
                          </tr>
                          <tr>
                            <td>TAX</td>
                            <td>$0.00</td>
                          </tr>
                          <tr>
                            <td>SUBTOTAL</td>
                            <td>$ {{ subtotal }}</td>
                          </tr>
                          <tr>
                            <td>GRAND TOTAL</td>
                            <td>$ {{ total }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="o-summary__section u-s-m-b-30">
                    <div class="o-summary__box">
                      <h1 class="checkout-f__h1">PAYMENT INFORMATION</h1>
                      <div class="checkout-f__payment">
                        <div class="u-s-m-b-15">

                          <!--====== Check Box ======-->
                          <div class="check-box">

                            <input type="checkbox" id="term-and-condition" v-model="acceptTerms">
                            <div class="check-box__state check-box__state--primary">

                              <label class="check-box__label" for="term-and-condition">I consent to the</label>
                            </div>
                          </div>
                          <!--====== End - Check Box ======-->

                          <a class="gl-link">Terms of Service.</a>
                        </div>
                        <div>
                          <button class="btn btn--e-brand-b-2" @click='checkOut'>PLACE ORDER</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--====== End - Order Summary ======-->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--====== End - Section Content ======-->
    </div>
    <!--====== End - Section 3 ======-->
  </div>
</template>

<script>
import firebase from 'firebase/app'
export default {
  name: "checkout",
  data() {
    return {
      cart: [],
      user: null,
      quantity: 1,
      subtotal: 0,
      total: 0,
      billingInformation: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        country: '',
        zip: '',
        note: '',
        addressOption: '',
        makeShippingDefaultAddress: false
      },
      password: '',
      email: '',
      acceptTerms: false,
      currency:null
    }
  },
  async mounted() {
    this.getCart();
    this.user = firebase.auth().currentUser;
    this.checkUser();
    //this.getBillingAddress()
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
          })
          .catch((error) => {
           
          });
      } else {
        // Guest user, retrieve cart from localStorage
        const guestCart = localStorage.getItem('guestCart');

        if (guestCart) {
          this.cart = JSON.parse(guestCart);
          this.checkTotal();
          
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
      const user = firebase.auth().currentUser;

      if (user) {
        if (
          !this.billingInformation.firstName ||
          !this.billingInformation.lastName ||
          !this.billingInformation.email ||
          !this.billingInformation.phone ||
          !this.billingInformation.address ||
          !this.billingInformation.city ||
          !this.billingInformation.country ||
          !this.billingInformation.zip
        ) {
          this.$notify({
            text: 'Please fill in the billing information.',
            type: 'error'
          });
          return;
        }

        if (!this.acceptTerms) {
          this.$notify({
            text: 'Please accept the terms and conditions.',
            type: 'error'
          });
          return;
        }

        const order = {
          user: {
            uid: user.uid,
            name: user.displayName,
            email: user.email
          },
          billingAddress: {
            firstName: this.billingInformation.firstName,
            lastName: this.billingInformation.lastName,
            email: this.billingInformation.email,
            phone: this.billingInformation.phone,
            address: this.billingInformation.address,
            city: this.billingInformation.city,
            country: this.billingInformation.country,
            zip: this.billingInformation.zip
          },
          cart: this.cart,
          total: this.total,
          date: new Date(),
          status: 'pending'
        };

        const paymentHandler = PaystackPop.setup({
          key: 'sk_live_802e7d4d7849b435bdd2e202bba2fc2d064ee854',
          email: user.email,
          amount: order.total * 100,
          currency: 'GHS',
          callback: (response) => {
            if (response.status === 'success') {
              const firestore = firebase.firestore();
              const paymentRef = firestore.collection('users').doc(user.uid).collection('payments').doc();
              const orderRef = firestore.collection('orders').doc(user.uid);

              firestore.runTransaction(async(transaction) => {
                return transaction.get(paymentRef).then((doc) => {
                  if (doc.exists) {
                    throw new Error('Payment already processed.');
                  }

                  transaction.set(paymentRef, {
                    orderId: orderRef.id,
                    response: response,
                    user: order.user,
                    billingAddress: order.billingAddress,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                  });
                  transaction.set(orderRef, order);
                });
              }).then(() => {
                this.$notify({
                  text: 'Your order has been placed successfully.',
                  type: 'success'
                });
                this.clearCart();
                this.$router.push('/confirmation');
              }).catch((error) => {
                this.$notify({
                  text: error.message,
                  type: 'error'
                });
              });
            } else {
              this.$notify({
                text: 'Your payment was not successful, please try again.',
                type: 'error'
              });
              this.clearCart();
            }
          },
          onClose: () => {
            this.$notify({
              text: 'Your payment was not successful, please try again.',
              type: 'info'
            });
          }
        });

        paymentHandler.openIframe();
      } else {
        this.$notify({
          text: 'You must be logged in to proceed with the checkout.',
          type: 'error'
        });
      }
    },

    editAddress(id) {
      let user = firebase.auth().currentUser;
      if (user) {
        firebase.firestore().collection('users').doc(user.uid).get().then((doc) => {
          let user = doc.data();
          user.id = doc.id;
          this.billingInformation = user.billingAddress;
          this.billingInformation.makeShippingDefaultAddress = false;
        })
      }
    },
    saveBillingAddress() {
  let user = firebase.auth().currentUser;

  const billingInformation = this.billingInformation;
  const requiredFields = ['firstName', 'lastName', 'phone', 'address', 'city', 'country', 'zip'];

  if (requiredFields.every(field => billingInformation[field])) {
    if (billingInformation.makeShippingDefaultAddress === true) {
      firebase.firestore().collection('users').doc(user.uid).update({
        shippingAddress: billingInformation
      }).then(() => {
        this.$notify({
          text: 'Shipping Address Saved',
          type: 'success'
        });
      });
    } else {
      if (user) {
        const billingAddress = { ...billingInformation, email: user.email };
        firebase.firestore().collection('users').doc(user.uid).update({
          billingAddress: billingAddress
        }).then(() => {
          this.$notify({
            text: 'Billing Address Saved',
            type: 'success'
          });
        });
      } else if (this.password) {
        firebase.auth().createUserWithEmailAndPassword(billingInformation.email, this.password)
          .then((user) => {
            const billingAddress = { ...billingInformation, email: billingInformation.email };
            firebase.firestore().collection('users').doc(user.uid).update({
              billingAddress: billingAddress
            }).then(() => {
              this.$notify({
                text: 'Account created successfully. Please complete the order',
                type: 'success'
              });
            });
          });
      } else {
        this.$notify({
          text: 'Login to complete the order',
          type: 'error'
        });
      }
    }
  } else {
    this.$notify({
      text: 'Please fill all the fields',
      type: 'error'
    });
  }
},
    getBillingAddress() {
      let user = firebase.auth().currentUser;
      if (user) {
        firebase.firestore().collection('users').doc(user.uid).get().then((doc) => {
          if (doc.exists) {
            this.billingInformation = doc.data().billingAddress;
          } else {
            this.billingInformation = {};
          }
        })
      }
    },
    login() {
      if (this.email && this.password) {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((userCredential) => {
          this.$notify({
            text: 'Login successful',
            type: 'success'
          });
          this.user = userCredential.user;
          this.user.getIdToken().then((token) => {
            localStorage.setItem("token", token);
          });
          this.email = ''
          this.password = ''
        }).catch((error) => {
          this.$notify({
            text: error.message,
            type: 'error'
          });
        });
      } else {
        this.$notify({
          text: 'Please fill all the fields',
          type: 'error'
        });
      }
    },
    checkUser() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.user = user;
          this.billingInformation.email = user.email
          this.user.getIdToken().then((token) => {
            localStorage.setItem("token", token);
          });
        } else {
          this.user = null;
        }
      });
    }
  },
}
</script>

<style scoped></style>
