<template>
    <div>
    <div class="lvgrade" :style="{color:useColor.globalbackground ==='#ec4141' ||useColor.globalbackground ==='#fd544e'?'#000':'red'}" v-show="props.gradeshow===1">CVIP•壹</div>
    <div class="lvgrade" v-show="props.gradeshow===2">CVIP•貳</div>
    <div class="lvgrade" v-show="props.gradeshow===3">CVIP•參</div>
    <div class="lvgrade" v-show="props.gradeshow===4">CVIP•肆</div>
    <div class="lvgrade" v-show="props.gradeshow===5">CVIP•伍</div>
    <div class="lvgrade" v-show="props.gradeshow===6">CVIP•陸</div>
    <div class="lvgrade" v-show="props.gradeshow===7">CVIP•柒</div>
    <div class="lvgrade" v-show="props.gradeshow===8">CVIP•捌</div>
    <div class="lvgrade" v-show="props.gradeshow===9">CVIP•玖</div>
    </div>
</template>

<script setup>
import { useGlobalbackground }from '/src/stores/Globalbackground.js'
const props = defineProps({
    gradeshow:{
        type:Number
    }
})
const useColor = useGlobalbackground()
</script>

<style lang="less" scoped>
.lvgrade{
         font-size: 12px;
        font-weight: 600;
        margin-left: 10px;
        font-style: italic;
        color: red;
}
</style>