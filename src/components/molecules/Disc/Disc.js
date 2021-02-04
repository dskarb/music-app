import react from "react";
import styled from "styled-components";
import Button from "../../atoms/Button/Button";
import Date from "../../atoms/Date/Date";
import DateTitle from "../../atoms/DateTitle/DateTitle";

const StyledDisc = styled.div`
  display: flex;
  width: 100%;
  margin: 0 0 90px 0;
`;

const Left = styled.div`
  width: calc(50% - 30px);
  margin-right: 30px;
`;

const Right = styled.div`
  width: 50%;
`;

const Heading = styled.p`
  font-size: 20px;
  margin: 0 0 10px 0;
  font-family: "Open Sans", sans-serif;
`;

const Content = styled.p`
  font-size: 14px;
  margin: 0 0 26px 0;
  line-height: 1.6;
  color: ${(props) => `${props.theme.colors.lightGrey}`};
  font-family: "Open Sans", sans-serif;
`;

const Disc = ({ children, ...props }) => {
  return (
    <>
      <StyledDisc {...props}>
        <Left>
          <Date>{props.year}</Date>
          <DateTitle>{props.title}</DateTitle>
        </Left>
        <Right>
          <Heading>{props.heading}</Heading>
          <Content>{props.content}</Content>
          <Button href={props.link}>Play</Button>
        </Right>
      </StyledDisc>
    </>
  );
};

export default Disc;
