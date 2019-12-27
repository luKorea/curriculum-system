import {BANNER_INFO} from '../action-types';
import {getBanner} from '../../api/course';

let course = {
    getBanner() {
        return {
            type: BANNER_INFO,
            payload: getBanner()
        }
    }
};

export default course;