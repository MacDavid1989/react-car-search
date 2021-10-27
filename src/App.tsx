import { useState } from "react";
import { useQuery } from "react-query";

// Components
import { Drawer, LinearProgress, Grid } from "@material-ui/core";

// Styles
import { Wrapper } from "./App.styles";

// Types
export type CarModelType = {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
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

  const { data, isLoading, error } = useQuery<CarModelType[]>(
    ["cars", make],
    () => getModelsForMake(make)
  );

  console.log(data);

  return <div className="App">Start</div>;
};

export default App;
