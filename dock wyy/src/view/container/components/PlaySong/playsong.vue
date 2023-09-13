<template>
  <div class="play_container">
    <div class="left_container">
      <div class="imgbox"></div>
      <div class="title">
        <div>我想</div>
        <div>余佳运</div>
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
      <div v-if="PlayorStop" class="Loop_play">
        <img alt="" src="/src/assets/play/play.png">
      </div>
      <div v-if="!PlayorStop" class="Loop_play">
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
import {ref} from 'vue';

const PlaybackMode = ref(1)
const PlayorStop = ref(false)
const sourceIcon = ref(2)
// 在这里添加你的逻辑代码

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
      width: 50px;
      height: 40px;
      border-radius: 10px;
      background-color: black;
    }

    .title {
      display: flex;
      flex-direction: column;
      font-size: 14px;
      justify-content: center;
      margin-left: 10px;
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
      }
    }
  }
}
</style>
