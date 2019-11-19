<template>
    <div class="row news" @click.prevent="showFullNews">
        <hr/>
        <div class="col-md-2">
            <img :src="currentNews.img"/>
        </div>
        <div class="col-md-10">
            <h5><a href="#">{{currentNews.title}}</a></h5>
            <ul class="list-inline italic-list">
                <li class="list-inline-item">{{currentNews.date}}</li>
               <!--<li class="list-inline-item">переглядів: {{currentNews.views}}</li>
                <li class="list-inline-item">коментарів: {{currentNews.preview.comments}}</li>-->
            </ul>
            <p>{{currentNews.preview.text}}</p>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    currentNews: Object,
    index: Number
  },
  methods: {
    showFullNews () {
      this.$router.push(`/news/${this.currentNews.url}`)
    }
  },
  computed: {
    imgPath () {
      return require(`../../../../assets/${this.currentNews.img}`)
    }
  }
}
</script>

<style scoped lang="scss" src="./style.scss"></style>
