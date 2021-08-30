import { call, CallEffect } from "redux-saga/effects";
import * as Effect from "redux-saga/effects";
import { Recipe } from "../../interfaces/Recipe.interface";
import { ActionType } from "../actionTypes";
import { apiCall } from "../api";

const put: any = Effect.put;
function* getRecipes(): Generator<CallEffect<Recipe[]>> {
  try {
    const results = yield call(
      apiCall,
      "get",
      "http://localhost:3001/recipe/all"
    );

    yield put({ type: ActionType.RECIPES_REQUEST_SUCCESS, payload: results });
  } catch (error) {
    yield put({ type: ActionType.FAIL_REQUEST, error });
  }
}

const takeLatest: any = Effect.takeLatest;
// Watchers
export default function* recipes() {
  yield takeLatest(ActionType.START_RECIPES_REQUEST, getRecipes);
}
