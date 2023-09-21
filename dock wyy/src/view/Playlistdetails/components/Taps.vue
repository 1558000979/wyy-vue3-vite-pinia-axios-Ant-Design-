<script setup>
import {ref} from "vue";
import {useGlobalbackground} from "/src/stores/Globalbackground.js";

const useColor = useGlobalbackground()
const Taps = ref([
  {
    name: '歌曲列表',
    value: 1,
    num: ''
  },
  {
    name: '评论',
    value: 2,
    num: ''
  },
  {
    name: '收藏者',
    value: 3,
    num: ''
  }
])
const active = ref(1)

function OnitemMenu(val) {
  active.value = val
}
</script>

<template>
  <div class="Taps">
    <div v-for="item in Taps" :key="item.value" :class="{'active':active===item.value}"
         :style="{ borderColor: useColor.globalbackground }" @click="OnitemMenu(item.value)">
      {{ item.name }}
    </div>
  </div>
</template>

<style lang="less" scoped>
.Taps {
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin: 0 0 30px 20px;

  div {
    cursor: pointer;
  }


}

.active {
  font-size: 20px;
  padding-bottom: 5px;
  border-bottom-width: 3px;
  border-bottom-style: solid;
}
</style>
