<template>
    <default-window>
        <template v-slot:icon>
            <img :src="require(`@/assets/failed-payment.png`)" alt="failed icon">
        </template>
        <template v-slot:header>
            ПОМИЛКА ПРИ ОПЛАТІ,<br>
            НЕ ВДАЛОСЯ ОПЛАТИТИ РАХУНОК!
        </template>
        <template>
            Зверніться до свого банку чи спробуйте іншу картку!
        </template>
    </default-window>
</template>

<script>
import DefaultWindow from '../../DefaultWindow'

export default {
  components: {
    DefaultWindow
  },
  methods: {
    goTo4ec () {
      const key = this.$route.query.key.substr(0, 8)
      const pin = this.$route.query.key.substr(-4, 4)
      this.$router.push(`/4ec?key=${key}&pin=${pin}`)
    }
  }
}
</script>

<style scoped>

</style>
