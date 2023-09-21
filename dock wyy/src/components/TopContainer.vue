<script setup>
import {useGlobalbackground} from "/src/stores/Globalbackground.js";
import PlayButton from "/src/components/ButtonAll.vue";

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
      <PlayButton/>
      <div class="tip">
        <div>标签：</div>
        <div class="tit">华语/流行/说唱</div>
      </div>
      <div class="tip" style="margin-top: 10px">
        <div style="margin-right: 5px">歌曲：
          <span class="font_12"> 20</span>
        </div>
        <div>播放：
          <span class="font_12">21万</span>
        </div>
      </div>
      <div class="tip" style="margin-top: 10px">
        <div>简介：
          <span class="font_12">世界给予我山花烂漫</span>
        </div>
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


    .tip {
      display: flex;

      .tit {
        color: #7ca6c4;
      }
    }
  }
}

.font_12 {
  font-size: 12px;
}
</style>
