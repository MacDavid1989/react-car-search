import { Wrapper } from "../../Styles/ComponentStyles/Search.styles";

import { SearchPropsType } from "../../Interfaces";

const Search: React.FC<SearchPropsType> = ({ handleSearch }) => (
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

export default Search;
