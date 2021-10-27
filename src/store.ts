import { createStore } from "redux";
import { carsReducer } from "./reducer";

export const store = createStore(carsReducer);
