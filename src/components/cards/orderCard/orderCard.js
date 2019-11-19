import BaseSelect from './BaseComponents/BaseSelect'
import OrderAccepted from './OrderAccepted'
// import BaseModal from './BaseComponents/BaseModal'
import { mapGetters } from 'vuex'
import DefaultWindow from '../../DefaultWindow'

export default {
  data () {
    return {
      isShownModal: false,
      selectedCard: 1
    }
  },
  methods: {
    changeCurrentCard () {
      switch (this.selectedCard) {
        case this.STUDENT_ID:
          this.$router.push('/order-card/student')
          break
        case this.PUPIL_ID:
          this.$router.push('/order-card/pupil')
          break
        case this.MUNICIPAL_ID:
          this.$router.push('/order-card/municipal')
          break
      }
      this.$store.commit('setCardType', this.selectedCard)
    },
    hideModal () {
      this.isShownModal = false
      this.changeCurrentCard()
      this.$store.commit('resetUser')
    },
    selectCard (value) {
      this.selectedCard = Number(value)
    }

  },
  computed: {
    ...mapGetters({
      'STUDENT_ID': 'getStudentCardID',
      'PUPIL_ID': 'getPupilCardID',
      'MUNICIPAL_ID': 'getMunicipalCardID',
      'cardType': 'getCurrentCardType'
    })
  },
  components: {
    BaseSelect,
    // BaseModal,
    DefaultWindow,
    OrderAccepted
  },
  mounted () {
    console.log('Mounted')
    if (this.$route.path === '/order-card') {
      console.log('ShouldShow')
      this.isShownModal = true
    }
  },
  updated () {
    console.log('Updated')
    if (this.$route.path === '/order-card') {
      console.log('ShouldShow')
      this.isShownModal = true
    }
  }
}
