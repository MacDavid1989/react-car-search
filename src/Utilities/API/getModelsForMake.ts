import { CarModelType } from "../../Interfaces/CarModelType";

export const getModelsForMake = async (
  make: string
): Promise<CarModelType[]> => {
  const data = await (
    await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${make}?format=json`
    )
  ).json();
  return data.Results;
};
