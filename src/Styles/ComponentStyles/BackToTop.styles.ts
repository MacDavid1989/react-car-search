import styled from "styled-components";

export const Wrapper = styled.div`
  .back-to-top {
    position: fixed;
    bottom: 20px;
    right: 40px;
    height: 60px;
    width: 60px;
    font-size: 36px;
    cursor: pointer;
    border-radius: 100%;
    border: 1px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.3);
  }

  .back-to-top:hover {
    background: #95c93d;
  }
`;
