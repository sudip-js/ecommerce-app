import { combineReducers } from "redux";
import authSlice from "./slices/authSlice";
import commonSlice from "./slices/commonSlice";
import cartSlice from "./slices/cartSlice";

const rootReducer = combineReducers({
    auth: authSlice,
    common: commonSlice,
    cart: cartSlice
});

export default rootReducer;
