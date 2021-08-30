import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import reducers from "./reducers";

import reduxSaga from "redux-saga";
import rootSaga from "./sagas";

const saga = reduxSaga();
const middleware = [logger, saga];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

saga.run(rootSaga);

export default store;
