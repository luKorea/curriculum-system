import axios from 'axios';
import Qs from 'qs';

import {DEV_URL} from './config';

axios.defaults.baseURL = DEV_URL;
axios.defaults.withCredentials = true;
axios.defaults.transformRequest = (data = {}) => {
    Qs.stringify(data);
};

// 设置请求响应拦截器
axios.interceptors.request.use(result => {
    // ... loading
});
axios.interceptors.response.use(result => result.data);

export default axios;