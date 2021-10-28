// Types
import { CarPropsType } from "../../Interfaces";

// Styles
import { Wrapper } from "../../Styles/ComponentStyles/Car.styles";

const Car: React.FC<CarPropsType> = ({ car }) => (
  <Wrapper>
    <img src={car.image} alt={car.Make_Name} />
    <div>
      <h3>{car.Make_Name}</h3>
      <p>{car.Model_Name}</p>
      {car.VehicleTypeName && <p>{car.VehicleTypeName}</p>}
    </div>
  </Wrapper>
);

export default Car;
