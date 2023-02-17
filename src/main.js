import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import '@/index.css'


 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";

 const firebaseConfig = {
    apiKey: "AIzaSyC8LV12TNNKia0_QSOmzawaIx4fFhE_ptQ",
    authDomain: "portfolio-a667f.firebaseapp.com",
    projectId: "portfolio-a667f",
    storageBucket: "portfolio-a667f.appspot.com",
    messagingSenderId: "59047828328",
    appId: "1:59047828328:web:e0adfb6fbfd1b3e04fd4dd"
  };

const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
