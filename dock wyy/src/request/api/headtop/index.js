import axios from "/src/request/request.js";
// 热搜列表
export function gethotlist() {
    return axios({
        url: '/search/hot/detail',
        method: 'get',
    });
}