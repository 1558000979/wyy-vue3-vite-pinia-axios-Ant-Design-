import axios from "/src/request/request.js";

//获取歌曲url
export function getUrl(params) {
    return axios({
        url: '/song/url',
        method: 'get',
        params
    });
}
