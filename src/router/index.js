import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/index.vue'
import Shop from '@/components/shop/index'
import ProductDetail from "@/components/product/productDetail";
import Cart from '@/components/product/cart'
import Checkout from "@/components/product/checkout";
import Wishlist from  "@/components/product/wishlist"
import Account from "@/components/account/index";
import LostPassword from "@/components/account/lost-password";
import Confirmation from "@/components/product/confirmation";
import About from "@/components/company/about";
import Contact from "@/components/company/contact";
import TrackOrder from "@/components/product/track-order";
import Terms from "@/components/company/terms";
import Signup from "@/components/account/signup";
import Dashboard from "@/components/account/dashboard";
import Orders from "@/components/account/orders";
import Addresses from "@/components/account/addresses";
import Profile from "@/components/account/profile";
import firebase from "firebase";

//if login don't show login and signup page



const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../layouts/default.vue'),
    children: [
        {
            path: '',
            component: Home
        },
        ]
  },
    {
        path: '/shop',
        name: 'Shop',
        component: () => import('../layouts/default.vue'),
        children: [
            {
                path: '',
                component: Shop
            },
        ]
    },
    {
        path: '/product/:id',
        name: 'Product',
        component: () => import('../layouts/default.vue'),
        children: [
            {
                path: '',
                component: ProductDetail
            },
        ]
    },
    {
        path: '/product/cart',
        name: 'Cart',
        component: () => import('../layouts/default.vue'),
        children: [
            {
                path: '',
                component: Cart
            },
        ]
    },
    {
        path: '/product/checkout',
        name: 'Checkout',
        component: () => import('../layouts/default.vue'),
        children: [
            {
                path: '',
                component: Checkout
            },
        ]
    },
    {
        path: '/product/wishlist',
        name: 'Wishlist',
        component: () => import('../layouts/default.vue'),
        children: [
            {
                path: '',
                component: Wishlist
            },
        ]
    },
    {
        path: '/account',
        name: 'Account',
        component: () => import('../layouts/default.vue'),
        children: [
            {
                path: '',
                component: Account
            },
        ]
    },
    {
        path: '/lost-password',
        name: 'LostPassword',
        component: () => import('../layouts/default.vue'),
        children: [
            {
                path: '',
                component: LostPassword
            },
        ]
    },
    {
        path: '/confirmation',
        name: 'Confirmation',
        component: Confirmation
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../layouts/default.vue'),
        children: [
            {
                path: '',
                component: About
            },
        ]
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../layouts/default.vue'),
        children: [
            {
                path: '',
                component: Contact
            },
        ]
    },
    {
        path: '/track-order',
        name: 'TrackOrder',
        component: () => import('../layouts/default.vue'),
        children: [
            {
                path: '',
                component: TrackOrder
            },
        ]
    },
    {
        path: '/terms-and-conditions',
        name: 'Terms',
        component: () => import('../layouts/default.vue'),
        children: [
            {
                path: '',
                component: Terms
            },
        ]
    },
    {
        path: '/signup',
        name: ' Signup',
        component: () => import('../layouts/default.vue'),
        children: [
            {
                path: '',
                component: Signup
            },
        ]
    },
    {
        path: '/dashboard',
        name: ' Dashboard',
        component: () => import('../layouts/default.vue'),
        children: [
            {
                path: '',
                component: Dashboard
            },
        ]
    },
    {
        path: '/orders',
        name: ' Orders',
        requireAuth: true,
        component: () => import('../layouts/default.vue'),
        children: [
            {
                path: '',
                component:  Orders
            },
        ]
    },
    {
        path: '/addresses',
        name: ' Addresses',
        requireAuth: true,
        component: () => import('../layouts/default.vue'),
        children: [
            {
                path: '',
                component: Addresses
            },
        ]
    },
    {
        path: '/profile',
        name: ' Profile',
        requireAuth: true,
        component: () => import('../layouts/default.vue'),
        children: [
            {
                path: '',
                component: Profile
            },
        ]
    },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
    firebase.auth().onAuthStateChanged(() => {
          if (to.matched.some(record => record.meta.requireAuth)) {
              if (firebase.auth().currentUser) {
                  next()
              } else {
                  next({
                      path: '/account',
                      query: { redirect: to.fullPath }
                  })
              }
          }else{
                next()
          }
    });
});

export default router
