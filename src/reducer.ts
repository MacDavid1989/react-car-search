import { CarModelType } from "./Types";

export interface CarsState {
  cars: CarModelType[];
}

const initialState = {
  cars: [],
};

type Action = {
  type: "ADD_CARS";
  payload: CarModelType[];
};

export const carsReducer = (
  state: CarsState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "ADD_CARS": {
      return { cars: action.payload };
    }
    default:
      return state;
  }
};
