import Vue from 'vue'
import Vuex from 'vuex'
import news from './modules/news'
import lists from './modules/constLists'
import queue from './modules/queue'
import user from './modules/user'
import loadingIndecator from './modules/loadingIndecator'
import hints from './modules/hints'
import confirmPayment from './modules/confirmPayment'
import errorWindow from './modules/errorWindow'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    news,
    lists,
    queue,
    user,
    loadingIndecator,
    hints,
    confirmPayment,
    errorWindow

  },
  state: {
    isShowErrorModal: false
  },
  getters: {
  }
})
