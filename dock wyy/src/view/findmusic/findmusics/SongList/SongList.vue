<script setup>
import {getPlayList} from "/src/request/api/findmusic/index.js";
import Title from "/src/view/findmusic/components/Title.vue";
import {onMounted, reactive,ref} from "vue";

import List from '/src/view/findmusic/components/list.vue'
const PlayList = ref([])
onMounted(()=>{
  let val = {
    limit:11
  }
  getPlayList(val).then(res=>{
    PlayList.value = res.data.result
  })
})
</script>

<template>
 <Title title="推荐歌单"/>
<div class="play_container">
<!--  每日歌曲推荐-->
  <div class="day_container">
    <div class="item_day">
      <div >根据您的音乐口味生成每日更新</div>
      <img src="/src/assets/findmusic/daylist.png" alt="">
      <img src="/src/assets/findmusic/play.png" alt="">
    </div>
    <span>每日歌曲推荐</span>
  </div>
<!-- 歌单-->
<!--  v-for="item in PlayList" :key="item.id"-->
<List :PlayList="PlayList" />

</div>
</template>

<style scoped lang="less">
@import url('index');
</style>
