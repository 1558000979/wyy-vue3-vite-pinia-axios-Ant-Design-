<script setup>
import {ref, defineProps, onMounted} from 'vue';
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
onMounted(() => {
  console.log(props, 'props')
})
// 把传入的毫秒数转换为分秒
const formatTime = (time) => {
  const minute = Math.floor(time / 1000 / 60);
  const second = Math.floor(time / 1000 % 60);
  return `${minute}:${second < 10 ? '0' + second : second}`;
}

function play(item) {
  UsePlay.globalPlay = item
  let set = new Set(UsePlay.playAll)
  set.add(item)
  UsePlay.playAll = [...set]
}
</script>

<template>
  <table :style="{marginBottom:`${marginBottomNum}vh`}">
    <thead>
    <tr>
      <th v-for="(item,index) in props.column" :key="index"
          :style="{width:`${item.width}`,paddingLeft:`${paddingLeftNum}vw`}">{{ item.label }}
      </th>
    </tr>
    </thead>
    <tr v-for="(item,index) in props.tabledata" :key="index"
        :class="{ 'tr-hover': true }"
        :style="`background-color:${index % 2 === 0 ? '#ffffff' : '#fafafa'}`"
        @click="play(item)"
    >
      <td :style="{paddingLeft:`${paddingLeftNum}vw`}">
        <div :style="{width:`${props.column[0].width}`}" class="text">
          {{ index + 1 }}
        </div>
      </td>
      <td v-if="item.name">
        <div :style="{width:`${props.column[1].width}`}" class="text">
          {{ item.name }}
          <span v-if="item.fee===1" class="viptips">VIP</span>
        </div>
      </td>
      <td v-if="item?.ar[0]?.name">
        <div :style="{width:`${props.column[2].width}`}" class="text">
          {{ item?.ar[0]?.name }}
        </div>
      </td>
      <td v-if="item.al?.name">
        <div :style="{width:`${props.column[3].width}`}" class="text">
          {{ item.al?.name }}
        </div>
      </td>
      <td v-if="item?.dt">
        <div :style="{width:`${props.column[4].width}`}" class="text">
          {{ formatTime(item?.dt) }}
        </div>
      </td>
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

.text {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.width {
  width: 20vw;
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
  //white-space: nowrap; /* 不换行 */
  //overflow: hidden; /* 超出部分隐藏 */
  //text-overflow: ellipsis; /* 显示省略号 */
}

.viptips {
  font-size: 16px;
  color: red;
  font-weight: 600;
  font-style: italic;
}
</style>
