<script setup>
import { useGlobalbackground } from "/src/stores/Globalbackground.js";
const useColor = useGlobalbackground()
import Icon from "/src/view/headTop/components/TItle.vue";
import BackorGo from "/src/view/headTop/components/BackorGo.vue";
import Search from "/src/view/headTop/components/search/search.vue";
import Avatar from "/src/view/headTop/components/avatar/avatar.vue"
import ChangeSkin from "/src/view/headTop/components/Changeskin/home.vue"
</script>

<template>
  <div class="headTop_container" :style="{ backgroundColor: useColor.globalbackground }">
    <div class="left">
      <Icon />
      <BackorGo />
      <Search />
    </div>
    <div class="right">
      <Avatar />
      <ChangeSkin />
    </div>

  </div>
</template>

<style scoped lang="less">
.headTop_container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3vh 2vw;
  background-color: #f5f5f5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);


}

.left {
  display: flex;
  align-items: center;
}

.right {
  display: flex;
  align-items: center;
  width: 500px;
}

@media (max-width: 723px) {
  .right {
    display: none;
  }
}
</style>
