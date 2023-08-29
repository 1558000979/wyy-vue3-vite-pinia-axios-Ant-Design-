import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

const router =createRouter({
    routes:[
        {
            path: '/',
            redirect: {path:'/Globallayout'}
        },
        {
            path: '/Globallayout',
            name:'home',
            component:()=>import('../view/Globallayout/Globallayout.vue')
        },
    ],
    history:createWebHistory()
})

export default router

