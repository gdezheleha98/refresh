<template>
    <div class="new_visit">
        <h3>Новий візит</h3>
        <div class="data">
            <h4>Дата:</h4>
            <p>{{formatedSelectedDate}}</p>
        </div>
        <div class="time">
            <h4>Час:</h4>
            <p>{{formatTime}}</p>
        </div>
        <div class="address">
            <h4>Адреса філії:</h4>
            <p>
                Центральний офіс - м. Вінниця, Соборна, буд. 36
            </p>
        </div>
        <p class="notes">
            Якщо Вам не зручно відвідати нас у цей час,
            Ви можете повернутись назад і вибрати інші
            центр обслуговування або час
        </p>
        <button class="go_back" @click="goBack">
            Назад
        </button>
        <button class="create_visit" @click="createVisit">
            Створити візит
        </button>
    </div>
</template>

<script>
import getterMixin from '../../../mixin/getterMixin'

export default {
  mixins: [getterMixin],
  methods: {
    goBack () {
      // this.curStep = this.steps.SELECT_DATE_STEP;
      this.$store.commit('setCurrentStep', this.steps.SELECT_DATE_STEP)
    },
    createVisit () {
      // go next step
      // this.curStep = this.steps.ACCEPT_COUPON_STEP;
      this.$store.commit('setCurrentStep', this.steps.ACCEPT_COUPON_STEP)
    },
    formatDate (date) {
      return ('0' + date).slice(-2)
    }
  },
  computed: {
    formatedSelectedDate () {
      const date = this.formatDate(this.$store.getters.getSelectedDate.getDate())
      const month = this.formatDate(this.$store.getters.getSelectedDate.getMonth() + 1)
      const year = this.$store.getters.getSelectedDate.getFullYear()
      return `${date}.${month}.${year}`
    },
    formatTime () {
      let time = this.$store.getters.getSelectedTime
      let d2 = new Date()
      d2.setHours(time.slice(0, 2), +time.slice(3) + 20)
      return `з ${time} до ${this.formatDate(d2.getHours())}:${this.formatDate(d2.getMinutes())}`
    }
  }
}
</script>

<style scoped lang="scss">
    .new_visit {
        margin-top: 10px;
        width: 100%;
        max-width: 360px;
        border: 1px solid #b4b4b4;
        background-color: #fff;
        border-top: none;

        h3 {
            padding: 0;
            margin: 0;
            color: #325114;
            font-family: "Century Gothic";
            font-size: 21px;
            font-weight: 700;
            line-height: 27px;
            margin-left: -1px;
            border: 1px solid #94ac7a;
            background-color: #e8f2e0;
            width: calc(100% + 2px);
            text-align: center;
            padding: 17px 0;
        }

        .data, .time, .address {
            display: flex;
            margin: 0;
            padding: 25px 30px 0 50px;

            h4 {
                color: #434343;
                font-family: "Century Gothic";
                font-size: 18px;
                font-weight: 700;
                /*line-height: 27px;*/
                padding: 0;
                margin: 0;
                padding-right: 7px;
                line-height: 20px;
            }

            p {
                /*margin-left: 7px;*/
                color: #434343;
                font-family: "Century Gothic";
                font-size: 18px;
                font-weight: 400;
                line-height: 20px;
                padding: 0;
                margin: 0;
                /*line-height: 27px;*/
            }
        }

        .data {
            padding-top: 50px;
        }

        .address {
            display: block;
        }

        .notes {
            color: #434343;
            font-family: Calibri;
            font-size: 16px;
            font-weight: 400;
            line-height: 20px;
            padding: 30px;
            margin: 0;
        }

        button {
            font-family: "Century Gothic";
            font-size: 16px;
            line-height: 16px;
            border: 1px solid #b54285;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
            font-weight: 700;
            width: calc(100% - 80px);
            margin: 20px 40px 0;
            padding: 9px 0;
            -webkit-transition: all 0.3s;
            -moz-transition: all 0.3s;
            -ms-transition: all 0.3s;
            -o-transition: all 0.3s;
            transition: all 0.3s;

            &:hover {
                color: #efefef;
                background-color: #d967a7;
            }
        }

        .go_back {

            font-weight: 700;
            color: #434343;
            background-color: #fff;

            /*border-color: #b54285;*/
        }

        .create_visit {
            color: #efefef;
            background-color: #b54285;
            margin-bottom: 35px;
            /*border-color: #ba4e8d;*/
        }
    }

</style>
