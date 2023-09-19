<script setup>
import {ref, defineProps} from 'vue';
import {usePlay} from "/src/stores/play.js";

const UsePlay = usePlay()
const props = defineProps({
  column: {
    type: Array,
    default: () => []
  },
  tabledata: {
    type: Array,
    default: () => []
  },
  marginBottomNum: {
    type: Number,
    default: 10
  },
  paddingLeftNum: {
    type: Number,
    default: .5
  }
})
// 把传入的毫秒数转换为分秒
const formatTime = (time) => {
  const minute = Math.floor(time / 1000 / 60);
  const second = Math.floor(time / 1000 % 60);
  return `${minute}:${second < 10 ? '0' + second : second}`;
}

function play(val) {
  UsePlay.globalPlay = val
}
</script>

<template>
  <table :style="{marginBottom:`${marginBottomNum}vh`}">
    <tr>
      <th v-for="(item,index) in props.column" :key="index"
          :style="{width:`${item.width}vw`,paddingLeft:`${paddingLeftNum}vw`}">{{ item.label }}
      </th>
    </tr>
    <tr v-for="(item,index) in props.tabledata" :key="index"
        :class="{ 'tr-hover': true }"
        :style="`background-color:${index % 2 === 0 ? '#ffffff' : '#fafafa'}`"
        @click="play(item.message)"
    >
      <td :style="{paddingLeft:`${paddingLeftNum}vw`}">{{ index + 1 }}</td>
      <td v-if="item.name">{{ item.name }}</td>
      <td v-if="item.singer">{{ item.singer }}</td>
      <td v-if="item.album">{{ item.album }}</td>
      <td v-if="item.time">{{ formatTime(item.time) }}</td>
    </tr>
  </table>
</template>

<style lang="less" scoped>


th {
  border-top: 1px solid #999999;
  background-color: #FFFFFF;
  font-size: 14px;
  color: #888888;
  padding: 2vh 0;
  text-align: left;
}

//th:nth-child(1),
//td:nth-child(1) {
//  padding-left: 3vw;
//}

.tr-hover:hover {
  background-color: #f2f2f3 !important;
  cursor: pointer;
}

td {
  text-align: left;
  padding: 2vh 0;
  font-size: 14px;
  color: #888888;
  white-space: nowrap; /* 不换行 */
  overflow: hidden; /* 超出部分隐藏 */
  text-overflow: ellipsis; /* 显示省略号 */
}

</style>
