import { mapGetters } from 'vuex'
import VueRecaptcha from 'vue-recaptcha'
// import DatePicker from 'vuejs-datepicker';
import { ru, uk } from 'vuejs-datepicker/dist/locale'
import ImageClip from '../../../commonComponents/ImageClip'
import UserSelect from '../BaseComponents/BaseSelect'
import DatePicker from '../BaseComponents/DatePicker'
import UserInput from '../BaseComponents/BaseInput'
import BaseCheckbox from '../BaseComponents/BaseCheckbox'
import BaseButton from '../BaseComponents/BaseButton'
import PhoneNumber from '../BaseComponents/PhoneNumber'
import IdTaxes from '../BaseComponents/IdTaxes'
import ConsentCheckboxes from '../OrderCardComponents/ConsentCheckboxes'
import MiddleName from '../OrderCardComponents/MiddleName'

import PersonalInfo from '../OrderCardComponents/PersonalInfo'
import AdultOffDoc from '../OrderCardComponents/AdultOfficialDocument'
import EducationalOrganization from '../OrderCardComponents/EducationalOrganization'
import PrivilegeDocument from '../OrderCardComponents/PrivilegeDocument'
import PersonContacts from '../OrderCardComponents/PersonContacts'
import PersonAddress from '../OrderCardComponents/PersonAddress'
import PupilOffDoc from '../OrderCardComponents/PupilOfficialDocument'
import RepresentativeInfo from '../OrderCardComponents/RepresentativeInfo'
import RepresentativeOffDoc from '../OrderCardComponents/RepresentativeOfficialDocument'

export default {
  components: {
    VueRecaptcha,
    DatePicker,
    ImageClip,
    UserSelect,
    BaseCheckbox,
    BaseButton,
    UserInput,
    PhoneNumber,
    IdTaxes,
    ConsentCheckboxes,
    MiddleName,
    PersonalInfo,
    AdultOffDoc,
    EducationalOrganization,
    PrivilegeDocument,
    PersonContacts,
    PersonAddress,
    PupilOffDoc,
    RepresentativeInfo,
    RepresentativeOffDoc

  },
  data () {
    return {
      sitekey: '6LeoV5UUAAAAAFD_zRbmvWN39iaauAedDlfAFezD',
      fileValidation: {
        isValidFile: false,
        isDirtyFile: false
      },
      cancelIPN: false,
      isFormSubmitting: false
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser',
      studentPrivilegeDocumentType: 'studentPrivilegeDocumentType',
      getStudentPrivilegeDocument: 'studentPrivilegeDocument',
      pupilPrivilegeDocument: 'pupilPrivilegeDocument',
      getPupilPrivilegeDocumentID: 'getPupilPrivilegeDocumentID'
    }),
    requiredRepresentative () {
      const birthDate = new Date(this.user.personDateOfBirth)
      const today = new Date()
      const adultChildYears = 18

      birthDate.setFullYear(birthDate.getFullYear() + adultChildYears)
      birthDate.setDate(birthDate.getDate())

      return +birthDate > +today
    }
  },
  methods: {
    savePersonImage (data) {
      console.log(data)
      this.$store.getters.getUser.personPhoto = data
    },
    enableSubmitButton () {
      this.isFormSubmitting = false
    },
    disableSubmitButton () {
      this.isFormSubmitting = true
    },
    validateForm () {
      this.disableSubmitButton()

      Promise.all(
        this.$children.map(item => {
          return item.$validator.validateAll()
            .then(result => {
              if (!result) {
                console.log(item.$validator.errors.items[0].field)
                this.$el.querySelector('#' + item.$validator.errors.items[0].field).scrollIntoView({
                  behavior: 'smooth',
                  block: 'center'
                })
                return false
              } else {
                return true
              }
            })
            .catch(err => console.error(err))
        }))
        .then(result => {
          if (this.fileValidation.isValidFile === false) {
            this.fileValidation.isDirtyFile = true
            result.push(false)
            this.$el.querySelector('#image-clipper').scrollIntoView({
              behavior: 'smooth',
              block: 'center'
            })
          }
          return result
        })
        .then(result => {
          // filter all valid values
          result = result.filter(el => !el)

          if (result.length === 0) {
            console.log('Valid form')
            // when recaptcha executes - user data will be send
            this.$refs.recaptcha.execute()
          } else {
            this.enableSubmitButton()
          }
        })
    },

    onCaptchaExpired () {
      console.log('Captcha Expired')
      this.$refs.recaptcha.reset()
    },

    register (recaptchaToken) {
      // send data with token
      console.log('Recaptcha successfuly submited')
      this.$store.getters.getUser.recaptchaToken = recaptchaToken
      this.orderCard()
    },

    validate () {
      // если с валидацией наших полей все хорошо, запускаем каптчу
      if (this.validateForm()) {
        this.$refs.recaptcha.execute()
      }
    },

    sendData (recaptchaToken) {
      var formData = new FormData()

      formData.append('firstName', this.firstName)
      formData.append('secondName', this.secondName)

      formData.append('img', this.blobResult)

      formData.append('recaptchaToken', recaptchaToken)

      // failed, form data dont send in the body
      fetch('http://et.vn.ua', {
        method: 'POST',
        // headers: {
        //     'Access-Control-Allow-Origin':'*',
        //     // 'Content-Type': 'multipart/form-data',
        //     'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        //     'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        // },
        body: formData
      })
        .then(response => {
          console.log(response)
        })
        .catch(err => {
          console.error(err)
        })
    },

    orderCard () {
      // debugger;
      this.$store.dispatch('sendUserData')
    },

    transformSeries (value) {
      this.user.personDocumentSeries = value.toUpperCase()
    }
  },
  watch: {
    // эта функция запускается при любом изменении вопроса
    cancelIPN: function (newVal, oldVal) {
      // debugger;
      if (newVal) {
        this.user.personTaxNumberType = '1'
      } else {
        this.user.personTaxNumberType = '0'
      }
    }
  },
  beforeMount () {
    this.$store.commit('setCardType', this.$route.meta.index)
  },
  mounted () {
    document.getElementById('main').scrollIntoView()
  }

}
