<template>
    <div class="writer">
        <mavon-editor v-model="value"/>
        <el-button type="primary" disabled>主要按钮</el-button>
    </div>    
</template>

<script>
export default {
    data() {
        return {
            value: ''
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
 </style>
