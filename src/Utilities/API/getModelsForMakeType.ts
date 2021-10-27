import { CarModelType } from "../../Interfaces/CarModelType";

export const getModelsForMakeType = async (
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
