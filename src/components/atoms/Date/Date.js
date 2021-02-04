import styled from "styled-components";

const Date = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  padding-bottom: 8px;
  font-size: 14px;
  margin: 15px 0 8px 0;
  color: ${(props) => `${props.theme.colors.greyText}`};
  border-bottom: 1px solid ${(props) => `${props.theme.colors.black}`};
`;

export default Date;
