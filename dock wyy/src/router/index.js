import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

const router = createRouter({
    routes: [
        {
            path: '/',
            redirect: {path: '/findmusic'}
        },
        {
            path: '/Globallayout',
            name: 'home',
            component: () => import('../view/Globallayout/Globallayout.vue'),
            children: [
                {
                    path: '/findmusic',
                    name: 'findmusic',
                    component: () => import('../view/findmusic/findmusic.vue'),
                    redirect: {path: '/findmusic/findmusics'},
                    children: [
                        {
                            path: '/findmusic/findmusics',
                            name: 'Tapfindmusics',
                            component: () => import('../view/findmusic/findmusics/findmusics.vue')
                        },
                        {
                            path: '/findmusic/customization',
                            name: 'customization',
                            component: () => import('../view/findmusic/customization/customization.vue')
                        },
                        {
                            path: '/findmusic/playList',
                            name: 'playList',
                            component: () => import('../view/findmusic/playList/playList.vue')
                        },
                        {
                            path: '/findmusic/rank',
                            name: 'rank',
                            component: () => import('../view/findmusic/rank/rank.vue')
                        },
                        {
                            path: '/findmusic/songer',
                            name: 'songer',
                            component: () => import('../view/findmusic/songer/songer.vue')
                        },
                        {
                            path: '/findmusic/latestmusic',
                            name: 'latestmusic',
                            component: () => import('../view/findmusic/latestmusic/latestmusic.vue')
                        }
                    ]
                },
                {
                    path: '/findmusic/SongDay',
                    name: 'SongDay',
                    component: () => import('../view/findmusic/findmusics/SongList/SongDay.vue')
                },
                {
                    path: '/findmusic/PlayDetail',
                    name: 'PlayDetail',
                    component: () => import('/src/view/Playlistdetails/Playlistdetails.vue')
                },
                {
                    path: '/podcast',
                    name: 'podcast',
                    component: () => import('../view/podcast/podcast.vue')
                },
                {
                    path: '/video',
                    name: 'video',
                    component: () => import('../view/video/video.vue')
                },
                {
                    path: '/attention',
                    name: 'attention',
                    component: () => import('../view/follow/follow.vue')
                },
                {
                    path: '/Livebroadcast',
                    name: 'Livebroadcast',
                    component: () => import('../view/livestreaming/livestreaming.vue')
                },
                {
                    path: '/Privateroaming',
                    name: 'Privateroaming',
                    component: () => import('../view/Privateroaming/Privateroaming.vue')
                },
                {
                    path: '/Ilikemusic',
                    name: 'Ilikemusic',
                    component: () => import('../view/lovemusic/lovemusic.vue')
                },
                {
                    path: '/LocalorDown',
                    name: 'LocalorDown',
                    component: () => import('../view/Localdownload/Localdownload.vue')
                },
                {
                    path: '/lately',
                    name: 'lately',
                    component: () => import('../view/Recentlyplayed/Recentlyplayed.vue')
                },
                {
                    path: '/Clouddisk',
                    name: 'Clouddisk',
                    component: () => import('../view/Musiccloud/Musiccloud.vue')
                },
                {
                    path: '/Rstoresame',
                    name: 'Rstoresame',
                    component: () => import('../view/Mypodcast/Mypodcast.vue')
                },
                {
                    path: '/Collect',
                    name: 'Collect',
                    component: () => import('../view/Mycollection/Mycollection.vue')
                },

            ]
        },

    ],
    history: createWebHistory()
})

export default router

