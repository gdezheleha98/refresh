<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-header">
                        <slot name="header">
                            default header
                        </slot>
                    </div>

                    <div class="modal-body">
                        <slot name="default">
                            default body
                        </slot>
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
        background-color: rgba(0, 0, 0, .3);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
        padding: 20px;
    }

    .modal-container {
        max-width: 500px;
        width: 100%;
        margin: 0 auto;
        padding: 30px 30px;
        background-color: #fff;
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
        display: flex;
        justify-content: center;
        padding: 0 30px;
    }

    .close-modal {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        padding-top: 40px;

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

    @media screen and (max-width: 450px) {
        .server-error-msg__wrap {
            padding: 0 15px;
        }
        .modal-container {
            padding: 15px 20px;
        }
    }

    @media screen and (max-width: 390px) {
        .server-error-msg__wrap {
            padding: 0 10px;
        }

        .modal-container {
            padding: 15px 10px;
        }
    }

    @media screen and (max-width: 320px) {
        .server-error-msg {
            h3 {
                padding-top: 15%;
            }
        }
    }

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
