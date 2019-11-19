export default {
  methods: {
    changeRoute (target) {
      if (target.dataset.url) {
        this.$router.push(target.dataset.url)
        if (window.innerWidth < 991) { this.$refs.toggleButton.click() }
      }
    }
  },
  computed: {
    currentRoute () {
      return this.$route.path
    }
  }
}
