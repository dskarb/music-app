import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/Theme";
import Button from "../../atoms/Button/Button";
import Date from "../../atoms/Date/Date";
import DateTitle from "../../atoms/DateTitle/DateTitle";
import HeadingThree from "../../atoms/HeadingThree/HeadingThree";
import Paragraph from "../../atoms/Paragraph/Paragraph";

const StyledDisc = styled.div`
  display: flex;
  width: 100%;
  margin: 0 0 115px 0;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 42%;
  margin-right: 30px;
  @media ${device.tablet} {
    margin-right: 0px;
    margin-bottom: 30px;
    width: 100%;
  }
`;

const Right = styled.div`
  width: calc(58% - 30px);
  @media ${device.tablet} {
    width: 100%;
  }
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
          <Button href={props.link} disc="true">
            Play
          </Button>
        </Right>
      </StyledDisc>
    </>
  );
};

export default Disc;
