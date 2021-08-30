import { all } from "redux-saga/effects";
import recipes from "./recipes";

export default function* rootSaga() {
  yield all([recipes()]);
}
