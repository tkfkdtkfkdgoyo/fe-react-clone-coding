import React from "react";
import styled from "styled-components";
import Button from "./button";

const BodyEach = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: #ffff;
  text-align: center;
  margin-top: 7%;
`;

const TitleText = styled.p`
  font-size: 2.5rem;
  font-weight: 30;
  color: black;
  margin: 0;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
`;

const ContentText = styled.p`
  font-size: 1.25rem;
  font-weight: 1;
  color: #6c757d;
  margin-top: 0.5%;
  white-space: pre-line; // 줄바꿈을 강제로 추가
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  line-height: 1.5;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const handleButtonClick = () => {
  console.log("Button clicked!");
};



const Body = (props) => {
  return (
    <>
      <BodyEach>      
        <TitleText>{props.text1}</TitleText>
        <ContentText>
            {'Something short and leading about the collection below—its contents,\nthe creator, etc. Make it short and sweet, but not too short so folks don’t\nsimply skip over it entirely.'}
        </ContentText>
        <ButtonContainer>
        <Button ButtonColor="#007bff" text="Main call to action" />
        <Button ButtonColor="#6c757d" text="Secondary action" />
        </ButtonContainer>
      </BodyEach>
    </>
  );
};

export default Body;
