<template>
    <div class="successful-payment__wrap">
        <div class="successful-payment">
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
                    <button @click="goTo4ec">
                        Ok
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    goTo4ec () {
      const key = this.$route.query.key
      const pin = this.$route.query.pin
      this.$router.push('/4ec')
    }
  }
}
</script>

<style scoped lang="scss">
    .successful-payment__wrap {
        display: flex;
        justify-content: center;
    }

    .successful-payment {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        /*padding: 0 30px;*/
        max-width: 557px;
    }

    .successful-payment__header {
        background-color: #f2f2f2;
        padding-bottom: 25px;
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
            /*margin: 0 auto;*/
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
            font-family: "Century Gothic";
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
