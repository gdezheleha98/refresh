<template>
    <div class="next_step ">
        <button
                :class="[curStep === steps.REGISTRATION_STEP ? 'right' : '',
                            curStep === steps.SELECT_DATE_STEP  ? 'left' : '']"
                @click="changeStep"
                v-if="curStep === steps.REGISTRATION_STEP || curStep === steps.SELECT_DATE_STEP"
        >
            {{btnText}}
        </button>
    </div>
</template>

<script>
import getterMixin from '../mixin/getterMixin'
export default {
  data () {
    return {
      text: [
        'Підтвердити',
        'Назад'
      ],
      step1: 'step1',
      step2: 'step2'
    }
  },
  methods: {
    changeStep () {
      let curStep
      if (this.curStep === this.steps.REGISTRATION_STEP) {
        curStep = this.steps.SELECT_DATE_STEP
        // scope = this.step1;
      } else {
        // scope = this.step2;
        curStep = this.steps.REGISTRATION_STEP
      }

      this.$validator.validateAll().then((result) => {
        console.log(result)
        if (result) {
          // eslint-disable-next-line
                        // alert('Form Submitted!');
          // this.curStep = curStep;
          this.$store.commit('setCurrentStep', curStep)
        }
      })
    }
  },
  mixins: [getterMixin],
  computed: {
    btnText () {
      return this.curStep === this.steps.REGISTRATION_STEP ? this.text[0] : this.text[1]
    }
  }
}
</script>

<style scoped lang="scss">
    .next_step {
        width: 100%;
        display: flex;
        justify-content: center;

        button {
            cursor: pointer;
            min-width: 120px;
            color: #efefef;
            font-family: "Century Gothic";
            font-size: 16px;
            font-weight: 700;
            background-color: #b54285;
            border: none;
            padding: 7px 12px;
            -webkit-border-radius: 7px;
            -moz-border-radius: 7px;
            border-radius: 7px;
            margin-top: 30px;
            -webkit-transition: all .3s;
            -moz-transition: all .3s;
            -ms-transition: all .3s;
            -o-transition: all .3s;
            transition: all .3s;

            &:hover {
                background-color: #d967a7;
            }
        }
    }
    .right {
        margin-left: 200px;
    }

    .left {
        margin-left: -200px;
    }
</style>
