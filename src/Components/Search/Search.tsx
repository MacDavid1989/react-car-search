import { Wrapper } from "../../Styles/ComponentStyles/Search.styles";

type Props = {
  handleSearch: Function;
};

const Search: React.FC<Props> = ({ handleSearch }) => (
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
