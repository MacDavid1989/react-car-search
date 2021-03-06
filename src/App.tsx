import { lazy, useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";

// Styles
import { Wrapper } from "./Styles/App.styles";

// Interfaces
import { CarModelType } from "./Interfaces";

// Store
import { State } from "./Store/reducers/rootReducer";

// Api
import { getCarPhotos } from "./Utilities/API/";

//Methods
import { getCarData, carImageMap } from "./Utilities/Methods";

// Components
import { Grid } from "@material-ui/core";
import { Search, Loading, BackToTop } from "./Components";
const Car = lazy(() => import("./Components/Car/Car"));

const App = () => {
  const cars = useSelector((state: State) => state.cars);
  const make = useSelector((state: State) => state.make);
  const year = useSelector((state: State) => state.year);
  const type = useSelector((state: State) => state.type);
  const loading = useSelector((state: State) => state.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    const addCars = (cars: CarModelType[]) => {
      dispatch({ type: "ADD_CARS", payload: cars });
    };

    const isLoading = (loading: boolean) => {
      dispatch({ type: "TOGGLE_LOADING", payload: loading });
    };

    (async () => {
      isLoading(true);
      const response = await getCarData(make, year, type);
      const photos = await getCarPhotos(make, response.length);
      const alteredResponse = carImageMap(response, photos);
      addCars(alteredResponse);
      isLoading(false);
    })();
  }, [make, year, type, dispatch]);

  return (
    <Wrapper>
      <h1>
        DR<span>i</span>VE
      </h1>
      <Search />
      {loading ? (
        <Loading />
      ) : cars.length ? (
        <>
          <p>
            Showing results for {year} {make} {type}
          </p>
          <Grid container spacing={3}>
            {cars.map((car: CarModelType, index: number) => (
              <Grid item key={index} xs={12} sm={4}>
                <Suspense fallback={<Loading />}>
                  <Car car={car} />
                </Suspense>
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <p>No Vehicle Data</p>
      )}

      <BackToTop />
    </Wrapper>
  );
};

export default App;
