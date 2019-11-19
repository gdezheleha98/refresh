<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <!--&lt;!&ndash;<div class="modal-header">&ndash;&gt;-->
                        <!--&lt;!&ndash;<slot name="header">&ndash;&gt;-->
                            <!--&lt;!&ndash;default header&ndash;&gt;-->
                        <!--&lt;!&ndash;</slot>&ndash;&gt;-->
                    <!--&lt;!&ndash;</div>&ndash;&gt;-->

                    <!--<div class="modal-body">-->
                        <!--<slot name="body">-->
                            <!--default body-->
                        <!--</slot>-->
                    <!--</div>-->

                    <!--<div class="modal-footer">-->
                        <!--<slot name="footer">-->
                            <!--<button class="modal-default-button" @click="$emit('close')">-->
                                <!--OK-->
                            <!--</button>-->
                        <!--</slot>-->
                    <!--</div>-->

                    <div class="server-error-msg__wrap">
                        <div class="server-error-msg">
                            <h3>
                                Помилка на сервері -
                            </h3>
                            <h4>
                                Спробуйте пізніше
                            </h4>
                        </div>
                    </div>
                    <div class="aliens-img">
                        <img src="../../../assets/ServerErrorGray.png" alt="">
                    </div>
                    <div class="close-modal" @click="$emit('close')">
                        <button>Ok</button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped lang="scss">
    .modal-mask {
        position: fixed;
        z-index: 10000;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
        padding: 20px;
    }

    .modal-container {
        max-width: 400px;
        width: 100%;
        margin: 0px auto;
        padding: 10px 30px;
        background-color: #dddddd;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Calibri, serif;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .server-error-msg__wrap {
        width: 100%;
        /*margin-top: 15px;*/
        display: flex;
        justify-content: center;
        padding: 0 30px;
    }

    .server-error-msg {
        width: 100%;
        /*padding-left: 20%;*/
        /*padding-right: 15%;*/
        padding-top: 20px;
        background-image: url('../../../assets/error-text-bg.png');
        background-repeat: no-repeat;
        -webkit-background-size: contain;
        background-size: contain;
        h3 {
            color: #4c4c4c;
            /*font-family: Verdana;*/
            font-size: 18px;
            font-weight: 700;
            line-height: 1.1em;
            text-transform: uppercase;
            padding-top: 20%;
            text-align: center;
        }

        h4 {
            color: #4c4c4c;
            /*font-family: Verdana;*/
            font-size: 14px;
            font-weight: 700;
            line-height: 1.1em;
            text-transform: uppercase;
            padding-bottom: 20%;
            text-align: center;
        }

        @media screen and(max-width: 375px) {

        }
    }

    .aliens-img {
        width: 100%;
        padding: 0 20px 0;
        /*padding-bottom: 0;*/
        img {
            width: 100%;
        }
    }

    .close-modal {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        padding-top: 10px;
        button {
            color: #efefef;
            font-family: "Century Gothic";
            font-size: 16px;
            font-weight: 700;
            background-color: #b54285;
            padding: 10px 30px;
            line-height: 1em;
            border: none;
            -webkit-border-radius: 3px;
            -moz-border-radius: 3px;
            border-radius: 3px;
            transition: .3s;
            &:hover {
                background-color: #d967a7;
            }
        }

    }

    .modal-body {
        margin: 20px 0;
    }

    .modal-default-button {
        float: right;
    }

    @media screen and (max-width: 450px){
        .server-error-msg__wrap {
            padding: 0 15px;
        }
        .modal-container {
            padding: 15px 20px;
        }
    }

    @media screen and (max-width: 390px){
        .server-error-msg__wrap {
            padding: 0 10px;
        }
        /*.server-error-msg {*/
            /*h3 {*/
                /*padding-top: 30%;*/
            /*}*/
        /*}*/
        .modal-container {
            padding: 15px 10px;
        }
    }

    @media screen and (max-width: 320px){
        .server-error-msg {
            h3 {
                padding-top: 15%;
            }
        }
    }

    /*
     * The following styles are auto-applied to elements with
     * transition="modal" when their visibility is toggled
     * by Vue.js.
     *
     * You can easily play with the modal transition by editing
     * these styles.
     */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>
