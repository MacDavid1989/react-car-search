import { CarModelType } from "../../Interfaces";

interface AddAction {
  type: "ADD_CARS";
  payload: CarModelType[];
}

export type CarsActions = AddAction;
