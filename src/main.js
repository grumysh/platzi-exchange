// Importa las librería desde npm, se identifican las librerías porque no tienen un './' o '/'
import Vue from 'vue'
// Importa el componente App
import App from './App.vue'
import '@/assets/css/tailwind.css'
import router from '@/router'
import Chartick from 'vue-chartkick'
import { VueSpinners } from '@saeris/vue-spinners'
import Chart from 'chart.js'

import { dollarFilter, percentFilter } from '@/filters'

Vue.use(VueSpinners)
Vue.use(Chartick.use(Chart))
Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)
Vue.config.productionTip = false

// Instancia de view, la función $mount tiene el mismo proposito que el elemento 'el'
// La función render es una forma de reemplazar la instancia de la aplicación dentro del componente.
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
