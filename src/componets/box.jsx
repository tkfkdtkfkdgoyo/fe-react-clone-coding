import React from "react";
import styled from "styled-components";
import { GrayBox } from "./gray_box"; 
import BoxButton from "./box_botton";
import Content, { ContentText } from "./content";

const BoxEach = styled.div`
  width: 331px;
  height: 350px;
  margin-left: 20px;
  margin-top: 20px;
  padding: ;
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
`;

export const MyBox = (props) => {
  return (
    <>
    <BoxEach>
        <GrayBox text= "Thumbnail" color = "#FFFF"/>
        <Content />
        <BoxButton />
    </BoxEach>
    </>
  );
};

export default MyBox; // GrayBox를 기본 내보내기로 설정

