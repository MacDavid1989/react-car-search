import { CarModelType } from "../../Interfaces";

const initialState: CarModelType[] = [];

type Action = {
  type: "ADD_CARS";
  payload: CarModelType[];
};

export const carsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_CARS": {
      return action.payload;
    }
    default:
      return state;
  }
};
