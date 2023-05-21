import React from "react";
import styled from "styled-components";
import MyBox from "./box";

const MiddleEach = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: #f8f9fa;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
`;

const Middle = (props) => {
  return (
    <MiddleEach>
      <br />
      <GridContainer>
        <MyBox />
        <MyBox />
        <MyBox />
        <MyBox />
        <MyBox />
        <MyBox />
        <MyBox />
        <MyBox />
        <MyBox />
      </GridContainer>
      <br />
    </MiddleEach>
  );
};

export default Middle;
