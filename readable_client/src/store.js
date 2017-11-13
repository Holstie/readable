import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { createLogger } from "redux-logger";

import reducer from "./reducers";

const middleware = applyMiddleware(promise(), thunk, createLogger());

export default createStore(reducer, middleware);
