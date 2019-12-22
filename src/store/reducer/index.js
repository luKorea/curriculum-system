/**
 * @description 合并reducer
 */
import {combineReducers} from 'redux';

import personal from "./personal";

const reducer = combineReducers({
    personal
});

export default reducer;
