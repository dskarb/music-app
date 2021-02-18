import styled from "styled-components";
import React from "react";
import HeroBg from "../../../assets/img/hero_bg.png";
import HeroImg from "../../../assets/img/hero_img.png";

const HeroWrapper = styled.div`
  background-image: url(${HeroBg});
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 970px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroSection = () => (
  <HeroWrapper id="hero">
    <img src={HeroImg} alt="" />
  </HeroWrapper>
);

export default HeroSection;
