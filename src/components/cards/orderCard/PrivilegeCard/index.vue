<template>
    <div class="privilege-card">
        <form @submit.prevent="validateForm">

            <span class="block-header">
                Персональні дані пільговика
            </span>

            <div class="personal-data">
                <!--<user-input
                        v-model="user.lastName"
                        reference="lastName"
                        text="Прізвище"
                        :validation="{required: true, max: 70, regex: /^[а-яієїґ \']+$/i}"
                >
                </user-input>
                <user-input
                        v-model="user.name"
                        reference="firstName"
                        text="Ім'я"
                        :validation="{required: true, max: 30, regex: /^[а-яієїґ \']+$/i}"
                >
                </user-input>
                <user-input
                        v-model="user.middleName"
                        reference="middleName"
                        text="По-батькові"
                        :validation="{required: true, max: 50, regex: /^[а-яієїґ \']+$/i}"
                >
                </user-input>
                <user-select
                        reference="chooseSex"
                        :list="$store.state.sexList"
                        text="Стать"
                        v-model="user.gender"
                >
                </user-select>
                <date-picker
                        class="official-document-mb"
                        reference="birthDay"
                        v-model="user.personDateOfBirth"
                        text="Дата народження"
                >
                </date-picker>
-->
                <person-info></person-info>

                <span class="block-header registration-data-header">
                    Реєстрація у Вінницькій ОТГ
                </span>
                <div class="registration-data official-document-mb">
                    <user-select
                            :list="$store.state.registrationList"
                            v-model="user.сityTown"
                            text=""
                            reference="registration"
                    >
                    </user-select>
                    <user-input
                            v-model="user.street"
                            reference="street"
                            text="Вулиця (провулок, проспект, проїзд)"
                            :validation="{required: true, max: 50, regex: /^[а-яієїґ \']+$/i}"
                    >
                    </user-input>
                    <user-input
                            text="Номер будинку"
                            reference="buildingNumber"
                            v-model="user.houseNumber"
                            v-validate="{required:true, numeric: true}">
                        >
                    </user-input>
                    <user-input
                            text="Номер квартири"
                            reference="flatNumber"
                            v-model="user.apartment"
                            v-validate="{required:true, numeric: true}">
                        >
                    </user-input>
                </div>

                <span class="block-header official-document-header">
                    Документ, що посвідчує особу
                </span>

                <div class="official-document official-document-mb">
                    <user-select
                            reference="chooseSex"
                            :list="$store.state.adultOfficialDocumentsList"
                            text=""
                            v-model="user.personDocumentType"
                    >
                    </user-select>
                    <!--id card-->
                    <!--need v-if in all inputs for correct validation-->
                    <div v-if="user.personDocumentType === '0'" key="officialDocumentID">
                        <user-input
                                v-model="user.personDocumentNumber"
                                reference="officialDocumentNumberID"
                                text="Номер"
                                :validation="{required: true, digits: 9}"
                        >
                        </user-input>
                        <date-picker
                                v-model="user.personDocumentValidTill"
                                reference="officialDocumentTerm"
                                text="Термін дії ID картки"

                        ></date-picker>
                    </div>
                    <!--passport-->
                    <div v-if="user.personDocumentType === '1'" key="officialDocumentPassport">
                        <user-input
                                v-model="user.personDocumentSeries"
                                reference="officialDocumentSeriasPassport"
                                text="Серія"
                                :validation="{required: true, length: 2, regex: /^[а-яієїґ \']+$/i}"
                        >
                        </user-input>
                        <user-input
                                v-model="user.personDocumentNumber"
                                reference="officialDocumentNumberPassport"
                                text="Номер"
                                :validation="{required: true, digits: 6}"
                        >
                        </user-input>
                        <user-input
                                v-model="user.personDocumentIssuedBy"
                                reference="officialDocumentInfo"
                                text="Ким виданий"
                        >
                        </user-input>
                        <date-picker
                                v-model="user.personDocumentIssuedDate"
                                reference="officialDocumentInfo"
                                text="Коли виданий"
                        >
                        </date-picker>
                    </div>
                </div>

                <span class="block-header privilege-document-header">
                    Документ, що підтверджує право на пільговий проїзд
                </span>

                <div class="privilege-document">

                    <user-select
                            reference="privilegeDocumentType"
                            :list="$store.state.privilegeDocumentTypes"
                            text=""
                            v-model="user.privilegeDocumentType"
                    >
                    </user-select>
                    <user-input
                            v-model="user.privilegeDocumentSeries"
                            reference="privilegeDocumentSerias"
                            text="Серія"
                            :validation="{required: true, length: 2, regex: /^[а-яієїґ \']+$/i}"
                    >
                    </user-input>
                    <user-input
                            v-model="user.privilegeDocumentNumber"
                            reference="privilegeDocumentNumberPup"
                            text="Номер"
                            :validation="{required: true, digits: 8}"
                    >
                    </user-input>

                </div>

                <id-taxes
                        :user="user"
                ></id-taxes>

                <phone-number
                        text="Контактний телефон"
                        v-model="user.personMobilePhone"
                        reference="phoneNumber"
                        :validate="{required:true,length:16}"
                ></phone-number>

                <user-input
                        text="Електронна пошта"
                        v-model="user.personEmail"
                        reference="email"
                        :validation="{required: true, email: true}"
                ></user-input>

                <image-clip
                        @input=""
                ></image-clip>

                <user-input
                        text="Місце отримання"
                        v-model="user.gettingPlace"
                        :disabled="true"
                        reference="gettingPlace"
                ></user-input>

                <vue-recaptcha
                        ref="recaptcha"
                        size="invisible"
                        :sitekey="sitekey"
                        @verify="register"
                        @expired="onCaptchaExpired"
                />
                <button type="submit" class="btn order btn-pink">
                    Замовити зараз
                </button>
            </div>
        </form>
        <!--<div class="content" v-if="isFormValid">
            <div class="papap">
                "Дякуємо за замовлення картки.<br/>На Вашу електронну пошту має прийти лист із підтвердженням…"
            </div>
        </div>-->
    </div>
</template>

<script src="./privelegeCard.js"></script>

<style scoped lang="scss" src="../commonStyle.scss"></style>
