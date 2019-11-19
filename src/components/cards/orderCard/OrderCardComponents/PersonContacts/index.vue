<template>
    <div class="person-contacts">

        <phone-number
                text="Мобільний телефон для СМС"
                v-model="user.personMobilePhone"
                reference="cellPhoneNumber"
        ></phone-number>

        <phone-number
                text="Додатковий телефон"
                v-model="user.personPhone"
                reference="phoneNumber2"
                :validation="{length: 19}"
        ></phone-number>

        <base-input
                v-model="user.personEmail"
                reference="email"
                text="Адреса електронної пошти"
                :validation="{required: true, email: true,}"
        >
        </base-input>
        <p class="after-paying">
            Після оплати Ви отримуєте лист-підтвердження на вказану Вами електронну адресу
        </p>
    </div>
</template>

<script>
import GetUserMixin from '../../mixin/GetUserMixin'
import BaseInput from '../../BaseComponents/BaseInput'
import PhoneNumber from '../../BaseComponents/PhoneNumber'

export default {
  mixins: [
    GetUserMixin
  ],
  inject: ['$validator'],
  components: {
    BaseInput,
    PhoneNumber

  }
}
</script>

<style scoped>
    .person-contacts {
        width: 100%;
    }
</style>
