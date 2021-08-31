/* This is the main Reducer File which stores our state
    
    This File combines all the reduces here in one place
*/

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

/* 
    Redux Persist use this configuration to set state in a storage e.g,
    1. Key (at which point State data store from)
    2. storage (what type of storage we want to use, locatStorage, SessionStoreage etc)
    3. whitlist (tells what state Items to store, here we only use 'cart' object in our localStorage)
*/

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});


// this persistReducer take configuration & root reducer and return a modified version of our Main/Root Reducer
export default persistReducer(persistConfig, rootReducer);

