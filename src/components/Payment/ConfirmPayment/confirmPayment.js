import BaseButton from '../../BaseButton'
import QRCode from 'qrcode'
import { mapGetters } from 'vuex'
import BaseDocument from './BaseDocument'
import moment from 'moment'

export default {
  data () {
    return {
      /* user: {
                orderId: 111,
                createDate: '',
                updateDate: '',
                cardValidity: '',
                documentStatus: '',
                documentStatusTitle: '',
                cardType: 1,
                lastName: 'Hybalo',
                name: 'Vladyslav',
                middleName: 'Vasyliovuch',
                gender: 1,
                personDateOfBirth: '2019-06-08T17:45:14.802Z',
                personDocumentType: 1,
                personDocumentSeries: 'AB',
                personDocumentNumber: '123456',
                personDocumentIssuedBy: '',
                personDocumentIssuedDate: '',
                personDocumentValidTill: '2029-06-08T17:45:14.802Z',
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
                privilegeDocumentSeries: 'AB',
                privilegeDocumentNumber: '23232323',
                privilegeDocumentValidTill: '2020-06-08T17:45:14.802Z',
                privilegeDocumentImage: '',
                region: 2,
                district: '',
                cityTown: 'Vinnitsia',
                street: 'Keletska',
                houseNumber: '98',
                apartment: '307/3',
                personMobilePhone: '+380969913191',
                personPhone: '',
                personEmail: '2pi15b@gmail.com',
                representativeLastName: 'vsdvsa',
                representativeName: 'aaa',
                representativeMiddleName: '',
                representativeRelation: 2,
                representativeDocumentType: 1,
                representativeDocumentSeries: 'SA',
                representativeDocumentNumber: '123456',
                representativeDocumentIssuedBy: '',
                representativeDocumentIssuedDate: '',
                representativeDocumentValidTill: '2029-06-08T17:45:14.802Z',
                representativeIsSigned: '',
                personalDataConsent: false,
                // personalDataConsent2: '',
                gettingPlace: 'Соборна 36',
                recaptchaToken: '',
                SuccessPaymentUrl: window.location.protocol + "//" + window.location.host + '/successful-payment/',
                FailedPaymentUrl: window.location.protocol + "//" + window.location.host + '/failed-payment/',
            }, */
      // user: null,
      cardsTypes: [
        { id: 1, text: 'Студентську МКВ' },
        { id: 2, text: 'Учнівську МКВ' },
        { id: 3, text: 'Загальну МКВ' }
      ],
      paymentUrl: null
    }
  },
  props: {
    user: {
      required: true,
      type: Object
    },
    qrCode: {
      required: true,
      type: String
    },
    avatar: {
      required: true,
      type: String
    }
  },
  methods: {
    hideWindow () {
      this.$emit('hide')
    },
    async goToPayment () {
      const uid = this.user.orderUid
      const url = await this.$store.dispatch('getPaymentUrl', uid)
      if (url) {
        window.location.href = url
      }
    },
    getFormatedDate (value) {
      if (!value) return ''
      console.log(value)
      const date = moment(value)
      const day = date.date()
      const month = date.month()
      const year = date.year()
      return `${this.formatDate(day)}.${this.formatDate(month + 1)}.${year}`
    },
    formatDate (date) {
      return ('0' + date).slice(-2)
    },
    async generateQR (text) {
      try {
        const url = await QRCode.toDataURL(text)
        this.$refs.qr.src = url
        console.log(url)
      } catch (err) {
        console.error(err)
      }
    },
    async initAvatar (uid) {
      try {
        const img = await this.$store.dispatch('getUserPhotoForFailedPayment', uid)
        const urlCreator = window.URL || window.webkitURL
        this.$refs.avatar.src = urlCreator.createObjectURL(img)
      } catch (e) {
        console.warn(e)
      }
    },
    async initUser (uid) {
      this.user = await this.$store.dispatch('getUserDataByUid', uid)
    },
    printQuestionnaire () {
      window.print()
    }

  },
  components: {
    BaseButton,
    BaseDocument
  },
  async mounted () {
    // let uid = null;
    //
    // if (!this.user) {
    //     uid = this.getOrderUid;
    //     // await this.initUser(uid);
    // } else {
    //     uid = this.user.orderUid;
    // }
    //
    // await this.initAvatar(uid);
    //
    // this.generateQR(`http://et.vn.ua/4ec?key=${this.user.orderKey}pin=${this.user.orderPin}`);
  },
  destroyed () {
    // console.log('destroy confirm payment \nshould reset user-data');
    // this.$store.commit('setConfirmPaymentUserData', null);
  },
  computed: {
    ...mapGetters([
      'getUserGender',
      'getAdultOfficialDocument',
      'getPupilOfficialDocument',
      'getPrivilegeDocument',
      'getRepresentetiveRelationshipsList',
      'getUserRegion',
      'getCardType',
      'getOrderUid'
      // 'getOrderId',

    ]),
    ...mapGetters({
      // user: 'getConfirmPaymentUserData',

    }),
    getPersonOfficialDocument () {
      const type = this.user.personDocumentType
      return this.user.cardType === 2 ? this.getPupilOfficialDocument(type) : this.getAdultOfficialDocument(type)
    },
    signedPersonName () {
      return this.user.representativeLastName ? this.representativeName : this.personName
    },
    representativeName () {
      return `${this.user.representativeLastName} ${this.user.representativeName} ${this.user.representativeMiddleName || ''}`
    },
    personName () {
      return `${this.user.lastName} ${this.user.name} ${this.user.middleName || ''}`
    },
    personCardName () {
      return this.getCardType(this.user.cardType)
    },
    cardName () {
      return this.cardsTypes.find(item => item.id === this.user.cardType).text
    },
    signedPersonLastName () {
      return this.user.representativeLastName || this.user.lastName
    }

  }
}
