import {ref} from 'vue'

export const column = ref([
    {
        label: '序号',
        width: 20
    },
    {
        label: '歌曲名',
        width: 20
    },
    {
        label: '歌手',
        width: 20
    },
    {
        prop: 'album',
        label: '专辑',
        width: 20
    },
    {
        label: '时长',
        width: 20
    }
])

