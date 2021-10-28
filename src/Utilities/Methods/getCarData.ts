// Interfaces
import { CarModelType } from "../../Interfaces";

// Api
import {
  getModelsForMake,
  getModelsForMakeYear,
  getModelsForMakeType,
  getModelsForMakeYearType,
  getAllMakes,
} from "../API";

export const getCarData = async (
  make?: string,
  year?: string,
  type?: string
): Promise<CarModelType[]> => {
  let cars: CarModelType[] = [];
  if (make && year && type) {
    const response = await getModelsForMakeYearType(make, year, type);
    cars = response;
    return cars;
  } else if (make && year) {
    const response = await getModelsForMakeYear(make, year);
    cars = response;
    return cars;
  } else if (make && type) {
    const response = await getModelsForMakeType(make, type);
    cars = response;
    return cars;
  } else if (make) {
    const response = await getModelsForMake(make);
    cars = response;
    return cars;
  } else {
    const response = await getAllMakes();
    cars = response;
    return cars;
  }
};
