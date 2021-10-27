import { combineReducers } from "redux";
import { carsReducer } from "./carsReducer";
import { makeReducer } from "./makeReducer";
import { yearReducer } from "./yearReducer";
import { typeReducer } from "./typeReducer";

export default combineReducers({
  carsReducer,
  makeReducer,
  yearReducer,
  typeReducer,
});
