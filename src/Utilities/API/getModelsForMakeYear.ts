import { CarModelType } from "../../Types/CarModelType";

export const getModelsForMakeYear = async (
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