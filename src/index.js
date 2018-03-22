import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import axios from 'axios'
import router from './router'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(mavonEditor)

Vue.use(VueRouter)

Vue.use(ElementUI)

//配置axios 

axios.defaults.baseURL = 'http://localhost:4000/';
Vue.prototype.$http = axios;


new Vue({
    el: '#app',
    render: h => h(App),
    router
})
