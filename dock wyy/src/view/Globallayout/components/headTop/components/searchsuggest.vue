<template>
  <div class="suggest_container">
    <div class="alone_song">
      <img src="/src/assets/headTop/BGM.png">
      <div>单曲</div>
    </div>
    <div class="suggest_list" v-for="item in songs" :key="item.id">{{ item.name }}</div>
    <div class="alone_song">
      <img src="/src/assets/headTop/songs.png">
      <div>歌手</div>
    </div>
    <div class="suggest_list" v-for="item in Singers" :key="item.id">{{ item.name }}</div>
    <div class="alone_song">
      <img src="/src/assets/headTop/zhuanji.png">
      <div>专辑</div>
    </div>
    <div class="suggest_list" v-for="item in albums" :key="item.id">{{ item.name }}</div>
    <div class="alone_song">
      <img src="/src/assets/headTop/playList.png">
      <div>歌单</div>
    </div>
    <div class="suggest_list" v-for="item in Songlists" :key="item.id">{{ item.name }}</div>
  </div>
</template>
<script setup>
import {getsearchsuggest} from '/src/request/api/headtop/index.js'
import {onMounted, ref, watch} from "vue";
const props = defineProps({
  keyword:{
    type:String
  }
})
const keywords = ref(props.keyword)
watch(keywords,(newVal)=>{
  console.log(newVal,'newVal')
  let val = {
    keywords: newVal
  }
  getsearchsuggest(val).then(res => {
    songs.value = res.data.result?.songs
    Singers.value = res.data.result?.artists
    albums.value = res.data.result?.albums
    Songlists.value = res.data.result?.playlists
  })
})
const songs = ref()
const Singers = ref()
const albums = ref()
const Songlists = ref()
onMounted(() => {
  let val = {
    keywords: keywords.value
  }
  getsearchsuggest(val).then(res => {
    songs.value = res.data.result?.songs
    Singers.value = res.data.result?.artists
    albums.value = res.data.result?.albums
    Songlists.value = res.data.result?.playlists
  })
  console.log(keywords.value,'keyword')
})

</script>
<style scoped lang="less">
.suggest_container {
  display: flex;
  flex-direction: column;

  .card {
    display: flex;
    flex-direction: column;
  }

  .alone_song {
    display: flex;
    margin: 2vh 1.5vw;
    align-items: center;

    img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }

    div {
      font-size: 17px;
      color: #999999;
    }
  }

  .suggest_list {
    display: flex;
    flex-direction: column;
    padding: 1.5vh 2.5vw;
  }
  .suggest_list:hover{
    background-color: #f2f2f2;
  }
}
</style>