export interface YearState {
  year: string;
}

const initialState = {
  year: "",
};

type Action = {
  type: "ADD_YEAR";
  payload: string;
};

export const yearReducer = (
  state: YearState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "ADD_YEAR": {
      return { year: action.payload };
    }
    default:
      return state;
  }
};
