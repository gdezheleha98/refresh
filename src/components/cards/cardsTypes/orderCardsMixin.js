import { mapGetters } from 'vuex'

export default {
  methods: {
    navigateUrl (url) {
      if (url) {
        this.$router.push(url)
      }
    },
    orderCard (cardTypeId) {
      this.navigateUrl('/order-card/student')

      cardTypeId = Number(cardTypeId)

      this.$store.commit('setCardType', cardTypeId)

      switch (cardTypeId) {
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
    }
  },
  computed: {
    ...mapGetters({
      'STUDENT_ID': 'getStudentCardID',
      'PUPIL_ID': 'getPupilCardID',
      'MUNICIPAL_ID': 'getMunicipalCardID'
    })
  },
  mounted () {
    document.getElementById('main').scrollIntoView()
  }
}
