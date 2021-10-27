import { useEffect, useState } from "react";

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
import { useDispatch, useSelector } from "react-redux";
import { CarsState } from "./Store/reducers/carsReducer";
import { MakeState } from "./Store/reducers/makeReducer";
import { YearState } from "./Store/reducers/yearReducer";
import { TypeState } from "./Store/reducers/typeReducer";

const App = () => {
  const cars = useSelector<CarsState, CarsState["cars"]>((state) => state.cars);
  const make = useSelector<MakeState, MakeState["make"]>((state) => state.make);
  const year = useSelector<YearState, YearState["year"]>((state) => state.year);
  const type = useSelector<TypeState, TypeState["type"]>((state) => state.type);

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const addCars = (cars: CarModelType[]) => {
      dispatch({ type: "ADD_CARS", payload: cars });
    };

    if (make && year && type) {
      (async () => {
        const response = await getModelsForMakeYearType(make, year, type);
        addCars(response);
      })();
    } else if (make && year) {
      (async () => {
        const response = await getModelsForMakeYear(make, year);
        addCars(response);
      })();
    } else if (make && type) {
      (async () => {
        const response = await getModelsForMakeType(make, type);
        addCars(response);
      })();
    } else if (make) {
      (async () => {
        const response = await getModelsForMake(make);
        addCars(response);
      })();
    }
  });

  return (
    <Wrapper>
      <h1>Car Search App</h1>
      <Grid container>
        <Search />
      </Grid>
      {/* {isLoading ? (
        <LinearProgress />
      ) : ( */}
      <Grid container spacing={3}>
        {cars?.map((car: CarModelType, index: number) => (
          <Grid item key={index} xs={12} sm={4}>
            <Car car={car} />{" "}
          </Grid>
        ))}
      </Grid>
      {/* )} */}
    </Wrapper>
  );
};

export default App;
