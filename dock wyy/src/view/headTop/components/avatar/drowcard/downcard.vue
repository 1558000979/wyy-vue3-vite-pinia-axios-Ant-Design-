<template>
    <div class="down_container">
        <Attention />
        <Cardlist />
    </div>
</template>

<script setup>
import Attention from "/src/view/headTop/components/avatar/drowcard/attention.vue";
import Cardlist from "/src/view/headTop/components/avatar/drowcard/card_list.vue";
</script>

<style lang="less" scoped>
.down_container {
    display: flex;
    flex-direction: column;
    width: 17vw;
    height: 41vh;
    position: absolute;
    top: 7vh;
    left: -2vw;
    background-color: #fff;
    box-shadow: 0 0 18px #999;
    border-radius: 10px;
z-index: 1;

}
</style>
