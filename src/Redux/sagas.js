import { call, put, takeEvery } from "redux-saga/effects";
import { GET_USERS_SUCCESS, GET_USERS_FETCH } from "./Actions/index";

function usersFetch() {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
    response.json()
  );
}

function* workGetUsersFetch() {
  const users = yield call(usersFetch);
  yield put({ type: GET_USERS_SUCCESS, payload: users });
}

function* mySaga() {
  yield takeEvery(GET_USERS_FETCH, workGetUsersFetch);
}

export default mySaga;
