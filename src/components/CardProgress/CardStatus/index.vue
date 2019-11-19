<template>
    <div class="card-status">
        <div class="header">
            <h3>
                <div :class="['circle-wrap', successStatus ? 'success-circle' : '']">
                    <span class="circle"></span>
                    <span class="circle" v-if="doubleCircle"></span>
                </div>
                <slot name="header">
                    Pass text here :)
                </slot>
            </h3>
        </div>
        <div class="status-body">
            <slot name="icon">
                Pass icon here :)
            </slot>
            <div class="status-text">
                <slot name="text">
                    Pass text here
                </slot>
            </div>
            <p class="time">
                <slot name="time">

                </slot>
            </p>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    doubleCircle: {
      default: false,
      type: Boolean
    },
    successStatus: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style scoped lang="scss">
    .card-status {
        width: 100%;
        max-width: 406px;
        -webkit-box-shadow: 2px 1px 13px -1px rgba(191,191,191,1);
        -moz-box-shadow: 2px 1px 13px -1px rgba(191,191,191,1);
        box-shadow: 2px 1px 13px -1px rgba(191,191,191,1);
        border-radius: 5px;
    }

    .header {
        /*width: 100%;*/
        background-color: #e1e1e1;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;

        h3 {
            width: 100%;
            color: #434343;
            font-family: Calibri, sans-serif;
            font-size: 18px;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .circle-wrap {
        margin-right: 3px;
        display: flex;
    }

    .circle {
        width: 8px;
        height: 8px;
        background-color: #434343;
        display: inline-block;
        border-radius: 50%;
        margin-right: 3px;
        transition: all 1s;
    }

    .success-circle {
        span {
            background-color: #629247;
        }
    }

    .status-body {
        /*width: 100%;*/
        padding: 30px 20px 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            width: 100%;
            max-width: 35px;
            height: 40px;
            object-fit: contain;
        }
    }

    .time {
        color: #434343;
        font-family: Calibri, sans-serif;
        font-size: 14px;
        font-weight: 400;
        text-align: right;
        width: 100%;
    }

    .status-text {
        width: 100%;

        p {
            width: 100%;
            text-align: center;
            font-family: Calibri, sans-serif;
            font-size: 18px;
            font-weight: 700;
            margin: 0;
            padding: 10px 0 35px;
        }
    }
</style>
