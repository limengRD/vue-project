<template>
    <div class="writer">        
        <p>{{errorTitle}}</p>
        <el-input  class="form_input" v-model="title" placeholder="请输入文章标题"></el-input>
        <p>{{errorContent}}</p>
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
            errorTitle: '',
            errorContent: '',
            id: this.$route.params.id
        }
    },
    created() {
        this.$http.get('/articalDetails',{params:{id:this.id}}).then(response => {
            this.artical = response.data.details.content
            this.title = response.data.details.title
        })
    },
    methods: {
        saveArticl: function() {
            var title = this.title
            var artical = this.artical
            if( title == '') {
                this.errorTitle = '标题不能为空'
            } else {
                this.errorTitle = ''
            }
            if( artical == '') {
                this.errorContent = '文章内容不能为空'
            } else {
                this.errorContent = ''
            }
            if( title !== '' && artical !== '')
                this.$http.post('/editorArtical',{title:this.title,artical:this.artical,id:this.id}).then(response => {
                    if(response.data.err_code == 0) {
                        alert(response.data.message)
                    }
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
    .writer>p {
        color: red;
    }
 </style>
