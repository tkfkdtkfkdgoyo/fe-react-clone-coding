import React from "react";
import styled from "styled-components";

const ButtonEach = styled.div`
  height: 30px;
  width:150px;
  margin-top: 15px;
  border-radius: 3px;
  background-color: ${(props) => (props.ButtonColor)};
  display: flex;
  align-items: center;
  justify-content: center;
;
`

const ButtonText = styled.p`
  font-size: 15px;
  color: white;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";

`;

const Button = (props) => {
  return (
    <>
      <ButtonEach ButtonColor={props.ButtonColor}>
        <ButtonText>{props.text}</ButtonText>
      </ButtonEach>
    </>
  );
};

export default Button;