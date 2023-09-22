<script setup>
import {getPlayList} from "/src/request/api/findmusic/index.js";
import Title from "/src/view/findmusic/components/Title.vue";
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()
import List from '/src/view/findmusic/components/lisAndIcont.vue'


const PlayList = ref([])
onMounted(() => {
  let val = {
    limit: 11,
  }
  getPlayList(val).then(res => {
    PlayList.value = res.data.result
  })
})

function Jumpskip() {
  router.push({
    name: 'SongDay'
  })
}
</script>

<template>
  <Title title="推荐歌单"/>
  <div class="play_container">
    <!--  每日歌曲推荐-->
    <div class="day_container">
      <div class="item_day" @click="Jumpskip">
        <div>根据您的音乐口味生成每日更新</div>
        <img alt="" src="/src/assets/findmusic/daylist.png">
        <img alt="" src="/src/assets/findmusic/play.png">
      </div>
      <span>每日歌曲推荐</span>
    </div>
    <!-- 歌单-->
    <!--  v-for="item in PlayList" :key="item.id"-->
    <List :PlayList="PlayList"/>

  </div>
</template>

<style lang="less" scoped>
@import url('index');
</style>
