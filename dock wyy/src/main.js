import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index.js";
import pinia from "./modules/pinia/store.js";
import piniaPersist from 'pinia-plugin-persist'
const app = createApp(App)
app.use(router)
app.use(pinia)
pinia.use(piniaPersist)
app.mount('#app')
