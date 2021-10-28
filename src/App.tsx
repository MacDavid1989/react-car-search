import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import { Car, Search } from "./Components";
import { LinearProgress, Grid } from "@material-ui/core";

// Styles
import { Wrapper } from "./Styles/App.styles";

// Interfaces
import { CarModelType } from "./Interfaces";

// Store
import { State } from "./Store/reducers/rootReducer";
import { getCarData } from "./Utilities/Methods/getCarData";

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

    (async () => {
      isLoading(true);
      const response = await getCarData(make, year, type);
      addCars(response);
      isLoading(false);
    })();
  }, [make, year, type, dispatch]);

  return (
    <Wrapper>
      <h1>Car Search App</h1>
      <Search />
      {loading ? (
        <LinearProgress />
      ) : cars.length ? (
        <>
        <p>Showing results for {make} {year} {type}</p>
        <Grid container spacing={3}>
          {cars.map((car: CarModelType, index: number) => (
            <Grid item key={index} xs={12} sm={4}>
              <Car car={car} />
            </Grid>
          ))}
        </Grid>
        </>
      ) : (
        <p>No Vehicle Data</p>
      )}
    </Wrapper>
  );
};

export default App;
