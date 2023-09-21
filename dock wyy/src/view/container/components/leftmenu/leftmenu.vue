<template>
  <div :class="{'left_container': true, 'cancel_hover': !applyHoverStyle}"
       :style="{backgroundColor:UseColor.globalbackground==='#2b2b2b'?'#2b2b2b':'',color:UseColor.globalbackground==='#2b2b2b'?'#ffffff':''}">
    <div v-for="(item, index) in menu" :key="index"
         :class="[UseColor.globalbackground === '#2b2b2b' && activeTap === item.path ? 'active1' : (activeTap === item.path ? 'active' : '')]"

         class="menu_top" @click="jumpRoute(item.path)">{{ item.name }}
    </div>
    <div class="menu_my">我的音乐</div>
    <div v-for="(item, index) in menu_my" :key="index" :class="{'active':activeTap=== item.path}"
         class="menu_botom" @click="jumpRoute(item.path)">
      <img :src=item.url alt="">
      <div> {{ item.name }}</div>
    </div>
  </div>
</template>

<script setup>
import {reactive, ref, watch} from 'vue';
import {useRouter} from "vue-router";
import {menuTopList, menuBottomList} from "./config.js";

const router = useRouter()
const menu = reactive(menuTopList)
const menu_my = reactive(menuBottomList)
import {useGlobalbackground} from '/src/stores/Globalbackground.js'

const UseColor = useGlobalbackground()
const activeTap = ref('/findmusic')
const applyHoverStyle = ref(true); // 默认应用 hover 样式
function jumpRoute(event) {
  activeTap.value = event
  router.push({
    path: event
  })
}

// 监听如果使用了黑色主题，取消hover样式
watch(UseColor, (newVal) => {
  if (newVal.globalbackground === '#2b2b2b') {
    applyHoverStyle.value = false
  } else {
    applyHoverStyle.value = true
  }
})
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

  .cancel_hover.menu_top:hover,
  .cancel_hover .menu_botom:hover {
    font-size: 18px;
    font-weight: 900;
    background-color: #f6f6f7;
    border-radius: 5px;
  }

  .active {
    font-size: 18px;
    font-weight: 900;
    background-color: #f6f6f7;
    border-radius: 5px;
  }

  .active1 {
    font-size: 18px;
    font-weight: 900;
    background-color: #333333;
    border-radius: 5px;
    color: #d6d6d6 !important
  }
}

//屏幕尺寸达到1352px时，左侧菜单栏的样式
@media screen and (max-width: 1352px) {
  .left_container,
  .menu_botom {
    font-size: 12px;
  }
}
</style>
