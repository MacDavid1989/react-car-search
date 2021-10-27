import { CarModelType } from "../../Interfaces/CarModelType";

export const getModelsForMakeYearType = async (
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
