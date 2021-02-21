import styled from "styled-components";
import React from "react";
import Section from "../../atoms/Section/Section";
import Container from "../../atoms/Container/Container";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import SectionSubheading from "../../atoms/SectionSubheading/SectionSubheading";
import CompositionList from "../../molecules/CompositionList/CompositionList";

const LatterWrapper = styled(Section)``;

const Head = styled.div`
  text-align: center;
  margin: 0 auto 160px auto;
  max-width: 680px;
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const LatterSectionTitle = styled(SectionTitle)`
  background: ${(props) => `${props.theme.colors.deepBlack}`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const LatterSection = () => (
  <LatterWrapper id="latter-compositions">
    <Container>
      <Head>
        <LatterSectionTitle>Latter Compositions</LatterSectionTitle>
        <SectionSubheading>
          "It's Time" was released as the lead single from Continued Silence and
          It's Time, both extended plays preceding Night Visions' release.
        </SectionSubheading>
      </Head>
      <SectionContent>
        <CompositionList />
      </SectionContent>
    </Container>
  </LatterWrapper>
);

export default LatterSection;
