<script setup>
import {useGlobalbackground} from "/src/stores/Globalbackground.js";

const useColor = useGlobalbackground()
</script>

<template>
  <div class="Top_container">
    <img alt="" src="">
    <div class="right_container">
      <div class="title">
        <div :style="{borderColor:useColor.globalbackground,color:useColor.globalbackground}" class="tips">歌单</div>
        <h2>今天从《下完这场雨 (0.8x降速版)》听起|私人雷达</h2>
      </div>
      <div class="author">
        <img alt="" src="">
        <a href="">云音乐私人雷达</a>
        <div class="info">2019-12-26创建</div>
      </div>
      <div class="button_container">
        <div class="play_button" @click="playAll">
          <img alt="播放全部" src="/src/assets/findmusic/relay.png">
          播放全部
        </div>
        <div class="collect_button">
          <img alt="收藏全部" src="/src/assets/findmusic/collect.png">
          收藏全部
        </div>
      </div>
      <div class="tip">
        <div>标签：</div>
        <div>华语/流行/说唱</div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.Top_container {
  display: flex;
  padding: 40px 20px;

  img {
    width: 200px;
    height: 200px;
    border-radius: 20px;
    margin-right: 20px;
  }

  .right_container {
    display: flex;
    flex-direction: column;

    .title {
      display: flex;
      align-items: flex-start;

      .tips {
        padding: 3px 10px;
        border-width: 1px;
        border-style: solid;
        border-radius: 5px;
        font-size: 12px;
        margin-right: 10px;
      }

      div:nth-child(2) {
        font-size: 30px;
      }
    }

    .author {
      display: flex;
      align-items: center;

      img {
        width: 40px;
        height: 40px;
        border-radius: 40px;
      }

      //清楚a标签下标线
      a {
        text-decoration: none;
        margin-right: 5px;
      }

      .info {
        font-size: 12px;
      }
    }

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

    .tip {
      display: flex;

      div:nth-child(2) {
        color: #7ca6c4;
      }
    }
  }
}
</style>
