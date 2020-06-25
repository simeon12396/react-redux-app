import { combineReducers } from "redux";
import { signUpReducer } from "./signUpReducer";
import { loginReducer } from "./loginReducer";

export const rootReducer = combineReducers({
    signUp: signUpReducer,
    login: loginReducer
});