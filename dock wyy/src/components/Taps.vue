<script setup>
import {ref} from "vue";
import {useGlobalbackground} from "/src/stores/Globalbackground.js";

const emit = defineEmits(['click'])
const props = defineProps({
  Taps: {
    type: Array,
    default: () => []
  },
})
const useColor = useGlobalbackground()

const active = ref(1)

function OnitemMenu(val) {
  emit('click', val)
  active.value = val
}
</script>

<template>
  <div class="Taps">
    <div v-for="item in props.Taps" :key="item.value" :class="{'active':active===item.value}"
         :style="{ borderColor: useColor.globalbackground }" @click="OnitemMenu(item.value)">
      {{ item.name }} {{ item.num !== '' ? item.num : '' }}
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
