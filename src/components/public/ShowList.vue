<template>
    <ul class="showlist-ul">
        <li v-for="(item,index) in list">
            <div class="list-main">
                <div class="list-title">
                    <a href="#">{{item.title}}</a>
                </div>
                <div class="list-body">
                    <ul>
                        <li v-for="word in item.words">
                            <div>
                                <a href="">{{word}}</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    data(){
        return {
            list: []
        }
    },
    created() {
        this.$http.post('/showFirstList').then(response => {
           this.list = response.data.list
        })
    },
    watch: {
        '$route' (to, from) {
            var navList = this.$route.params.nav
            this.$http.post('/showList',{navList:navList}).then(response => {
            this.list = response.data.list
        })
    }
  }
}
</script>

<style>
    .showlist-ul {
        background: #fff;
        width: 700px;
    }
    .showlist-ul>li {
        height: 100px;
        box-sizing: border-box;
        padding: 20px 20px;
        border-bottom: 1px solid rgba(178,186,194,.15);
    }
    .showlist-ul>li:hover {
        background: #fcfcfc;
        cursor: pointer;
    }
    .list-main {

    }
    .list-title {
        margin: 10px 0;
    }
    .list-title a {
        color: #000;
    }
    .list-body ul li {
        float: left;
        margin-right: 20px;
    }

</style>
