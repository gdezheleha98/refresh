export default {
  state: {
    queue: {
      steps: {
        REGISTRATION_STEP: 1,
        SELECT_DATE_STEP: 2,
        VISIT_DATA_STEP: 3,
        ACCEPT_COUPON_STEP: 4
      },
      curStep: 1,
      selectedAction: null,
      phoneNumber: '+380',
      fullName: '',
      selectedDate: null,
      selectedTime: null,
      formatedTime: null

    }
  },
  getters: {
    getQueueCurStep (state) {
      return state.queue.curStep
    },
    getQueueSteps (state) {
      return state.queue.steps
    },
    getQueueInfo (state) {
      return state.queue
    },
    getSelectedDate (state) {
      return state.queue.selectedDate
    },
    getSelectedTime (state) {
      return state.queue.selectedTime
    }
  },
  mutations: {
    setCurrentStep (state, payload) {
      state.queue.curStep = payload
    },
    selectAction (state, payload) {
      state.queue.selectedAction = payload
    },
    selectTime (state, payload) {
      state.queue.selectedTime = payload
    },
    selectDate (state, payload) {
      state.queue.selectedDate = payload
    }
  }
}
