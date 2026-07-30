import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

import { createHead } from '@unhead/vue/client'
const head = createHead()

const app = createApp(App)
app.use(head)
app.use(createPinia())
app.use(router)

app.mount('#app')
