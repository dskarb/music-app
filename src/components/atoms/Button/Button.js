import React from "react";
import styled, { css } from "styled-components";
import ButtonBg from "../../../assets/img/button_bg.png";
import AngleRight from "../../../assets/img/angle_right.png";

const StyledButton = styled.a`
  display: inline-block;
  position: relative;
  text-align: center;
  font-size: 0.8rem;
  text-decoration: none;
  padding: 23px 30px;
  line-height: 1.1;
  font-weight: 700;
  border-radius: 0;
  color: ${(props) => `${props.theme.colors.deepBlack}`};
  transition: ${(props) => `${props.theme.transition}`};
  min-width: 195px;
  border: 1px solid ${(props) => `${props.theme.colors.buttonBorder}`};
  background: transparent;
  cursor: pointer;

  &:hover {
    background: ${(props) => `${props.theme.colors.buttonBorder}`};
  }
`;

const StyledAngleRight = styled.img`
  margin-left: 18px;
`;

const StyledAnchor = styled(StyledButton)`
  ${({ disc }) =>
    disc &&
    css`
      & {
        border: 0;
        text-transform: uppercase;
      }

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: url(${ButtonBg}) center no-repeat;
        background-size: cover;
        filter: grayscale(1);
        opacity: 0.4;
        transition: ${(props) => `${props.theme.transition}`};
      }

      span {
        position: relative;
        z-index: 1;
      }

      &:hover {
        color: ${(props) => `${props.theme.colors.white}`};

        &::before {
          filter: grayscale(0);
          opacity: 1;
        }
      }
    `}
`;

const Button = ({ children, href, secondary, disc, angle, ...props }) => {
  return (
    <>
      {href ? (
        <StyledAnchor
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          disc={disc}
          angle={angle}>
          <span>
            {children}
            {angle ? (
              <StyledAngleRight
                src={AngleRight}
                alt="Button angle"></StyledAngleRight>
            ) : null}
          </span>
        </StyledAnchor>
      ) : (
        <StyledButton {...props}>{children}</StyledButton>
      )}
    </>
  );
};

export default Button;
