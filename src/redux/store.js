import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

// to log / see all actions || find what is happening when action dispatch we use
const middleware = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleware));
export default store;