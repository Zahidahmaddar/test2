import { applyMiddleware, createStore } from "redux";
import rootReducers from "../Reducers";
import createSagaMiddleware from "redux-saga";
import mySaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

export default store;
