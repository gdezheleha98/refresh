<template>
    <div class="student-card">
        <form @submit.prevent="validateForm">
            <!--<date-picker
                    reference="registrationDatePick"
                    v-model="user.birthDay"
                    text="Дата оформлення"

            >
            </date-picker>

            <user-select
                    reference="askBasis"
                    :list="$store.state.basisList"
                    text="Підстава для звернення"
                    v-model="user.gettingBasis"
            >
            </user-select>

            <user-select
                    class="personal-data-mb"
                    reference="chooseCard"
                    :list="$store.state.cardsTypes"
                    text="Оберіть картку"
                    v-model="user.cardType"
                    :disabled="true"
            >
            </user-select>-->
            <span class="block-header">
                Персональні дані студента
            </span>
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

                <educational-organization
                        @input="enterEducationalOrganization"
                        :universitiesList="$store.getters.universitiesList"
                        :value="user.educationUniversity"
                >
                </educational-organization>

                <span class="block-header privilege-document-header">
                    Документ, що підтверджує право на пільговий проїзд
                </span>

                <div class="privilege-document">

                    <privilege-document
                        :student="true"
                        :documentsList="studentPrivilegeDocument"
                        :documentsValue="studentPrivilegeDocumentValue"
                    >
                    </privilege-document>
                </div>

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
                    <span class="asterisk">Фото студента</span>
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

<script src="./studentCard.js"></script>

<style lang="scss" src="../commonStyle.scss"></style>
