<template>
    <div class="data-picker" @submit="aa">
        <label :for="reference" class="asterisk">{{text}}</label>
        <!--take date in english format-->
        <datepicker
                :placeholder="placeholder"
                :language="uk"
                :id="reference"
                format="dd/MM/yyyy"
                class="form-control datepicker"
                :ref="reference"
                :name="reference"
                :value="date"
                @input="changeDate"
                monday-first
                v-validate="validation"
                :disabledDates="banFutureDates? disabledDates: {}"
        ></datepicker>
        <p class="hints" v-if="hint && !errors.has(reference) && !dirty">{{hint}}</p>
        <span class="error-msg">{{errors.first(reference)}}</span>
    </div>
</template>

<script>
import datepicker from 'vuejs-datepicker'
import { uk } from 'vuejs-datepicker/dist/locale'

import moment from 'moment'

export default {
  // mixins:[changeProp],
  data () {
    return {
      uk: uk,
      disabledDates: {
        from: new Date()
      }
    }
  },
  inject: ['$validator'],
  computed: {
    date () {
      // datepicker take date in english format
      // swap date and month

      let date = ''
      if (this.value) {
        date = new Date(this.value)
        date = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
      }
      return date
    },
    dirty () {
      // if (this.$validator.fields.find({name: this.reference}))
      //     return this.$validator.fields.find({name: this.reference}).flags.dirty;
      return false
    }

  },
  methods: {
    aa () {
      console.log('AAAAAAAAAA')
    },
    /**
             * format date to ISO standart
             *
             * @param {Date} value - selected date in datepicker
             */
    changeDate (value) {
      console.log(value)

      const date = this.formatDate(value.getDate())
      const month = this.formatDate(value.getMonth())
      const year = value.getFullYear()

      value = new Date(year, month, date)

      value = moment(value).format('YYYY-MM-DDTHH:mm:ss')
      console.log(value)

      // get in anket
      // console.log(moment(value).date())
      // console.log(moment(value).month())
      // console.log(moment(value).year())

      this.$emit('input', value)

      this.$nextTick(() => {
        this.$validator.validate(this.reference)
      })
    },
    formatDate (date) {
      return ('0' + date).slice(-2)
    }
  },
  props: {
    value: String,
    text: {
      type: String,
      default: 'Дата народження'
    },
    reference: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: 'Введіть дату'
    },
    validation: {
      type: Object,
      default: () => {
        return { required: true }
      }
    },
    banFutureDates: {
      type: Boolean,
      default: false
    },
    hint: {
      type: String
    }
  },
  components: {
    datepicker
  },
  mounted () {
    this.$refs[this.reference].$children[0].$el.style.width = '100%'
    this.$refs[this.reference].$children[0].$el.style.height = '100%'
    this.$refs[this.reference].$children[0].$el.style.float = 'left'
    // this.$refs[this.reference].$children[0].$el.style.backgroundColor = 'white';
    this.$refs[this.reference].$children[0].$vnode.elm.lastElementChild.classList.add('date_input')
    this.$refs[this.reference].$children[0].$vnode.elm.lastElementChild.style.width = '100%'
    this.$refs[this.reference].$children[0].$vnode.elm.lastElementChild.style.height = '100%'
    this.$refs[this.reference].$children[0].$vnode.elm.lastElementChild.style.float = 'left'
    this.$refs[this.reference].$children[0].$vnode.elm.lastElementChild.style.margin = '0'
    this.$refs[this.reference].$children[0].$vnode.elm.lastElementChild.style.textAlign = 'center'
    this.$refs[this.reference].$children[0].$vnode.elm.lastElementChild.style.border = 'none'
    this.$refs[this.reference].$children[0].$vnode.elm.lastElementChild.style.backgroundColor = '#fff'
    this.$refs[this.reference].$children[0].$vnode.elm.lastElementChild.style.color = '#434343'
    this.$refs[this.reference].$children[0].$vnode.elm.lastElementChild.style.fontFamily = 'Calibri'
    this.$refs[this.reference].$children[0].$vnode.elm.lastElementChild.style.fontSize = '16px'
  }
}
</script>

<style scoped lang="scss">
    .data-picker {
        padding: 0 5px;
        padding-bottom: 1rem;
        width: 100%;

        label {
            color: #434343;
            font-family: "Century Gothic";
            font-size: 16px;
            font-weight: 700;
            line-height: 27px;
        }
    }

    .datepicker {
        border: 1px solid #9db488;
        height: 36px;
        padding: 0;
    }

    .asterisk {
        &::after {
            content: "*";
            color: #b44284;
            font-family: Calibri;
            font-weight: 400;
            font-size: 16px;
        }
    }

    .date_input {
        background-color: grey;
    }

    @media screen and (max-width: 768px) {
        .data-picker {
            min-width: 100%;
        }
    }
</style>
