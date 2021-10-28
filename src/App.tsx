// Components
import { Car, Search } from "./Components";
import { Grid } from "@material-ui/core";

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
import { State } from "./Store/reducers/rootReducer";
import { useEffect } from "react";

const App = () => {
  const cars = useSelector((state: State) => state.cars);
  const make = useSelector((state: State) => state.make);
  const year = useSelector((state: State) => state.year);
  const type = useSelector((state: State) => state.type);
  // const [isLoading, setIsLoading] = useState(false);

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
  }, [make, year, type, dispatch]);

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
      {/* )} */}
    </Wrapper>
  );
};

export default App;
