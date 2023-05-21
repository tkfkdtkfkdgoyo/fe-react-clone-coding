import React from "react";
import styled from "styled-components";
import { FiCamera } from "react-icons/fi"

const HeaderEach = styled.div`
  width: 100%;
  height: 56px;
  box-sizing: border-box;
  background-color: #343a40;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const HeaderText = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #FFFF;
  margin-left: 3px;
`;

const StyledCameraIcon = styled(FiCamera)`
  margin-right: 5px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 76.5px;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";;
`;

const Header = (props) => {
  return (
    <HeaderEach>
      <TitleContainer>
        <StyledCameraIcon color="#FFFF" size="20px" />
        <HeaderText>{props.text}</HeaderText>
      </TitleContainer>
    </HeaderEach>
  );
};

export default Header;
