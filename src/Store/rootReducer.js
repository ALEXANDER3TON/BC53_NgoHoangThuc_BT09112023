import { combineReducers } from "redux";
import { btFormReducer } from "./BTForm/Slice";


export const rootReducer = combineReducers({
    btForm: btFormReducer,
})