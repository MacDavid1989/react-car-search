import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Helvetica, Arial, sans-serif;
  padding: 20px;
  color: #fff;

  span {
    color: #95c93d;
  }

  .back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    height: 75px;
    width: 75px;
    font-size: 54px;
    background: #95c93d;
    color: #1c1f26;
    cursor: pointer;
    border-radius: 100%;
    border: 1px solid #fff;
  }

  .back-to-top:hover {
    background: #65b82d;
  }
`;
