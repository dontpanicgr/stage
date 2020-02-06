import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
//import './plugins/js/index'

// i18n
import { i18n } from '@/plugins/i18n'
import { Trans } from '@/plugins/i18n/Translation'

Vue.prototype.$i18nRoute = Trans.i18nRoute.bind(Trans)

// Buefy
//import 'buefy/dist/buefy.css'
import '@/assets/style/index.scss'
Vue.use(Buefy)

// Icons
import VueFeather from 'vue-feather'
Vue.use(VueFeather)

// Render
new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')

Vue.config.productionTip = false
