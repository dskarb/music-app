import styled from "styled-components";

const ModalButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  border: 0;
  font-size: 30px;
  background: ${(props) => `${props.theme.colors.deepBlack}`};
  color: ${(props) => `${props.theme.colors.white}`};
  width: 50px;
  height: 50px;
  border-radius: 50px;
  cursor: pointer;
  transition: ${(props) => `${props.theme.transition}`};
  box-shadow: ${(props) => `${props.theme.boxShadow}`};

  &:hover {
    background: ${(props) => `${props.theme.colors.grey}`};
  }
`;

export default ModalButton;
