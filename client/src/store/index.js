import {createStore, applyMiddleware} from 'redux';
import reduxLogger from 'redux-logger'; // 在控制中展示详细的redux操作的流程和信息
import reduxThunk from 'redux-thunk'; // 处理异步的dispatch派发
import reduxPromise from 'redux-promise'; // 在dispatch派发的时候使用promise语法

import reducer from './reducer';

let store = createStore(reducer, applyMiddleware(
    reduxLogger,
    reduxPromise,
    reduxThunk
));

export default store;