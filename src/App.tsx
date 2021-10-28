import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import { Car, Search } from "./Components";
import { LinearProgress, Grid } from "@material-ui/core";

// Styles
import { Wrapper } from "./Styles/App.styles";

// Interfaces
import { CarModelType } from "./Interfaces";

// Api
import {
  getModelsForMake,
  getModelsForMakeYear,
  getModelsForMakeType,
  getModelsForMakeYearType,
} from "./Utilities/API";

// Store
import { State } from "./Store/reducers/rootReducer";

const App = () => {
  // State
  const cars = useSelector((state: State) => state.cars);
  const make = useSelector((state: State) => state.make);
  const year = useSelector((state: State) => state.year);
  const type = useSelector((state: State) => state.type);
  const loading = useSelector((state: State) => state.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    const addCars = (cars: CarModelType[]) => {
      dispatch({ type: "ADD_CARS", payload: cars });
    };

    const isLoading = (loading: boolean) => {
      dispatch({ type: "TOGGLE_LOADING", payload: loading });
    };

    if (make && year && type) {
      isLoading(true);
      (async () => {
        const response = await getModelsForMakeYearType(make, year, type);
        addCars(response);
        isLoading(false);
      })();
    } else if (make && year) {
      isLoading(true);
      (async () => {
        const response = await getModelsForMakeYear(make, year);
        addCars(response);
        isLoading(false);
      })();
    } else if (make && type) {
      isLoading(true);
      (async () => {
        const response = await getModelsForMakeType(make, type);
        addCars(response);
        isLoading(false);
      })();
    } else if (make) {
      isLoading(true);
      (async () => {
        const response = await getModelsForMake(make);
        addCars(response);
        isLoading(false);
      })();
    }
  }, [make, year, type, dispatch]);

  return (
    <Wrapper>
      <h1>Car Search App</h1>
      <Grid container>
        <Search />
      </Grid>
      {loading ? (
        <LinearProgress />
      ) : (
        <Grid container spacing={3}>
          {cars.length ? (
            cars.map((car: CarModelType, index: number) => (
              <Grid item key={index} xs={12} sm={4}>
                <Car car={car} />{" "}
              </Grid>
            ))
          ) : (
            <></>
          )}
        </Grid>
      )}
    </Wrapper>
  );
};

export default App;
