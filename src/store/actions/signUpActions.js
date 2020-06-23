import { SIGN_UP_SUCCESS, SIGN_UP_RESET } from '../types/signUpTypes';
import { makeHttpRequest } from '../../services/httpServices';

export const signUpUserSuccess = (userData) => {
    return {
        type: SIGN_UP_SUCCESS,
        payload: userData
    };
};

export const signUpReset = () => {
    return {
        type: SIGN_UP_RESET
    };
};

export const signUpUser = (userData) => {
    return async dispatch => {
        makeHttpRequest('post', 'registered-users', userData);
        dispatch(signUpUserSuccess(userData));
    };
};