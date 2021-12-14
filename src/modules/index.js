import { combineReducers } from "redux";
import movies, { moviesSaga } from "./movies";
import { all } from "@redux-saga/core/effects";

const rootReducer = combineReducers({ movies });

export function* rootSaga() {
  yield all([moviesSaga()]);
}

export default rootReducer;
