import { LOGIN_SUCCESS, LOGOUT } from "../types/loginTypes";

const initialState = {
    loginUserData: [],
    isLogged: false
};

export const loginReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                loginUserData: payload,
                isLogged: true
            };
        case LOGOUT: 
             return {
                 ...state,
                 loginUserData: [],
                 isLogged: false
             };
        default: 
            return initialState;
    };
};