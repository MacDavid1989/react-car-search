import { FormEvent, useEffect, useState } from "react";

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

const App = () => {
  const cars = useSelector<CarsState, CarsState["cars"]>((state) => state.cars);

  const dispatch = useDispatch();

  const addCars = (cars: CarModelType[]) => {
    dispatch({ type: "ADD_CARS", payload: cars });
  };

  const [make, setMake] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  // const [data, setData] = useState<CarModelType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const search = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const inputMake = form.querySelector("#make") as HTMLInputElement;
    const inputYear = form.querySelector("#year") as HTMLInputElement;
    const inputType = form.querySelector("#type") as HTMLInputElement;
    setMake(inputMake.value);
    setYear(inputYear.value);
    setType(inputType.value);
  };

  useEffect(() => {
    if (make && year && type) {
      setIsLoading(true);
      (async () => {
        const response = await getModelsForMakeYearType(make, year, type);
        addCars(response);
        setIsLoading(false);
      })();
    } else if (make && year) {
      setIsLoading(true);
      (async () => {
        const response = await getModelsForMakeYear(make, year);
        addCars(response);
        setIsLoading(false);
      })();
    } else if (make && type) {
      setIsLoading(true);
      (async () => {
        const response = await getModelsForMakeType(make, type);
        addCars(response);
        setIsLoading(false);
      })();
    } else if (make) {
      setIsLoading(true);
      (async () => {
        const response = await getModelsForMake(make);
        addCars(response);
        setIsLoading(false);
      })();
    }
  }, [make, year, type]);

  return (
    <Wrapper>
      <h1>Car Search App</h1>
      <Grid container>
        <Search handleSearch={search} />
      </Grid>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <Grid container spacing={3}>
          {cars?.map((car: CarModelType, index: number) => (
            <Grid item key={index} xs={12} sm={4}>
              <Car car={car} />{" "}
            </Grid>
          ))}
        </Grid>
      )}
    </Wrapper>
  );
};

export default App;
