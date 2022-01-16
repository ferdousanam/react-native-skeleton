import {combineReducers} from 'redux';
import userReducer from './userReducer';
import snackbarReducer from './snackbarReducer';

const rootReducer = combineReducers({
    snackbarReducer,
    userReducer,
});

export default rootReducer;
