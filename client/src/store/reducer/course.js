import {BANNER_INFO} from '../action-types';
// initState
const initialState = {
    bannerInfo: null
};

export default (state = initialState, action) => {
    state = JSON.parse(JSON.stringify(state)); // 深度克隆
    // eslint-disable-next-line no-unused-vars
    let payload;
    switch (action.type) {
        case BANNER_INFO:
            payload = action.payload;
            // eslint-disable-next-line no-unused-expressions
            parseFloat(payload.code) === 0 ? state.bannerInfo = payload.data : null;
            break;
    }
    return state;
}