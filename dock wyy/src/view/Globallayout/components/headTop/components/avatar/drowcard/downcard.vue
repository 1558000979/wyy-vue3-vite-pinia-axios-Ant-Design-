<template>
    <div class="down_container">
        <Attention />
        <Cardlist />
    </div>
</template>

<script setup>
import Attention from "/src/view/Globallayout/components/headTop/components/avatar/drowcard/attention.vue";
import Cardlist from "/src/view/Globallayout/components/headTop/components/avatar/drowcard/card_list.vue";
</script>

<style lang="less" scoped>
.down_container {
    display: flex;
    flex-direction: column;
    width: 17vw;
    height: 41vh;
    position: absolute;
    top: 170%;
    left: -27%;
    background-color: #fff;
    box-shadow: 0 0 18px #999;
    border-radius: 10px;


}
</style>