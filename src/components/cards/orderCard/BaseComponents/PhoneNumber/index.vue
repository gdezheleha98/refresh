<template>
    <base-input
            :value="value"
            @input="saveValue"
            :reference="reference"
            :text="text"
            mask="+380 (##) ###-##-##"
            placeholder="+380 (__) ___-__-__"
            :validation="validation"
    >
    </base-input>
</template>

<script>
import BaseInput from '../BaseInput'
export default {
  components: {
    BaseInput
  },
  inject: ['$validator'],
  props: {
    value: {
      required: true,
      type: String
    },
    reference: {
      required: true,
      type: String
    },
    text: {
      required: true,
      type: String
    },
    validation: {
      default: () => {
        return { required: true, length: 19 }
      },
      type: Object
    },
    mask: String

  },
  methods: {
    saveValue (value) {
      this.$emit('input', value)
    }

  },
  computed: {
    phoneMask () {
      return ['+', '3', '8', '0', ' ', '(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]
    }
  }
}
</script>

<style scoped>

</style>
