<template>
    <div class="educational-organization">
        <base-select
                reference="chooseSchool"
                :list="universitiesList"
                text="Освітня установа"
                :value="value"
                @input="enterOrganization"
        >
        </base-select>
        <base-input
                v-model="user.yearOfEntry"
                reference="chooseSchoolClass"
                text="Рік вступу"
                :validation="{required: true, digits: 4}"
        >
        </base-input>
    </div>
</template>

<script>
import GetUserMixin from '../../mixin/GetUserMixin'
import BaseInput from '../../BaseComponents/BaseInput'
import BaseSelect from '../../BaseComponents/BaseSelect'

export default {
  mixins: [
    GetUserMixin
  ],
  inject: ['$validator'],
  components: {
    BaseInput,
    BaseSelect
  },
  props: {
    universitiesList: {
      required: true,
      type: Array
    },
    value: {
      required: true,
      type: String
    }
  },
  methods: {
    enterOrganization (value) {
      console.log(value)
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped>
    .educational-organization {
        width: 100%;
    }
</style>
