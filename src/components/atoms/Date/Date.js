import styled from "styled-components";

const Date = styled.p`
  font-weight: 700;
  padding-bottom: 8px;
  font-size: 0.9rem;
  margin: 15px 0 8px 0;
  color: ${(props) => `${props.theme.colors.greyText}`};
  border-bottom: 1px solid ${(props) => `${props.theme.colors.black}`};
  max-width: ${(props) => `${props.maxWidth}`};
`;

export default Date;
