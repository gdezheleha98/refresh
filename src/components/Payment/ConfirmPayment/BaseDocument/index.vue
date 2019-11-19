<template>
    <p class="document-format">
        {{docName}}:
        {{serias ? `серія ${serias}` : ''}}
        номер {{docNumber}},
        {{validTill}}
    </p>
</template>

<script>
export default {
  props: {
    serias: {
      required: true
    },
    docNumber: {
      required: true
    },
    docName: {
      required: true
    },
    validTill: {
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
    .document-format {

    }
</style>
