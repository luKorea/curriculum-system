import axios from 'axios';
import Qs from 'qs';

import {DEV_URL} from './config';

axios.defaults.baseURL = DEV_URL;
// 允许跨域，并且允许携带cookie
axios.defaults.withCredentials = true;
// 将post，put通过请求主体传递给服务器的内容统一处理为x-www-url-encoded格式
axios.defaults.transformRequest = (data = {}) => {
    return Qs.stringify(data);
};

/*
// 设置请求响应拦截器
axios.interceptors.request.use(result => {
    // ... loading
    return result;
});
*/

axios.interceptors.response.use(result => result.data);

export default axios;