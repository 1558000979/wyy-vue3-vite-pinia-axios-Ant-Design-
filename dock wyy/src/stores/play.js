import {defineStore} from "pinia";

export const usePlay = defineStore('song', {
    state: () => ({
        globalPlay: {}, //播放信息
    }),
    actions: {
        SetglobalPlayid(params) {
            this.globalPlay = params
        }
    },
    persist: {
        enabled: true // true 表示开启持久化保存
    }
})
