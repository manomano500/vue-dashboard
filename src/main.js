import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import './assets/css/tailwind.css'
import {store} from "core-js/internals/reflect-metadata";

const app = createApp(App)

// app.use(store)
app.use(router)

app.mount('#app')
