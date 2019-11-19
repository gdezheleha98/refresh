<template>
    <button @click="$emit('click')">
        <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped lang="scss">
    button {
        width: 100%;
        border-radius: 4px;
        outline: none;
        cursor: pointer;
        padding: 7px 10px;
        line-height: 1em;
        font-family: "Century Gothic", sans-serif;
        font-size: 16px;
        font-weight: 700;
        max-width: 280px;
        transition: .3s;
        background-color: #B54285;
        /*border-color: #B54285;*/
        color: #efefef;
        border: none;

        &:hover {
            background-color: #d967a7;
            color: white;
        }
    }
</style>
