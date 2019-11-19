import { mapGetters } from 'vuex'

export default {
  computed: {
    curStep: {
      get: function () {
        return this.$store.getters.getQueueCurStep
      },
      set: function (value) {
        this.$store.state.queue.curStep = value
      }
    },
    ...mapGetters({
      'steps': 'getQueueSteps'
    })
  }

}
