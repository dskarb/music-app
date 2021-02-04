import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "nav-item-active";

const StyledLink = styled(NavLink).attrs({ activeClassName })`
  text-decoration: none;
  color: #000;
  display: flex;
  align-items: center;
  font-size: 1em;
  padding: 16px 32px;
  margin: 0;
  cursor: pointer;
  position: relative;
  transition: 0.2s ease-out all;
  @media (max-width: 1400px) {
    font-size: 0.9em;
    padding: 16px 24px;
  }
  &.${activeClassName} {
    font-weight: 700;
  }
  &:hover {
    color: red;
  }
`;

export default StyledLink;