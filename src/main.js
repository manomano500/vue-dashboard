import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import './assets/css/tailwind.css'
import './assets/css/cstadm.css'
// import {store} from "core-js/internals/reflect-metadata";
import store from "@/store";
const app = createApp(App)

// app.use(store)
app.use(router)
app.use(store)

app.mount('#app')
