const initialState = "";

type Action = {
  type: "ADD_YEAR";
  payload?: string;
};

export const yearReducer = (state: string = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_YEAR": {
      return action.payload;
    }
    default:
      return state;
  }
};
