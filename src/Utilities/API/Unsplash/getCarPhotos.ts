interface Photos {
  urls: {
    regular: string;
  };
}

export const getCarPhotos = async (
  make?: string,
  amount?: number
): Promise<Photos[]> => {
  const data = await (
    await fetch(
      `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_API_KEY}&query=${make}&per_page=${amount}`
    )
  ).json();
  return data.results;
};
