import {BANNER_INFO, LIST_INFO} from '../action-types';
// initState
const initialState = {
    bannerInfo: null,
    courseInfo: {
        total: 1,
        limit: 10,
        page: 1,
        data: []
    },
    courseType: 'all'
};

export default (state = initialState, action) => {
    state = JSON.parse(JSON.stringify(state)); // 深度克隆
    // eslint-disable-next-line no-unused-vars
    let payload;
    // eslint-disable-next-line default-case
    switch (action.type) {
        case BANNER_INFO:
            payload = action.payload;
            // eslint-disable-next-line no-unused-expressions
            parseFloat(payload.code) === 0 ? state.bannerInfo = payload.data : null;
            break;
        case LIST_INFO:
            let {result, flag, courseType} = action;
            state.courseType = courseType;
            if (parseFloat(result.code) === 0) {
                state.courseInfo.total = parseFloat(result.total);
                state.courseInfo.limit = parseFloat(result.limit);
                state.courseInfo.page = parseFloat(result.page);
                state.courseInfo.data = flag === 'push'? state.courseInfo.data.concat(result.data) : result.data;
            }
            break;
    }
    return state;
}