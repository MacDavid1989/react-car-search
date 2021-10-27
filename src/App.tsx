import { FormEvent, useEffect, useState } from "react";

// Components
import Car from "./Car/Car";
// import Search from "./Search/Search";
import { LinearProgress, Grid } from "@material-ui/core";

// Styles
import { Wrapper } from "./App.styles";

// Types
export type CarModelType = {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
  VehicleTypeId?: number;
  VehicleTypeName?: string;
};

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
    setData([]);
    const form = event.target as HTMLFormElement;
    const inputMake = form.querySelector("#make") as HTMLInputElement;
    const inputYear = form.querySelector("#year") as HTMLInputElement;
    const inputType = form.querySelector("#type") as HTMLInputElement;
    setIsLoading(true);
    setMake(inputMake.value);
    setYear(inputYear.value);
    setType(inputType.value);
  };

  useEffect(() => {
    if (make && year && type) {
      (async () => {
        const response = await getModelsForMakeYearType(make, year, type);
        setData(response);
        setIsLoading(false);
      })();
    } else if (make && year) {
      (async () => {
        const response = await getModelsForMakeYear(make, year);
        setData(response);
        setIsLoading(false);
      })();
    } else if (make && type) {
      (async () => {
        const response = await getModelsForMakeType(make, type);
        setData(response);
        setIsLoading(false);
      })();
    } else if (make) {
      (async () => {
        const response = await getModelsForMake(make);
        setData(response);
        setIsLoading(false);
      })();
    }
  }, [make, year, type]);

  // if (isLoading) return <LinearProgress />;
  // if (error) return <div> something went wrong</div>;

  return (
    <Wrapper>
      <h1>Car Search App</h1>
      <Grid container>
        <form onSubmit={(event) => search(event)}>
          <input
            id="make"
            type="text"
            placeholder="Enter vehicle make..."
            required
          />
          <input id="year" type="text" placeholder="Enter vehicle year..." />
          <input id="type" type="text" placeholder="Enter vehicle type..." />
          <button>Search</button>
        </form>
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
