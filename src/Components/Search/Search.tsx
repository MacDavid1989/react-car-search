import { useDispatch } from "react-redux";

import { Wrapper } from "../../Styles/ComponentStyles/Search.styles";

import { FormEvent } from "react";

const Search: React.FC = () => {
  const dispatch = useDispatch();

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const inputMake = form.querySelector("#make") as HTMLInputElement;
    const inputYear = form.querySelector("#year") as HTMLInputElement;
    const inputType = form.querySelector("#type") as HTMLInputElement;
    inputMake.value && dispatch({ type: "ADD_MAKE", payload: inputMake.value });
    inputYear.value && dispatch({ type: "ADD_YEAR", payload: inputYear.value });
    inputType.value && dispatch({ type: "ADD_TYPE", payload: inputType.value });
  };

  return (
    <Wrapper>
      <form onSubmit={(event) => handleSearch(event)}>
        <input
          id="make"
          type="text"
          placeholder="Enter vehicle make..."
          required
        />
        <input id="year" type="text" placeholder="Enter vehicle year..." />
        <input id="type" type="text" placeholder="Enter vehicle type..." />
        <button>Search</button>
      </form>
    </Wrapper>
  );
};

export default Search;
