<template>
    <div class="clothes_container">
        <img @click="open" src="/src/assets/headTop/Clothes.png" alt="">
        <HoverCard v-if="show" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import HoverCard from '/src/view/headTop/components/Changeskin/hovercard/hovercard.vue'
const show = ref(false)
function open() {
    show.value = !show.value
}
</script>

<style lang="less" scoped>
.clothes_container {
    position: relative;
    margin-left: .5vw;


    img {
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
}
</style>