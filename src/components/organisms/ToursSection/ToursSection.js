import styled from "styled-components";
import React from "react";
import Section from "../../atoms/Section/Section";
import Container from "../../atoms/Container/Container";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import SectionSubheading from "../../atoms/SectionSubheading/SectionSubheading";

const ToursWrapper = styled(Section)``;

const Head = styled.div`
  text-align: center;
  margin-bottom: 100px;
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
`;

const ToursSection = () => (
  <ToursWrapper id="concert-tours">
    <Container>
      <Head>
        <SectionTitle color="#6ca7ae">Concert Tours</SectionTitle>
        <SectionSubheading>
          September 4 world heard Night Visions, the first full album. He
          reached the 2 position in the chart Billboard 200. The single "It's
          Time" took 22th place in the Billboard Hot 100, 4th in the Billboard
          Alternative and Billboard Rock, and now went platinum.
        </SectionSubheading>
      </Head>
      <SectionContent></SectionContent>
    </Container>
  </ToursWrapper>
);

export default ToursSection;
