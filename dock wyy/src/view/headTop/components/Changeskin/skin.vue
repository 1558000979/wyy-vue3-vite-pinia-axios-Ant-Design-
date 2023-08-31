<template>
    <div class="clothes_container">
        <img src="/src/assets/headTop/Clothes.png" alt="">
        <HoverCard />
    </div>
</template>

<script setup>
import HoverCard from '/src/view/headTop/components/Changeskin/hovercard.vue'
</script>

<style lang="less" scoped>
.clothes_container {
    position: relative;
    margin-left: .5vw;
    cursor: pointer;

    img {
        width: 30px;
        height: 30px;
    }
}
</style>