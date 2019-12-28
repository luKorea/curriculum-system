import axios  from './index';

export let getBanner = () => axios.get('/course/banner');

export let getListInfo = (payload) => {
    return axios.get("/course/list", {
            params: payload
        })
};