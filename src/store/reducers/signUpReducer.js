import { SIGN_UP_SUCCESS, SIGN_UP_RESET } from "../types/signUpTypes";

const initialState = {
    userData: [],
    isRegistered: false,
};

export const signUpReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                userData: payload,
                isRegistered: true
            };
        case SIGN_UP_RESET:
            return {
                ...state,
                userData: [],
                isRegistered: false
            };
        default:
            return state
    };
};