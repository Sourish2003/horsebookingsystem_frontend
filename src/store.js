import { createStore } from 'redux';

const initialState = {
    // Your initial state here
};

function rootReducer(state = initialState, action) {
    // ... your reducers ...
    return state;
}

const store = createStore(rootReducer);
export default store;