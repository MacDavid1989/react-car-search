import { CarModelType, CarPhotoType } from "../../Interfaces";

export const carImageMap = (cars: CarModelType[], images: CarPhotoType[]) => {
  let iterator: number = 0;
  cars.map((car, index) => {
    if ((cars.length = images.length)) {
      car.image = images[index].urls.regular;
    } else {
      car.image = images[iterator].urls.regular;
      if (iterator < images.length) {
        iterator++;
      } else {
        iterator = 0;
      }
    }
    return car;
  });
  return cars;
};
