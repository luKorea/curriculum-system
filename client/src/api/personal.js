import axios from './index';

// 验证是否登录
export let checkLogin = () => axios.get('/personal/login');

// 登录
export let login = (payload) => axios.post('/personal/login', payload);

// 注册
export let register = (payload) => axios.post('/personal/register', payload);

// 退出登录
export let layout = () => axios.get("/personal/out");

// 获取个人信息
export let getUserInfo = () => axios.get("/personal/info");