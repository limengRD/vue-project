<template>
    <div class="pagesize">
        <div class="block">
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000">
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
            currentPage3: 5,
            currentPage4: 4
        }
    },
    methods: {
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
      },
        handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      }
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
