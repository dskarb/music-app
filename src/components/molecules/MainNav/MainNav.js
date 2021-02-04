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
  background: rgba(200, 200, 200, 0.5);
`;

const NavItem = styled.li`
  display: block;
  list-style: none;
  @media (max-width: 991px) {
  }
`;

const StyledAnchor = styled.a`
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

const MainNav = () => (
  <NavWrapper>
    <NavItem>
      <StyledLink to="/">Home</StyledLink>
    </NavItem>

    <NavItem>
      <StyledAnchor href="#hero">About</StyledAnchor>
    </NavItem>
    <NavItem>
      <StyledAnchor href="#discography">Discography</StyledAnchor>
    </NavItem>
    <NavItem>
      <StyledAnchor href="#concert-tours">Concert tours</StyledAnchor>
    </NavItem>
    <NavItem>
      <StyledAnchor>Latter compositions</StyledAnchor>
    </NavItem>
    <NavItem>
      <StyledAnchor>New tracks</StyledAnchor>
    </NavItem>
    <NavItem>
      <StyledAnchor>Upcoming events</StyledAnchor>
    </NavItem>
    <NavItem>
      <StyledAnchor>History</StyledAnchor>
    </NavItem>
    <NavItem>
      <StyledAnchor>Contact</StyledAnchor>
    </NavItem>

    <NavItem>
      <StyledLink to="/add-composition">Add Composition</StyledLink>
    </NavItem>
  </NavWrapper>
);

export default MainNav;
