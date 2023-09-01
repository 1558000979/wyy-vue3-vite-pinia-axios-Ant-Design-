<script setup>
import Taps from "/src/view/findmusic/components/Taps.vue";
import Carouselmap from "/src/view/findmusic/components/Carouselmap.vue";
</script>

<template>
    <div class="find_container">
        <Taps />
        <Carouselmap />
    </div>
</template>

<style scoped lang="less">
.find_container {
    display: flex;
    flex-direction: column;
}
</style>