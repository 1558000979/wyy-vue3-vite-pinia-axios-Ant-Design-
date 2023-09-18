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
  console.log(val, 'val')
}
</script>

<template>
  <table>
    <tr>
      <th v-for="(item,index) in props.column" :key="index" :style="`width:${item.width}vw`">{{ item.label }}</th>
    </tr>
    <tr v-for="(item,index) in props.tabledata" :key="index"
        :class="{ 'tr-hover': true }"
        :style="`background-color:${index % 2 === 0 ? '#ffffff' : '#fafafa'}`"
        @click="play(item.message)"
    >
      <td>{{ index + 1 }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.singer }}</td>
      <td>{{ item.album }}</td>
      <td>{{ formatTime(item.time) }}</td>
    </tr>
  </table>
</template>

<style lang="less" scoped>
table {
  margin-bottom: 10vh;
}

th {
  border-top: 1px solid #999999;
  background-color: #FFFFFF;
  font-size: 14px;
  color: #888888;
  padding: 2vh 0;
  text-align: left;
}

th:nth-child(1),
td:nth-child(1) {
  padding-left: 3vw;
}

.tr-hover:hover {
  background-color: #f2f2f3 !important;
  cursor: pointer;
}

td {
  text-align: left;
  padding: 2vh 0;
  font-size: 14px;
  color: #888888;
}

</style>
