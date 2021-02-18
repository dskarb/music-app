import styled from "styled-components";

const SectionSubheading = styled.p`
font-size: 1rem;
line-height: 1.7;
max-width: 860px;
margin: 0 auto;
font-family: "Open Sans", sans-serif;
color: ${(props) => `${props.theme.colors.greyText}`};
`;

export default SectionSubheading;