<template>
    <div class="successful-payment__wrap">
        <div class="successful-payment">
            <div class="successful-payment__inner">
                <div class="successful-payment__header">
                    <div class="successful-icon">
                        <slot name="icon"></slot>
                    </div>
                    <h2>
                        <slot name="header"></slot>
                    </h2>
                </div>
                <div class="successful-content">
                    <p>
                        <slot></slot>
                    </p>
                    <div class="close-btn">
                        <button @click="$emit('close')">
                            Ok
                        </button>
                    </div>

                </div>
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
    .successful-payment__wrap {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .successful-payment {
        width: 100%;
        max-width: 1140px;
        display: flex;
        justify-content: center;
        background-color: #fff;
        padding: 80px 20px;
    }

    .successful-payment__inner {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        /*padding: 0 30px;*/
        max-width: 557px;

        -webkit-box-shadow: 2px 1px 13px -1px rgba(35,31,32,0.46);
        -moz-box-shadow: 2px 1px 13px -1px rgba(35,31,32,0.46);
        box-shadow: 2px 1px 13px -1px rgba(35,31,32,0.46);
    }

    .successful-payment__header {
        background-color: #f2f2f2;
        padding-bottom: 25px;
        width: 100%;
    }

    .successful-icon {
        margin-top: 34px;
        width: 100%;
        display: flex;
        justify-content: center;
        padding-bottom: 16px;

        img {
            width: 100%;
            height: 100%;
            max-height: 61px;
            max-width: 61px;
        }
    }

    $radius: 5px;

    .successful-content {
        background-color: #fff;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 35px 30px 25px;
        flex-direction: column;

        p {
            color: #434343;
            font-family: Calibri;
            font-size: 18px;
            font-weight: 400;
            line-height: 27px;
            width: 100%;
            max-width: 400px;
        }
    }

    h2 {
        color: #434343;
        font-family: "Century Gothic";
        font-size: 18px;
        font-weight: 700;
        text-align: center;
        text-transform: uppercase;
    }

    .close-btn {
        width: 100%;
        display: flex;
        justify-content: flex-end;

        button {
            color: #efefef;
            font-family: "Century Gothic", sans-serif;
            font-size: 16px;
            font-weight: 700;
            padding: 10px 30px;
            line-height: 1em;
            background-color: #b54285;
            border: none;
            outline: none;
            -webkit-border-radius: $radius;
            -moz-border-radius: $radius;
            border-radius: $radius;
            transition: .3s;

            &:hover {
                background-color: #d967a7;
            }
        }
    }

</style>
