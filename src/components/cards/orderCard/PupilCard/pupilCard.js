import cardMixin from '../mixin/commonCardsLogic'

export default {
  mixins: [cardMixin],
  methods: {
    // transformSeries(value) {
    //     this.user.personDocumentSeries = value.toUpperCase();
    // },
    enterEducationalOrganization (value) {
      this.user.educationSchool = value
    }
  },
  computed: {

  },
  created () {

  }
}
