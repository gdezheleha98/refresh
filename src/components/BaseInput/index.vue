<template>
    <div class="form-group base-input">
        <label :for="reference" :class="[validation && validation.required && text ? 'asterisk' : '']">{{text}}</label>
        <!-- autocomplete="off"-->
        <input
                v-if="mask"
                v-mask="mask"
                type="text"
                :class="['form-control',validation && validation.required ? 'required-field' : '']"
                :id="reference"
                :placeholder="placeholder"
                :ref="reference"
                :value="value"
                @input="$emit('input', $event.target.value)"
                :name="reference"
                v-validate="validation"
                :readonly="readonly"
                :disabled="disabled"

        >
        <input
                v-else
                type="text"
                :class="['form-control',validation && validation.required ? 'required-field' : '']"
                :id="reference"
                :placeholder="placeholder"
                :ref="reference"
                :value="value"
                @input="$emit('input', $event.target.value)"
                :name="reference"
                v-validate="validation"
                :readonly="readonly"
                :disabled="disabled"

        >
        <p class="hints" v-if="isShownHint">{{hint}}</p>
        <span class="error-msg">{{errors.first(reference)}}</span>
    </div>
</template>

<script>
// import MaskedInput from 'vue-text-mask'

export default {
  // components: {
  //     MaskedInput,
  // },
  data () {
    return {
      // dirty: false,
    }
  },
  inject: ['$validator'],
  methods: {
    saveInfo (val) {
      this.$emit('input', val)
    }
  },
  props: {
    hint: {
      type: String
    },
    text: {
      type: String,
      required: true
    },
    reference: {
      type: String,
      required: true
    },
    value: String,
    readonly: {
      default: false,
      type: Boolean
    },
    validation: {
      type: Object

    },
    placeholder: {
      type: String

    },
    mask: {
      type: String,
      default: null
    },
    disabled: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    dirty () {
      if (this.$validator.fields.find({ name: this.reference })) { return this.$validator.fields.find({ name: this.reference }).flags.dirty }
      return false
    },
    valid () {
      if (this.$validator.fields.find({ name: this.reference })) { return this.$validator.fields.find({ name: this.reference }).flags.valid }
      return false
    },
    untouched () {
      if (this.$validator.fields.find({ name: this.reference })) { return this.$validator.fields.find({ name: this.reference }).flags.touched }
      return false
    },
    isShownHint () {
      return this.hint && !this.errors.has(this.reference) && (!this.dirty || this.untouched) && !this.valid
    }
  }
}
</script>

<style scoped lang="scss">
    .base-input {
        width: 100%;

        label {
            color: #434343;
            font-family: "Century Gothic";
            font-size: 16px;
            font-weight: 700;
            line-height: 27px;
        }
    }

    input {
        height: 36px;
    }

    .asterisk {
        &::after {
            content: "*";
            color: #b44284;
            font-family: Calibri;
            font-weight: 400;
            font-size: 16px;
            /*float: left;*/
        }
    }

    .required-field {
        border-color: #9db488;
    }
</style>
