import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-bottom: 24px;

  form {
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  }

  .form-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  label,
  input {
    color: #fff;
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: #fff;
  }

  .MuiFormControl-root {
    margin: 5px;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #0e1217 inset !important;
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: #fff !important;
    border-radius: 0.5px !important;
  }

  button,
  button:hover {
    width: 223px;
    border: none;
    outline: none;
    margin: 5px;
  }

  button {
    background: #1c1f26;
  }
`;
