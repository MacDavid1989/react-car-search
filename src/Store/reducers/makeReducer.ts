import { SearchActions } from "../actions";

const initialState = "";

export const makeReducer = (
  state: string = initialState,
  action: SearchActions
) => {
  switch (action.type) {
    case "ADD_MAKE": {
      return action.payload;
    }
    default:
      return state;
  }
};
