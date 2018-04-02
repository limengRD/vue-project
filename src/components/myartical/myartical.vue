<template>
    <div class="myartical">
        <ul>
            <li v-for="item in list">
                <div class="title">
                    <a href="javascirpt:;"  @click="showdetails(item.id)">{{item.title}}</a>
                    <div class="operation">
                        <el-button type="primary" icon="el-icon-edit" circle @click="editorArtical(item.id)"></el-button>
                        <el-button type="danger" icon="el-icon-delete" circle @click="deleteArtical(item.id)"></el-button>
                    </div> 
                </div>
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
        this.showlist()
    },
    methods: {
        showdetails:function(id){
            this.$router.push({name:'details',params: {id: id}})
        },
        reshowlist:function(list) {
            this.list = list
        },
        showlist:function() {
            this.$http.get('/showMyArtical').then(response => {
                this.list= response.data.list
                // 返回的所有数据条数
                this.allDataSize = response.data.sum
            })
        },
        editorArtical:function(id) {
            this.$router.push({name:'editor',params:{id,id}})
        },
        deleteArtical:function(id) {
            this.$http.post('/deleteArtical',{id:id}).then(response => {
                if(response.data.err_code == 0) {
                    this.showlist()
                }
            })
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
    .operation {
        float: right;
    }
</style>
