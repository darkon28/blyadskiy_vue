import { createApp } from 'vue'
import App from "./App.vue";

// ✅ Import Quasar
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/en-US'
import quasarIconSet from 'quasar/icon-set/material-icons'

// ✅ Import Quasar & icon styles
import 'quasar/src/css/index.sass'
import '@quasar/extras/material-icons/material-icons.css'

const app = createApp(App)

app.use(Quasar, {
  plugins: {},             // if you need Quasar plugins later
  lang: quasarLang,
  iconSet: quasarIconSet
})

app.mount('#app')
