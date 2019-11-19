import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Vue from 'vue'
import App from './App'
import router from './router'
import VueAnalytics from 'vue-analytics'
import store from './store'

import dictionary from './VeeValidateRules'
import VeeValidate from 'vee-validate'

import VueTheMask from 'vue-the-mask'

import VuejsClipper from 'vuejs-clipper'
Vue.use(VueTheMask)
// install
Vue.use(VuejsClipper)

// VeeValidate.Validator.updateDictionary(dictionary);
VeeValidate.Validator.localize(dictionary)
Vue.use(VeeValidate, {
  dictionary,
  events: 'blur'
})

Vue.use(VueAnalytics, {
  id: 'UA-135609445-2',
  router
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
