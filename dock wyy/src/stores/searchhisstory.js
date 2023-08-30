import {defineStore} from "pinia";

export  const useSearchHistory = defineStore('hisstoryList',{
    state:()=>({
            UsageRecord:[] //搜索记录
    }),
    actions:{
        SetUsageRecord(data){
            this.UsageRecord =data
        }
    },
    persist: {
        enabled: true // true 表示开启持久化保存
    }
})