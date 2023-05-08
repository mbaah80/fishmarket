import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app';
import 'firebase/firestore';
import config from '../config.json'
import Notifications from '@kyvg/vue3-notification'




firebase.initializeApp(config.firebase);

export const db = firebase.firestore();
export const auth = firebase.auth();

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        localStorage.setItem('userToken', user.uid);
    } else {
        localStorage.removeItem('userToken');
    }
});


createApp(App)
    .use(router)
    .use(Notifications)
    .mount('#app')
