<script setup>
import Taps from "/src/view/findmusic/components/Taps.vue";
import Carouselmap from "/src/view/findmusic/components/Carouselmap.vue";
import SongList from "/src/view/findmusic/components/SongList/SongList.vue";
import AloneSendout from '/src/view/findmusic/components/Exclusivedelivery/Exclusivedelivery.vue'
</script>

<template>
    <div class="find_container">
        <Taps />
        <Carouselmap />
      <SongList/>
      <AloneSendout/>
    </div>
</template>

<style scoped lang="less">
.find_container {
    display: flex;
    flex-direction: column;
}
</style>
