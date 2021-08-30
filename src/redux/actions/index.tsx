import { ActionType } from "../actionTypes";
import { Recipe } from "../../interfaces/Recipe.interface";

interface Pending {
  type: ActionType.START_RECIPES_REQUEST;
}

interface Error {
  type: ActionType.FAIL_REQUEST;
  error: string | null;
}

interface RecipesRequest {
  type: ActionType.RECIPES_REQUEST_SUCCESS;
  payload: Array<Recipe> | undefined;
}

export type Action = Pending | Error | RecipesRequest;
