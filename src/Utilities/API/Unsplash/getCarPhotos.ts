import { CarPhotoType } from "../../../Interfaces";

export const getCarPhotos = async (
  make?: string,
  amount?: number
): Promise<CarPhotoType[]> => {
  const data = await (
    await fetch(
      `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_API_KEY}&query=${make}&per_page=${amount}`
    )
  ).json();
  return data.results;
};
