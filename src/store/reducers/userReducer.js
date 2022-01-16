import * as TYPES from '../actions/types';

const initialState = {
    token: null,
    authUser: null,
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.SET_INITIAL_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };
        case TYPES.SET_TOKEN:
            return {
                ...state,
                token: action.payload,
            };
        case TYPES.SET_USER:
            return {
                ...state,
                authUser: action.payload,
            };
        case TYPES.RESET_STATE:
            return initialState;

        default:
            return state;
    }
};

export default userReducer;
