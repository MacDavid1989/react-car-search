import { FormEvent, useEffect, useState } from "react";

// Components
import Car from "./Components/Car/Car";
import Search from "./Components/Search/Search";
// import Search from "./Search/Search";
import { LinearProgress, Grid } from "@material-ui/core";

// Styles
import { Wrapper } from "./Styles/App.styles";

// Types
import { CarModelType } from "./Types/CarModelType";

const getModelsForMake = async (make: string): Promise<CarModelType[]> => {
  const data = await (
    await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${make}?format=json`
    )
  ).json();
  return data.Results;
};

const getModelsForMakeYear = async (
  make: string,
  year: string
): Promise<CarModelType[]> => {
  const data = await (
    await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${make}/modelyear/${year}?format=json`
    )
  ).json();
  return data.Results;
};

const getModelsForMakeType = async (
  make: string,
  type: string
): Promise<CarModelType[]> => {
  const data = await (
    await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${make}/vehicletype/${type}?format=json`
    )
  ).json();
  return data.Results;
};

const getModelsForMakeYearType = async (
  make: string,
  year: string,
  type: string
): Promise<CarModelType[]> => {
  const data = await (
    await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${make}/modelyear/${year}/vehicletype/${type}?format=json`
    )
  ).json();
  return data.Results;
};

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
