<script setup>
import StartAll from "../../components/ButtonAll.vue";
import PlaySongList from "../../components/PlaySongList.vue";
</script>

<template>
  <!-- 头部导航(未封装组件) -->
  <div>
    <div class="headTitle">
      <div style="float: left; margin-left: 40px">
        <span style="font-size: 21px; font-weight: bold">最近播放</span>
        &nbsp;&nbsp;&nbsp;<span
          style="color: rgb(183, 171, 163); font-size: 15px"
          >共100首</span
        >
      </div>
      <div style="float: right; margin-right: 30px">
        <span class="clearList">清空列表</span>
      </div>
    </div>
  </div>
  <!-- 播放全部 -->
  <div class="startAll">
    <!-- 预期做一个鼠标移入移出改变背景颜色，未实现@mouseenter和@mouseleave -->
    <StartAll color="rgb(236, 65, 65)"></StartAll>
  </div>
  <!-- 歌曲列表 -->
  <div>
    <PlaySongList></PlaySongList>
  </div>
</template>


<style lang="less" scoped>
.startAll {
  width: 100%;
  margin-top: -40px;
  float: left;
  margin-left: 40px;
}
* {
  margin: 0;
  padding: 0;
}

.headTitle {
  width: 100%;
  height: 85px;
  margin-top: 25px;
}

.clearList {
  font-size: 18px;
  color: rgb(80, 168, 216);
}

.clearList:hover {
  color: rgb(11, 88, 176);
}
</style>
