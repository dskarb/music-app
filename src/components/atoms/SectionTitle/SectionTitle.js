import styled from "styled-components";
import DiscoTextBg from "../../../assets/img/disco_text_bg.png";

const StyledSectionTitle = styled.h2`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 2.5rem;
  position: relative;
  display: inline-block;
  letter-spacing: 3px;
  margin: 0 0 50px;

  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#a26d53+0,785456+100 */
  background: #000;
  /* background: -webkit-linear-gradient(to right, #a26d53 0%, 785456 100%);
  background: -moz-linear-gradient(to right, #a26d53 0%, 785456 100%);
  background: linear-gradient(to right, #a26d53 0%, 785456 100%); */
  background-image: url(${DiscoTextBg});
  background-position: right;
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &::after {
    position: absolute;
    content: "";
    background-color: ${(props) => `${props.theme.colors.deepBlack}`};
    left: -60px;
    right: -60px;
    top: 51%;
    height: 1px;
    z-index: -1;
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
