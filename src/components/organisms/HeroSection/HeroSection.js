import React from "react";
import styled from "styled-components";
import HeroBg from "../../../assets/img/hero_bg.png";
import HeroImg from "../../../assets/img/hero_img.png";
import Container from "../../atoms/Container/Container";

const HeroWrapper = styled.section`
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
    <Container>
      <img src={HeroImg} alt="" />
    </Container>
  </HeroWrapper>
);

export default HeroSection;
