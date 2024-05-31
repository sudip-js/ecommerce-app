import { combineReducers } from "redux";
import authSlice from "./slices/authSlice";
import commonSlice from "./slices/commonSlice";

const rootReducer = combineReducers({
    auth: authSlice,
    common: commonSlice,
});

export default rootReducer;
