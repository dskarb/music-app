import styled from "styled-components";
import React from "react";
import Section from "../../atoms/Section/Section";
import Container from "../../atoms/Container/Container";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import SectionSubheading from "../../atoms/SectionSubheading/SectionSubheading";
import Disc from "../../molecules/Disc/Disc";
import DiscoBg from "../../../assets/img/disco_bg.jpg";

const DiscographyWrapper = styled(Section)`
  /* padding-top: 100px; */
  padding-bottom: 0;
`;

const Head = styled.div`
  text-align: center;
  margin-bottom: 160px;
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1230px;
  margin: 0 auto;
`;

const DiscoBG = styled.img`
  margin-top: -450px;
  position: relative;
  z-index: -1;
`;

const DiscographySection = () => (
  <DiscographyWrapper id="discography">
    <Container>
      <Head>
        <SectionTitle color="#90614f">Discography</SectionTitle>
        <SectionSubheading>
        September 4 world heard Night Visions, the first full album. He reached the 2 position in the chart Billboard 200. The single «It's Time» took 22 th place in the Billboard Hot 100, 4th in the Billboard Alternative and Billboard Rock, and now went platinum.
        </SectionSubheading>
      </Head>
      <SectionContent>
        <Disc
          year="2010"
          title="Hell and silence"
          heading="Hell and Silence is an EP by Las Vegas rock group"
          content="Hell and Silence is an EP by Las Vegas rock group , released in March 2010 in the United States. It was recorded at Battle Born Studios. All songs were written by Imagine Dragons and self-produced. The EP was in part mixed by Grammy nominated engineer Mark Needham.
          To promote the album the band performed five shows at SXSW 2010 including at the BMI Official Showcase.While at SXSW they were endorsed by Blue Microphones. They also toured the western United States with Nico Vega and Saint Motel. They also performed at Bite of Las Vegas Festival 2010, New Noise Music Festival, Neon Reverb Festival, and Fork Fest."
          link="https://hellandsilence.com"></Disc>
        <Disc
          year="2012"
          title="Night visions"
          heading="Night Visions is the debut studio album by American rock band"
          content="It was released on September 4, 2012 through Interscope Records. The extended track was released on February 12, 2013, adding three more songs. Recorded between 2010 and 2012, the album was primarily produced by the band themselves, as well as English hip-hop producer Alex da Kid and Brandon Darner from the American indie rock group The Envy Corps. It was mastered by Joe LaPorta. According to frontman Dan Reynolds, the album took three years to finish ...
          of the album's tracks being previously released on multiple EPs. Musically, Night Visions exhibits influences of folk, hip hop and pop.[2]"
          link="https://nightvisions.com"></Disc>
        <Disc
          year="2015"
          title="Smoke + Mirrors"
          heading="The album was recorded during 2014 
          at the band's home studio in Las Vegas, Nevada"
          content="Self-produced by members of the band along with English hip-hop producer Alexander Grant, known by his moniker Alex da Kid, the album was released by Interscope Records and Grant's KIDinaKORNER label on February 17, 2015, in the United States."
          link="https://smokemirrors.com"></Disc>
      </SectionContent>
    </Container>
    <DiscoBG src={DiscoBg} alt=""></DiscoBG>
  </DiscographyWrapper>
);

export default DiscographySection;
