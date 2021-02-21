import styled from "styled-components";
import { device } from "../../../styles/Theme";

const SectionSubheading = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  max-width: 860px;
  margin: 0 auto;
  color: ${(props) => `${props.theme.colors.greyText}`};

  @media ${device.tablet} {
    font-size: 0.9rem;
  }
`;

export default SectionSubheading;
