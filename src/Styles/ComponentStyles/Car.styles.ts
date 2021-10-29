import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;
  background: #1c1f26;
  box-shadow: 3px 3px 5px rgba(173,216,230,0.3);

  :hover {
    opacity: 0.9;
    cursor: pointer;
  }

  img {
    height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div {
    padding: 1rem;
    height: 160px;
  }
`;
