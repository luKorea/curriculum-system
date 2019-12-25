import {} from '../action-types';
// initState
const initialState = {
};

export default (state = initialState, action) => {
    state = JSON.parse(JSON.stringify(state)); // 深度克隆
    switch (action.type) {
    }
    return state;
}