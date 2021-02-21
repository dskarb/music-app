import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/Theme";
import Button from "../../atoms/Button/Button";
import Date from "../../atoms/Date/Date";
import DateTitle from "../../atoms/DateTitle/DateTitle";
import HeadingThree from "../../atoms/HeadingThree/HeadingThree";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import CompositionNumber from "../../atoms/CompositionNumber/CompositionNumber";
import PlaysIcon from "../../../assets/img/plays.png";
import SavesIcon from "../../../assets/img/saved.png";
import SharesIcon from "../../../assets/img/shares.png";
import CommentsIcon from "../../../assets/img/comments.png";

const StyledComposition = styled.div`
  display: flex;
  width: 100%;
  margin: 0 0 55px 0;
  background: ${(props) => `${props.theme.colors.lighterGrey}`};

  &:nth-child(odd) {
    flex-direction: row-reverse;

    & > div::after {
      left: unset;
      right: 100%;
      border-left: 14px solid transparent;
      border-right: 14px solid ${(props) => `${props.theme.colors.lighterGrey}`};

      @media ${device.laptop} {
        right: unset;
        left: 50%;
        border-right: 14px solid transparent;
      }
    }
  }

  @media ${device.laptop} {
    flex-direction: column !important;
  }
`;

const Left = styled.div`
  width: 50%;
  padding: 20px 35px 35px 35px;
  display: flex;
  flex-direction: column;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    left: 100%;
    top: 50%;
    width: 0;
    height: 0;
    border-left: 14px solid ${(props) => `${props.theme.colors.lighterGrey}`};
    border-right: 14px solid transparent;
    border-top: 14px solid transparent;
    border-bottom: 14px solid transparent;
    clear: both;
    z-index: 1;
    transform: translateY(-50%);

    @media ${device.laptop} {
      border-top: 14px solid ${(props) => `${props.theme.colors.lighterGrey}`};
      border-left: 14px solid transparent;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media ${device.laptop} {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 50%;
  background: ${(props) => `${props.theme.colors.deepBlack}`};

  @media ${device.laptop} {
    width: 100%;
  }
`;

const StyledHeadingThree = styled(HeadingThree)`
  margin: 20px 0;
`;

const StyledButton = styled(Button)`
  margin-right: 20px;

  @media ${device.mobileL} {
    margin-right: 0px;
  }
`;

const VideoWrapper = styled.div`
  padding: 79.67% 0 0 0;
  position: relative;
`;

const BottomWrapper = styled.div`
  margin-top: auto;
  display: flex;
  align-items: flex-end;

  @media ${device.mobileL} {
   flex-wrap: wrap;
  }

  a {
    margin-right: 30px;
  }
`;

const NumbersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media ${device.mobileL} {
   margin-top: 20px;
  }
`;

const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;

const Composition = ({ children, ...props }) => {
  return (
    <>
      <StyledComposition {...props}>
        <Left>
          <Date maxWidth="390px">{props.year}</Date>
          <DateTitle>{props.title}</DateTitle>
          <StyledHeadingThree>{props.heading}</StyledHeadingThree>
          <Paragraph>{props.content}</Paragraph>
          <BottomWrapper>
            {props.link ? (
              <StyledButton href={props.link} angle>
                Visit the iTunes
              </StyledButton>
            ) : null}
            <NumbersWrapper>
              {props.plays ? (
                <CompositionNumber iconSrc={PlaysIcon} number={props.plays} />
              ) : null}
              {props.saves ? (
                <CompositionNumber iconSrc={SavesIcon} number={props.saves} />
              ) : null}
              {props.shares ? (
                <CompositionNumber iconSrc={SharesIcon} number={props.shares} />
              ) : null}
              {props.comments ? (
                <CompositionNumber
                  iconSrc={CommentsIcon}
                  number={props.comments}
                />
              ) : null}
            </NumbersWrapper>
          </BottomWrapper>
        </Left>
        <Right>
          <VideoWrapper>
            {props.video ? (
              <Video
                title={props.heading}
                src={
                  "https://player.vimeo.com/video/" +
                  props.video +
                  "?&title=0&byline=0&portrait=0"
                }
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen></Video>
            ) : null}
          </VideoWrapper>
        </Right>
      </StyledComposition>
    </>
  );
};

export default Composition;
