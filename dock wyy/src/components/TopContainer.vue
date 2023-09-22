<script setup>
import {useGlobalbackground} from "/src/stores/Globalbackground.js";
import PlayButton from "/src/components/ButtonAll.vue";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {getListDetails} from '/src/request/api/findmusic/index.js'

const message = ref({})
const route = useRoute()
onMounted(() => {
  getListDetails({id: route.query.id}).then(res => {
    message.value = res?.data?.playlist
    console.log(message.value, 'message')
  })
})
const useColor = useGlobalbackground()

// 时间戳转换时间
function formatTime(time) {

  let date = new Date(Number(time));
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return `${year}-${month}-${day}`;
}
</script>

<template>
  <div class="Top_container">
    <img :src="message?.coverImgUrl" alt="">
    <div class="right_container">
      <div class="title">
        <div :style="{borderColor:useColor.globalbackground,color:useColor.globalbackground}" class="tips">歌单</div>
        <h2>{{ message?.name }}</h2>
      </div>
      <div class="author">
        <img :src="message?.creator?.avatarUrl" alt="">
        <a href="">{{ message?.creator?.nickname }}</a>
        <div class="info">{{ formatTime(message.createTime) }}创建</div>
        <div class="font_12" style="margin-left: 5px">
          <div v-html="message?.creator?.signature"></div>
        </div>
      </div>
      <PlayButton/>
      <div class="tip">
        <div>标签：</div>
        <div class="tit tip">
          <div v-for=" item in message.tags" :key="index">
            {{ item }}
          </div>
        </div>
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

        div {
          margin-right: 5px;
        }
      }
    }
  }
}

.font_12 {
  font-size: 12px;
}
</style>
