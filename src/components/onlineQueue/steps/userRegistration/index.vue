<template>
    <div class="user_registration">
        <div class="content_wrap">
            <form class="user_registration_content" @submit.prevent>
                <div class="action">
                    <h3 class="queue_subheader">Оберіть послугу *</h3>
                    <ul @click="selectAction($event.target)">
                        <li
                                v-for="(action, index) in actions"
                                :key="index"
                                :class="[queue.selectedAction === index ? 'active_action' : '']"
                                :data-action-index="index"
                        >
                            {{action}}
                        </li>
                    </ul>
                </div>
                <div class="select_place">
                    <h3 class="queue_subheader">Оберіть філію</h3>

                    <select name="" id="mySelect">
                        <option value="1" selected>Соборна, 36 - Центральний офіс</option>
                    </select>

                    <!--<select name="" id="" v-model="selectedPlace">-->
                    <!--<option :value="index + 1" v-for="(place, index) in places" :key="index">-->
                    <!--{{place}}-->
                    <!--</option>-->
                    <!--</select>-->
                </div>
                <div class="name">
                    <h3 class="queue_subheader">Прізвище, ім'я, по-батькові</h3>
                    <input
                            type="text"
                            v-model="queue.fullName"
                            v-validate="{required: true, regex: /^[а-яієїґ \']+$/i}"
                            ref="userName"
                            name="userName"
                    >
                    <span class="error-msg">{{ errors.first('userName') }}</span>
                    <h6 class="notes">
                        Використати місце в черзі може лише особа, яка вказана.
                        Це зроблено для запобігання передавання талону іншим.
                    </h6>
                </div>
                <div class="contact_phone">
                    <h3 class="queue_subheader">Контактний телефон</h3>
                    <input
                            type="text"
                            v-mask="'+380 (##) ###-##-##'"
                            placeholder="+380 (__) ___-__-__"
                            v-model="queue.phoneNumber"
                            v-validate="{required: true, min: 19}"
                            ref="phoneNumber"
                            name="phoneNumber"
                    >
                    <span class="error-msg">{{ errors.first('phoneNumber') }}</span>
                    <h6 class="notes">У разі зміни розкладу ми зможемо Вас попередити</h6>
                </div>
            </form>
            <!--</div>-->
            <!--<div class="next_step ">-->
            <!--<button class="right">Підтвердити</button>-->
        </div>
    </div>
</template>

<script>
import $ from 'jquery' // подключаем jQuery
import 'selectric' // подключаем сам плагин
export default {
  data () {
    return {
      actions: [
        'Замовити персоніфіковану картку',
        'Отримати персоніфіковану картку',
        'Інше',
        'Відновити персоніфіковану картку'
      ]
    }
  },
  methods: {
    selectAction (target) {
      console.log(target.dataset.actionIndex)
      if (target.dataset.actionIndex !== undefined) {
        // this.queue.selectedAction = Number(target.dataset.actionIndex);
        this.$store.commit('selectAction', Number(target.dataset.actionIndex))
      }
    }
  },
  computed: {
    queue () {
      return this.$store.getters.getQueueInfo
    }
  },
  mounted () {
    $('#mySelect').selectric()
  }
}
</script>

<style scoped lang="scss">

    /*@import "../../selectic";*/
    .user_registration {
        width: 100%;
    }

    .content_wrap {
        background-color: #f7f7f7;
        //max-width: 30rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .user_registration_content {
        max-width: 350px;
        width: 100%;
        background-color: #f7f7f7;
        padding: 0;
    }

    .queue_subheader {
        color: #434343;
        font-family: "Century Gothic";
        font-size: 16px;
        font-weight: 700;
        line-height: 27px;
        text-align: left;
        margin-top: 20px;
    }

    .action {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        ul {
            margin: 0;
            padding: 1rem;
            background-color: #f9f9f9;
            border: 1px solid #e0e0e0;
            list-style: none;

            li {
                color: #444;
                padding: 18px 8px;
                margin-top: .5rem;
                text-align: center;
                font-weight: 400;
                font-size: 16px;
                border: 1px solid #dededd;
                background-color: #efeeee;
                cursor: pointer;

                &:hover {
                    color: #31451e;
                    background-color: #e8f3e1;
                }
            }
        }

        .active_action {
            color: #31451e;
            background-color: #cde4b0;
            border-color: #b8d59f;
        }

    }

    .select_place {
        padding: 0 20px;
    }

    .name, .contact_phone {
        padding: 0 22px;

        input {
            width: 100%;
            //line-height: 2.5rem;
            font-size: 1.2rem;
            color: #434343;
            border: 1px solid #808080;
            padding: 0 .4rem;
            height: 36px;

        }
    }

    h6 {
        font-family: Calibri;
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        color: #434343;
    }

    .next_step {
        width: 100%;
        display: flex;
        justify-content: center;

        button {
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
        }
    }

    .right {
        margin-left: 200px;
    }

    .left {
        margin-left: -200px;
    }

    @media screen and (max-width: 410px) {

    }
</style>
