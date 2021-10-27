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
