<template>
    <div class="municipal-card">
        <form @submit.prevent="validateForm">
            <span class="block-header">Персональні дані</span>
            <div class="personal-data">

                <personal-info></personal-info>

                <span class="block-header official-document-header">
                    Документ, що посвідчує особу
                </span>

                <div class="official-document">
                    <adult-off-doc></adult-off-doc>
                </div>

                <id-taxes
                        reference="idTaxes"
                ></id-taxes>

                <span class="block-header official-document-header">
                    Адреса
                </span>

                <div class="official-document">
                    <person-address></person-address>
                </div>

                <span class="block-header representor-personal-data-header" v-if="requiredRepresentative">
                    Персональні дані представника
                </span>

                <div class="representor-personal-data" v-if="requiredRepresentative">

                    <representative-info></representative-info>

                    <div class="representator-official-document">
                        <representative-off-doc>
                        </representative-off-doc>
                    </div>
                </div>

                <person-contacts></person-contacts>

                <span class="block-header image-wrap-header">
                    <span class="asterisk">Фото замовника</span>
                </span>

                <div class="image-wrap">
                    <image-clip
                            v-model="fileValidation"
                            @save-image="savePersonImage"
                    ></image-clip>

                </div>

                <consent-checkboxes
                        v-model="user.personalDataConsent"
                ></consent-checkboxes>

                <vue-recaptcha
                        ref="recaptcha"
                        size="invisible"
                        :sitekey="sitekey"
                        @verify="register"
                        @expired="onCaptchaExpired"
                />

                <button class="btn btn-pink" :disabled="isFormSubmitting">
                    Підтвердити замовлення
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import cardMixin from '../mixin/commonCardsLogic'

export default {
  mixins: [cardMixin]
}

</script>

<style scoped lang="scss" src="../commonStyle.scss"></style>
