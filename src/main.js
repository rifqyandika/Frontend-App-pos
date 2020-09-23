import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'
import axios from 'axios'

axios.defaults.headers = {
  token: localStorage.getItem('token')
}

axios.interceptors.response.use((response) => {
  return response
}, (err) => {
  if (err.response.data.message === 'Token Expired') {
    return new Promise((resolve, reject) => {
      const refresh = localStorage.getItem('refresh')
      axios.post('http:localhost:3005/users/refreshToken', {
        refreshToken: refresh
      }).then((result) => {
        localStorage.setItem('token', result.data.data.Newtoken)
        window.location = '/'
        resolve()
      }).catch((err) => {
        reject(err)
      })
    })
  }
})

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
