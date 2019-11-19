<template>
    <div @change="changeConsentStatus" class="confirm-checkboxes">
        <base-checkbox
                class="allow-personal-data mb-3"
                text="Даю згоду на перевірку і обробку, збір, включаючи систематизацію, накопичення, зберігання, уточнення (оновлення, зміну), використання, знеособлення, блокування, знищення персональних даних."
                reference="allowPersonalInfo"
                v-model="personalDataConsent1"
                :validation="{required: true}"
        >
        </base-checkbox>
        <base-checkbox
                class="allow-personal-data"
                text=" Погоджуюсь, що неправдиві відомості, повідомлені про себе , можуть спричинити відмову щодо мене у видачі карти ."
                reference="allowPersonalInfo2"
                v-model="personalDataConsent2"
                :validation="{required: true}"
        >
        </base-checkbox>
    </div>
</template>

<script>
import BaseCheckbox from '../../BaseComponents/BaseCheckbox'

export default {
  components: {
    BaseCheckbox
  },
  data () {
    return {
      personalDataConsent1: false,
      personalDataConsent2: false
    }
  },
  inject: ['$validator'],
  methods: {
    changeConsentStatus () {
      let result = false
      if (this.personalDataConsent1 && this.personalDataConsent2) {
        result = true
      }
      this.$emit('input', result)
      console.log(result)
    }
  },
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  created () {
    console.log(this.value)
    if (this.value) {
      this.personalDataConsent2 = true
      this.personalDataConsent1 = true
    }
  }
}
</script>

<style scoped>
    .confirm-checkboxes {
        width: 100%;
    }
</style>
