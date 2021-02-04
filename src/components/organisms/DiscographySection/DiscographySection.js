import styled from "styled-components";
import React from "react";
import Section from "../../atoms/Section/Section";
import Container from "../../atoms/Container/Container";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import SectionSubheading from "../../atoms/SectionSubheading/SectionSubheading";
import Disc from "../../molecules/Disc/Disc";

const DiscographyWrapper = styled(Section)``;

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



const DiscographySection = () => (
  <DiscographyWrapper id="discography">
    <Container>
      <Head>
        <SectionTitle color="#90614f">Discography</SectionTitle>
        <SectionSubheading>
          September 4 world heard Night Visions, the first full album. He
          reached the 2 position in the chart Billboard 200. The single "It's
          Time" took 22th place in the Billboard Hot 100, 4th in the Billboard
          Alternative and Billboard Rock, and now went platinum.
        </SectionSubheading>
      </Head>
      <SectionContent>
        <Disc
          year="2010"
          title="Hell and silence"
          heading="Hell and Silence is an EP by Las Vegas rock group"
          content="Vivamus ut vulputate tellus. Cras
          accumsan, felis non blandit tincidunt, lectus augue suscipit nunc,
          vitae feugiat ligula eros eu diam. Donec at quam elit. Praesent
          accumsan ex nec molestie gravida."
          link="https://hellandsilence.com"></Disc>
          <Disc
          year="2012"
          title="Night visions"
          heading="Night Visions is an EP by Las Vegas rock group"
          content="Vivamus ut vulputate tellus. Cras
          accumsan, felis non blandit tincidunt, lectus augue suscipit nunc,
          vitae feugiat ligula eros eu diam. Donec at quam elit. Praesent
          accumsan ex nec molestie gravida."
          link="https://nightvisions.com"></Disc>
          <Disc
          year="2015"
          title="Smoke + Mirrors"
          heading="The album was recorded during 2014 at the band's home studio in Las Vegas, Nevada"
          content="Vivamus ut vulputate tellus. Cras
          accumsan, felis non blandit tincidunt, lectus augue suscipit nunc,
          vitae feugiat ligula eros eu diam. Donec at quam elit. Praesent
          accumsan ex nec molestie gravida."
          link="https://smokemirrors.com"></Disc>
      </SectionContent>
    </Container>
  </DiscographyWrapper>
);

export default DiscographySection;
