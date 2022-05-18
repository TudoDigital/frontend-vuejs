import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import vuetify from './plugins/vuetify'
import "./plugins/vuetify-money.js";

Vue.config.productionTip = false

new Vue({
  vuetify,
  Router,
  render: h => h(App)
}).$mount('#app')