<template>
    <div>
        <base-input
                class="mb-1"
                v-model="middleName"
                :reference="reference + 'Input'"
                text="По батькові"
                :validation="{required: !absentMiddleName, max: 50, regex: /^[а-яієїґ \']+$/i}"
                :hint="$store.getters.getMiddleNameHint"
                :disabled="absentMiddleName"
        >
        </base-input>
        <base-checkbox
                class="mb-3 middle-name__ch"
                v-model="absentMiddleName"
                @change="resetValue"
                :reference="reference"
                :validation="{}"
                text="Підтверджую, по батькові не використовується"
        ></base-checkbox>
    </div>
</template>

<script>
import BaseCheckbox from '../../BaseComponents/BaseCheckbox'
import BaseInput from '../../BaseComponents/BaseInput'

export default {
  data () {
    return {
      absentMiddleName: false
    }
  },
  inject: ['$validator'],
  methods: {
    resetValue (checked) {
      if (checked) {
        this.middleName = ''
      }
      // this.$validator.validate(this.reference + 'Input');
    }
  },
  props: {
    value: {
      required: true,
      type: String
    },
    reference: {
      type: String,
      required: true
    }
  },
  components: {
    BaseInput,
    BaseCheckbox
  },
  computed: {
    middleName: {
      set (val) {
        this.$emit('input', val)
      },
      get () {
        return this.value
      }
    }
    // absentMiddleName: {
    //     set(value) {
    //         this.value = '';
    //     },
    //     get() {
    //         return this.value
    //     }
    // }
  }
}
</script>

<style scoped>
    .middle-name__ch {
        margin-left: 6px;
    }
</style>
