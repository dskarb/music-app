import styled from "styled-components";
import Button from "../../atoms/Button/Button";
import Date from "../../atoms/Date/Date";
import DateTitle from "../../atoms/DateTitle/DateTitle";
import HeadingThree from "../../atoms/HeadingThree/HeadingThree";
import Paragraph from "../../atoms/Paragraph/Paragraph";


const StyledDisc = styled.div`
  display: flex;
  width: 100%;
  margin: 0 0 115px 0;
`;

const Left = styled.div`
  width: 500px;
  margin-right: 30px;
`;

const Right = styled.div`
  width: calc(100% - 530px);
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
          <HeadingThree>{props.heading}</HeadingThree>
          <Paragraph>{props.content}</Paragraph>
          <Button href={props.link} disc='true'>Play</Button>
        </Right>
      </StyledDisc>
    </>
  );
};

export default Disc;
