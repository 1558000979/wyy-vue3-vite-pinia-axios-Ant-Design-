<script setup>
import { ref, watch, onMounted } from 'vue';
import Hotlrank from '/src/view/Globallayout/components/headTop/components/hotrank.vue';
import Searchsuggest from '/src/view/Globallayout/components/headTop/components/searchsuggest.vue';
import { useSearchHistory } from '/src/stores/searchhisstory.js';
const props = defineProps({
    value: {
        type: String,
    },
    hasmore: {
        type: Boolean,
        default: true,
    },
});
const opens = ref(false)
const usehisstory = useSearchHistory();
const usehisstorylist = ref();
const look = ref(true);
// 监听搜索记录同步更新搜索历史
watch([usehisstory, props], ([newVal1, { value }]) => {
    usehisstorylist.value = newVal1.UsageRecord.slice(-8);
});
const show = ref(false);
function open() {
    show.value = true;
}
function closed() {
    show.value = false;
}
// 查看全部
function lookAll() {
    usehisstorylist.value = usehisstory.UsageRecord;
    look.value = false;
}
// 删除全部的搜索历史
function delAll() {
    opens.value = true

}
function handleOk() {
    opens.value = false
    usehisstory.$reset();
}
function cancel() {
    opens.value = false
}
onMounted(() => {
    usehisstorylist.value = usehisstory.UsageRecord.slice(0, 8); // 截取数组的前八个元素
});
defineExpose({
    open,
    closed,
});
</script>

<template>
    <!-- -->
    <div v-if="show" class="hotlist_container">
        <div v-if="props.hasmore">
            <!-- 搜索历史-->
            <div class="top">
                <div class="top_left">
                    <span>搜索历史</span>
                    <img @click="delAll" src="/src/assets/headTop/del.png" alt="" />
                </div>
                <div class="top_right" v-if="look">
                    <span @click="lookAll">查看全部</span>
                </div>
            </div>
            <div class="history_container">
                <div v-for="(item, index) in usehisstorylist" :key="index" class="alone">
                    {{ item }}
                </div>
            </div>
            <!--热搜榜-->
            <Hotlrank />
        </div>
        <div v-if="!props.hasmore">
            <Searchsuggest :keyword="props.value" />
        </div>
    </div>
    <a-modal :open="opens" cancelText="取消" okText="确定" @cancel="cancel" @ok="handleOk">
        <div class="modal">
            确定删除历史记录？
        </div>
    </a-modal>
</template>

<style scoped lang="less">
.hotlist_container {
    position: absolute;
    top: 133%;
    left: -62%;
    width: 21vw;
    height: 61vh;

    background-color: #fff;
    box-shadow: 0 0 18px rgba(0, 0, 0, 1);
    overflow-y: scroll;

    .top {
        display: flex;
        justify-content: space-between;
        padding: 1vw;
        font-size: 14px;

        .top_left {
            display: flex;
            justify-content: space-between;
            align-items: center;

            img {
                width: 15px;
                height: 15px;
                margin-left: 0.5vw;
                cursor: pointer;
            }
        }

        .top_right {
            span {
                cursor: pointer;
            }
        }
    }

    .history_container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 20px;
        margin: 0 1vw;

        .alone {
            padding: 7px 20px;
            border: 1px solid #ececec;
            border-radius: 20px;
            margin-bottom: 5px;
        }
    }
}

@media (max-width: 723px) {
    .hotlist_container {
        position: absolute;
        top: 130%;
        left: -27%;
        width: 68vw;
        height: 39vh;
        padding: 1vw;
        background-color: #fff;
        box-shadow: 0 0 18px #000000;
        overflow-y: scroll;
    }
}

/* WebKit浏览器（Chrome、Safari） */
.hotlist_container::-webkit-scrollbar {
    width: 5px;
}

.hotlist_container::-webkit-scrollbar-track {
    background: linear-gradient(to bottom, #f6d365, #fda085);
}

.hotlist_container::-webkit-scrollbar-thumb {
    background-color: #888;
}

.hotlist_container::-webkit-scrollbar-thumb:hover {
    background-color: #555;
}

/* Firefox浏览器 */
html {
    scrollbar-width: thin;
}

html {
    scrollbar-color: linear-gradient(to bottom, #f6d365, #fda085) #888;
}

.modal {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 8vh;
}
</style>
