<template>
    <div class="writer">
        <mavon-editor v-model="value"/>
        <el-button class="saveBtn" @click="saveArticl"  type="primary">保存</el-button>
    </div>    
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    },
    methods: {
        saveArticl: function() {
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
        min-height: 600px;
    }
    .saveBtn {
        float: right;
        margin-right: 20px;
        margin-top: 20px;
    }
 </style>
