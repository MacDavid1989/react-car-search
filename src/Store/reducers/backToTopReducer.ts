import { BackToTopActions } from "../actions";

const initialState = false;

export const backToTopReducer = (
  state: boolean = initialState,
  action: BackToTopActions
) => {
  switch (action.type) {
    case "TOGGLE_BACKTOTOP": {
      return action.payload;
    }
    default:
      return state;
  }
};
