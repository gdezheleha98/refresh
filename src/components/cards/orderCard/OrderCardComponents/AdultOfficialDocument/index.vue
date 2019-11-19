<template>
    <div class="adult-official-document">
        <base-select
                reference="chooseSex"
                :list="$store.getters.adultOfficialDocumentsList"
                text=""
                v-model="user.personDocumentType"
        >
        </base-select>
        <!--id card-->
        <id-card></id-card>

        <!--passport-->
        <div
                v-if="user.personDocumentType == $store.getters.getPassportID"
                key="officialDocumentPassport"
        >
            <base-input
                    :value="user.personDocumentSeries"
                    @input="transformSeries('personDocumentSeries', $event)"
                    reference="officialDocumentSeriasPassport"
                    text="Серія"
                    :validation="{required: true, length: 2, regex: /^[а-яієїґ \']+$/i}"
                    :hint="$store.getters.getPassportSeriesHint"
            >
            </base-input>
            <base-input
                    v-model="user.personDocumentNumber"
                    reference="officialDocumentNumberPassport"
                    text="Номер"
                    :validation="{required: true, digits: 6}"
                    :hint="$store.getters.getPassportNumberHint"
            >
            </base-input>
            <base-input
                    v-model="user.personDocumentIssuedBy"
                    reference="officialDocumentInfo"
                    text="Ким виданий"
            >
            </base-input>
            <date-picker
                    v-model="user.personDocumentIssuedDate"
                    reference="officialDocumentTerm"
                    text="Коли виданий"

            ></date-picker>
        </div>
    </div>
</template>

<script>
import GetUserMixin from '../../mixin/GetUserMixin'
import BaseInput from '../../BaseComponents/BaseInput'
import DatePicker from '../../BaseComponents/DatePicker'
import BaseSelect from '../../BaseComponents/BaseSelect'
import IdCard from '../IdCard'

export default {
  mixins: [
    GetUserMixin
  ],
  inject: ['$validator'],
  components: {
    BaseInput,
    DatePicker,
    BaseSelect,
    IdCard
  }
}
</script>

<style scoped>
    .adult-official-document {
        width: 100%;
    }
</style>
