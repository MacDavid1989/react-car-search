import { SearchActions } from "../actions/searchActions";

const initialState = "";

export const typeReducer = (state: string = initialState, action: SearchActions) => {
  switch (action.type) {
    case "ADD_TYPE": {
      return action.payload;
    }
    default:
      return state;
  }
};
