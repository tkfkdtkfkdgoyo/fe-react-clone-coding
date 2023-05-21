import React from "react";
import styled from "styled-components";

const ContentText = styled.p`
  font-size: 16px;
  text-align: center;
  white-space: pre-line;
  margin-left: 5px;
  margin-right: 5px;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
`;

const Content = () => {
  return (
    <ContentText>
    This is a wider card with supporting text
    below as a natural lead-in to additional
    content. This content is a little bit longer.
    </ContentText>
  );
};

export default Content;
export { ContentText };