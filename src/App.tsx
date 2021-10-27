import { FormEvent, useEffect, useState } from "react";

// Components
import { Car, Search } from "./Components";
import { LinearProgress, Grid } from "@material-ui/core";

// Styles
import { Wrapper } from "./Styles/App.styles";

// Types
import { CarModelType } from "./Types";

// Api
import {
  getModelsForMake,
  getModelsForMakeYear,
  getModelsForMakeType,
  getModelsForMakeYearType,
} from "./Utilities/API";

const App = () => {
  const [make, setMake] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [data, setData] = useState<CarModelType[]>([]);
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
        setData(response);
        setIsLoading(false);
      })();
    } else if (make && year) {
      setIsLoading(true);
      (async () => {
        const response = await getModelsForMakeYear(make, year);
        setData(response);
        setIsLoading(false);
      })();
    } else if (make && type) {
      setIsLoading(true);
      (async () => {
        const response = await getModelsForMakeType(make, type);
        setData(response);
        setIsLoading(false);
      })();
    } else if (make) {
      setIsLoading(true);
      (async () => {
        const response = await getModelsForMake(make);
        setData(response);
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
          {data?.map((car: CarModelType, index: number) => (
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
