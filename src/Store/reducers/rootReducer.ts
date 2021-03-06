import { combineReducers } from "redux";

// Reducers
import { carsReducer } from "./carsReducer";
import { makeReducer } from "./makeReducer";
import { yearReducer } from "./yearReducer";
import { typeReducer } from "./typeReducer";
import { loadingReducer } from "./loadingReducer";
import { backToTopReducer } from "./backToTopReducer";

export const rootReducer = combineReducers({
  cars: carsReducer,
  make: makeReducer,
  year: yearReducer,
  type: typeReducer,
  loading: loadingReducer,
  backToTop: backToTopReducer,
});

export type State = ReturnType<typeof rootReducer>;
