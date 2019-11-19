<template>
    <default-window>
        <template v-slot:icon>
            <img :src="require(`@/assets/successful.svg`)" alt="Successful icon">
        </template>
        <template v-slot:header>
            Замовлення прийнято!
        </template>
        <template>
            Після перевірки вам надійде лист на {{$store.getters.getUser.personEmail}}
            з посиланням для оплати замовленної картки.
        </template>
    </default-window>
</template>

<script>
import DefaultWindow from '../../../DefaultWindow'

export default {
  components: {
    DefaultWindow
  }
}
</script>
