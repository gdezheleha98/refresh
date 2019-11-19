<template>
    <div class="confirm-payment" id="confirmPayment">
        <div class="container" v-if="user">
            <div class="title">
                <p>ЗАЯВА № {{user.orderKey}}</p>
            </div>
            <div class="rules">
                <p>
                    Я, {{signedPersonName}}, прошу виготовити {{cardName}} (надалі картку), що є складовою АСООП у
                    громадському транспорті Вінницької міської ОТГ (об'єднаної територіальної громади)
                    і може використовуватись як носій електронного квитка та зареєструвати мене користувачем послуг,
                    що надаватимуться КП «Вінницякартсервіс».
                    <br>
                </p>
                <p>
                    Відповідно до Закону України “Про захист персональних даних”, я даю згоду КП «Вінницякартсервіс»
                    безпосередньо, а також залученим ними агентам та суб-агентам на перевірку і обробку, збір, включаючи
                    систематизацію, накопичення, зберігання, передачу, уточнення (оновлення, зміну), використання,
                    знеособлення, блокування, знищення персональних даних, зазначених у цій заяві, надання з
                    використанням засобів автоматизації та/або без використання таких засобів, в тому числі на
                    інформаційний обмін з органами виконавчої влади для надання пільг з оплати проїзду на пасажирському
                    транспорті. Зазначені мною персональні дані надаються з метою випуску, видачі та обслуговування
                    <!--муніципальної карти вінничанина--> картки і розміщених на ній електронних додатків в
                    інформаційних системах обробки персональних даних КП «Вінницякартсервіс». Я даю згоду на нанесення
                    персональних даних користувача карти, в тому числі нанесені на неї у графічному вигляді фотографії,
                    прізвища, імені, по батькові, дати народження, номерів документів, що підтверджують пільгу. Згода
                    надається з дати заповнення заяви. Підтверджую свою згоду на передачу інформації в електронній формі
                    заяви (в тому числі персональних даних) в захищеному вигляді по відкритих каналах зв'язку мережі
                    Інтернет.
                    Достовірність зазначених відомостей підтверджую. Мені відомо, що завідомо неправдиві відомості,
                    повідомлені про себе або користувача картки <!--муніципальної карти вінничанина--> в заяві,
                    можуть спричинити відмову щодо мене в оформленні картки.
                </p>
            </div>
            <div class="personal-info">
                <div class="personal-info__title">
                    <p>
                        ПЕРСОНАЛЬНІ ДАНІ КОРИСТУВАЧА КАРТИ
                    </p>
                </div>
                <div class="person">
                    <div class="person-info">
                        <p>
                            {{user.lastName}} {{user.name}} {{user.middleName || ''}}
                        </p>
                        <p>
                            Стать : {{getUserGender(user.gender)}}
                        </p>
                        <p>
                            Дата народження: {{getFormatedDate(user.personDateOfBirth)}}
                        </p>
                        <p v-if="user.personTaxNumber">
                            ІПН: {{user.personTaxNumber}}
                        </p>
                        <base-document
                                :docName="getPersonOfficialDocument"
                                :serias="user.personDocumentSeries"
                                :docNumber="user.personDocumentNumber"
                                :validTill="getFormatedDate(user.personDocumentValidTill  || user.personDocumentIssuedDate)"
                        >
                        </base-document>
                        <base-document
                                v-if="user.privilegeDocumentNumber || user.privilegeDocumentSeries"
                                :docName="getPrivilegeDocument(user.privilegeDocumentType)"
                                :serias="user.privilegeDocumentSeries"
                                :docNumber="user.privilegeDocumentNumber"
                                :validTill="getFormatedDate(user.privilegeDocumentValidTill)"
                        >
                        </base-document>
                    </div>
                    <div class="confirm-payment__image-wrap">
                        <img :src="avatar" alt="person portrait" ref="avatar">
                    </div>
                </div>
                <div class="representative-info" v-if="user.representativeLastName">
                    <p>
                        Представник: {{representativeName}}
                    </p>
                    <p>
                        Відносини з особою: {{getRepresentetiveRelationshipsList(user.representativeRelation)}}
                    </p>
                    <base-document
                            :docName="getAdultOfficialDocument(user.representativeDocumentType)"
                            :serias="user.representativeDocumentSeries"
                            :docNumber="user.representativeDocumentNumber"
                            :validTill="getFormatedDate(user.representativeValidTill || user.representativeIssuedDate)"
                    >
                    </base-document>
                </div>
                <div class="address">
                    <p v-if="user.cityTown">
                        Адреса: {{`${getUserRegion(user.region)}, ${user.cityTown}, ${user.street}, ${user.houseNumber},
                        ${user.apartment || ''}`}}
                    </p>
                    <p>
                        Контактний телефон 1: {{user.personMobilePhone}},
                    </p>
                    <p v-if="user.personPhone">
                        Контактний телефон 2: {{user.personPhone}}
                    </p>
                    <p>
                        Електронна скринька: {{user.personEmail}}
                    </p>
                </div>
            </div>
            <div class="attention">
                <div class="attention__title">
                    <p>
                        УВАГА!
                    </p>
                </div>
                <div class="attention__info">
                    <p>
                        Достовірність внесених даних підтверджується користувачем картки (або представником)
                        оплатою.
                        У випадку виявлення розбіжностей або помилок, карта буде знищена без повернення оплати.
                    </p>
                </div>
            </div>
            <div class="confirm">
                <p class="confirm-text">
                    Мене попереджено, що якщо оформлена картка <!--{{personCardName}}-->
                    <!--муніципальна карта вінничанина-->
                    буде викрита в шахрайських діях, то КП «Вінницякартсервіс» має право в
                    односторонньому порядку провести блокування картки.<!--
                    {{personCardName}}--> При втраті або знищенні <!--{{personCardName}}-->
                    картки раніше встановленого періоду, перевипуск відбувається за рахунок громадянина. У разі
                    будь-якої зміни статусу пільговика (прізвища, місця проживання, зняття
                    з обліку в ЄДАРП тощо) я зобов'язуюсь протягом 3-х днів повідомити КП «Вінницякартсервіс» про
                    зазначені зміни. У випадку неповідомлення, відповідальність
                    за наслідки (блокування картки) несе громадянин.
                    <br>
                    <br>
                    Дата заповнення: {{getFormatedDate(new Date())}}<br>
                </p>
                <div class="signed-person">
                    <p>Підпис</p>
                    <p class="signed-person__name">{{signedPersonName}}</p>
                </div>
                <p>
                    Оплату буде зараховано в автоматичному режимі. Коли картку буде виготовлено, Вам надійде лист або
                    SMS.
                </p>
            </div>
            <div class="payment">
                <div class="payment-info">
                    <h5>
                        Для оплати:
                    </h5>
                    <ul class="payment-flow">
                        <li>
                            перейдіть за посиланням: <a href="https://et.vn.ua/4ec">et.vn.ua/4ec</a>
                        </li>
                        <li>
                            введіть номер заяви {{user.orderKey}} та пін {{user.orderPin}}. <!--номер заяви {{user.orderId}};-->
                        </li>
                        <!--<li>
                            внесіть дані банківської картки.
                        </li>-->
                    </ul>
                    <p>
                        Оплату буде зараховано в автоматичному режимі.<br>
                        Коли картку буде виготовлено, Вам надійде лист або SMS.
                    </p>
                </div>
                <div class="qr-code">
                    <img :src="qrCode" ref="qr" alt="qr code">
                </div>
            </div>

            <div class="control-buttons">
                <base-button class="print-btn" @click="hideWindow">
                   Згорнути заяву
                </base-button>
                <base-button class="pay-btn" @click="printQuestionnaire">
                    Роздрукувати
                </base-button>
            </div>
        </div>
    </div>
</template>

<script src="./confirmPayment.js"></script>

<style scoped lang="scss" src="./confirm-payment-styles.scss"></style>
