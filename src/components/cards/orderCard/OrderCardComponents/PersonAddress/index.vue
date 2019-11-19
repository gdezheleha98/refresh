<template>
    <div class="person-address">
        <base-select
                text="Область"
                reference="region"
                v-model="user.region"
                :list="$store.getters.regionsList"
        ></base-select>
        <base-input
                v-model="user.cityTown"
                text="Населений пункт"
                reference="registration"
                :validation="{required: true, max: 50, regex: /^[а-яієїґ .\']+$/i}"
        >
        </base-input>
        <base-input
                v-model="user.street"
                reference="street"
                text="Вулиця (провулок, проспект, проїзд)"
                :validation="{required: true, max: 50, regex: /^[а-яієїґ\- .0-9\']+$/i}"
        >
        </base-input>
        <base-input
                text="Номер будинку та корпус, якщо він є"
                reference="buildingNumber"
                v-model="user.houseNumber"
                :validation="{required:true, regex: /^[0-9]+[а-яієїґ ()0-9]{0,}$/i}"
        >
        </base-input>
        <base-input
                text="Номер квартири"
                reference="flatNumber"
                v-model="user.apartment"
                :validation="{regex: /^[0-9/, ]+[а-яієїґ]?$/i}"
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
  }
}
</script>

<style scoped>
    .person-address {
        width: 100%;
    }
</style>
