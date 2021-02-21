import styled from "styled-components";

const Paragraph = styled.p`
  font-size: 0.9rem;
  margin: 0 0 26px 0;
  line-height: 1.6;
  color: ${(props) => `${props.theme.colors.lightGrey}`};
`;

export default Paragraph;