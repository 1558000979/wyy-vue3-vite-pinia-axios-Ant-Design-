<template>
  <div class="left_container">
    <div class="menu_top" :class="{'active':activeTap=== item.path}" @click="jumpRoute(item.path)" v-for="(item, index) in menu" :key="index">{{ item.name }}</div>
    <div class="menu_my">我的音乐</div>
    <div class="menu_botom" :class="{'active':activeTap=== item.path}" @click="jumpRoute(item.path)" v-for="(item, index) in menu_my" :key="index">
      <img :src=item.url alt="">
      <div> {{ item.name }}</div>
    </div>
  </div>
</template>

<script setup>
import {reactive, ref} from 'vue';
import {useRouter} from "vue-router";
import { menuTopList, menuBottomList } from "./config.js";
const router = useRouter()
const menu = reactive(menuTopList)
const menu_my = reactive(menuBottomList)
const activeTap=ref(null)
function jumpRoute(event){
  activeTap.value = event
  router.push({
    path:event
  })
}
</script>

<style lang="less" scoped>
.left_container {
  display: flex;
  flex-direction: column;
  padding: 25px;
  background-color: #FFF;
  width: 15vw;
  border-right: 1px solid #e0e0e0;

  .menu_top {
    display: flex;
    padding: 8px 13px;
    cursor: pointer;
    margin-bottom: 10px;
  }

  .menu_my {
    font-size: 12px;
    padding: 8px 4px;
    color: #666;
  }

  .menu_botom {
    display: flex;
    padding: 8px 13px;
    cursor: pointer;
    margin-bottom: 10px;
    display: flex;
    // justify-content: space-between;

    img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }

  .menu_top:hover,
  .menu_botom:hover {
    font-size: 18px;
    font-weight: 900;
    background-color: #f6f6f7;
    border-radius: 5px;
  }
  .active{
    font-size: 18px;
    font-weight: 900;
    background-color: #f6f6f7;
    border-radius: 5px;
  }
}
</style>