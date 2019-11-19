import axios from 'axios'
import urlMapping from '../../urlMapping'

export default {
  state: {
    user: {
      createDate: '',
      updateDate: '',
      cardValidity: '',
      documentStatus: '',
      documentStatusTitle: '',
      cardType: null,
      lastName: '',
      name: '',
      middleName: '',
      gender: 1,
      personDateOfBirth: '',
      personDocumentType: 1,
      personDocumentSeries: '',
      personDocumentNumber: '',
      personDocumentIssuedBy: '',
      personDocumentIssuedDate: '',
      personDocumentValidTill: '',
      personTaxNumber: '',
      personTaxNumberType: 1,
      personPhoto: '',
      personDocumentImage: '',
      personTaxNumberImage: '',
      educationSchool: '',
      educationUniversity: '',
      yearOfEntry: '',
      studentPrivilegeDocumentType: '1',
      privilegeDocumentType: 2,
      privilegeDocumentSeries: '',
      privilegeDocumentNumber: '',
      privilegeDocumentValidTill: '',
      privilegeDocumentImage: '',
      region: '',
      district: '',
      cityTown: '',
      street: '',
      houseNumber: '',
      apartment: '',
      personMobilePhone: '',
      personPhone: '',
      personEmail: '',
      representativeLastName: '',
      representativeName: '',
      representativeMiddleName: '',
      representativeRelation: '',
      representativeDocumentType: 1,
      representativeDocumentSeries: '',
      representativeDocumentNumber: '',
      representativeIssuedBy: '',
      representativeIssuedDate: '',
      representativeValidTill: '',
      representativeIsSigned: '',
      personalDataConsent: false,
      gettingPlace: 'Соборна 36',
      recaptchaToken: '',
      successPaymentUrl: process.env.NODE_ENV === 'development' ? 'http://abvgd.s62.in.ua' + '/successful-payment/' : window.location.protocol + '//' + window.location.host + '/successful-payment/',
      failedPaymentUrl: process.env.NODE_ENV === 'development' ? 'http://abvgd.s62.in.ua' + '/failed-payment/' : window.location.protocol + '//' + window.location.host + '/failed-payment/'
    },
    paymentUrl: null,
    orderUid: null,
    orderId: null,
    // currentCardID: 1,
    isFormValid: false
  },
  getters: {
    getUser (state) {
      return state.user
    },
    studentPrivilegeDocumentType (state) {
      return state.user.studentPrivilegeDocumentType
    },
    getOrderUid (state) {
      return state.orderUid
    },
    getPaymentUrl (state) {
      return state.paymentUrl
    },
    getOrderId (state) {
      return state.orderId
    },
    getCurrentCardType (state) {
      return state.user.cardType
    },
    getIsFormValid (state) {
      return state.isFormValid
    }
  },
  actions: {
    sendUserData (context) {
      console.log(urlMapping)
      let formData = new FormData()
      const user = context.state.user
      for (const key in user) {
        formData.append(key, user[key])
      }

      context.commit('toggleLoadingIndicator')

      const url = urlMapping.sendUserDataUrl()

      axios({
        method: 'post',
        url,
        data: formData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
      })
        .then(function (response) {
          console.dir(response)
          // router.push('/confirm-payment');
          context.commit('setIsFormValid', true)
          context.commit('setConfirmPaymentInfo', response.data)

          // get user for confirm payment
          context.dispatch('getUserDataByUid', response.data.orderUid)
        })
        .catch(function (response) {
          // handle error
          console.log(response)
          // show message about invalid fields
          console.dir(context.rootState)
          context.commit('toggleErrorWindow', true)
        })
        .finally(() => {
          context.commit('toggleLoadingIndicator')
        })
    }

  },
  mutations: {
    setCardType (state, payload) {
      state.user.cardType = payload
    },
    setStudentPrivilageDocumentType (state, type) {
      state.user.studentPrivilegeDocumentType = type
    },
    setUserInfo (state, payload) {
      state.user = payload
    },
    setConfirmPaymentInfo (state, { orderId, orderUid, paymentUrl }) {
      state.orderId = orderId
      state.orderUid = orderUid
      state.paymentUrl = paymentUrl
    },
    goToPayment (state) {
      window.location.href = state.paymentUrl
    },
    resetUser (state) {
      state.user = {
        createDate: '',
        updateDate: '',
        cardValidity: '',
        documentStatus: '',
        documentStatusTitle: '',
        cardType: null,
        lastName: '',
        name: '',
        middleName: '',
        gender: 1,
        personDateOfBirth: '',
        personDocumentType: 1,
        personDocumentSeries: '',
        personDocumentNumber: '',
        personDocumentIssuedBy: '',
        personDocumentIssuedDate: '',
        personDocumentValidTill: '',
        personTaxNumber: '',
        personTaxNumberType: 1,
        personPhoto: '',
        personDocumentImage: '',
        personTaxNumberImage: '',
        educationSchool: '',
        educationUniversity: '',
        yearOfEntry: '',
        studentPrivilegeDocumentType: '1',
        privilegeDocumentType: 2,
        privilegeDocumentSeries: '',
        privilegeDocumentNumber: '',
        privilegeDocumentValidTill: '',
        privilegeDocumentImage: '',
        region: '',
        district: '',
        cityTown: '',
        street: '',
        houseNumber: '',
        apartment: '',
        personMobilePhone: '',
        personPhone: '',
        personEmail: '',
        representativeLastName: '',
        representativeName: '',
        representativeMiddleName: '',
        representativeRelation: '',
        representativeDocumentType: 1,
        representativeDocumentSeries: '',
        representativeDocumentNumber: '',
        representativeIssuedBy: '',
        representativeIssuedDate: '',
        representativeValidTill: '',
        representativeIsSigned: '',
        personalDataConsent: false,
        gettingPlace: 'Соборна 36',
        recaptchaToken: '',
        successPaymentUrl: process.env.NODE_ENV === 'development' ? 'http://abvgd.s62.in.ua' + '/successful-payment/' : window.location.protocol + '//' + window.location.host + '/successful-payment/',
        failedPaymentUrl: process.env.NODE_ENV === 'development' ? 'http://abvgd.s62.in.ua' + '/failed-payment/' : window.location.protocol + '//' + window.location.host + '/failed-payment/'
      }
    },
    setIsFormValid (state, payload) {
      state.isFormValid = payload
    }
  }
}
