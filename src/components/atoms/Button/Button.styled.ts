import styled from "styled-components";


const StyledButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #fff;
  cursor: pointer;
  background-color: #068323;
  border: 1px solid #068323;
  border-radius:4px;
  text-align: center;
  font-family: BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
  width: 100%;

  &:hover {
    background-color: #0d6521;
    border-color: #0d6521;
    text-decoration: none;
  }
`;

export default StyledButton;