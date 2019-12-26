import {USER_INFO} from '../action-types';
import {getUserInfo} from '../../api/personal';

let personal = {
    getUserInfo () {
        return {
            type: USER_INFO,
            payload: getUserInfo()
        }
    }
};

export default personal;