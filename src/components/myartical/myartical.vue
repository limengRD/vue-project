<template>
    <div class="myartical">
        <ul>
            <li v-for="item in list">
                <div class="title">
                    <a href="javascirpt:;"  @click="showdetails(item.id)">{{item.title}}</a>
                </div>
                <div class="content">{{item.content}}</div>
            </li>
        </ul>
        <pagesize v-on:showlist="reshowlist" :allDataSize="allDataSize"></pagesize>
    </div>
</template>

<script>
import pagesize from '../../components/public/pagesize.vue'
export default {
    data() {
        return {
            list: [],
            allDataSize:0,
        }
    },
    created(){
        this.$http.get('/showMyArtical').then(response => {
            this.list= response.data.list
            // 返回的所有数据条数
            this.allDataSize = response.data.sum
        })
    },
    methods: {
        showdetails:function(id){
            this.$router.push({name:'details',params: {id: id}})
        },
        reshowlist:function(list) {
            this.list = list
        }
    },
    components: {
        pagesize
    }  
}
</script>

<style>
    .myartical {
        margin-top: 20px;
        background: #fff;
    }
    .myartical>ul li {
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
