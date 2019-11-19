<template>
    <div class="loading-indicator__wrap" v-if="$store.getters.isShownIndicator">
        <div class="loading-indicator">
            <div class="correct-heigth"></div>
            <div class="loading-indicator__content">
                <img src="../../assets/Wait256.gif" alt="">
                <h3>{{$store.getters.indicatorText}}</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

    img {
        width: 100%;
        max-width: 350px;
        object-fit: contain;
    }

    .loading-indicator__wrap {
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        /*opacity: 0.8;*/
        background-color: rgba(255,255,255,.8);
        display: flex;
        justify-content: center;
        align-items: center;

        position: fixed;
        z-index: 10000;
        /*overflow: hidden;*/
        max-width: 100%;
        padding: 30px;
    }

    .loading-indicator {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        /*height: 100%;*/
        border-radius: 50%;
        max-width: 400px;
        max-height: 400px;
        background-color: rgba(255,255,255,1);
        z-index: 100000;
        padding: 20px;
        /*opacity: 1;*/
        position: relative;
    }

    .loading-indicator__content {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        padding: 30px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .correct-heigth {
        padding-top: 100%;
    }

    h3 {
        margin-top: 20px;
        text-align: center;
    }

    .spinner {
        /*margin: 100px auto 0;*/
        width: 70px;
        text-align: center;
        z-index: 1000;
    }

    .spinner > div {
        width: 18px;
        height: 18px;
        background-color: #333;
        z-index: 1000;
        border-radius: 100%;
        display: inline-block;
        -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
        animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    }

    .spinner .bounce1 {
        -webkit-animation-delay: -0.32s;
        animation-delay: -0.32s;
    }

    .spinner .bounce2 {
        -webkit-animation-delay: -0.16s;
        animation-delay: -0.16s;
    }

    @-webkit-keyframes sk-bouncedelay {
        0%, 80%, 100% {
            -webkit-transform: scale(0)
        }
        40% {
            -webkit-transform: scale(1.0)
        }
    }

    @keyframes sk-bouncedelay {
        0%, 80%, 100% {
            -webkit-transform: scale(0);
            transform: scale(0);
        }
        40% {
            -webkit-transform: scale(1.0);
            transform: scale(1.0);
        }
    }
</style>
