import VueRouter from 'vue-router'
import home from './components/home/Home.vue'
import writer from './components/writer/Writer.vue'
import showlist from './components/public/ShowList.vue'
import myartical from './components/myartical/myartical.vue'

const router = new VueRouter({
    linkActiveClass:'list-active',
    routes:[
        {
            path: '/',
            redirect: '/home',
            component: home,
        },
        {   
            path:'/home',
            component:home,
            children:[
                {
                    path: '/',
                    redirect: 'web',
                    component: showlist
                },
                {
                    path: ':nav',
                    component: showlist
                },
            ]
        },
        {path:'/writer',component:writer},
        {path:'/myartical',component:myartical}
    ]
})

export default router