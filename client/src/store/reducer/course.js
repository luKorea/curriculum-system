import {} from '../action-types';

const initialState = {
};

export default (state = initialState, action) => {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {

    }
    return state;
}