<template>
    <div class="shownav">
        <ul>
            <li v-for="item in nav" ><router-link :to="'/home'+ item.path" >{{item.name}}</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nav: [],

        }
    },
    created(){
        this.$http.post('/shownav').then(response => {
            this.nav = response.data.nav
        })
    },

}
</script>

<style>
    .shownav {
        width: 700px;
        height: 60px;
        box-sizing: border-box;
        padding: 20px 20px;
        background: #fff;
        border-bottom: 1px solid rgba(178,186,194,.15);
    }
    .shownav ul li {
        float: left;
        margin-right: 20px;
        cursor: pointer;
    }
</style>
