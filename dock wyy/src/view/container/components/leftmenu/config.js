import love from '/src/assets/leftmenu/love.png'
import down from '/src/assets/leftmenu/updown.png'
import lately from '/src/assets/leftmenu/lately.png'
import Clouddisk from '/src/assets/leftmenu/Clouddisk.png'
import broadcast from '/src/assets/leftmenu/broadcast.png'
import Collect from '/src/assets/leftmenu/Collect.png'

export const menuTopList = [
    {
        path: '/findmusic',
        name: '发现音乐'
    },
    {
        path: '/podcast',
        name: '播客'
    },
    {
        path: '/video',
        name: '视频'
    },
    {
        path: '/attention',
        name: '关注'
    },
    {
        path: '/Livebroadcast',
        name: '直播'
    },
    {
        path: '/Privateroaming',
        name: '私人漫游'
    },
]

export const menuBottomList = [
    {
        path: '/Ilikemusic',
        name: '我喜欢的音乐',
        url: love
    },
    {
        path: '/LocalorDown',
        name: '本地与下载',
        url: down
    },
    {
        path: '/lately',
        name: '最近播放',
        url: lately
    },
    {
        path: '/Clouddisk',
        name: '我的音乐云盘',
        url: Clouddisk
    },
    {
        path: '/Rstoresame',
        name: '我的播客',
        url: broadcast
    },
    {
        path: '/Collect',
        name: '我的收藏',
        url: Collect
    },
]
