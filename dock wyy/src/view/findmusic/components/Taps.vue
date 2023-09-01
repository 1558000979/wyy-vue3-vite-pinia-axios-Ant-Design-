<script setup>
import { ref, reactive } from 'vue';
import { menu_List } from "../config";
import { useGlobalbackground } from "/src/stores/Globalbackground.js";
const menu = reactive(menu_List)
const activeTap = ref(0)
const useColor = useGlobalbackground()
function onClickMenu(event) {
    activeTap.value = event
}
</script>

<template>
    <div class="find_menu">
        <div @click="onClickMenu(index)" :style="{ borderColor: useColor.globalbackground }"
            :class="{ 'active': activeTap === index }" v-for="(item, index) in menu" :key="index">{{
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