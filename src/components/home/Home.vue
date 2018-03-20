<template>
    <div class="home">
        <div class="home-left">
            <shownav></shownav>
            <router-view></router-view>
        </div>
        <div class="home-right">

        </div>
    </div>
</template>

<script>
import showlist from '../public/ShowList.vue'
import shownav from '../public/ShowNav.vue'
export default {
    components: {
        showlist,
        shownav
    }
}
</script>

<style>
    .home {
        margin-top: 20px;
    }
    .home-left {
        float: left;
    }
</style>
