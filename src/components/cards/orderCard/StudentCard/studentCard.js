import cardMixin from '../mixin/commonCardsLogic'

export default {
  mixins: [cardMixin],
  methods: {
    enterEducationalOrganization (value) {
      const type = this.$store.getters.getCurrentUniversityType(value)
      this.$store.commit('setStudentPrivilageDocumentType', type)
      this.user.educationUniversity = value
    }
  },
  computed: {
    studentPrivilegeDocument () {
      return this.studentPrivilegeDocumentType === '1' ? this.getStudentPrivilegeDocument : this.pupilPrivilegeDocument
    },
    studentPrivilegeDocumentValue () {
      return this.studentPrivilegeDocument[0].id
    }
  }
}
