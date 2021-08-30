import { combineReducers } from "redux";
import recipeReducer from "./reducers/recipeReducer";

const reducers = combineReducers({
  recipe: recipeReducer
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
