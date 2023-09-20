import {ref} from 'vue'

export const column = ref([
    {
        label: '序号',
        width: '50px'
    },
    {
        label: '歌曲名',
        width: '150px'
    },
    {
        label: '歌手',
        width: '200px'
    },
    {
        prop: 'album',
        label: '专辑',
        width: '280px'
    },
    {
        label: '时长',
        width: '70px'
    }
])

