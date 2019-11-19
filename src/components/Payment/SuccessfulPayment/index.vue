<template>
    <default-window @close="goTo4ec">
        <template v-slot:icon>
            <img :src="require(`@/assets/SuccessPayment.png`)" alt="successful icon">
        </template>
        <template v-slot:header>
            ОПЛАТА ПРОЙШЛА УСПІШНО!
        </template>
        <template>
            Після виготовлення Муніципальної картки вінничанина,
            Вам надійде лист на {{email}}
            з інформацією про можливість її отримання.
        </template>
    </default-window>
</template>

<script>
import DefaultWindow from '../../DefaultWindow'

export default {
  data () {
    return {
      email: ''
    }
  },
  components: {
    DefaultWindow
  },
  methods: {
    goTo4ec () {
      const key = this.$route.query.key.substr(0, 8)
      const pin = this.$route.query.key.substr(-4, 4)
      this.$router.push(`/4ec?key=${key}&pin=${pin}`)
    }
  },
  async created () {
    const key = this.$route.query.key.substr(0, 8)
    const pin = this.$route.query.key.substr(-4, 4)
    this.email = await this.$store.dispatch('getUserEmailByKey', { key, pin })
  }
}
</script>
