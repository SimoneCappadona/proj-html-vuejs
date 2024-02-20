<script>
import appHeader from './components/appHeader.vue';
import appMain from './components/appMain.vue';
import appFooter from './components/appFooter.vue';

export default{
    components: { appHeader, appMain, appFooter},
}

</script>

<template>
<appHeader />
<appMain />
<appFooter />
</template>

<style lang="scss">
@use './assets/style/general.scss';
</style>
