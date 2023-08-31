import axios from "/src/request/request.js";
// 热搜列表
export function gethotlist() {
    return axios({
        url: '/search/hot/detail',
        method: 'get',
    });
}
// 搜索
export function getsearch(params) {
    return axios({
        url: '/search',
        method: 'get',
        params
    });
}
//搜索建议
export function getsearchsuggest(params) {
    return axios({
        url: '/search/suggest',
        method: 'get',
        params
    });
}
// 默认搜索关键字
export function getsearchdefault() {
    return axios({
        url: '/search/default',
        method: 'get',
    });
}