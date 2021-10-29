import styled from "styled-components";

export const Wrapper = styled.div`
  .back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    height: 75px;
    width: 75px;
    font-size: 54px;
    background: #95c93d;
    color: #fff;
    cursor: pointer;
    border-radius: 100%;
    border: 1px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .back-to-top:hover {
    background: #65b82d;
  }
`;
