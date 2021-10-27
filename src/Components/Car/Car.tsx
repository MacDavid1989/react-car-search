// Types
import { CarPropsType } from "../../Types";

// Styles
import { Wrapper } from "../../Styles/ComponentStyles/Car.styles";

const Car: React.FC<CarPropsType> = ({ car }) => (
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
