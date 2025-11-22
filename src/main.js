import './assets/main.css'
import hljs from 'highlight.js'

import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)

app.directive('highlight', {
    mounted(el) {
        const blocks = el.querySelectorAll('pre code')
        blocks.forEach((block) => {
            hljs.highlightElement(block)
        })
    },
    updated(el) {
        const blocks = el.querySelectorAll('pre code')
        blocks.forEach((block) => {
            hljs.highlightElement(block)
        })
    },
})

const pinia = createPinia()

app.use(pinia)
app.use(router)

const GStore = reactive({ flashMessage: '' })

app.provide('GStore', GStore)

app.mount('#app')