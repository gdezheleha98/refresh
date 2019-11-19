<template>
    <div id="app">
        <the-header></the-header>
        <main id="main">
            <router-view></router-view>
            <loading-indicator></loading-indicator>
            <error-window></error-window>
        </main>
        <the-footer></the-footer>
    </div>
</template>

<script>
import TheFooter from './components/commonComponents/TheFooter'
import TheHeader from './components/commonComponents/TheHeader'
import LoadingIndicator from './components/LoadingIndicator'
import ErrorWindow from './components/BaseErrorWindow'

export default {
  components: {
    TheFooter,
    TheHeader,
    LoadingIndicator,
    ErrorWindow

  }
}
</script>

<style lang="scss" src="./commonStyles/fonts.scss"></style>
<style lang="scss" src="./commonStyles/styles.scss"></style>
<style lang="scss">

</style>
