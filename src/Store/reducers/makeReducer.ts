export interface MakeState {
  make: string;
}

const initialState = {
  make: "",
};

type Action = {
  type: "ADD_MAKE";
  payload: string;
};

export const makeReducer = (
  state: MakeState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "ADD_MAKE": {
      return { make: action.payload };
    }
    default:
      return state;
  }
};
