import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  },
  methods: {
    transformSeries (prop, value) {
      console.log(prop)
      console.log(value)
      this.user[prop] = value.toUpperCase()
      console.log(this.user[prop])
    }
  }
}
