
import { createStore, applyMiddleware } from "redux";
import { persistStore } from 'redux-persist';
import logger from "redux-logger";

import rootReducer from "./root-reducer";

// to log / see all actions || find what is happening when action dispatch we use
const middleware = [];

if(process.env.NODE_ENV === 'development'){
    middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

/**
 * Redux Persist Library is used to store our Redux State into a LocalStorage so that we cannot loss our state data on refreshing page, closing window. 
 */

const persistor = persistStore(store);

export { store, persistor };