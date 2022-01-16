import * as TYPES from './types';

export const setSnackbarVisible = (value) => (dispatch) => {
    dispatch({type: TYPES.SET_SNACKBAR_VISIBLE, payload: value});
};

export const setSnackbarText = (value) => (dispatch) => {
    dispatch({type: TYPES.SET_SNACKBAR_TEXT, payload: value});
};

export const toastSnackbar = (message) => (dispatch) => {
    dispatch({type: TYPES.SET_SNACKBAR_TEXT, payload: message});
    dispatch({type: TYPES.SET_SNACKBAR_VISIBLE, payload: true});
};
