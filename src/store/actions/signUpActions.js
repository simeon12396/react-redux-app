import { LOADING_SPINNER, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../types/signUpTypes';

export const loadingSpinner = (msg) => {
    return {
        type: LOADING_SPINNER,
        payload: msg
    };
};