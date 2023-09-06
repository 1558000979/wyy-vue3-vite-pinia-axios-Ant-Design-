<script setup>
import {getPlayList} from "/src/request/api/findmusic/index.js";
import {onMounted, reactive,ref} from "vue";
const PlayList = ref([])
onMounted(()=>{
  getPlayList().then(res=>{
    PlayList.value = res.data.result
    console.log(PlayList.value,'推荐歌单')
  })
})
</script>

<template>
  <div class="Title">
    <div>推荐歌单</div>
    <img src="src/assets/findmusic/right.png">
  </div>
<div class="play_container">
<!--  每日歌曲推荐-->
  <div class="day_container">
    <div class="item_day">
      <div >根据您的音乐口味生成每日更新</div>
      <img src="src/assets/findmusic/daylist.png" alt="">
      <img src="src/assets/findmusic/play.png" alt="">
    </div>
    <span>每日歌曲推荐</span>
  </div>
<!-- 歌单-->
<!--  v-for="item in PlayList" :key="item.id"-->
  <div class="song_container" v-for="item in PlayList" :key="item.id" >
    <div class="song_item"   :style="{ backgroundImage: 'url(' + item.picUrl + ')' }">
      <div class="count">
        <img src="src/assets/findmusic/conunt.png" alt="">
        <span>{{item.playCount}}</span>
      </div>
      <img src="src/assets/findmusic/play.png" alt="">
    </div>
    <div >
      <span class="name">{{item.name}}</span>
    </div>

  </div>

</div>
</template>

<style scoped lang="less">
.Title{
  display: flex;
  align-items: center;
  cursor: pointer;
  div:nth-child(1){
    font-size: 18px;
    font-weight: 900;
  }
  div:nth-child(1):hover{
    font-size: 20px;
    font-weight: 900;
  }
  img{
    width: 20px;
    height: 20px;
  }
}
.play_container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2vh;
  .day_container{
    margin-bottom: 1vh;
    .item_day{
      display: flex;
      cursor: pointer;
      width: 12vw;
      height: 21vh;
      border-radius: 10px;
      background: linear-gradient(to right, #5f5c5d, #15546b, #6d504b, #2a5265);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      margin-bottom: 1vh;
      div:nth-child(1){
        display: none;
      }
      img:nth-child(2){
        width: 80px;
        height: 80px;
      }
      img:nth-child(3){
        display: none;
      }
    }
    .item_day:hover{
      img:nth-child(3){
        display: flex;
        width: 35px;
        height: 35px;
        position: absolute;
        bottom: 10px;
        right: 10px;
      }
      div:nth-child(1){
        background-color: #172b34;
        opacity: 1;
        height: 30px;
        width: 100%;
        position: absolute;
        display: flex;
        align-items: center;
        top: 0;
        color: #FFFFFF;
        font-size: 12px;
        justify-content: center;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }
    }
    span{
      font-size: 14px;
    }
  }
  .song_container{
    margin-bottom: 1vh;
    .song_item{
      display: flex;
      cursor: pointer;
      width: 12vw;
      height: 21vh;
      border-radius: 10px;
      position: relative;
      margin-bottom: 1vh;
      background-position: center center;
      .count{
        display: flex;
        position: absolute;
        top: 5px;
        right: 10px;
        align-items: center;
        img {
          width: 15px;
          height: 15px;
          margin-right: 10px;
        }
        span{
          color: #FFFFFF;
        }
      }
      img:nth-child(2){
        display: none;
      }
    }
    .name{
      font-size: 14px;
    }
  }
  .song_container:hover{
    img:nth-child(2){
      display: flex;
      width: 35px;
      height: 35px;
      position: absolute;
      bottom: 10px;
      right: 10px;
    }
  }
  }

</style>
