import { CarsActions } from "../actions";
import { CarModelType } from "../../Interfaces";

const initialState: CarModelType[] = [];

export const carsReducer = (state = initialState, action: CarsActions) => {
  switch (action.type) {
    case "ADD_CARS": {
      return action.payload;
    }
    default:
      return state;
  }
};
