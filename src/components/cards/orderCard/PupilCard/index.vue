<template>
    <div class="pupil-card">
        <form novalidate @submit.prevent="validateForm">

            <!-- <date-picker
                     reference="registrationDatePick"
                     v-model="user.registrationDate"
                     text="Дата оформлення"
                     :validation="{required:true}"
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
                     reference="chooseCard"
                     :list="$store.state.cardsTypes"
                     text="Оберіть картку"
                     v-model="user.cardType"
                     :disabled="true"
             >
             </user-select> -->

            <span class="block-header">
                Персональні дані учня
            </span>

            <div class="personal-data">

                <personal-info></personal-info>

                <span class="block-header official-document-header">
                    Документ, що посвідчує особу
                </span>

                <div class="official-document">
                    <pupil-off-doc></pupil-off-doc>
                </div>

                <id-taxes reference="idTaxes">
                </id-taxes>

                <educational-organization
                        @input="enterEducationalOrganization"
                        :universitiesList="$store.getters.schools"
                        :value="user.educationSchool"
                >
                </educational-organization>

                <span class="block-header privilege-document-header">
                    Документ, що підтверджує право на пільговий проїзд
                </span>

                <div class="privilege-document">
                    <privilege-document
                            :student="false"
                            :documentsList="pupilPrivilegeDocument"
                            :documentsValue="getPupilPrivilegeDocumentID"
                    ></privilege-document>
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
                </div >

                <person-contacts></person-contacts>

                <span class="block-header image-wrap-header">
                    <span class="asterisk">Фото учня</span>
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

                <button class="btn btn-pink" type="submit" :disabled="isFormSubmitting">
                    Підтвердити замовлення
                </button>

            </div>

        </form>

    </div>
</template>

<script src="./pupilCard.js"></script>

<style lang="scss" src="../commonStyle.scss"></style>
<style scoped lang="scss">
    .pupil-certificate-series__info {
        margin-top: -1rem;
        line-height: 1em;
        padding: 0 .5rem;
    }
</style>
