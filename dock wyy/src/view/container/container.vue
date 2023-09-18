<template>
  <div class="home_container">
    <Leftmenu/>
    <div :style="{backgroundColor:UseColor.globalbackground==='#2b2b2b'?'#2b2b2b':''}" class="right_content">
      <router-view></router-view>
    </div>
  </div>
  <PlaySong/>
</template>

<script setup>
import Leftmenu from '/src/view/container/components/leftmenu/leftmenu.vue'
import PlaySong from '/src/view/container/components/PlaySong/playsong.vue'
import {useGlobalbackground} from '/src/stores/Globalbackground.js'

const UseColor = useGlobalbackground()
</script>

<style lang="less" scoped>
.home_container {
  display: flex;
  height: 90vh;
  //box-shadow: 10px 0 18px #999999;
  .right_content {
    background-color: #FFFFFF;
    width: 85vw;
    //padding: 30px;
    overflow-y: scroll;
  }

  // 设置滚动条宽度
  .right_content::-webkit-scrollbar {
    width: 3px; /* 设置滚动条宽度 */
  }

  // 设置背景颜色
  .right_content::-webkit-scrollbar-thumb {
    background-color: greenyellow; /* 设置滚动条滑块颜色 */
  }
}
</style>
