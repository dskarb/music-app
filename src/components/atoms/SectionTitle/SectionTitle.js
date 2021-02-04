import styled from "styled-components";

const StyledSectionTitle = styled.h2`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 2.5rem;
  position: relative;
  display: inline-block;
  letter-spacing: 3px;
  color: ${(props) => props.color || `${props.theme.colors.black}`};
  &::after {
    position: absolute;
    content: "";
    background-color: ${(props) => `${props.theme.colors.deepBlack}`};
    left: -60px;
    right: -60px;
    top: 51%;
    height: 1px;
  }
`;

const SectionTitle = ({ children, ...props }) => {
  return (
    <>
      <StyledSectionTitle {...props}>{children}</StyledSectionTitle>
    </>
  );
};

export default SectionTitle;
