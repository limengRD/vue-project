<template>
    <div class="writer">
        <el-input  class="form_input" v-model="title" placeholder="请输入文章标题"></el-input>
        <mavon-editor v-model="artical"/>
        <el-button class="saveBtn" @click="saveArticl"  type="primary">保存</el-button>
    </div>    
</template>

<script>
export default {
    data() {
        return {
            artical: '',
            title: '',

        }
    },
    methods: {
        saveArticl: function() {
            var title = this.title
            var artical = this.artical
            if( title == '') {
                this.title = '标题不能为空'
                return false
            }
            if( artical == '') {
                this.artical = '文章内容不能为空'
                return false;
            }
            this.$http.post('/saveArtical',{artical:this.value}).then(response => {
                console.log(response)
            })  
        }
    }
}
</script>

<style>
    .writer {
        margin-top: 20px;
    }
    .writer .v-note-wrapper {
        min-height: 550px;
    }
    .saveBtn {
        float: right;
        margin-right: 20px;
        margin-top: 20px;
    }
    .writer .el-input .active {
        border-color: rgb(250, 22, 22);
    }
 </style>
