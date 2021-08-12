/* This is the main Reducer File which stores our state
    
    This File combines all the reduces here in one place
*/

import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

export default combineReducers({
    user: userReducer
});

