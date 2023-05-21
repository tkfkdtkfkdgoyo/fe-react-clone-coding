import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${props => props.color};
  color:#6c757d;
  border: 1px solid #6c757d;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.hoverColor};
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-right: 200px;
  margin-left: 40px;
  margin-bottom: 20px;
`;

const BoxButton = () => {
  return (
    <ButtonsContainer>
      <Button color="#ffff" hoverColor="#6c757d">View</Button>
      <Button color="#ffff" hoverColor="#6c757d">Edit</Button>
    </ButtonsContainer>
  );
};

export default BoxButton;
