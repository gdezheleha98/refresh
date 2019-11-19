<template>
    <div class="representative-info">
        <!--if use the PersonName component there will be the same ids on the page-->

        <base-input
                v-model="user.representativeLastName"
                reference="representatorSecondName"
                text="Прізвище представника"
                :validation="{required: true, max: 70, regex: /^[а-яієїґ \']+$/i}"
        >
        </base-input>
        <base-input
                v-model="user.representativeName"
                reference="representatorFirstName"
                text="Ім’я представника"
                :validation="{required: true, max: 70, regex: /^[а-яієїґ \']+$/i}"
        >
        </base-input>

        <middle-name
                v-model="user.representativeMiddleName"
                reference="representativeMiddleName"
        ></middle-name>

        <base-select
                reference="representatorMRelationship"
                :list="$store.getters.representetiveRelationshipsList"
                text="Тип відносин"
                v-model="user.representativeRelation"
        >
        </base-select>
    </div>
</template>

<script>
import GetUserMixin from '../../mixin/GetUserMixin'
import BaseInput from '../../BaseComponents/BaseInput'
import BaseSelect from '../../BaseComponents/BaseSelect'
import PersonName from '../PersonName'
import MiddleName from '../MiddleName'

export default {
  mixins: [
    GetUserMixin
  ],
  inject: ['$validator'],
  components: {
    BaseInput,
    BaseSelect,
    PersonName,
    MiddleName

  }
}
</script>

<style scoped>

</style>
