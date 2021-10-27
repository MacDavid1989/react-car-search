export interface TypeState {
  type: string;
}

const initialState = {
  type: "",
};

type Action = {
  type: "ADD_TYPE";
  payload: string;
};

export const typeReducer = (
  state: TypeState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "ADD_TYPE": {
      return { type: action.payload };
    }
    default:
      return state;
  }
};
