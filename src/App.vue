<template>
    <div id="app">
        <alt-header/>
        <div id="main" class="container">
            <router-view :key="$route.path"/>
        </div>
        <alt-footer/>
  </div>
</template>

<script>
    import Vue from 'vue'
    import Header from './header/components/Header'
    import Footer from './footer/components/Footer'
    
    import Multiselect from 'vue-multiselect'
    import VCalendar from 'v-calendar'

    Vue.component('alt-header', Header)
    Vue.component('alt-footer', Footer)
    Vue.component('multiselect', Multiselect)

    Vue.use(VCalendar)

    export default {}
</script>

<style lang="scss">
    @import './comum/styles/main.scss';

    #main {
        margin-top: 120px;
        margin-bottom: 10px;
        padding-bottom: 80px;
        padding-left: 5px;
        padding-right: 5px;
    }

    .container {
        padding-left: 5px;
        padding-right: 5px;
    }
</style>
