import { useState, useEffect } from "react";
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
  z-index: 10;
  transition: ${(props) => `${props.theme.transition}`};

  &.scrolled {
    background: rgba(200, 200, 200, 1);
  }
`;

const NavItem = styled.li`
  display: block;
  list-style: none;
  @media (max-width: 991px) {
  }
`;

const MainNav = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 30);
    });
  }, []);

  return (
    <NavWrapper className={scroll ? "scrolled" : null}>
     

      <NavItem>
        <StyledLink as="a" href="#hero">
          About
        </StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink as="a" href="#discography">
          Discography
        </StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink as="a" href="#concert-tours">
          Concert tours
        </StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink as="a" href="#latter-compositions">
          Latter compositions
        </StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink as="a">New tracks</StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink as="a">Upcoming events</StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink as="a">History</StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink as="a">Contact</StyledLink>
      </NavItem>
    </NavWrapper>
  );
};

export default MainNav;
