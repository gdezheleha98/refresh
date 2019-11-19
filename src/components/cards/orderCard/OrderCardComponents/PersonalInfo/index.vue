<template>
    <div class="person-info">
        <person-name></person-name>
        <base-select
                reference="chooseSex"
                :list="$store.getters.sexList"
                text="Стать"
                v-model="user.gender"
        >
        </base-select>
        <date-picker
                class="official-document-mb"
                reference="birthDayPick"
                v-model="user.personDateOfBirth"
                text="Дата народження"
                :banFutureDates="true"
        >
        </date-picker>
    </div>
</template>

<script>
import GetUserMixin from '../../mixin/GetUserMixin'
import PersonName from '../PersonName'
import BaseSelect from '../../BaseComponents/BaseSelect'
import DatePicker from '../../BaseComponents/DatePicker'

export default {
  mixins: [GetUserMixin],
  inject: ['$validator'],
  components: {
    PersonName,
    BaseSelect,
    DatePicker
  }
}
</script>

<style scoped>
    .person-info {
        width: 100%;
    }
</style>
