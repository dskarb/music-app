import React from "react";
import styled, { css, keyframes } from "styled-components";
import ButtonBg from "../../../assets/img/button_bg.jpg";

const StyledButton = styled.a`
  display: inline-block;
  position: relative;
  text-align: center;
  font-size: 13px;
  text-decoration: none;
  padding: 18px 60px;
  line-height: 1.1;
  font-weight: 700;
  border-radius: 0;
  border: 0;
  text-transform: uppercase;
  font-family: "Open Sans", sans-serif;
  color: ${(props) => `${props.theme.colors.deepBlack}`};
  transition: 0.2s ease-out all;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: url(${ButtonBg}) center no-repeat;
    background-size: cover;
    filter: grayscale(1);
    opacity: 0.4;
    transition: 0.2s ease-out all;
  }

  span {
    position: relative;
    z-index: 1;
  }

  &:hover {
    color: ${(props) => `${props.theme.colors.white}`};

    &::before {
      filter: grayscale(0);
      opacity: 1;
    }
  }
`;

const StyledAnchor = styled(StyledButton)``;

const Button = ({ children, href, secondary, ...props }) => {
  return (
    <>
      {href ? (
        <StyledAnchor href={href} target="_blank" rel="noopener noreferrer">
          <span>{children}</span>
        </StyledAnchor>
      ) : (
        <StyledButton {...props}>{children}</StyledButton>
      )}
    </>
  );
};

export default Button;
