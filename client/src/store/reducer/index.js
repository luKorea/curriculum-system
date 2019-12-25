/**
 * @description 合并reducer
 */
import {combineReducers} from 'redux';

import personal from "./personal";
import course from './course';

const reducer = combineReducers({
    personal,
    course
});

export default reducer;
