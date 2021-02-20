import { Formik, Field, Form } from "formik";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import { connect } from "react-redux";
import {
  addComposition as addCompositionAction,
  hideModal as hideModalAction,
} from "../../../actions/compositionActions";
import ModalButton from "../../molecules/ModalButton/ModalButton";
import Button from "../../atoms/Button/Button";
import { DatePickerField } from "../../atoms/DatePickerField/DatePickerField";
import * as Yup from "yup";

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
  box-shadow: ${(props) => `${props.theme.boxShadow}`};
  z-index: -1;
  max-height: 80vh;
  overflow: auto;

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

  .react-datepicker-wrapper {
    width: 100%;
  }

  input,
  textarea {
    width: 100%;
    border: 1px solid ${(props) => `${props.theme.colors.lightGrey}`};
    padding: 10px 20px;
    border-radius: 0;
    font-size: 16px;
    line-height: 22px;
    font-family: "Open Sans", sans-serif;
  }
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

const StyledInput = styled(Field)``;

const formSchema = Yup.object().shape({
  year: Yup.string().required("Required"),
  title: Yup.string().required("Required"),
  heading: Yup.string().required("Required"),
  content: Yup.string().required("Required"),
  link: Yup.string().url(),
  video: Yup.string(),
});

export const FormFirstStep = () => {
  return (
    <>
      <FormRow>
        <DatePickerField id="year" name="year" placeholder="Date" />
      </FormRow>
      <FormRow>
        <StyledInput id="title" name="title" placeholder="Title" />
      </FormRow>
      <FormRow>
        <StyledInput id="heading" name="heading" placeholder="Heading" />
      </FormRow>
      <FormRow>
        <StyledInput
          component="textarea"
          id="content"
          name="content"
          placeholder="Content"
        />
      </FormRow>
      <FormRow>
        <StyledInput id="link" name="link" placeholder="URL" />
      </FormRow>
      <FormRow>
        <StyledInput id="video" name="video" placeholder="Vimeo ID" />
      </FormRow>
      <FormRow>
        <StyledInput id="plays" name="plays" placeholder="Number of plays" />
      </FormRow>
      <FormRow>
        <StyledInput id="saves" name="saves" placeholder="Number of saves" />
      </FormRow>
      <FormRow>
        <StyledInput id="shares" name="shares" placeholder="Number of shares" />
      </FormRow>
      <FormRow>
        <StyledInput
          id="comments"
          name="comments"
          placeholder="Number of comments"
        />
      </FormRow>
    </>
  );
};

export const FormSuccess = (formikProps) => {
  const {
    year,
    title,
    heading,
    content,
    link,
    video,
    plays,
    saves,
    shares,
    comments,
  } = formikProps.values;

  var today = year;
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  var year_string = dd + "." + mm + "." + yyyy;
  return (
    <>
      <div>
        <p>Date: {year_string}</p>
        <p>Title: {title}</p>
        <p>Heading: {heading}</p>
        <p>Content: {content}</p>
        <p>Link: {link}</p>
        <p>Vimeo ID: {video}</p>
        <p>Number of plays: {plays}</p>
        <p>Number of saves: {saves}</p>
        <p>Number of shares: {shares}</p>
        <p>Number of comments: {comments}</p>
      </div>
    </>
  );
};

const CompForm = ({ addComposition, modalOpen, hideModal }) => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(2);

  const prevStep = () => setStep(1);

  const renderStep = (step, values) => {
    switch (step) {
      case 1:
        return <FormFirstStep />;
      case 2:
        return <FormSuccess values={values} />;
      default:
        return <FormFirstStep />;
    }
  };

  return (
    <Modal isOpen={modalOpen}>
      <HideModalButton onClick={hideModal}>X</HideModalButton>
      <Formik
        initialValues={{
          year: "",
          title: "",
          heading: "",
          content: "",
          link: "",
          video: "",
          plays: "",
          saves: "",
          shares: "",
          comments: "",
        }}
        validationSchema={formSchema}
        onSubmit={(values, { resetForm }) => {
          var today = values.year;
          var dd = today.getDate();
          var mm = today.getMonth() + 1;
          var yyyy = today.getFullYear();
          if (dd < 10) {
            dd = "0" + dd;
          }
          if (mm < 10) {
            mm = "0" + mm;
          }
          var year_string = dd + "." + mm + "." + yyyy;

          var values_string = {
            ...values,
            year: year_string,
          };
          console.log(values);
          console.log(values_string);

          switch (step) {
            case 1:
              console.log("step" + step);
              console.log(values);
              nextStep();
              break;
            case 2:
              console.log("step" + step);
              console.log(values);
              addComposition(values_string);
              prevStep();
              hideModal();
              resetForm();
              break;
            default:
              return null;
          }
        }}>
        {({ values }) => (
          <Form>
            <h1>Add new composition</h1>
            {renderStep(step, values)}
            <FormRow>
              {step === 2 ? (
                <>
                  <Button onClick={prevStep}>Back</Button>
                </>
              ) : null}

              <Button as="button" type="submit">
                {step === 1 ? "Next step" : "Submit"}
              </Button>
            </FormRow>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  modalOpen: state.compositions.modalOpen,
});

const mapDispatchToProps = (dispatch) => ({
  addComposition: (itemContent) => dispatch(addCompositionAction(itemContent)),
  hideModal: () => dispatch(hideModalAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompForm);
