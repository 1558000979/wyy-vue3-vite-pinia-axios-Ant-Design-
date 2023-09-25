<script setup>
import {defineProps} from "vue";
import relay from '/src/assets/findmusic/relay.png'

const props = defineProps({
  color: {
    type: String,
    default: 'red'
  },
  name: {
    type: String,
    default: '播放全部'
  },
  url: {
    type: String,
    default: relay
  },
  show: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="button_container">
    <div :class="['play_button',{'bor':show}]" :style="{background:props.color,color:show?'#333':'#FFFFFF'}"
         @click="playAll">
      <img :alt="props.name" :src="props.url">
      {{ props.name }}
    </div>
  </div>
</template>

<style lang="less" scoped>
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

    margin-right: 10px;

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

  .bor {
    border: 1px solid #999999;
  }
}
</style>
