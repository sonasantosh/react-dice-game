import styled from "styled-components";

export const Button = styled.button`
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 38px;
  border-radius: 5px;
  border: 0;
  font-size: 16px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: 300ms ease all;
  margin-left: auto;
  
  &:hover {
    background-color: #fff;
    border: 2px solid #000;
    color: #000;
  }
  `;

export const OutlineButton = styled(Button)`
background-color: #fff;
color: #000;
border: 2px solid #000;
&:hover {
  background-color: #000;
  color: #fff;
}`;