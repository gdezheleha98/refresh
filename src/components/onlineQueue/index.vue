<template>
    <div class="online_queue">
        <!--<div class="row">
            <h2>Запишіться до електронної черги</h2>
            <form class="queue_content">
                <div class="queue_progress_wrap">
                    <div
                            class="queue_progress"
                            :class="[curStep === steps.REGISTRATION_STEP ? 'progress_first' : '',
                            curStep === steps.SELECT_DATE_STEP  ? 'progress_second' : '',
                            curStep === steps.VISIT_DATA_STEP ? 'progress_second' : '',
                            curStep === steps.ACCEPT_COUPON_STEP ? 'progress_third' : '']"
                    >
                        <div class="first" @click="goPrev(1)">
                            <p>1</p>
                        </div>
                        <div class="second" @click="goPrev(2)">
                            <p>2</p>
                        </div>
                        <div class="third" @click="goPrev(4)">
                            <p>3</p>
                        </div>
                        <div class="show_progress">

                        </div>
                    </div>
                </div>
                <user-registration v-if="steps.REGISTRATION_STEP === curStep"></user-registration>
                <select-date
                        v-else-if="curStep === steps.SELECT_DATE_STEP || curStep === steps.VISIT_DATA_STEP"
                >
                </select-date>
                <accept-coupon
                        v-else-if="curStep === steps.ACCEPT_COUPON_STEP"
                ></accept-coupon>
            </form>
            <nav-button v-if="curStep === steps.REGISTRATION_STEP || curStep === steps.SELECT_DATE_STEP"></nav-button>
        </div>-->
        <iframe src="http://176.102.49.157:30080/registration.html" frameborder="0" width="100%" height="500px"></iframe>
    </div>
</template>

<script>
import selectDate from './steps/selectDate'
import userRegistration from './steps/userRegistration'
import acceptCoupon from './steps/acceptCoupon'
// import {mapGetters} from 'vuex'
import getterMixin from './mixin/getterMixin'
import navButton from './navButton'

export default {
  data () {
    return {
      places: [
        'Соборна, 36 - Центральний офіс'
      ],
      selectedPlace: 1,
      headers: [
        'Запишіться до електронної черги',
        'Оберіть доступні дату та час відвідування',
        'Підтвердження'
      ],
      navBtn: [
        'Підтвердити',
        'Назад'
      ]
      // steps: {
      //     REGISTRATION_STEP: 1,
      //     SELECT_DATE_STEP: 2,
      //     VISIT_DATA_STEP: 3,
      //     ACCEPT_COUPON_STEP: 4,
      // },
      // curStep: 1,
    }
  },
  methods: {
    goPrev (val) {
      // if (val < this.$store.state.queue.curStep)
      this.$store.commit('setCurrentStep', val)
    }
  },
  mixins: [getterMixin],
  components: {
    selectDate,
    userRegistration,
    acceptCoupon,
    navButton
  }

}
</script>

<style src="./selectic.scss" lang="scss"></style>

<style src="./queueStyles.scss" lang="scss"></style>
