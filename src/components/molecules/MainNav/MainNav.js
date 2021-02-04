import React from "react";
import styled from "styled-components";
import StyledLink from "../../atoms/StyledLink/StyledLink";

const NavWrapper = styled.ul`
  padding: 0;
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const NavItem = styled.li`
  display: block;
  list-style: none;
  @media (max-width: 991px) {
  }
`;

const MainNav = () => (
  <NavWrapper>
    <NavItem>
      <StyledLink to="/">Home</StyledLink>
    </NavItem>
    <NavItem>
      <StyledLink to="/add-composition">Add Composition</StyledLink>
    </NavItem>
    <NavItem>
      <StyledLink to="/about">About</StyledLink>
    </NavItem>
  </NavWrapper>
);

export default MainNav;
