<template>
    <div class="container">
        <div class="row">

            <default-window class="choose-card-modal" v-if="isShownModal && !$store.getters.getIsFormValid" @close="hideModal">
                <template v-slot:icon>
                    <img :src="require(`@/assets/ChooseCard.svg`)" alt="failed icon">
                </template>
                <template v-slot:header>
                    Оберіть тип картки для замовлення
                </template>
                <template>
                    <base-select
                            reference="cardType"
                            :list="$store.getters.cardsTypes"
                            v-model="$store.getters.getUser.cardType"
                            @input="selectCard"
                            text=""
                    ></base-select>
                </template>
            </default-window>

            <div class="content" v-if="!$store.getters.getIsFormValid && !isShownModal">
                <h2>Заповніть анкету для замовлення картки онлайн</h2>
                <div class="information">

                    <router-view></router-view>
                </div>
            </div>
            <div class="content" v-if="$store.getters.getIsFormValid">
                <order-accepted></order-accepted>
            </div>
        </div>
    </div>

</template>

<script src="./orderCard.js"></script>

<style lang="scss" src="./commonStyle.scss"></style>
<style scoped lang="scss" src="./styles.scss"></style>
