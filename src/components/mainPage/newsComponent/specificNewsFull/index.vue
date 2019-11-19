<template>
    <div class="container">
        <div class="row">
            <div class="content">
                    <h5><a href="#">{{currentNews.title}}</a></h5>
                    <ul class="list-inline italic-list">
                        <li class="list-inline-item">{{currentNews.date}}</li>
                        <!--<li class="list-inline-item">переглядів: {{currentNews.views}}</li>-->
                        <!--<li class="list-inline-item">коментарів: {{currentNews.fullNews.comments}}</li>-->
                    </ul>
                    <div v-html="currentNews.fullNews.htmlText"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  // props: {
  //     currentNews: Object,
  // },
  computed: {
    currentNews () {
      return this.$store.getters.getNews.find(elem => {
        return elem.url === this.$route.params.newsName
      })
    }
  }
}
</script>

<style scoped lang="scss" src="./style.scss"></style>
