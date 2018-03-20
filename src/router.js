import VueRouter from 'vue-router'
import home from './components/home/Home.vue'
import writer from './components/writer/Writer.vue'
import showlist from './components/public/ShowList.vue'

const router = new VueRouter({
    routes:[
        {path: '/',redirect: home},
        {   
            path:'/home',
            component:home,
            children:[
                {
                    path: '/',
                    redirect: showlist
                },
                {
                    path: '/showlist',
                    component: showlist
                }
            ]
        },
        {path:'/writer',component:writer}
    ]
})

export default router