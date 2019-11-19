<template>
    <div class="accept_coupon_wrap">
        <div class="accept_coupon">
            <h3 class="coupon_header">
                Ваш талон
            </h3>
            <div class="coupon_data">
                <p class="welcome fs-18">Ласкаво просимо</p>
                <p class="coupon_id fs-18">12456878987845123</p>
                <p class="coupon_details fs-16">
                    Заповнення заявки на видачу картки
                    для пільгових верств населення
                </p>
                <h3 class="pin_text">
                    ПІН-КОД
                </h3>
                <h3 class="pin_number">
                    5151
                </h3>
                <div class="user_name">
                    <h4>
                        ПІБ
                    </h4>
                    <h4>
                        {{$store.state.queue.fullName}}
                    </h4>
                </div>
                <div class="user_phone">
                    <h4>
                        Мобільний телефон
                    </h4>
                    <h4>
                        {{$store.state.queue.phoneNumber}}
                    </h4>
                </div>

                <p class="coupon_default_style">УВАГА</p>
                <p class="coupon_write">Ви записані на:</p>
                <p class="coupon_date">{{formatedSelectedDate}}</p>
                <p class="coupon_date_time">{{formatTime}}</p>
                <p class="coupon_default_style">Адреса філії:</p>
                <p class="coupon_default_style office">
                    Центральний офіс - м. Вінниця, вул. Соборна,
                    буд. 36
                </p>
                <div class="coupon_confirm">
                    <p>
                        Реєстрацію необхідно підтвердити на терміналі відділення в
                        інтервалі {{confirmTime}}
                    </p>
                </div>
                <div class="coupon_giving_time">
                    <p>{{currentDate}}</p>
                    <p>{{currentTime}}</p>
                </div>
                <!--</div>-->
            </div>
            <button class="save">
                Зберегти
            </button>
            <div class="email_address">
                <h4>
                    Адреса електронної пошти
                </h4>
                <input
                        type="email"
                        placeholder="e-mail"
                        v-validate="'required|email'"
                        ref="queueEmail"
                        name="queueEmail"
                >
                <span class="error-msg">{{ errors.first('queueEmail') }}</span>
                <button class="send_email">
                    Відправити
                </button>
            </div>
            <button class="print">
                Роздрукувати
            </button>
        </div>

    </div>
</template>

<script>
export default {
  data () {
    return {
      MONTHS: ['Січня', 'Лютого', 'Березня', 'Квітня', 'Травня', 'Червня', 'Липня', 'Серпня', 'Вересня', 'Жовтня', 'Листопада', 'Грудня']

    }
  },
  methods: {
    formatDate (date) {
      return ('0' + date).slice(-2)
    }
  },
  computed: {
    formatedSelectedDate () {
      const date = this.formatDate(this.$store.getters.getSelectedDate.getDate())
      const month = this.MONTHS[this.$store.getters.getSelectedDate.getMonth()]
      const year = this.$store.getters.getSelectedDate.getFullYear()
      return `${date} ${month} ${year}`
    },
    formatTime () {
      let time = this.$store.getters.getSelectedTime
      let d2 = new Date()
      d2.setHours(time.slice(0, 2), +time.slice(3) + 20)
      return `з ${time} до ${this.formatDate(d2.getHours())}:${this.formatDate(d2.getMinutes())}`
    },
    confirmTime () {
      let time = this.$store.getters.getSelectedTime
      let d1 = new Date()
      d1.setHours(time.slice(0, 2), +time.slice(3) - 20)
      let d2 = new Date()
      d2.setHours(time.slice(0, 2), +time.slice(3) + 5)
      return `${this.formatDate(d1.getHours())}:${this.formatDate(d1.getMinutes())} - ${this.formatDate(d2.getHours())}:${this.formatDate(d2.getMinutes())}`
    },
    currentDate () {
      let date = new Date()
      return `${this.formatDate(date.getDate())}.${this.formatDate(date.getMonth() + 1)}.${date.getFullYear()}`
    },
    currentTime () {
      let date = new Date()
      return `${this.formatDate(date.getHours())}:${this.formatDate(date.getMinutes())}`
    }
  }
}
</script>

<style scoped lang="scss" src="./couponStyles.scss"></style>
