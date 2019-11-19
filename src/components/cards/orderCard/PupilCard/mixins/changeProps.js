export default {
  methods: {
    changeProp (value, key, objKey) {
      this.$emit('changeProp', { value, key, objKey })
    }
  }
}
