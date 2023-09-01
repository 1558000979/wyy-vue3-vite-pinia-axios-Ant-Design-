<template>
    <div class="hover_card_container">
        <Taps @select="selects" />
        <Theme v-if="Tapsvalue === 1" />
    </div>
</template>

<script setup>
import { ref } from "vue";
import Taps from '/src/view/headTop/components/Changeskin/hovercard/taps.vue'
import Theme from '/src/view/headTop/components/Changeskin/hovercard/Themecontent.vue'
const Tapsvalue = ref(1)
function selects(event) {
    Tapsvalue.value = event
    console.log(event, 'event');
}
</script>

<style lang="less" scoped>
.hover_card_container {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 6vh;
    left: -10vw;
    width: 346px;
    height: 286px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 0 18px #666;
}
</style>