<template>
    <div class="privilege-doc">
        <base-select
                reference="privilegeDocumentTypePup"
                :list="documentsList"
                text=""
                :value="documentsValue"
                :disabled="true"
        >
        </base-select>
        <base-input
                :value="user.privilegeDocumentSeries"
                @input="transformSeries('privilegeDocumentSeries', $event)"
                reference="privilegeDocumentSeriasPup"
                text="Серія"
                :validation="seriasValidation"
                :hint="$store.getters.getStudentPrivilegeDocSeries"
        >
        </base-input>
        <base-input
                v-model="user.privilegeDocumentNumber"
                reference="privilegeDocumentNumberPup"
                text="Номер"
                :validation="numberValidation"
                :hint="$store.getters.getStudentPrivilegeDocNumber"
        >
        </base-input>
        <date-picker
                v-model="user.privilegeDocumentValidTill"
                reference="privilegeDocumentTerm"
                text="Термін дії документу"
                :hint="$store.getters.getStudentPrivilegeDocValidTill"
        >
        </date-picker>
    </div>
</template>

<script>
import GetUserMixin from '../../mixin/GetUserMixin'
import BaseInput from '../../BaseComponents/BaseInput'
import BaseSelect from '../../BaseComponents/BaseSelect'
import DatePicker from '../../BaseComponents/DatePicker'

export default {
  mixins: [
    GetUserMixin
  ],
  inject: ['$validator'],
  components: {
    BaseInput,
    BaseSelect,
    DatePicker
  },
  props: {
    student: {
      required: true,
      type: Boolean
    },
    documentsList: {
      required: true,
      type: Array
    },
    documentsValue: {
      required: true
    }
  },
  computed: {
    seriasValidation () {
      return this.student ? { required: true, length: 2, regex: /^[а-яієїґ \']+$/i } : {}
    },
    numberValidation () {
      return this.student ? { required: true, digits: 8 } : {}
    }
  },
  created () {
    this.user.privilegeDocumentType = this.documentsValue
    console.log(this.user.privilegeDocumentType)
  },
  updated () {
    this.user.privilegeDocumentType = this.documentsValue
    console.log(this.user.privilegeDocumentType)
  }
}
</script>

<style scoped>
    .privilege-doc {
        width: 100%;
    }
</style>
