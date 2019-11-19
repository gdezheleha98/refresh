import QRCode from 'qrcode'
import BaseButton from '../BaseButton'
import CardStatus from './CardStatus'
import ConfirmPayment from '../Payment/ConfirmPayment'
import ImageClip from '../commonComponents/ImageClip'

import moment from 'moment'

import axios from 'axios'

import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      currentStep: 1,
      firstStep: 1,
      secondStep: 2,
      thirdStep: 3,
      personImage: null,
      qrCode: null,
      isShownConfirmPayment: false,
      disablePayButton: false,
      fileValidation: {
        isValidFile: false,
        isDirtyFile: false
      }
    }
  },
  components: {
    BaseButton,
    CardStatus,
    ConfirmPayment,
    ImageClip
  },
  methods: {
    setCurrentStep () {
      if (this.user.paymentStatusId === 2) {
        this.currentStep = 3
      } else if (this.user.orderStatusId === 1 || this.user.orderStatusId === 2) {
        this.currentStep = 1
      } else {
        this.currentStep = 2
      }
    },
    hideConfirmPayment () {
      // document.getElementById('cardStatus').scrollIntoView({
      //     behavior: 'smooth',
      //     block: 'end'
      // });
      // window.scrollTo(0, 250);
      this.isShownConfirmPayment = false
    },
    showConfirmPayment () {
      this.isShownConfirmPayment = true
    },
    async checkCard () {
      this.isShownConfirmPayment = false

      const successfulPush = this.$store.dispatch('verifyCardByUser', this.user.orderUid)

      if (successfulPush) {
        this.currentStep = 2
      }
    },
    payForCard () {
      this.goToPayment()
      // this.currentStep = 3;
    },
    async goToPayment () {
      this.disablePayButton = true

      this.$store.commit('toggleLoadingIndicator')

      const payload = {
        uid: this.user.orderUid,
        key: this.user.orderKey,
        pin: this.user.orderPin
      }
      this.$store.dispatch('getPaymentUrl', payload)
        .then(url => {
          if (url) {
            window.location.href = url
          }
        })
        .catch(() => {
          this.disablePayButton = false
        })
    },
    getFormatedDate (value) {
      console.log(value)
      const date = moment(value)
      const day = date.date()
      const month = date.month()
      const year = date.year()
      return `${this.formatDateView(day)}.${this.formatDateView(month + 1)}.${year}`
    },
    formatDateView (date) {
      return ('0' + date).slice(-2)
    },
    async generateQR (text) {
      try {
        const url = await QRCode.toDataURL(text)
        this.qrCode = url
        console.log(url)
      } catch (err) {
        console.error(err)
      }
    },
    async initAvatar (uid) {
      try {
        const img = await this.$store.dispatch('getUserPhotoForFailedPayment', uid)
        const urlCreator = window.URL || window.webkitURL
        this.personImage = urlCreator.createObjectURL(img)
      } catch (e) {
        console.warn(e)
      }
    },
    async initUser (uid) {
      this.user = await this.$store.dispatch('getUserDataByUid', uid)
    },
    printQuestionnaire () {
      window.print()
    },
    formatDate (date) {
      return moment(date).format('DD.MM.YY') + ' ' + moment(date).format('HH:mm')
    },
    savePersonImage (data) {
      console.log(data)
      // TODO add saving and dispatching logic
    }
  },
  destroyed () {
    console.log('destroy confirm payment \nshould reset user-data')
    this.$store.commit('setConfirmPaymentUserData', null)
  },
  computed: {
    ...mapGetters([
      'getUserGender',
      'getCardType',
      'getOrderUid',
      'femaleGender',
      'getStudentCardID',
      'getPupilCardID',
      'getMunicipalCardID'
      // 'getOrderId',

    ]),
    ...mapGetters({
      user: 'getConfirmPaymentUserData',
      paymentsList: 'getPaymentList',
      statusesList: 'getStatusesList'
    }),
    personAppeal () {
      return this.user.gender === this.femaleGender ? 'Шановна' : 'Шановний' + ' ' + this.personName
    },
    representativeName () {
      return `${this.user.representativeName} ${this.user.representativeMiddleName || ''}`
    },
    personName () {
      return `${this.user.name} ${this.user.middleName || ''}`
    },
    adultPersonName () {
      if (this.user.representativeName) return this.representativeName
      return this.personName
    },
    cardImageUrl () {
      switch (this.user.cardType) {
        case this.getStudentCardID:
          return require('../../assets/card-progress/Student.jpg')
        case this.getPupilCardID:
          return require('../../assets/card-progress/pupil.jpg')
        case this.getMunicipalCardID:
          return require('../../assets/card-progress/general.jpg')
      }
    },
    statusText () {
      return this.statusesList.find(item => item.id === this.user.orderStatusId).text || ''
    },
    paymentText () {
      return this.paymentsList.find(item => item.id === this.user.paymentStatusId).text || ''
    },
    notCheckedUserData () {
      return this.user.orderStatusId === 1 ||
                this.user.orderStatusId === 2 ||
                this.user.orderStatusId === 5 ||
                this.user.orderStatusId === 4 ||
                this.user.orderStatusId === 11 ||
                this.user.orderStatusId === 100
    },
    checkedUserData () {
      return this.user.orderStatusId === 3 || this.user.orderStatusId === 6
    },
    waitingForPrint () {
      return this.user.orderStatusId === 7 || this.user.orderStatusId === 8
    },
    printedCard () {
      return this.user.orderStatusId === 9 || this.user.orderStatusId === 10
    }
  },
  async created () {
    let uid = null

    if (!this.user) {
      uid = this.getOrderUid
      // await this.initUser(uid);
    } else {
      uid = this.user.orderUid
    }

    this.setCurrentStep()

    await this.initAvatar(uid)

    this.generateQR(`https://et.vn.ua/4ec?key=${this.user.orderKey}&pin=${this.user.orderPin}`)

    console.log('Created')
  },
  mounted () {
    if (process.env.NODE_ENV !== 'development') {
      history.pushState(null, null, location.href)
      window.onpopstate = function () {
        history.go(1)
        if ('scrollRestoration' in history) {
          history.scrollRestoration = 'manual'
        }
      }
    } else {
      const url = 'https://api.et.vn.ua:8086/OnlineOrder/List/'
      axios.get(url)
        .then(response => {
          console.log(response)
          if (response.status !== 200) {
            throw new Error()
          }
          return response.data
        })
        .then(response => {
          // context.commit('setUsersShortList', response);
          console.log(response)
        })
    }

    console.log('mounted')
  }
}
