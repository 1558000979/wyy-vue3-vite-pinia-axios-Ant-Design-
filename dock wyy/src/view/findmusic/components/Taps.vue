<script setup>
import {ref, reactive, onMounted} from 'vue';
import { menu_List } from "./config/config.js";
import { useGlobalbackground } from "/src/stores/Globalbackground.js";
const menu = reactive(menu_List)
import{useRouter,useRoute} from "vue-router";
const router = useRouter()
const  route = useRoute()
const activeTap = ref(route.name)
const useColor = useGlobalbackground()

function onClickMenu(event) {
    activeTap.value = event
  router.push({
    name:event
  })
}
</script>

<template>
    <div class="find_menu">
        <div @click="onClickMenu(item.path)" :style="{ borderColor: useColor.globalbackground }"
            :class="{ 'active': activeTap === item.path }" v-for="(item, index) in menu" :key="index">{{
                item.name }}</div>
    </div>
</template>

<style scoped lang="less">
.find_menu {
    display: flex;

    div {
        margin-right: 60px;
        cursor: pointer;
    }

    .active {
        font-size: 18px;
        font-weight: 900;
        border-bottom-style: solid;
        border-width: 3px;
        padding-bottom: 3px;
    }
}
</style>
