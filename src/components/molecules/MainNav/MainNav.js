import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { device } from "../../../styles/Theme";
import StyledLink from "../../atoms/StyledLink/StyledLink";
import Burger from "../../atoms/Burger/Burger";
import { Link } from "react-scroll";

const NavWrapper = styled.ul`
  padding: 0;
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  height: 52px;
  width: 100%;
  background: rgba(200, 200, 200, 0.5);
  z-index: 10;
  transition: ${(props) => `${props.theme.transition}`};

  &.scrolled {
    background: rgba(200, 200, 200, 1);
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  transition: ${(props) => `${props.theme.transition}`};

  @media ${device.laptop} {
    position: fixed;
    height: 100vh;
    width: 230px;
    flex-direction: column;
    background: rgba(200, 200, 200, 1);
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  }
`;

const NavItem = styled.li`
  display: block;
  list-style: none;
`;

const MainNav = () => {
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 30);
    });
  }, []);

  return (
    <NavWrapper className={scroll ? "scrolled" : null}>
      <MenuWrapper open={open}>
        <NavItem>
          <StyledLink
            as={Link}
            to="hero"
            spy={true}
            smooth={true}
            onClick={() => setOpen(!open)}>
            About
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink
            as={Link}
            to="discography"
            spy={true}
            smooth={true}
            onClick={() => setOpen(!open)}>
            Discography
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink
            as={Link}
            to="concert-tours"
            spy={true}
            smooth={true}
            onClick={() => setOpen(!open)}>
            Concert tours
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink
            as={Link}
            to="latter-compositions"
            spy={true}
            smooth={true}
            onClick={() => setOpen(!open)}>
            Latter compositions
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink as="a" onClick={() => setOpen(!open)}>
            New tracks
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink as="a" onClick={() => setOpen(!open)}>
            Upcoming events
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink as="a" onClick={() => setOpen(!open)}>
            History
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink as="a" onClick={() => setOpen(!open)}>
            Contact
          </StyledLink>
        </NavItem>
      </MenuWrapper>
      <Burger open={open} setOpen={setOpen} />
    </NavWrapper>
  );
};

export default MainNav;
