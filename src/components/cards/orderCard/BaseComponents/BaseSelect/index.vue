<template>
    <div class="form-group base-select">
        <label :for="reference" :class="[validation && validation.required && text ? 'asterisk' : '']">{{text}}</label>
        <p v-if="additionalInfo">{{additionalInfo}}</p>
        <select
                :id="reference"
                :class="['form-control',validation && validation.required ? 'required-field' : '']"
                :value="value"
                @input="passToParent"
                :ref="reference"
                :name="reference"
                v-validate="validation"
                data-vv-validate-on="input"
                :disabled="disabled"
        >
            <option
                    v-for="(elem, index) in list"
                    :value="elem.id"
                    :key="index"
            >
                {{elem.text}}
            </option>
        </select>
        <span class="error-msg">{{errors.first(reference)}}</span>
    </div>
</template>

<script>
export default {
  inject: ['$validator'],
  props: {
    reference: {
      required: true,
      type: String
    },
    value: [String, Number],
    list: {
      type: Array,
      required: true
    },
    validation: {
      default: function () {
        return { required: true, excluded: [-1] }
      }
    },
    text: {
      type: String,
      required: true
    },
    additionalInfo: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    }

  },
  methods: {
    passToParent (event) {
      this.$emit('input', event.target.value)
    }

  }
}
</script>

<style scoped lang="scss">
    .base-select {
        width: 100%;

        label {
            color: #434343;
            font-family: "Century Gothic";
            font-size: 16px;
            font-weight: 700;
            line-height: 27px;
        }

        p {
            color: #434343;
            font-family: "Century Gothic";
            font-size: 12px;
            font-weight: 400;
            /*line-height: 27px;*/
        }

        select {
            color: #434343;
            font-family: Calibri;
            font-size: 16px;
            font-weight: 400;
            height: 36px;
        }
    }

    .required-field {
        border-color: #9db488;
    }

</style>
