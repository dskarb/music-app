import React from "react";
import styled from "styled-components";

const StyledNumber = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  margin-top: 8px;

  img {
    margin-right: 6px;
  }

  span {
    font-size: 0.8rem;
    color: ${(props) => `${props.theme.colors.lightGrey}`};
  }
`;

const CompositionNumber = ({ ...props }) => {
  return (
    <StyledNumber>
      {props.iconSrc ? <img src={props.iconSrc} alt=""></img> : null}
      <span>{props.number}</span>
    </StyledNumber>
  );
};

export default CompositionNumber;
