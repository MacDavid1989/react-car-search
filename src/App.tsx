import { useState } from "react";
import { useQuery } from "react-query";

// Components
import Car from "./Car/Car";
import { Drawer, LinearProgress, Grid } from "@material-ui/core";

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
  let make = "honda";
  let type = "car";
  let year = "2015";

  const { data, isLoading, error } = useQuery<CarModelType[]>("cars", () =>
    getModelsForMakeYearType(make, year, type)
  );

  console.log(data);

  if (isLoading) return <LinearProgress />;
  if (error) return <div> something went wrong</div>;

  return (
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map((car: CarModelType, index: number) => (
          <Grid item key={index} xs={12} sm={4}>
            <Car car={car} />{" "}
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
