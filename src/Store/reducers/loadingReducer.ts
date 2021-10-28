const initialState = false;

type Action = {
  type: "TOGGLE_LOADING";
  payload?: boolean;
};

export const loadingReducer = (
  state: boolean = initialState,
  action: Action
) => {
  switch (action.type) {
    case "TOGGLE_LOADING": {
      return action.payload;
    }
    default:
      return state;
  }
};
