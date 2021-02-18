import styled from "styled-components";
import React from "react";
import Section from "../../atoms/Section/Section";
import Container from "../../atoms/Container/Container";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import SectionSubheading from "../../atoms/SectionSubheading/SectionSubheading";
import ToursBg from "../../../assets/img/tours_bg.png";
import Date from "../../atoms/Date/Date";
import DateTitle from "../../atoms/DateTitle/DateTitle";
import HeadingThree from "../../atoms/HeadingThree/HeadingThree";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Button from "../../atoms/Button/Button";

const ToursWrapper = styled(Section)`
  background: url(${ToursBg}) bottom no-repeat;
  background-size: contain;
`;

const ToursDate = styled(Date)`
  max-width: 395px;
`;

const ToursDateTitle = styled(DateTitle)`
  margin-bottom: 84px;
`;

const Head = styled.div`
  text-align: center;
  margin-bottom: 470px;
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: 0 auto;

  div {
    max-width: 670px;
  }
`;

const ToursSectionTitle = styled(SectionTitle)`
  background: #62a2ad;
  background: -webkit-linear-gradient(to bottom, #62a2ad 0%, #8dbab3 100%);
  background: -moz-linear-gradient(to bottom, #62a2ad 0%, #8dbab3 100%);
  background: linear-gradient(to bottom, #62a2ad 0%, #8dbab3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

// const ToursBG = styled.img`
//   margin-top: 0px;
//   position: relative;
//   z-index: -1;
// `;

const ToursSection = () => (
  <ToursWrapper id="concert-tours">
    <Container>
      <Head>
        <ToursSectionTitle>Concert Tours</ToursSectionTitle>
        <SectionSubheading>
        Before the release of Night Visions, Imagine Dragons made appearances on American radio and television to promote their extended play, Continued Silence and debut single It's Time. The band performed "It's Time" on the July 16, 2012 airing of NBC late-night talk show The Tonight Show with Jay Leno"
        </SectionSubheading>
      </Head>
      <SectionContent>
        <div>
          <ToursDate>03.08.2015</ToursDate>
          <ToursDateTitle>Smoke + Mirrors Tour</ToursDateTitle>
          <HeadingThree>2015 - Present</HeadingThree>
          <Paragraph>
            At Lollapalooza in Sao Paulo, Brazil, the last date on the Into the
            Night Tour, the band announced a rest, and complemented saying,
            "This is our last show for a while, and had no better place to end
            this tour".[51] The conclusion of the Into the Night Tour signaled
            the end of the Night Visions album cycle. Lead singer Dan Reynolds
            joked about the end of the Night Visions cycle, saying that "We're
            always writing on the road, [so] that second album will come, unless
            we die. next year. Hopefully we don't die and there will be a second
            album. I don't know when it will be, but it may come"
          </Paragraph>
          <Button href="#" angle>Buy online</Button>
        </div>
      </SectionContent>
    </Container>
  </ToursWrapper>
);

export default ToursSection;
