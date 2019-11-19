<template>
    <div>
        <base-select
                v-if="user.cardType === $store.getters.getPupilCardID"
                text="Індивідуальний податковий номер"
                :list="$store.getters.taxNumbers"
                reference="taxNumbers"
                v-model="user.personTaxNumberType"
                @input="resetIPN"
        ></base-select>
        <user-input
                class="mb-1"
                text="Індивідуальний податковий номер"
                :reference="reference"
                v-model="user.personTaxNumber"
                :validation="{required: receivedId, numeric: true, length: 10}"
                :disabled="!receivedId"
                :hint="$store.getters.getIPNHint"

        ></user-input>
        <!--:disabled="user.personTaxNumberType !== '0'"-->
        <!--user.personTaxNumberType == '0' ? true : false-->
        <base-checkbox
                class="cancel-ipn mb-3"
                v-if="user.cardType !== $store.getters.getPupilCardID"
                text="Відмова від ІПН за релігійними переконаннями, підтверджена відміткою у паспорті"
                reference="cancelIPN"
                v-model="cancelIPN"
        ></base-checkbox>
    </div>
</template>

<script>
import UserInput from '../BaseInput'
import BaseCheckbox from '../BaseCheckbox'
import BaseSelect from '../BaseSelect'

export default {
  data () {
    return {
      cancelIPN: false
    }
  },
  inject: ['$validator'],
  props: {
    reference: {
      type: String,
      required: true
    }
  },
  methods: {
    resetIPN () {
      this.user.personTaxNumber = ''
    }
  },
  computed: {
    user () {
      return this.$store.getters.getUser
    },
    receivedId () {
      return this.$store.getters.getReceivedTaxNumberID === this.user.personTaxNumberType
    }
  },
  components: {
    UserInput,
    BaseCheckbox,
    BaseSelect
  },
  watch: {
    cancelIPN: function (newVal, oldVal) {
      // debugger;
      if (newVal) {
        this.user.personTaxNumberType = this.$store.getters.getAbandonedTaxNumberID
        this.resetIPN()
      } else {
        this.user.personTaxNumberType = this.$store.getters.getReceivedTaxNumberID
      }
    }
  }
}
</script>

<style scoped>
    .cancel-ipn {
        margin-left: 8px;
    }
</style>
