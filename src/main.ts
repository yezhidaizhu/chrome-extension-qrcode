import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import messages from './locales'

import './style.css'
import 'virtual:windi.css'
import 'animate.css'

const i18n = createI18n({
  legacy:false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});

createApp(App)
.use(i18n)
.use(router)
.mount('#app')
