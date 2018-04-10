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
                :before-close="handleClose"
                center>
                    <span>
                        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="密码" prop="pass">
                            <el-input type="text" v-model="ruleForm2.pass" auto-complete="off" @input="checkuser"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="checkPass">
                            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="年龄" prop="age">
                            <el-input v-model.number="ruleForm2.age"></el-input>
                        </el-form-item>
                        <el-button type="text" @click="registerBtn">注册</el-button>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                            <el-button @click="resetForm('ruleForm2')">重置</el-button>
                        </el-form-item>
                        </el-form>
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
        var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              this.$http.get('/checkuser').then(response =>{

              if(response.data.err_code == 1){
                callback(new Error('用户存在'));
              } else {
                  callback();
              }
              
          })
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        login: false,
        register: false,
        username: '',
        password: '',
        nickname: '',
        input: '',
          ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' },
            // { pattern: /^1[34578]\d{9}$/, message: '目前只支持中国大陆的手机号码' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'change' }
          ]
        }
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
        },
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleClose:function(done) {
          this.ruleForm2.pass = ''
          this.ruleForm2.checkPass = ''
          this.ruleForm2.age = ''
          this.$refs.ruleForm2.resetFields()
          done();
      },
      checkuser:function() {

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
