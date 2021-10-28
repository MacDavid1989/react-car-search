const initialState = "";

type Action = {
  type: "ADD_TYPE";
  payload?: string;
};

export const typeReducer = (state: string = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_TYPE": {
      return action.payload;
    }
    default:
      return state;
  }
};
