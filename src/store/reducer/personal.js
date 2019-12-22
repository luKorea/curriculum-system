import {ADD_NUMBER} from './../action-types';


// initState
const initialState = {
    number: 0
};

export default (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case ADD_NUMBER:
            state = {...state, number: state.number + 1};
            break;
    }
    return state;
}