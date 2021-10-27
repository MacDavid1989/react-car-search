// Types
import { CarModelType } from "../App";

// Styles
import { Wrapper } from "./Car.styles";

type Props = {
  car: CarModelType;
};

const Car: React.FC<Props> = ({ car }) => (
  <Wrapper>
    {/* image goes here */}
    <div>
      <h3>{car.Make_Name}</h3>
      <p>{car.Model_Name}</p>
      {car.VehicleTypeName && <p>{car.VehicleTypeName}</p>}
    </div>
  </Wrapper>
);

export default Car;
