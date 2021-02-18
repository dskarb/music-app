import styled from "styled-components";

const Paragraph = styled.p`
  font-size: 14px;
  margin: 0 0 26px 0;
  line-height: 1.6;
  color: ${(props) => `${props.theme.colors.lightGrey}`};
  font-family: "Open Sans", sans-serif;
`;

export default Paragraph;