<template>
    <div class="time">
        <h3>Оберіть доступний час</h3>
        <div class="time_list_wrap">
            <p v-if="selectedDate">Час відвідування {{selectedDate}}</p>
            <ul class="time_list" @click="selectTime($event.target)">
                <li v-for="(hour, hourIndex) in avaibleTime" :key="'hours' + hourIndex">
                    <ul class="time_list_minutes">
                        <li
                                v-for="(minute, minuteIndex) in hour"
                                :key="'minutes' + hourIndex + minuteIndex"
                                :data-time="minute"
                        >
                            {{minute}}
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import getterMixin from '../../../mixin/getterMixin'
export default {
  data () {
    return {
      // selectedDate: '20.03.2019',
      avaibleTime: [
        ['10:00', '10:10', '10:20', '10:30', '10:40'],
        ['11:00', '11:10', '11:20'],
        ['12:00', '10:10', '10:20'],
        ['13:00', '10:10', '10:20'],
        ['14:00', '14:10', '14:20', '14:30', '14:40', '14:50'],
        ['15:00', '10:10', '10:20'],
        ['16:00', '10:10', '10:20'],
        ['17:00', '10:10', '10:20']
      ]
    }
  },
  props: ['selectedDate'],
  mixins: [getterMixin],
  methods: {
    selectTime (target) {
      console.log(target.dataset.time)
      if (target.dataset.time !== undefined) {
        // save time
        // this.$store.state.queue.selectedTime = target.dataset.time;
        this.$store.commit('selectTime', target.dataset.time)
        // show coupon
        // this.curStep = this.steps.VISIT_DATA_STEP;
        this.$store.commit('setCurrentStep', this.steps.VISIT_DATA_STEP)
      }
    }
  }
}
</script>

<style scoped lang="scss">
    .time {
        width: 100%;
        max-width: 375px;
        h3 {
            color: #434343;
            font-family: "Century Gothic";
            font-size: 16px;
            font-weight: 700;
            line-height: 16px;
            margin-top: 17px;
        }
    }

    .time_list_wrap {
        background-color: #fff;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        border: 1px solid #677f51;
        padding-bottom: 25px;

        p {
            color: #434343;
            font-family: "Century Gothic";
            font-size: 16px;
            font-weight: 400;
            //line-height: 27px;
            margin: 18px 0 0px 14px;
        }
    }

    .time_list {
        width: 100%;
        display: flex;
        flex-direction: column;
        list-style: none;
        margin: 0;
        padding: 0;

        > li {
            background-color: #f6faf3;
            padding: 0 15px;
            margin: 0;
            margin-top: 10px;
        }
    }

    .time_list_minutes {
        width: 100%;
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;

        > li {
            //height: 100%;
            width: 100%;
            max-width: calc(100%/6 - 3px);
            /*padding: 3px 10px;*/
            padding-top: 3px;
            padding-bottom: 3px;
            margin-left: 3px;
            color: #325114;
            font-family: Calibri;
            font-size: 14px;
            font-weight: 400;
            //line-height: 27px;
            border: 1px solid #c0d9aa;
            cursor: pointer;
            background-color: #e8f2e0;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            text-align: center;
            &:hover {
                background-color: #ccedb0;
                color: #315110;
                border-color: #5d7e37;
            }
        }
    }

    @media screen and (max-width: 500px) {
        .time_list_minutes {
            > li {
                //padding: 3px 5px;
            }
        }

    }
    @media screen and (max-width: 400px) {
        .time_list_minutes {
            > li {
                /*padding: 3px 2%;*/

            }
        }

    }
</style>
