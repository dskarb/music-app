import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/Theme";
import DiscoTextBg from "../../../assets/img/disco_text_bg.png";

const StyledSectionTitle = styled.h2`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 2.5rem;
  position: relative;
  display: inline-block;
  letter-spacing: 3px;
  margin: 0 0 50px;
  padding: 0 15px;
  font-family: Dosis, sans-serif;
  background: ${(props) => `${props.theme.colors.deepBlack}`};
  background-image: url(${DiscoTextBg});
  background-position: right;
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &::after {
    position: absolute;
    content: "";
    background-color: ${(props) => `${props.theme.colors.deepBlack}`};
    left: -60px;
    right: -60px;
    top: 51%;
    height: 1px;
    z-index: -1;
    display: block;

    @media ${device.tablet} {
      left: 0;
      right: 0;
    }
  }

  @media ${device.tablet} {
    font-size: 1.8rem;
  }
`;

const SectionTitle = ({ children, ...props }) => {
  return (
    <>
      <StyledSectionTitle {...props}>{children}</StyledSectionTitle>
    </>
  );
};

export default SectionTitle;
