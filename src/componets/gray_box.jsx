import React from "react";
import styled from "styled-components";

const GrayEach = styled.div`
  width: 330px;
  height: 250px;
  margin-bottom: 18px;
  padding: 0;
  background-color: rgb(85, 89, 92);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GrayText = styled.p`
  font-size: 18px;
  text-align: center;
  color: white;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
`;

export const GrayBox = (props) => {
  return (
    <>
    <GrayEach>
        <GrayText>{props.text}</GrayText>
    </GrayEach>
    </>
  );
};

export default GrayBox;
