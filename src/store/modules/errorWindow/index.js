export default {
  state: {
    isErrorWindowShown: false
  },
  getters: {
    isErrorWindowShown (state) {
      return state.isErrorWindowShown
    }
  },
  mutations: {
    toggleErrorWindow (state, payload = false) {
      state.isErrorWindowShown = payload || !state.isErrorWindowShown
    }
  }
}
