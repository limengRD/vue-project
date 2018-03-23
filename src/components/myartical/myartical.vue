<template>
    <div class="myartical">
        <ul>
            <li v-for="item in list">
                <div class="title">
                    <a href="">{{item.title}}</a>
                </div>
                <div class="content">{{item.content}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: []
        }
    },
    created(){
        this.$http.get('/showMyArtical').then(response => {
            this.list = response.data
        })
    }
}
</script>

<style>
    .myartical {
        margin-top: 20px;
        background: #fff;
    }
    .myartical ul li {
        height: 100px;
        border-bottom: 1px solid #cdcdcd;
        box-sizing: border-box;
        padding: 10px 20px;
        cursor: pointer;
    }
    .myartical ul li:hover {
        background: #fcfcfc;
    }
    .myartical ul li .title {
        height: 50px;
        line-height: 50px;
    }
</style>
