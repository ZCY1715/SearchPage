import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-persistedstate-plugin'

const app = createApp(App)

const pinia = createPinia()
pinia.use(createPersistedState({
  storage: localStorage
}))
app.use(pinia)

app.mount('#app')
