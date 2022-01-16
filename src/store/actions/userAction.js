import AsyncStorage from '@react-native-async-storage/async-storage';
import * as TYPES from './types';
import APIKit, {setClientToken} from '../../config/axios';
import {logError, LogRejectedMessage, logResponse} from '@/helpers';
import FCMService from '@/services/FCMService';
import profile from '../../../data/profile';

/*
 | ====================================================================================
 | User State Actions Started
 | ====================================================================================
*/
export const login = () => (dispatch) => {
    return new Promise(async (resolve, reject) => {
        const fcm_token = await FCMService.getToken();
        console.log('fcm_token', fcm_token);
        setTimeout(() => {
            try {
                dispatch(setToken(fcm_token));
                dispatch(signInActions());
                resolve(profile);
            } catch (error) {
                reject(error);
            }
        }, 1000);
    });
};

export const logout = () => (dispatch) => {
    AsyncStorage.removeItem('token');
    dispatch(resetState());
    dispatch(signOutActions());
};

export const resetState = () => (dispatch) => {
    dispatch({type: TYPES.RESET_STATE});
    // APIKit.post('/logout').then((response) => logResponse(response));
};

export const setToken = (token) => (dispatch, getState) => {
    if (token) {
        AsyncStorage.setItem('token', token);
    } else {
        dispatch(logout());
    }
    dispatch({type: TYPES.SET_TOKEN, payload: token});
    setClientToken(token);
};

export const loadProfile = () => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                dispatch(setAuthUser(profile));
                resolve(profile);
            } catch (error) {
                reject(error);
            }
        }, 1000);
    });
};

export const updateProfile = (user) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        APIKit.put('/profile/' + getState().userReducer.authUser.id, user)
            .then((response) => {
                logResponse(response);
                if (response.data.success) {
                    dispatch(setAuthUser(response.data.data));
                }
                resolve(response.data);
            })
            .catch((error) => {
                logError(error);
                reject(error);
            });
    });
};

export const setAuthUser = (user) => (dispatch, getState) => {
    dispatch({type: TYPES.SET_USER, payload: user});
};
/*
 | ====================================================================================
 | User State Actions End
 | ====================================================================================
*/

/*
 | ====================================================================================
 | Auth Actions Started
 | ====================================================================================
*/
export const signInActions = () => async (dispatch, getState) => {
    const token = getState().userReducer.token;
    if (token) {
        await dispatch(loadProfile());
        // await dispatch(setProfile()).catch(LogRejectedMessage);
    }
};

export const signOutActions = () => (dispatch) => {
    setClientToken(null);
};

export const setProfile = () => (dispatch, getState) => {
    const token = getState().userReducer.token;
    if (!token) {
        return;
    }
    APIKit.get('/me')
        .then((response) => {
            if (response.data.success) {
                dispatch({type: TYPES.SET_USER, payload: response.data.data});
                dispatch({
                    type: TYPES.SET_WALLET,
                    payload: response.data.wallet,
                });
                AsyncStorage.setItem('authUser', JSON.stringify(response.data.data));
                AsyncStorage.setItem('authUserWallet', JSON.stringify(response.data.wallet));
            }
        })
        .catch((error) => {
            logError(error);
        });
};
/*
 | ====================================================================================
 | Auth Actions End
 | ====================================================================================
*/
