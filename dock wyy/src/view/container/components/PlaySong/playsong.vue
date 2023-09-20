<template>
  <div :style="{backgroundColor:UseColor.globalbackground==='#2b2b2b'?'#2b2b2b':''}" class="play_container">
    <audio ref="Audiocontrol" :src="PlayUrl" autoplay></audio>
    <div v-show="ismessage" class="left_container">
      <div class="imgbox">
        <img :src="Playmessage?.picurl" alt="暂无歌曲播放">
      </div>
      <div class="title">
        <div>{{ Playmessage?.name }}</div>
        <div>{{ Playmessage?.singer }}</div>
      </div>
    </div>
    <div class="center_container">
      <!--      单曲循环-->
      <div v-if="PlaybackMode===1" class="Loop_play" @click="PlayMode()">
        <img alt="" src="/src/assets/play/Loop.png">
      </div>
      <!--   随机-->
      <div v-if="PlaybackMode===2" class="Loop_play" @click="PlayMode()">
        <img alt="" src="/src/assets/play/Random.png">
      </div>
      <!--   顺序   -->
      <div v-if="PlaybackMode===3" class="Loop_play" @click="PlayMode()">
        <img alt="" src="/src/assets/play/sequence.png">
      </div>
      <div class="Loop_play" @click="go(false)">
        <img alt="" src="/src/assets/play/back.png">
      </div>
      <div v-if="PlayorStop" class="Loop_play" @click="play">
        <img alt="" src="/src/assets/play/play.png">
      </div>
      <div v-if="!PlayorStop" class="Loop_play" @click="play">
        <img alt="" src="/src/assets/play/stop.png">
      </div>
      <div class="Loop_play" @click="go(true)">
        <img alt="" src="/src/assets/play/go.png">
      </div>
      <div class="word">词</div>
    </div>
    <div v-show="ismessage" class="right_container">
      <div v-if="sourceIcon===1" style=" border-color: #999999;">云盘</div>
      <div v-if="sourceIcon===2" style=" border-color: #ec4141;color: #ec4141">无损</div>
      <div v-if="sourceIcon===3" style=" border-color: #ec4141;color: #ec4141">极高</div>
      <div v-if="sourceIcon===4" style=" border-color: #ec4141;color: #ec4141">标准</div>
      <div class="Loop_playvoice">
        <img alt="" src="/src/assets/play/voice.png">
        <input max="100" min="0" step="1" style="cursor: pointer" type="range" value="5" @change="Volume">
        <div class="play_lisy">
          <img alt="打开播放列表" src="/src/assets/play/list.png" @click="ListShow=!ListShow">

          <playList v-show="ListShow" @pause="pause"/>
        </div>

      </div>
    </div>
  </div>

</template>

<script setup>
import {onMounted, ref, watch} from 'vue';
import playList from './components/playlist.vue'

const ismessage = ref(false)
const ListShow = ref(false)  //播放列表
const Audiocontrol = ref(null) //音频控制
const PlayUrl = ref('') //音频地址
const PlaybackMode = ref(3) //播放模式
const PlayorStop = ref(true) //播放暂停
const sourceIcon = ref(2) //音频来源
const Playmessage = ref({}) //音频信息
// 在这里添加你的逻辑代码
import {useGlobalbackground} from '/src/stores/Globalbackground.js' //全局背景色
import {usePlay} from '/src/stores/play.js' //全局播放
import {getUrl} from '/src/request/api/index.js' //获取音频地址

const UsePlay = usePlay()
const UseColor = useGlobalbackground()
// 监听UsePlay.globalPlay的变化
watch(UsePlay, (newVal) => {
  if (newVal.globalPlay === {}) {
    ismessage.value = false
  } else {
    ismessage.value = true
  }
  getUrllist(newVal)
})

function getUrllist(newVal) {
  if (newVal.globalPlay === undefined) {
    Playmessage.value = newVal.message
    const val = {
      id: Playmessage.value.id
    }
    getUrl(val).then(res => {
      PlayUrl.value = res.data.data[0].url
      PlayorStop.value = false
      const audio = Audiocontrol.value
      audio.volume = .2
    })
  } else {
    Playmessage.value = newVal.globalPlay
    console.log(Playmessage.value, '点击')
    const val = {
      id: Playmessage.value.id
    }
    getUrl(val).then(res => {
      PlayUrl.value = res.data.data[0].url
      PlayorStop.value = false
      const audio = Audiocontrol.value
      audio.volume = .2
    })
  }


}

function PlayMode() {
  if (PlaybackMode.value === 1) {
    PlaybackMode.value = 2
  } else if (PlaybackMode.value === 2) {
    PlaybackMode.value = 3
  } else if (PlaybackMode.value === 3) {
    PlaybackMode.value = 1
  }
}

function pause() {
  const audio = Audiocontrol.value;
  audio.pause();
  PlayorStop.value = !PlayorStop.value
  Playmessage.value = {}
}

function play() {
  PlayorStop.value = !PlayorStop.value
  const audio = Audiocontrol.value;
  audio.paused ? audio.play() : audio.pause();
}

function go(val) {
  console.log(UsePlay.playAll, '播放列表')
//  如果val是true 从播放列表里面切换下一首歌曲进行播放 再点击下一首继续切换
//   单曲循环判断
  if (PlaybackMode.value === 1) {
    Playmessage.value = UsePlay.playAll[0]
    getUrllist(UsePlay.playAll[0])
  }
//   顺序播放判断
  if (PlaybackMode.value === 3) {
    if (val) {
      const index = UsePlay.playAll.findIndex(item => item.message.id === Playmessage.value.id)
      if (index === UsePlay.playAll.length - 1) {
        Playmessage.value = UsePlay.playAll[0]
        getUrllist(UsePlay.playAll[0])
      }
      // 如果切换到了最后一首歌曲 就切换到第一首歌曲
      else if (index === -1) {
        Playmessage.value = UsePlay.playAll[0]
      } else {
        Playmessage.value = UsePlay.playAll[index + 1]
        getUrllist(UsePlay.playAll[index + 1])
      }

    }
//  如果val是false 从播放列表里面切换上一首歌曲进行播放 再点击上一首继续切换
    if (!val) {
      const index = UsePlay.playAll.findIndex(item => item.message.id === Playmessage.value.id)
      if (index === 0) {
        Playmessage.value = UsePlay.playAll[UsePlay.playAll.length - 1]
        getUrllist(UsePlay.playAll[UsePlay.playAll.length - 1])
      } else {
        Playmessage.value = UsePlay.playAll[index - 1]
        getUrllist(UsePlay.playAll[index - 1])
      }
    }
  }
//  随机播放
  if (PlaybackMode.value === 2) {
    const index = Math.floor(Math.random() * UsePlay.playAll.length)
    Playmessage.value = UsePlay.playAll[index]
    getUrllist(UsePlay.playAll[index])
  }
}

function Volume(event) {
  const audio = Audiocontrol.value;
  audio.volume = event.target.value / 100
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
    width: 30vw;

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
    width: 30vw;
    align-items: center;
    justify-content: right;

    div:nth-child(1) {
      border-style: solid;
      border-width: 1px;

      padding: 5px;
    }

    .Loop_playvoice {
      display: flex;
      align-items: center;

      .play_lisy {
        position: relative;

        img {
          width: 30px;
          height: 25px;
          cursor: pointer;
          margin: 0 .5vw 0 1vw;
        }
      }

      img {
        width: 30px;
        height: 25px;
        cursor: pointer;
        margin: 0 .5vw 0 1vw;
      }
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
