import axios from "/src/request/request.js";

// 轮播图
export function getbanner(params) {
    return axios({
        url: '/banner',
        method: 'get',
        params
    });
}

// 推荐歌单
export function getPlayList(params) {
    return axios({
        url: '/personalized',
        method: 'get',
        params
    });
}

//独家推送
export function getAlonesend() {
    return axios({
        url: '/personalized/privatecontent',
        method: 'get',
    });
}

// 推荐Mv
export function getmvList() {
    return axios({
        url: '/personalized/mv',
        method: 'get',
    });
}

//每日歌单推荐
export function getDayList() {
    return axios({
        url: '/recommend/songs',
        method: 'get',
    });
}
