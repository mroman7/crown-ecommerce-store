/* This is the main Reducer File which stores our state
    
    This File combines all the reduces here in one place
*/

import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});

