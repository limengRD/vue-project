<template>
    <ul class="showlist-ul">
        <li>
            <div class="list-main">
                <div class="list-title">
                    <a href="#">tittle</a>
                </div>
                <div class="list-body">
                    <ul>
                        <li>
                            <div>
                                <a href="">body</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
        <li>
            <div class="list-main">
                <div class="list-title">
                    <a href="#">tittle</a>
                </div>
                <div class="list-body">
                    <ul>
                        <li>
                            <div>
                                <a href="">标题</a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="">标签</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
  
}
</script>

<style>
    .showlist-ul {
        background: #fff;
        width: 700px;
    }
    .showlist-ul>li {
        height: 100px;
        box-sizing: border-box;
        padding: 20px 20px;
        border-bottom: 1px solid rgba(178,186,194,.15);
    }
    .showlist-ul>li:hover {
        background: #fcfcfc;
        cursor: pointer;
    }
    .list-main {

    }
    .list-title {
        margin: 10px 0;
    }
    .list-body ul li {
        float: left;
        margin-right: 20px;
    }
</style>
