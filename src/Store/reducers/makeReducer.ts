const initialState = "";

type Action = {
  type: "ADD_MAKE";
  payload?: string;
};

export const makeReducer = (state: string = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_MAKE": {
      return action.payload;
    }
    default:
      return state;
  }
};
