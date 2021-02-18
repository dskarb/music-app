import styled from "styled-components";
import Button from "../../atoms/Button/Button";
import Date from "../../atoms/Date/Date";
import DateTitle from "../../atoms/DateTitle/DateTitle";
import HeadingThree from "../../atoms/HeadingThree/HeadingThree";
import Paragraph from "../../atoms/Paragraph/Paragraph";

const StyledComposition = styled.div`
  display: flex;
  width: 100%;
  margin: 0 0 55px 0;
  background: #f5f6f6;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }
`;

const Left = styled.div`
  width: 50%;
  padding: 20px 35px 35px 35px;
`;

const Right = styled.div`
  width: 50%;
`;

const StyledHeadingThree = styled(HeadingThree)`
  margin: 20px 0;
`;

const VideoWrapper = styled.div`
  padding: 41.67% 0 0 0;
  position: relative;
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
          <Date>{props.year}</Date>
          <DateTitle>{props.title}</DateTitle>
          <StyledHeadingThree>{props.heading}</StyledHeadingThree>
          <Paragraph>{props.content}</Paragraph>
          <Button href={props.link} angle>
            Visit the iTunes
          </Button>
        </Left>
        <Right>
          <VideoWrapper>
            <Video
              title={props.heading}
              src={props.video}
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen></Video>
          </VideoWrapper>
        </Right>
      </StyledComposition>
    </>
  );
};

export default Composition;
