<template>
    <div class="pagesize">
        <div class="block">
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="2"
            layout="prev, pager, next, jumper"
            :total="countPage">
            </el-pagination>
        </div>
    </div>  
</template>

<script>
export default {
    data() {
        return {
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 1,
            currentPage4: 4
        }
    },
    methods: {
        handleCurrentChange(val) {
            this.$http.get('/showMyArtical',{params:{page:val}}).then(response => {
                this.$emit('showlist', response.data);
            })
      },
        handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      }
    },
    props: {
        countPage
    }
}
</script>

<style>
    .pagesize {
        padding: 10px 0;
        overflow: hidden;
    }
    .block {
        float: right;
    }
</style>
