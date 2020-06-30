import { LOGIN_SUCCESS, LOGOUT } from "../types/loginTypes"
import { makeHttpRequest } from "../../services/httpServices";

export const loginSuccess = (loginUserData) => {
    return {
        type: LOGIN_SUCCESS,
        payload: loginUserData
    };
};

export const logOut = () => {
    return {
        type: LOGOUT
    };
};

export const loginUser = (loginUserData) => {
    return async dispatch => {
        makeHttpRequest('post', 'logged-users', loginUserData);
        dispatch(loginSuccess(loginUserData));
    };
};
