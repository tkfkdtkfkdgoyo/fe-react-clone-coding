import React from "react";
import styled from "styled-components";

const FooterEach = styled.div`
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  background-color: #ffff;
  text-align: left;
  margin: 10px;
`;


const FooterText = styled.p`
  font-size: 16px;
  font-weight: 300px;
  color: #6c757d;
  margin-top: 8%;
  white-space: pre-line; // 줄바꿈을 강제로 추가
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  line-height: 1.5;
  white-space: pre-line;
  margin-left: 5%;
`;


const Footer = (props) => {
  return (
    <>
    <FooterEach>
        <FooterText>
            {"Album example is © Bootstrap, but please download and customize it for yourself!\nNew to Bootstrap? Visit the homepage or read our getting started guide."}
        </FooterText>
    </FooterEach>
    </>
  );
};

export default Footer;
