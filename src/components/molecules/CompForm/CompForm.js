import { Formik, Field, Form } from "formik";
import React from "react";
import styled, { css } from "styled-components";
import { connect } from "react-redux";
import {
  addComposition as addCompositionAction,
  hideModal as hideModalAction,
} from "../../../actions/compositionActions";
import ModalButton from "../../molecules/ModalButton/ModalButton";
import { DatePickerField } from "../../atoms/DatePickerField/DatePickerField";

const Modal = styled.div`
  opacity: 0;
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  padding: 32px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 1px #ccc;
  z-index: -1;

  ${({ isOpen }) =>
    isOpen === true &&
    css`
      opacity: 1;
      z-index: 10;
    `}
`;

const FormRow = styled.div`
  display: block;
  margin: 0 0 10px 0;
`;

const HideModalButton = styled(ModalButton)`
  background: transparent;
  top: 10px;
  right: 10px;
  bottom: unset;
  padding: 0;
  position: absolute;
  color: #000;
  width: auto;
  height: auto;
  border-radius: 0;
`;

const CompForm = ({ addComposition, modalOpen, hideModal }) => (
  <Modal isOpen={modalOpen}>
    <HideModalButton onClick={hideModal}>X</HideModalButton>
    <Formik
      initialValues={{
        year: "",
        title: "",
        heading: "",
      }}
      onSubmit={(values) => {
        addComposition(values);
        hideModal();
      }}>
      <Form>
        <FormRow>
          <DatePickerField id="year" name="year" />
        </FormRow>
        <FormRow>
          <Field id="title" name="title" placeholder="title" />
        </FormRow>
        <FormRow>
          <Field id="heading" name="heading" placeholder="heading" />
        </FormRow>
        <FormRow></FormRow>
        <FormRow></FormRow>
        <FormRow>
          <button type="submit">Submit</button>
        </FormRow>
      </Form>
    </Formik>
  </Modal>
);

const mapStateToProps = (state) => ({
  modalOpen: state.compositions.modalOpen,
});

const mapDispatchToProps = (dispatch) => ({
  addComposition: (itemContent) => dispatch(addCompositionAction(itemContent)),
  hideModal: () => dispatch(hideModalAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompForm);
