<template>
    <div class="card-payment__wrap">
        <div class="card-payment">
            <h2 class="card-payment-header">
                Оплатіть замовлення<br>
                муніципальної картки вінничанина
            </h2>
            <div class="card-payment__content">
                <div class="statement-number">
                    <div class="statement-number-input">
                        <p>Введіть номер заяви</p>
                        <input type="text" placeholder="123456" v-mask="'######'">
                    </div>
                    <div class="image-preview">
                        <img src="../../../assets/PaymentPreview.png" alt="Card payment">
                    </div>
                </div>
                <div class="name">
                    <h2>
                        С***на Марія Іванівна
                    </h2>
                </div>
                <div class="attention">
                    <p>
                        Увага! Достовірність внесених в заяві даних підтверджується
                        замовником картки (або представником) у спосіб здійснення оплати.
                        У випадку виявлення розбіжностей або помилок випущена
                        картка буде знищена без повернення оплати!
                    </p>
                </div>
                <div class="payment">
                    <h4>
                        Оплатіть:
                    </h4>
                    <div class="payment-props">
                        <h4>
                            За картку:
                        </h4>
                        <div class="price">
                            <p>
                                60 грн.
                            </p>
                        </div>
                    </div>
                    <div class="payment-props">
                        <h4>
                            Комісія:
                        </h4>
                        <div class="price">
                            <p>
                                1 грн. 38 коп.
                            </p>
                        </div>
                    </div>
                    <hr>
                    <div class="payment-props total-sum">
                        <h4>
                            Разом:
                        </h4>
                        <div class="price">
                            <p>
                                61 грн. 38 коп.
                            </p>
                        </div>
                    </div>
                    <div class="card-number">
                        <p>
                            Введіть номер банківської картки
                        </p>
                        <input type="text" v-mask="'####-####-####-####'" placeholder="____-____-____-____">
                    </div>
                    <div class="card-info">
                        <div class="card-term">
                            <p>
                                Термін дії картки
                            </p>
                            <input type="text" v-mask="'##/##'" placeholder="__/__">
                        </div>
                        <div class="cvv">
                            <p>
                                CVV
                            </p>
                            <input type="text" v-mask="'###'" placeholder="___">
                        </div>
                    </div>
                </div>
            </div>
            <div class="auto-payment-info">
                <p>
                    Зверніть увагу! Оплату буде зараховано в автоматичному режимі.
                    Коли карту буде виготовлено, Вам надійде SMS та лист на електронну пошту.
                </p>
            </div>
            <div class="control-buttons">
                <button class="cancel-btn">
                    Скасувати
                </button>
                <button class="pay-now-btn">
                    Оплатити зараз
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped lang="scss">
    $bdColor: #61883c;

    .card-payment__wrap {
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: #fff;
    }

    .card-payment {
        width: 100%;
        max-width: 550px;
    }

    .card-payment__content {
        width: calc(100% - 40px);
        padding-left: 40px;
    }

    .card-payment-header {
        color: #434343;
        font-family: "Century Gothic";
        font-size: 24px;
        font-weight: 700;
        margin-top: 22px;
        line-height: 1em;
    }

    .statement-number {
        width: 100%;
        display: flex;
        align-items: center;
    }

    .statement-number-input {
        width: 100%;

        p {
            color: #434343;
            font-family: "Century Gothic";
            font-size: 16px;
            font-weight: 700;
            line-height: 1em;
            margin: 0;
        }

        input {
            height: 37px;
            width: calc(100% - 19px);
            margin-right: 19px;
            margin-top: 7px;

            &::placeholder {
                color: #929497;
                font-family: "Century Gothic";
                font-size: 16px;
                font-weight: 400;
            }
        }
    }

    .image-preview {
        width: 100%;
        max-width: 114px;

        img {
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }

    .name {
        width: 100%;

        h2 {
            color: #355226;
            font-family: "Century Gothic";
            font-size: 18px;
            font-weight: 700;
            line-height: 1em;
        }
    }

    .attention {
        width: 100%;

        P {
            margin-top: 26px;
            color: #434343;
            font-family: Calibri;
            font-size: 16px;
            font-weight: 400;
            line-height: 20px;
        }
    }

    .payment {
        max-width: 100%;
        margin-top: 15px;
        display: inline-block;

        > h4 {
            color: #434343;
            font-family: "Century Gothic";
            font-size: 16px;
            font-weight: 700;
            margin-top: 20px;
        }

        hr {
            background-color: #8e9e85;
            height: 1px;
            width: calc(100% - 10px);
            margin: 10px 5px 0;
        }
    }

    .payment-props {
        width: 100%;
        margin-top: 20px;
        display: flex;
        align-items: center;

        h4 {
            color: #355226;
            font-family: "Century Gothic";
            font-size: 16px;
            font-weight: 700;
            line-height: 1em;
            margin: 0;
        }

        p {
            color: #355226;
            font-family: Calibri;
            font-size: 18px;
            font-weight: 400;
            line-height: 1em;
            margin: 0;
            padding-left: 50px;
        }
    }

    .total-sum {
        background-color: #f5faf3;
        height: 25px;
    }

    .card-number, .card-info {
        margin-top: 38px;
        width: 100%;

        p {
            color: #434343;
            font-family: "Century Gothic";
            font-size: 16px;
            font-weight: 700;
            line-height: 1em;
            margin: 0;
        }

        input {
            height: 37px;
            width: calc(100% - 19px);
            margin-right: 19px;
            margin-top: 7px;

            &::placeholder {
                color: #929497;
                font-family: "Century Gothic";
                font-size: 16px;
                font-weight: 400;
            }
        }
    }

    .card-info {
        width: 100%;
        display: flex;
        margin-top: 22px;
    }

    .card-term {
        width: 100%;
    }

    .cvv {
        width: 100%;
        max-width: 110px;
    }

    .auto-payment-info {
        width: 100%;
        margin-top: 30px;

        p {
            color: #434343;
            font-family: Calibri;
            font-size: 16px;
            font-weight: 400;
            line-height: 1em;
        }
    }

    $radius: 3px;

    .control-buttons {
        width: 100%;
        padding: 60px 0 30px;

        button {
            border: 1px solid #b54285;
            outline: none;
            font-family: "Century Gothic";
            font-size: 16px;
            font-weight: 700;
            -webkit-border-radius: $radius;
            -moz-border-radius: $radius;
            border-radius: $radius;
            width: 100%;
            max-width: 182px;
            padding: 3px;
            margin-left: 40px;
            cursor: pointer;
            transition: .3s;

            &:hover {
                background-color: #d967a7;
            }
        }

    }

    .cancel-btn {

        color: #434343;
        background-color: #fff;

    }

    .pay-now-btn {
        color: #efefef;
        background-color: #b54285;

    }
</style>
