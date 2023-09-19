import {defineStore} from "pinia";

export const usePlay = defineStore('song', {
    state: () => ({
        globalPlay: {}, //播放信息
        playAll: []
    }),
    actions: {
        SetglobalPlay(params) {
            this.globalPlay = params
        },
        SetplayAll(params) {
            this.playAll = params
        }
    },
    persist: {
        enabled: false // true 表示开启持久化保存
    }
})
