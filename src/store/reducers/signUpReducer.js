import { LOADING_SPINNER, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from "../types/signUpTypes";

const initialState = {
    loadingIndicator: false,
};

export const signUpReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case LOADING_SPINNER:
            return {
                ...state,
                loadingIndicator: payload
            };
        case SIGN_UP_SUCCESS:
            return {};
        case SIGN_UP_FAILURE:
            return {};
        default:
            return state
    };
};