import {BANNER_INFO, LIST_INFO} from '../action-types';
import {getBanner, getListInfo} from '../../api/course';

let course = {
    getBanner() {
        return {
            type: BANNER_INFO,
            payload: getBanner()
        }
    },
    getListInfo(payload = {}) {
        let {limit = 10, page = 1, type = 'all', flag = 'push'} = payload;
        return async dispatch => {
            let result = await getListInfo({
               limit, page, type
            });
            dispatch({
                type: LIST_INFO,
                result,
                flag,
                courseType: type
            })
        }
    }
};

export default course;