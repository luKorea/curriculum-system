import axios  from './index';

export let getBanner = () => axios.get('/course/banner');