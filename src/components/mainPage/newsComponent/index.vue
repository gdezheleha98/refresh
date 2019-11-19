<template>
    <div class="content">
        <h2>Останні новини</h2>
        <specific-news v-for="(elem, index) of $store.getters.getNews" :index="index" :key="index" :currentNews="elem"></specific-news>
    </div>
</template>

<script>
import specificNews from './specificNewsPreview'
export default {
  components: {
    specificNews
  }
}
</script>

<style scoped lang="scss" src="./style.scss"></style>
