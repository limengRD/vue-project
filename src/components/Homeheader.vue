<template>
    <el-container>
        <header class="main-header container">
            <!-- 导航 -->
            <div class="menu-nav">
                <ul class="menu-nav-ul">
                    <router-link tag="li" to="/home">首页</router-link>
                    <router-link tag="li" to="/writer">写文章</router-link>
                    <router-link tag="li" to="/myartical">我的文章</router-link>
                </ul>
            </div>
            <!-- 登录注册 -->
            <div class="loginRegister">
                <el-button type="text" @click="login = true">登录</el-button>
                <el-button type="text" @click="register = true">注册</el-button>
                <!-- 登录弹出框 -->
                <el-dialog
                title="登录"
                :visible.sync="login"
                width="25%"
                center>
                    <span>
                        <el-input  class="form_input" v-model="username" placeholder="请输入用户名"></el-input>
                        <el-input  class="form_input" v-model="password" placeholder="请输入密码"></el-input>
                        <el-button type="text" @click="registerBtn">注册</el-button>
                    </span>
                    <span slot="footer" class="dialog-footer">
                        <el-button type="primary" @click="loginAjax">登 录</el-button>
                    </span>
                </el-dialog>
                <!-- 注册弹出框 -->
                <el-dialog
                title="注册"
                :visible.sync="register"
                width="25%"
                center>
                    <span>
                        <el-input  class="form_input" v-model="nickname" placeholder="请输入昵称"></el-input>
                        <el-input  class="form_input" v-model="username" placeholder="请输入用户名"></el-input>
                        <el-input  class="form_input" v-model="password" placeholder="请输入密码"></el-input>
                        <el-button type="text" @click="loginBtn">登录</el-button>
                    </span>
                    <span slot="footer" class="dialog-footer">
                        <el-button type="primary" @click="registerAjax">注 册</el-button>
                    </span>
                </el-dialog>
            </div>
            <!-- 搜索框 -->
            <div class="search-box">
                <el-input v-model="input" placeholder="请输入内容"></el-input>
            </div>
        </header>
    </el-container>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        login: false,
        register: false,
        username: '',
        password: '',
        nickname: '',
        input: ''
      };
    },
    methods:{
        registerBtn:function() {
            this.register = true
            var _this = this
            setTimeout(function(){
                _this.login = false
            },1)
        },
        loginBtn:function(){
            this.login = true
            var _this = this
            setTimeout(function(){
                _this.register = false
            },1)      
        },
        registerAjax:function() {
            this.$http.post("/register",{
                username: this.username,
                password: this.password,
                nickname: this.nickname
            }).then(response => {
                var status = response.data.err_code
                switch(status) {
                    case 0:

                    case 1:
                        console.log(response.data)
                        break;
                    default:
                        alert('错误的请求!')
                        break;
                }
            })

        },
        loginAjax:function(){
            this.$http.post("/login",{
                username: this.username,
                password: this.password
            }).then(response => {
                var status = response.data.err_code
                switch(status) {
                    case 0:
                    case 1:
                }
            })
        }
    }
  };
</script>

<style>
    .form_input {
        margin-bottom: 20px;
    }
    .el-container .el-dialog--center .el-dialog__body{
        padding: 25px 25px 0px;
    }
    .loginRegister {
        float: right;
        height: 60px;
        line-height: 60px;
    }
    .main-header {
        height: 60px;
    }
    .el-container {
        background: #fff;
    }
    /* 导航 */
    .menu-nav {
        float: left;
    }
    .menu-nav ul li {
        float: left;
        height: 60px;
        line-height: 60px;
        padding: 0 20px;
        cursor: pointer;
    }
    .menu-nav ul li:hover {
        color: #409EFF;
    }

    /* 搜索框 */
    .search-box {
        width: 200px;
        height: 60px;
        line-height: 60px;
        float: right;
        margin-right: 100px;
    }
    .search-box .el-input__inner {
        height: 32px;
        font-size: 13px;
    }
</style>
