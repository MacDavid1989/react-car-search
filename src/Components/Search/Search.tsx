import { useDispatch } from "react-redux";
import { FormEvent } from "react";

// Styles
import { Wrapper } from "../../Styles/ComponentStyles/Search.styles";

// Components
import { TextField, IconButton } from "@material-ui/core";
import { DirectionsCar } from "@material-ui/icons";

const Search: React.FC = () => {
  const dispatch = useDispatch();

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // HTML Elements
    const form = event.target as HTMLFormElement;
    const inputMake = form.querySelector("#make") as HTMLInputElement;
    const inputYear = form.querySelector("#year") as HTMLInputElement;
    const inputType = form.querySelector("#type") as HTMLInputElement;

    dispatch({ type: "ADD_MAKE", payload: inputMake.value });
    dispatch({ type: "ADD_YEAR", payload: inputYear.value });
    dispatch({ type: "ADD_TYPE", payload: inputType.value });
  };

  return (
    <Wrapper>
      <form onSubmit={(event) => handleSearch(event)}>
        <div className="form-group">
          <TextField
            size="small"
            id="make"
            label="Vehicle Make"
            variant="outlined"
            color="primary"
            required
          />
          <TextField
            size="small"
            id="year"
            label="Vehicle Year"
            variant="outlined"
          />
          <TextField
            size="small"
            id="type"
            label="Vehicle Type"
            variant="outlined"
          />
        </div>
        <IconButton color="primary" type="submit" aria-label="search-for-cars">
          <DirectionsCar />
        </IconButton>
      </form>
    </Wrapper>
  );
};

export default Search;
