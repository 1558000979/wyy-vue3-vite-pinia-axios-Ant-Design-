<script setup>
import {getPlayList} from "/src/request/api/findmusic/index.js";
import Title from "/src/view/findmusic/components/Title.vue";
import {onMounted, reactive,ref} from "vue";
import BottomName from '/src/components/Name.vue'
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
      <img src="../../../../assets/findmusic/daylist.png" alt="">
      <img src="../../../../assets/findmusic/play.png" alt="">
    </div>
    <span>每日歌曲推荐</span>
  </div>
<!-- 歌单-->
<!--  v-for="item in PlayList" :key="item.id"-->
  <div class="song_container" v-for="item in PlayList" :key="item.id" >
    <div class="song_item"   :style="{ backgroundImage: 'url(' + item.picUrl + ')' }">
      <div class="count">
        <img src="../../../../assets/findmusic/count.png" alt="">
        <span>{{item.playCount > 100000000 ? (Math.floor(item.playCount / 100000000) + '亿') : (item.playCount > 10000 ? (Math.floor(item.playCount / 10000) + '万') : item.playCount)}}</span>
      </div>
      <img src="../../../../assets/findmusic/play.png" alt="">
    </div>
    <BottomName :widths="12" :title="item.name"/>
  </div>

</div>
</template>

<style scoped lang="less">
@import "index";
</style>
