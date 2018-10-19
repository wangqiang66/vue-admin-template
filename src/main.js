import Vue from 'vue'
import Cookies from 'js-cookie'
import Element from 'element-ui'
import router from './router'
import store from './store'
import i18n from './lang' // Internationalization
import './errorLog' // error log
import './permission' // permission control
import * as filters from './filters' // global filters
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import 'font-awesome/scss/font-awesome.scss'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/main.scss'
import '@/styles/index.scss' // global css
Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render() {
    return (
      <div id='app'>
        <router-view/>
      </div>
    )
  }
})
