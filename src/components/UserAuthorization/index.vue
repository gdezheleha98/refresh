<template>
    <div class="user-authorization">
        <form action="" @submit.prevent="getForm">
            <base-input
                    text="Введіть номер замовлення"
                    v-model="orderNumber"
                    reference="orderNumber"
                    :validation="{required: true, digits: 8}"
                    mask="########"
            >
            </base-input>
            <base-input
                    text="Введіть ПІН"
                    v-model="pin"
                    reference="authPin"
                    :validation="{required: true, digits: 4}"
                    mask="####"
            >
            </base-input>
            <base-button class="btn">
                Ok
            </base-button>
        </form>
    </div>
</template>

<script>
import BaseButton from '../BaseButton'
import BaseInput from '../BaseInput'

export default {
  data () {
    return {
      pin: '',
      orderNumber: ''
    }
  },
  methods: {
    async getForm () {
      this.$store.dispatch('getUserDataByKey', { key: this.orderNumber, pin: this.pin })
    }
  },
  computed: {

  },
  components: {
    BaseButton,
    BaseInput
  },
  created () {
    console.log(this.$route)
    const key = this.$route.query.key
    const pin = this.$route.query.pin
    if (key && pin) {
      this.orderNumber = key
      this.pin = pin
      this.$store.dispatch('getUserDataByKey', { key: this.orderNumber, pin: this.pin })
    }
  }
}
</script>

<style scoped lang="scss">
    .user-authorization {
        width: calc(100% - 20px);
        display: flex;
        justify-content: center;
        padding: 50px 20px;

        form {
            width: 100%;
            max-width: 400px;

        }

        .btn {
            margin-top: 20px;
            float: right;
            max-width: 150px;
        }
    }
</style>
