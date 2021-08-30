import { Action } from "../actions";
import { ActionType } from "../actionTypes";

const initialState = {
  pending: false,
  error: null,
  recipes: undefined
};

function rootReducers(state = initialState, action: Action) {
  switch (action.type) {
    case ActionType.START_RECIPES_REQUEST:
      return {
        ...state,
        pending: true
      };
    case ActionType.FAIL_REQUEST:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    case ActionType.RECIPES_REQUEST_SUCCESS:
      return {
        ...state,
        pending: false,
        recipes: action.payload
      };
    default:
      return state;
  }
}

export default rootReducers;
