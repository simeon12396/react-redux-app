import { LOGIN_SUCCESS, LOGOUT } from '../types/loginTypes';

const initialState = {
    loginUserData: []
};

export const loginReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case LOGIN_SUCCESS: 
            return {
                ...state,
                loginUserData: payload
            };
        case LOGOUT:
            return {
                ...state,
                loginUserData: []
            };
        default: 
            return state;
    };
};