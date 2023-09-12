<script setup>
import Taps from "/src/view/findmusic/components/Taps.vue";
</script>

<template>
    <div class="find_container">
        <Taps />
      <router-view></router-view>
    </div>
</template>

<style scoped lang="less">
.find_container {
    display: flex;
    flex-direction: column;
}
</style>
