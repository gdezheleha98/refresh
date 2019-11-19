export default {
  state: {
    isShownIndicator: false,
    indicatorText: 'Виконується перевірка введених даних'
  },
  getters: {
    isShownIndicator (state) {
      return state.isShownIndicator
    },
    indicatorText (state) {
      return state.indicatorText
    }
  },
  mutations: {
    toggleLoadingIndicator (state) {
      state.isShownIndicator = !state.isShownIndicator
    }
  }
}
