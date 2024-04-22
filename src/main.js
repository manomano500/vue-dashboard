import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import './assets/css/tailwind.css'
import './assets/css/cstadm.css'

const app = createApp(App)

// app.use(store)
app.use(router)

app.mount('#app')
