<template>
    <div class="select_date">
        <div class="calendar">
            <h3>Оберіть доступну дату</h3>
            <div class="calendar_slider">
                <carousel
                        :perPageCustom="[[375, 2],[520, 3], [750, 4], [996, 6]]"
                        :navigationEnabled="true"
                        :paginationEnabled="false"
                        :navigationClickTargetSize="1"
                        :scrollPerPage="true"
                >
                    <slide v-for="n in 60" :key="n">
                        <div class="calendar_date_wrap">
                            <div
                                    class="calendar_date"
                                    :class="[n - 1 === selectedDateIndex ? 'active' : '']"
                                    @click="selectDate(n - 1)"
                            >
                                <!--<img :src="require('../../../../assets/' + (n === 5 ? 'active-' : '') + 'calendar.png')" alt="">-->
                                <img :src="require('../../../../assets/CalendarTop' + (n - 1 !== selectedDateIndex ? 'Gray' : '' )+ '.png')"
                                     alt="">
                                <p class="month">{{MONTHS[currentDate.addDays(n - 1).getMonth()]}}</p>
                                <div class="week_day_wrap">
                                    <p class="week_day">{{WEEK_DAYS[currentDate.addDays(n - 1).getDay()]}}</p>
                                </div>
                                <p class="date_num">{{currentDate.addDays(n - 1).getDate()}}</p>
                            </div>
                        </div>
                    </slide>
                </carousel>
            </div>
        </div>
        <visit-time
                v-if="curStep === steps.SELECT_DATE_STEP"
                :selectedDate="$store.getters.getSelectedDate && formatedSelectedDate"
        ></visit-time>
        <new-visit v-else></new-visit>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import newVisit from './newVisit'
import visitTime from './visitTime'
import getMixin from '../../mixin/getterMixin'

export default {
  data () {
    return {
      showNewVisit: false,
      WEEK_DAYS: ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота'],
      MONTHS: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
      // selectedDate: null,
      selectedDateIndex: 0
    }
  },
  methods: {
    selectDate (num) {
      this.$store.getters.getSelectedDate = this.currentDate.addDays(num)
      this.$store.commit('selectDate', this.currentDate.addDays(num))
      this.selectedDateIndex = num
    },
    formatDate (date) {
      return ('0' + date).slice(-2)
    }
  },
  mixins: [getMixin],
  components: {
    Carousel,
    Slide,
    newVisit,
    visitTime
  },
  computed: {
    currentDate () {
      return new Date()
    },
    formatedSelectedDate () {
      const date = this.formatDate(this.$store.getters.getSelectedDate.getDate())
      const month = this.formatDate(this.$store.getters.getSelectedDate.getMonth() + 1)
      const year = this.$store.getters.getSelectedDate.getFullYear()
      return `${date}.${month}.${year}`
    }

  },
  created () {
    Date.prototype.addDays = function (days) {
      var date = new Date(this.valueOf())
      date.setDate(date.getDate() + days)
      return date
    }
    // this.$store.state.selectedDate = this.currentDate;
    this.$store.commit('selectDate', this.currentDate)
    // this.selectedDateIndex = ;
  }
}
</script>

<style scoped lang="scss" src="./visitTimeStyles.scss"></style>
