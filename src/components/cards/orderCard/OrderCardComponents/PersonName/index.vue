<template>
    <div class="person-name">
        <user-input
                v-model="user.lastName"
                reference="secondName"
                text="Прізвище"
                :validation="{required: true, max: 70, regex: /^[а-яієїґ \-\']+$/i}"
                :hint="$store.getters.getLastNameHint"
        >
        </user-input>
        <user-input
                v-model="user.name"
                reference="firstName"
                text="Ім'я"
                :validation="{required: true, max: 30, regex: /^[а-яієїґ \-\']+$/i}"
                :hint="$store.getters.getNameHint"
        >
        </user-input>

        <middle-name
                v-model="user.middleName"
                reference="personMiddleName"
        ></middle-name>
    </div>
</template>

<script>
import GetUserMixin from '../../mixin/GetUserMixin'
import MiddleName from '../MiddleName'
import UserInput from '../../BaseComponents/BaseInput'

export default {
  mixins: [
    GetUserMixin
  ],
  inject: ['$validator'],
  components: {
    UserInput,
    MiddleName
  }
}
</script>

<style scoped>
    .person-name {
        width: 100%;
    }
</style>
