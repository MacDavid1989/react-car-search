// import { FormEvent, useState } from "react";
// import { Wrapper } from "./Search.styles";

// const Search: React.FC = () => {
//   const [carSearch, setCarSearch] = useState("");

//   const search = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const form = event.target as HTMLFormElement;
//     const input = form.querySelector("#search") as HTMLInputElement;
//     setCarSearch(input.value);
//   };

//   return (
//     <Wrapper>
//       <h1>Car Search App</h1>
//       <form onSubmit={(event) => search(event)}>
//         <input id="search" type="text" />
//         {carSearch && <p>{carSearch}</p>}
//       </form>
//     </Wrapper>
//   );
// };

// export default Search;
