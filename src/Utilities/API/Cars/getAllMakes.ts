import { CarModelType } from "../../../Interfaces";

export const getAllMakes = async (): Promise<CarModelType[]> => {
  const data = await (
    await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=json`
    )
  ).json();
  return data.Results;
};
