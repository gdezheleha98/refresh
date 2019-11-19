import urlMapping from '../../urlMapping'
import axios from 'axios'
import router from '../../../router'

export default {
  state: {
    user: null,
    paymentUrl: null,
    successUrl: process.env.NODE_ENV === 'development' ? 'http://abvgd.s62.in.ua' + '/successful-payment/' : window.location.protocol + '//' + window.location.host + '/successful-payment/',
    failedUrl: process.env.NODE_ENV === 'development' ? 'http://abvgd.s62.in.ua' + '/failed-payment/' : window.location.protocol + '//' + window.location.host + '/failed-payment/'
  },
  getters: {
    getConfirmPaymentUserData (state) {
      return state.user
    }
  },
  mutations: {
    setConfirmPaymentUserData (state, user) {
      state.user = user
    },
    setPaymentUrl (state, url) {
      state.paymentUrl = url
    }
  },
  actions: {
    getUserEmailByKey (context, payload) {
      const url = urlMapping.getUserDataByKeyAndPinUrl(payload)

      return axios.get(url)
        .then(response => {
          console.log(response)
          const email = response.data.personEmail
          return email
        })
        .catch(err => {
          console.warn(err)
          context.commit('toggleErrorWindow', true)
          return ''
        })
    },
    getUserDataByKey (context, payload) {
      const url = urlMapping.getUserDataByKeyAndPinUrl(payload)

      axios.get(url)
        .then(response => {
          console.log(response)
          const user = response.data
          context.commit('setConfirmPaymentUserData', user)
          router.push('/card-progress')
        })
        .catch(err => {
          console.warn(err)
          context.commit('toggleErrorWindow', true)
        })
    },
    getUserDataByUid (context, uid) {
      const url = urlMapping.getUserDataForFailedPaymentUrl(uid)
      return axios.get(url)
        .then(response => {
          console.log(response)
          const user = response.data
          context.commit('setConfirmPaymentUserData', user)
          router.push('/card-progress')
        })
        .catch(err => {
          console.warn(err)
          context.commit('toggleErrorWindow', true)
        })
    },
    async getUserPhotoForFailedPayment (context, uid) {
      const url = urlMapping.getUserPhotoForFailedPaymentUrl(uid)

      return axios.get(url, {
        responseType: 'blob'
      })
        .then(response => {
          console.log(response)
          return response.data
        })
        .then(data => data)
        .catch(err => {
          console.warn('Failed to upload image')
          console.warn(err)
          context.commit('toggleErrorWindow', true)
          return null // context.dispatch('getUserPhotoForFailedPayment', uid);
        })
    },
    getPaymentUrl (context, { uid, key, pin }) {
      const url = urlMapping.getPaymentUrl()// 'https://api.et.vn.ua:8086/OnlineOrder/payment/'; //urlMapping.getPaymentUrlForGuidUrl(uid);

      const successUrl = process.env.NODE_ENV === 'development'
        ? 'http://abvgd.s62.in.ua' + '/successful-payment' + `?key=${key}${pin}`
        : window.location.protocol + '//' + window.location.host + '/successful-payment' + `?key=${key}${pin}`
      const failedUrl = process.env.NODE_ENV === 'development'
        ? 'http://abvgd.s62.in.ua' + '/failed-payment' + `?key=${key}${pin}`
        : window.location.protocol + '//' + window.location.host + '/failed-payment' + `?key=${key}${pin}`

      return axios.post(url, {
        orderUid: uid,
        successUrl: successUrl,
        failedUrl: failedUrl
      })
        .then(response => {
          console.log(response)
          return response.data.paymentUrl
        })
        .catch(err => {
          console.warn(err)
          context.commit('toggleLoadingIndicator')
          context.commit('toggleErrorWindow', true)
        })
      // .finally(() => {
      //
      // })
    },
    verifyCardByUser (context, uid) {
      const url = urlMapping.getVerifyCardByUserUrl(uid)
      return axios.post(url)
        .then(response => {
          console.log(response)
          // current status will be 3

          context.state.user.orderStatusId = response.data.currentStatus
          context.state.user.orderStatusDate = response.data.statusDate
          // second step

          return response.data.currentStatus
        })
        .then((status) => {
          // update all info
          if (status !== 3) {
            console.log('UPDATE USER ALL INFO')
            context.dispatch('getUserDataByUid', context.state.user.orderUid)
            return false
          }

          return true
        })
        .catch(err => {
          console.log(err)
          return false
        })
    }
  }
}
