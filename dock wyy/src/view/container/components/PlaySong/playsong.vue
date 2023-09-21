<template>
  <div :style="{backgroundColor:UseColor.globalbackground==='#2b2b2b'?'#2b2b2b':''}" class="play_container">
    <div class="reactive_container">
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
        <div class="iconstyle">
          <!--      单曲循环-->
          <div v-if="PlaybackMode===1" class="Loop_play" @click="PlayMode()">
            <a-tooltip :autoAdjustOverflow="false" trigger="hover">
              <template #title>单曲循环</template>
              <img alt="" src="/src/assets/play/Loop.png">
            </a-tooltip>
          </div>


          <!--   随机-->
          <div v-if="PlaybackMode===2" class="Loop_play" @click="PlayMode()">
            <a-tooltip :autoAdjustOverflow="false" trigger="hover">
              <template #title>随机播放</template>
              <img alt="" src="/src/assets/play/Random.png">
            </a-tooltip>
          </div>


          <!--   顺序   -->
          <div v-if="PlaybackMode===3" class="Loop_play" @click="PlayMode()">
            <a-tooltip :autoAdjustOverflow="false" trigger="hover">
              <template #title>顺序播放</template>
              <img alt="" src="/src/assets/play/sequence.png">
            </a-tooltip>
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
          <div class="word" @click="cutTone">词</div>
        </div>
        <div class="range">
          <span v-show="ismessage" style="margin-right: 10px">{{ createtime }}</span>
          <input :max="formatTime1(Playmessage?.time)" class="timeinput" min="0" step="1" style="cursor: pointer"
                 type="range"
                 value="0"
                 @change="changetime">
          <span v-show="ismessage">{{ formatTime(Playmessage?.time) ? formatTime(Playmessage?.time) : '' }}</span>
        </div>

      </div>

      <div v-show="ismessage" class="right_container">
        <div v-if="sourceIcon===1" style=" border-color: #999999;cursor: pointer" @click="cutTone">云盘</div>
        <div v-if="sourceIcon===2" style=" border-color: #ec4141;color: #ec4141;cursor: pointer" @click="cutTone">无损
        </div>
        <div v-if="sourceIcon===3" style=" border-color: #ec4141;color: #ec4141;cursor: pointer" @click="cutTone">极高
        </div>
        <div v-if="sourceIcon===4" style=" border-color: #ec4141;color: #ec4141;cursor: pointer" @click="cutTone">标准
        </div>
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

  </div>

</template>

<script setup>
import {onMounted, ref, watch} from 'vue';
import playList from './components/playlist.vue'
import {message} from 'ant-design-vue';

const ismessage = ref(false)
const ListShow = ref(false)  //播放列表
const Audiocontrol = ref(null) //音频控制
const PlayUrl = ref('') //音频地址
const PlaybackMode = ref(3) //播放模式
const PlayorStop = ref(true) //播放暂停
const sourceIcon = ref(2) //音频来源
const Playmessage = ref({}) //音频信息
const createtime = ref('00:00') //音频实时时间
// 在这里添加你的逻辑代码
import {useGlobalbackground} from '/src/stores/Globalbackground.js' //全局背景色
import {usePlay} from '/src/stores/play.js' //全局播放
import {getUrl} from '/src/request/api/index.js' //获取音频地址

const UsePlay = usePlay()
const UseColor = useGlobalbackground()
// 监听UsePlay.globalPlay的变化
watch(UsePlay, (newVal) => {
  console.log(formatTime1(Playmessage.value.time), '当前歌曲总时间')
  if (newVal.globalPlay === {}) {
    ismessage.value = false
  } else {
    ismessage.value = true
  }
  if (newVal.globalPlay.fee === 1) {
    message.info('该歌曲为VIP歌曲，仅能听片段,请登录，勿拖动进度条，无用！')
  }
  getUrllist(newVal)
})
// 监听PlayorStop的变化
watch(PlayorStop, (newVal) => {
  if (newVal) {
    const audio = Audiocontrol.value;
    audio.pause();
  } else {
    const audio = Audiocontrol.value;
    audio.play();
  }
})
// 实现音频实时播放时间
onMounted(() => {
  const audio = Audiocontrol.value;
  audio.addEventListener('timeupdate', () => {
    createtime.value = formatTime(audio.currentTime * 1000)
  })
})
// 把传入的毫秒数转换为分秒
const formatTime = (time) => {
  const minute = Math.floor(time / 1000 / 60);
  const second = Math.floor(time / 1000 % 60);
  return `${minute}:${second < 10 ? '0' + second : second}`;
}
// 把传入的毫秒数转换为分秒 再转化总秒数
const formatTime1 = (time) => {
  const minute = Math.floor(time / 1000 / 60);
  const second = Math.floor(time / 1000 % 60);
  const alltime = `${minute * 60 + second}`;
  return Number(alltime);
}


function changetime(event) {
  console.log(event.target.value, '当前拖动进度条时间')
  const audio = Audiocontrol.value;
  audio.currentTime = event.target.value
}

function cutTone() {
  message.warning('功能暂未实现');
  // if (sourceIcon.value === 1) {
  //   sourceIcon.value = 2
  //
  // } else if (sourceIcon.value === 2) {
  //   sourceIcon.value = 3
  // } else if (sourceIcon.value === 3) {
  //   sourceIcon.value = 4
  // } else if (sourceIcon.value === 4) {
  //   sourceIcon.value = 1
  // }

}

function getUrllist(newVal) {
  // if (newVal.globalPlay.fee === 1) {
  //   message.info('该歌曲为VIP歌曲，仅能听片段,请登录，勿拖动进度条，无用！')
  //   if (newVal.globalPlay === undefined) {
  //     Playmessage.value = newVal.message
  //     const val = {
  //       id: Playmessage.value.id
  //     }
  //     getUrl(val).then(res => {
  //       PlayUrl.value = res.data.data[0].url
  //       PlayorStop.value = false
  //       const audio = Audiocontrol.value
  //       audio.volume = .2
  //     })
  //   } else {
  //     Playmessage.value = newVal.globalPlay
  //
  //     const val = {
  //       id: Playmessage.value.id
  //     }
  //     getUrl(val).then(res => {
  //       PlayUrl.value = res.data.data[0].url
  //       PlayorStop.value = false
  //       const audio = Audiocontrol.value
  //       audio.volume = .2
  //     })
  //   }
  // }
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
//  如果val是true 从播放列表里面切换下一首歌曲进行播放 再点击下一首继续切换
//   单曲循环判断
  if (PlaybackMode.value === 1) {
    message.info('单曲循环中哦~')
    Playmessage.value = UsePlay.playAll[0]
    getUrllist(UsePlay.playAll[0])
  }
//   顺序播放判断
  if (PlaybackMode.value === 3) {
    console.log('进到顺序播放判断')
    if (val) {
      console.log('进到顺序播放下一首判断')
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
  //display: flex;
  //justify-content: space-between;
  position: fixed;
  border-top: 1px solid #e0e0e0;
  width: 100vw;
  height: 80px;
  bottom: 0;
  background-color: #ffffff;
  align-items: center;
  padding: 0 10px;

  .reactive_container {
    position: relative;

    .left_container {
      display: flex;
      width: 30vw;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(0, 25%);

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
      flex-direction: column;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-25%, 25%);

      .iconstyle {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-right: 30px;

        .Loop_play {
          img {
            width: 30px;
            height: 25px;
            cursor: pointer;
          }
        }
      }

      .range {
        display: flex;
        margin-top: 10px;
        width: 650px;

        input {
          width: 600px;
          cursor: pointer;
        }

        //修改滑块颜色
        .timeinput::-webkit-slider-runnable-track {
          //height: 20px;
          //border-radius: 10px; /*将轨道设为圆角的*/
          //background-color: red;
          box-shadow: 0 1px 1px #def3f8, inset 0 .125em .125em #0d1112; /*轨道内置阴影效果*/
        }

        .timeinput:focus {
          outline: none;
        }

        .timeinput::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 25px;
          width: 25px;
          margin-top: -5px; /*使滑块超出轨道部分的偏移量相等*/
          background: #ffffff;
          border-radius: 50%; /*外观设置为圆形*/
          border: solid 0.125em rgba(205, 224, 230, 0.5); /*设置边框*/
          box-shadow: 0 .125em .125em #3b4547; /*添加底部阴影*/
        }

        span {
          font-size: 12px;
          margin-left: 10px;
        }
      }

    }

    .right_container {
      display: flex;
      width: 30vw;
      align-items: center;
      justify-content: right;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(0, 100%);

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


}

.word {
  cursor: pointer;
}
</style>
