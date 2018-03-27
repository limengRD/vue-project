<template>
    <div class="details">
        <div class="title">
            {{details.title}}
        </div>
        <div class="main-bodoy">
            {{details.content}}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return  {
            id: this.$route.params.id,
            details: {}
        }
    },
    created() {
        this.$http.get('/articalDetails',{params:{id:this.id}}).then(response => {
            this.details = response.data
        })
    }
}
</script>

<style>
    .details {
        margin-top: 20px;
        box-sizing: border-box;
        padding: 20px;
        background: #fff;
    }
    .details .title {
        margin: 10px 0;
    }
    
</style>
