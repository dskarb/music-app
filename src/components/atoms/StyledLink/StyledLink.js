import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "nav-item-active";

const StyledLink = styled(NavLink).attrs({ activeClassName })`
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  display: flex;
  align-items: center;
  font-size: 1em;
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
    background: #000;
    opacity: 0;
    transition: 0.2s ease-out all;
  }
  @media (max-width: 1400px) {
    font-size: 0.9em;
    padding: 16px 24px;
  }
  &.${activeClassName} {

    &::after {
      opacity: 1;
      left: 0;
    }
  }
  &:hover {
    &::after {
      opacity: 1;
      left: 0;
    }
  }
`;

export default StyledLink;
