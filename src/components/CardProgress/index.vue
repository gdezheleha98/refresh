<template>
    <div class="card-progress">
        <div class="container" v-if="user">
            <div class="before-payment-confirm">
                <h2 class="card-progress__header">
                    Замовлення №{{user.orderKey}} Муніципальної картки вінничанина
                </h2>
                <div class="card-progress__image-wrap" id="userCardView">
                    <div class="card-image">
                        <img :src="cardImageUrl" alt="">
                        <div class="person-image">
                            <img :src="personImage" alt="">
                        </div>
                        <p class="person-name">
                            {{this.user.lastName}}<br>
                            {{this.user.name}}
                        </p>
                    </div>
                </div>
                <div class="check-ask">
                    <span v-if="currentStep === 1">
                        {{adultPersonName}} просимо Вас уважно перевірити інформацію з
                    </span>
                    <span v-else>
                        {{adultPersonName}}, Ви підтвердили перевірку
                    </span>
                    <button class="check-ask__button" @click="showConfirmPayment">
                        заяви
                    </button>
                </div>
                <!--<p class="check-ask" v-else>-->
                <!--{{adultPersonName}}-->
                <!--</p>-->
            </div>

            <transition name="show-data">
                <!--class="conf-pm"-->
                <confirm-payment
                        v-if="isShownConfirmPayment"
                        :user="user"
                        :qrCode="qrCode"
                        :avatar="personImage"
                        @hide="hideConfirmPayment"
                >
                </confirm-payment>
            </transition>

            <div class="after-payment-confirm" id="cardStatus">
                <transition name="hide-check-btn">
                    <div class="check-btn__wrap" v-if="currentStep === 1">
                        <base-button class="check-btn" @click="checkCard">
                            Перевірив(ла) заяву і прошу виготовити картку
                        </base-button>
                    </div>
                </transition>

                <div class="card-status__wrap">
                    <card-status :successStatus='currentStep !== 1'>
                        <template v-slot:header>
                            СТАТУС ЗАЯВИ
                        </template>
                        <template v-slot:icon>
                            <img v-if="notCheckedUserData" src="../../assets/application-not-checked.svg" alt="">
                            <!--step 2-->
                            <img v-else-if="checkedUserData" src="../../assets/checked-application.svg" alt="">
                            <img v-else-if="waitingForPrint" src="../../assets/waiting-to-print.svg" alt="">
                            <img v-else-if="printedCard" src="../../assets/printed.svg" alt="">
                        </template>
                        <template v-slot:text>
                            <p class="status-text" :class="{'successful-checked-text': currentStep !== 1}">
                                {{statusText}}
                            </p>
                            <!--<p class="status-text successful-checked-text" v-else>-->
                            <!--{{statusText}}-->
                            <!--</p>-->
                        </template>
                        <!--step 2-->
                        <template v-slot:time v-if="currentStep !== 1">
                            Час перевірки: {{formatDate(user.orderStatusDate)}}
                        </template>
                    </card-status>
                </div>

                <div class="card-progress__img" v-if="false">
                    <!--<image-clip v-model="fileValidation"></image-clip>-->
                    <span class="block-header image-wrap-header">
                        <span class="asterisk">
                            Фото замовника
                        </span>
                    </span>
                    <div class="image-wrap">
                        <image-clip
                                v-model="fileValidation"
                                @save-image="savePersonImage"
                        ></image-clip>

                    </div>
                </div>

                <div class="payment-status" v-if="currentStep !== 1">
                    <p class="payment-options" v-if="currentStep === 2">
                        Ви можете, використавши номер заяви {{user.orderKey}}, оплатити замовлення у терміналах
                        обслуговування. Або перейти за посиланням і здійснити оплату банківською карткою.
                    </p>
                    <p class="payment-options" v-else>
                        Ви оплатили випуск картки.
                    </p>
                    <base-button class="pay-btn" @click="payForCard" v-if="currentStep === 2"
                                 :disable="disablePayButton">
                        Оплатити
                    </base-button>

                    <card-status :doubleCircle="true" :successStatus='currentStep === 3'>
                        <template v-slot:header>
                            СТАТУС ОПЛАТИ
                        </template>
                        <template v-slot:icon v-if="currentStep === 3 && user.paymentStatusId === 2">
                            <img src="../../assets/SuccessPayment.png" alt="">
                        </template>
                        <template v-slot:icon v-else>
                            <img src="../../assets/payment-is-expected.svg" alt="">
                        </template>
                        <template v-slot:text>
                            <p class="status-text"
                               :class="{'successful-checked-text': currentStep === 3 && user.paymentStatusId === 2}">
                                {{paymentText}}
                            </p>
                            <!--<p class="status-text successful-checked-text" v-else>-->
                            <!--Оплату здійснено-->
                            <!--</p>-->
                        </template>
                        <template v-slot:time v-if="currentStep === 3 && user.paymentStatusId === 1">
                            Оплата очікується з: {{formatDate(user.paymentStatusDate)}}
                        </template>
                        <template v-slot:time v-if="currentStep === 3 && user.paymentStatusId === 2">
                            Час оплати: {{formatDate(user.paymentStatusDate)}}
                        </template>
                    </card-status>

                    <p class="after-paying-info" v-if="currentStep === 3">
                        Після виготовлення картки, Вам надійде повідомлення на електронну пошту із інформацією про
                        отримання.
                    </p>

                </div>
            </div>
        </div>
    </div>
</template>

<script src="./cardProgress.js"></script>

<style lang="scss" src="../cards/orderCard/commonStyle.scss"></style>

<style scoped lang="scss" src="./card-progress-styles.scss"></style>
