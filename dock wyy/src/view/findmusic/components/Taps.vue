<script setup>
import {ref, reactive} from 'vue';
import {menu_List} from "./config/config.js";
import {useGlobalbackground} from "/src/stores/Globalbackground.js";

const menu = reactive(menu_List)
import {useRouter, useRoute} from "vue-router";

const router = useRouter()
const route = useRoute()
const activeTap = ref('Tapfindmusics' === route.name ? 'Tapfindmusics' : route.name)
const useColor = useGlobalbackground()

function onClickMenu(event) {
  activeTap.value = event
  router.push({
    name: event
  })
}
</script>

<template>
  <div class="find_menu">
    <div v-for="(item, index) in menu" :key="index"
         :class="{ 'active': activeTap === item.path }" :style="{ borderColor: useColor.globalbackground }"
         @click="onClickMenu(item.path)">{{
        item.name
      }}
    </div>
  </div>
</template>

<style lang="less" scoped>
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
