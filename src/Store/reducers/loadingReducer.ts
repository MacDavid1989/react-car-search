import { LoadingActions } from "../actions";

const initialState = false;

export const loadingReducer = (
  state: boolean = initialState,
  action: LoadingActions
) => {
  switch (action.type) {
    case "TOGGLE_LOADING": {
      return action.payload;
    }
    default:
      return state;
  }
};
