import * as TYPES from '../actions/types';

const initialState = {
    visible: false,
    text: '',
};

const snackbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.SET_SNACKBAR_VISIBLE:
            return {
                ...state,
                visible: action.payload,
            };
        case TYPES.SET_SNACKBAR_TEXT:
            return {
                ...state,
                text: action.payload,
            };

        default:
            return state;
    }
};

export default snackbarReducer;
