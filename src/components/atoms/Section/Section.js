import styled from "styled-components";
import { device } from "../../../styles/Theme";

const Section = styled.section`
  padding: 160px 0;

  @media ${device.tablet} {
    padding: 100px 0;
  }

`;

export default Section;
