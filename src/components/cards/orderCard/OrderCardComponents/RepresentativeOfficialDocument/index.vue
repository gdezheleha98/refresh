<template>
    <div class="rep-off-doc">
        <base-select
                reference="representatorRelationship"
                :list="$store.getters.adultOfficialDocumentsList"
                text="Документ, що посвідчує представника"
                v-model="user.representativeDocumentType"
        >
        </base-select>
        <!--id card-->
        <div
                v-if="user.representativeDocumentType == $store.getters.getIdCardID"
                key="officialDocumentReprID"
        >
            <base-input
                    v-model="user.representativeDocumentNumber"
                    reference="officialDocumentNumberReprID"
                    text="Номер"
                    :validation="{required: true, digits: 9}"
            >
            </base-input>
            <base-input
                    text="Орган видачі"
                    reference="officialDocumentInfo"
                    v-model="user.representativeIssuedBy"
                    mask="####"
                    :validation="{digits: 4}"
            >
            </base-input>
            <date-picker
                    v-model="user.representativeIssuedDate"
                    reference="personDocumentIssuedDate"
                    text="Дата видачі"

            ></date-picker>
            <date-picker
                    v-model="user.representativeValidTill"
                    reference="representativeDocumentValidTill"
                    text="Термін дії ID картки"
                    :validation="{required:true}"
            ></date-picker>
        </div>
        <!--pasport-->
        <div
                v-if="user.representativeDocumentType == $store.getters.getPassportID"
                key="officialDocumentPassportRepr"
        >
            <base-input
                    :value="user.representativeDocumentSeries"
                    @input="transformSeries('representativeDocumentSeries', $event)"
                    reference="officialDocumentSeriasRepr"
                    text="Серія"
                    :validation="{required: true, length: 2, regex: /^[а-яієїґ \']+$/i}"
            >
            </base-input>
            <base-input
                    v-model="user.representativeDocumentNumber"
                    reference="officialDocumentNumberRepr"
                    text="Номер"
                    :validation="{required: true, digits: 6}"
            >
            </base-input>
            <base-input
                    v-model="user.representativeIssuedBy"
                    reference="officialDocumentInfoRepr"
                    text="Ким виданий"
            >
            </base-input>
            <date-picker
                    v-model="user.representativeIssuedDate"
                    reference="officialDocumentInfoRepr"
                    text="Kоли виданий"
            >
            </date-picker>
        </div>
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

  }
}
</script>

<style scoped>

</style>
