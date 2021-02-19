import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "nav-item-active";

const StyledLink = styled(NavLink).attrs({ activeClassName })`
  text-decoration: none;
  text-transform: uppercase;
  color: ${(props) => `${props.theme.colors.grey}`};
  display: flex;
  align-items: center;
  font-size: 17px;
  padding: 16px 0;
  margin: 0 20px;
  cursor: pointer;
  position: relative;
  transition: 0.2s ease-out all;
  &::after {
    position: absolute;
    content: "";
    left: -10px;
    bottom: 10px;
    width: 100%;
    height: 2px;
    background: ${(props) => `${props.theme.colors.grey}`};
    opacity: 0;
    transition: 0.2s ease-out all;
  }
  @media (max-width: 1400px) {
    font-size: 0.9em;
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
