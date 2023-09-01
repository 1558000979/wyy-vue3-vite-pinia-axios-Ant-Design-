import { defineStore } from "pinia";

export const useGlobalbackground = defineStore('colors', {
    state: () => ({
        globalbackground: '' //全局背景颜色
    }),
    actions: {
        Setglobalbackground(params) {
            this.globalbackground = params
        }
    },
    persist: {
        enabled: true // true 表示开启持久化保存
    }
})