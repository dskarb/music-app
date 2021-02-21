import styled from "styled-components";
import { device } from "../../../styles/Theme";

const StyledLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: ${(props) => `${props.theme.colors.grey}`};
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
  padding: 16px 0;
  margin: 0 20px;
  cursor: pointer;
  position: relative;
  font-family: Dosis, sans-serif;
  transition: ${(props) => `${props.theme.transition}`};
  &::after {
    position: absolute;
    content: "";
    left: -10px;
    bottom: 10px;
    width: 100%;
    height: 2px;
    background: ${(props) => `${props.theme.colors.grey}`};
    opacity: 0;
    transition: ${(props) => `${props.theme.transition}`};
  }
  @media ${device.laptopL} {
    font-size: 0.9rem;
  }

  @media ${device.laptop} {
    font-size: 1.2rem;
  }
  &:hover {
    color: ${(props) => `${props.theme.colors.black}`};
    &::after {
      opacity: 1;
      left: 0;
      background: ${(props) => `${props.theme.colors.black}`};
    }
  }
`;

export default StyledLink;
