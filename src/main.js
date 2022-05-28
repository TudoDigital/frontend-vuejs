import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import "./plugins/vuetify-money.js";
import ConsultaProdutos from './components/ConsultaProdutos'
import CadastraProduto from './components/CadastroDeProduto';

Vue.use(VueRouter)

const routes = [
    { path: '/', component: ConsultaProdutos },
    { path: '/produto', component: CadastraProduto }
]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')