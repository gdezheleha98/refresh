<template>
    <div class="pupil-off-doc">
        <base-select
                reference="chooseSex"
                :list="$store.getters.pupilOfficialDocumentsList"
                text=""
                v-model="user.personDocumentType"
        >
        </base-select>
        <!--ID card-->
        <id-card></id-card>
        <!--свідоцтво-->
        <div
                v-if="user.personDocumentType == $store.getters.getPupilBirthCertificateID"
                key="officialDocumentIDPup"
        >

            <base-input
                    :value="user.personDocumentSeries"
                    @input="transformSeries('personDocumentSeries', $event)"
                    reference="officialDocumentSeries"
                    text="Серія"
                    placeholder="1-АА"
                    :validation="{required: true, regex: /^[0-9]-[а-яієїґ]{2}$/i}"
                    key="officialDocumentSeries"
                    hint="серія бланка свідоцтва, складається з однієї арабської цифри, тире та двох літер"
            >
            </base-input>
            <!--<p class="pupil-certificate-series__info">-->
            <!--серія бланка свідоцтва, складається з однієї римської цифри, тире та двох літер-->
            <!--</p>-->
            <base-input
                    v-model="user.personDocumentNumber"
                    reference="officialDocumentNumber"
                    text="Номер свідоцтва про народження учня"
                    :validation="{required: true, digits: 6}"
                    key="officialDocumentNumber"
                    :hint="$store.getters.getPupilCertificateNumberHint"
            >
            </base-input>
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
    .pupil-off-doc {
        width: 100%;

    }
</style>
