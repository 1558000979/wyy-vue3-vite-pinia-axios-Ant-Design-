<template>
  <div :style="{backgroundColor:UseColor.globalbackground==='#2b2b2b'?'#2b2b2b':''}" class="play_container">
    <audio ref="Audiocontrol" :src="PlayUrl" autoplay></audio>
    <div class="left_container">
      <div class="imgbox">
        <img :src="Playmessage.picurl" alt="">
      </div>
      <div class="title">
        <div>{{ Playmessage.name }}</div>
        <div>{{ Playmessage.singer }}</div>
      </div>
    </div>
    <div class="center_container">
      <!--      循环-->
      <div v-if="PlaybackMode===1" class="Loop_play">
        <img alt="" src="/src/assets/play/Loop.png">
      </div>
      <!--   随机-->
      <div v-if="PlaybackMode===2" class="Loop_play">
        <img alt="" src="/src/assets/play/Random.png">
      </div>
      <!--   顺序   -->
      <div v-if="PlaybackMode===3" class="Loop_play">
        <img alt="" src="/src/assets/play/sequence.png">
      </div>
      <div class="Loop_play">
        <img alt="" src="/src/assets/play/back.png">
      </div>
      <div v-if="PlayorStop" class="Loop_play" @click="play">
        <img alt="" src="/src/assets/play/play.png">
      </div>
      <div v-if="!PlayorStop" class="Loop_play" @click="play">
        <img alt="" src="/src/assets/play/stop.png">
      </div>
      <div class="Loop_play">
        <img alt="" src="/src/assets/play/go.png">
      </div>
      <div class="word">词</div>
    </div>
    <div class="right_container">
      <div v-if="sourceIcon===1" style=" border-color: #999999;">云盘</div>
      <div v-if="sourceIcon===2" style=" border-color: #ec4141;color: #ec4141">无损</div>
      <div v-if="sourceIcon===3" style=" border-color: #ec4141;color: #ec4141">极高</div>
      <div v-if="sourceIcon===4" style=" border-color: #ec4141;color: #ec4141">标准</div>
      <div class="Loop_play">
        <img alt="" src="/src/assets/play/voice.png">
      </div>
    </div>
  </div>

</template>

<script setup>
import {onMounted, ref, watch} from 'vue';

const Audiocontrol = ref(null)
const PlayUrl = ref('')
const PlaybackMode = ref(1)
const PlayorStop = ref(true)
const sourceIcon = ref(2)
const Playmessage = ref({})
// 在这里添加你的逻辑代码
import {useGlobalbackground} from '/src/stores/Globalbackground.js'
import {usePlay} from '/src/stores/play.js'
import {getUrl} from '/src/request/api/index.js'

const UsePlay = usePlay()
const UseColor = useGlobalbackground()
// 监听UsePlay.globalPlay的变化
watch(UsePlay, (newVal) => {
  const val = {
    id: newVal.globalPlay.id
  }
  getUrl(val).then(res => {
    PlayUrl.value = res.data.data[0].url
    PlayorStop.value = false
    Playmessage.value = newVal.globalPlay
  })

})

function play() {
  PlayorStop.value = !PlayorStop.value
  const audio = Audiocontrol.value;
  audio.paused ? audio.play() : audio.pause();
}
</script>

<style lang="less" scoped>
/* 在这里添加你的样式代码 */
.play_container {
  display: flex;
  justify-content: space-between;
  position: fixed;
  border-top: 1px solid #e0e0e0;
  width: 100vw;
  height: 80px;
  bottom: 0;
  background-color: #ffffff;
  align-items: center;
  padding: 0 10px;

  .left_container {
    display: flex;

    .imgbox {
      width: 65px;
      height: 55px;

      background-color: black;

      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }

    .title {
      display: flex;
      flex-direction: column;
      font-size: 14px;
      justify-content: center;
      margin-left: 10px;

      div:nth-child(1) {
        margin-bottom: 10px;
      }
    }
  }

  .center_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;

    .Loop_play {
      img {
        width: 30px;
        height: 25px;
        cursor: pointer;
      }
    }
  }

  .right_container {
    display: flex;
    justify-content: space-between;
    width: 100px;
    align-items: center;

    div:nth-child(1) {
      border-style: solid;
      border-width: 1px;

      padding: 5px;
    }

    .Loop_play {


      img {
        width: 30px;
        height: 25px;
        cursor: pointer;
      }
    }
  }
}
</style>
