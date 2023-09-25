<script setup>
import Time from "/src/view/findmusic/findmusics/SongList/components/TimeShow.vue";
import {useGlobalbackground} from '/src/stores/Globalbackground.js'
import List from '/src/components/PlaySongList.vue'
import {onMounted, ref} from "vue";
import {getDayList} from "/src/request/api/findmusic/index.js";
import {usePlay} from "/src/stores/play.js";
import ButtonAll from '/src/components/ButtonAll.vue'
import collect from '/src/assets/findmusic/collect.png'

const UsePlay = usePlay()
const column = ref([
  {
    prop: 'index',
    label: '序号',
    width: '5vw'
  },
  {
    prop: 'name',
    label: '音乐标题',
    width: '20vw'
  },
  {
    prop: 'singer',
    label: '歌手',
    width: '20vw'
  },
  {
    prop: 'album',
    label: '专辑',
    width: '35vw'
  },
  {
    prop: 'time',
    label: '时长',
    width: '10vw'
  }
])
const tabledata = ref([])
const UseColor = useGlobalbackground()
onMounted(() => {
  getDayList().then(res => {
    tabledata.value = res.data.data.dailySongs
  })
})

function playAll() {
  UsePlay.playAll = tabledata.value
}
</script>

<template>
  <div class="Top_container">
    <div class="top">
      <Time/>
      <div class="title">
        <div :style="{color:UseColor.globalbackground==='#2b2b2b'?'#d5d5d5':'black'}">每日歌曲推荐</div>
        <div :style="{color:UseColor.globalbackground==='#2b2b2b'?'#7d8677':'black'}">
          根据您的音乐口味生成,每天6:00更新
        </div>
      </div>
    </div>
    <div style="display: flex">
      <ButtonAll/>
      <ButtonAll :url="collect" color="#FFFFFF" name="收藏全部" show="true"/>
    </div>
  </div>
  <List :column="column" :tabledata="tabledata"/>
</template>

<style lang="less" scoped>
.Top_container {
  padding: 20px 15px;

  .button_container {
    display: flex;
    margin: 20px 0;

    .play_button {
      background-color: red;
      padding: 12px 30px;
      display: flex;
      align-items: center;
      border-radius: 20px;
      color: #FFFFFF;
      font-size: 14px;

      img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
    }

    //点击按钮时变色

    .play_button:hover {
      background-color: #d93f3f;
      cursor: pointer;
    }

    .collect_button {
      background-color: #fff;
      padding: 12px 20px;
      display: flex;
      align-items: center;
      border-radius: 20px;
      font-size: 14px;
      border: 1px solid #999999;
      margin-left: 20px;

      img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
    }

    .collect_button:hover {
      background-color: #999;
      cursor: pointer;
    }
  }

  .top {
    display: flex;
    justify-content: space-between;
    width: 400px;

    .title {
      display: flex;
      flex-direction: column;
      justify-content: center;

      div:nth-child(1) {
        font-size: 23px;
        font-weight: 700;
        margin-bottom: 3vh;
      }

      div:nth-child(2) {
        font-weight: 400;
      }
    }
  }
}
</style>
