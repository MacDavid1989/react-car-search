import { combineReducers } from "redux";
import { carsReducer } from "./carsReducer";
import { makeReducer } from "./makeReducer";
import { yearReducer } from "./yearReducer";
import { typeReducer } from "./typeReducer";

export const rootReducer = combineReducers({
  cars: carsReducer,
  make: makeReducer,
  year: yearReducer,
  type: typeReducer,
});

export type State = ReturnType<typeof rootReducer>;
