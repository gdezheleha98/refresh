<template>
    <div
            v-if="user.personDocumentType == $store.getters.getPupilIdCardID"
            key="officialDocumentNumber"
    >
        <base-input
                v-model="user.personDocumentNumber"
                reference="officialDocumentNumberID"
                text="Номер ID - карти"
                :validation="{required: true, digits: 9}"
                key="officialDocumentNumberID"
                :hint="$store.getters.getIdNumberHint"
        >
        </base-input>
        <base-input
                text="Орган видачі"
                reference="officialDocumentInfo"
                v-model="user.personDocumentIssuedBy"
                mask="####"
                :validation="{digits: 4}"
                :hint="$store.getters.getIdIssuedByHint"
        >
        </base-input>
        <date-picker
                v-model="user.personDocumentIssuedDate"
                reference="IdCardPersonDocumentIssuedDate"
                text="Дата видачі"

        ></date-picker>
        <date-picker
                v-model="user.personDocumentValidTill"
                reference="IdCardOfficialDocumentValidTill"
                text="Термін дії ID картки"
                :validation="{required:true}"
                key="officialDocumentValidTill"
        ></date-picker>
    </div>
</template>

<script>
import GetUserMixin from '../../mixin/GetUserMixin'
import BaseInput from '../../BaseComponents/BaseInput'
import DatePicker from '../../BaseComponents/DatePicker'
import BaseSelect from '../../BaseComponents/BaseSelect'

export default {
  mixins: [
    GetUserMixin
  ],
  inject: ['$validator'],
  components: {
    BaseInput,
    DatePicker,
    BaseSelect

  }
}
</script>

<style scoped>

</style>
