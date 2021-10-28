import { SearchActions } from "../actions/searchActions";

const initialState = "";

export const yearReducer = (state: string = initialState, action: SearchActions) => {
  switch (action.type) {
    case "ADD_YEAR": {
      return action.payload;
    }
    default:
      return state;
  }
};
