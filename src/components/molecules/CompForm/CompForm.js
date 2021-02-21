import { Formik, Field, Form } from "formik";
import React, { useState } from "react";
import { device } from "../../../styles/Theme";
import styled, { css } from "styled-components";
import { connect } from "react-redux";
import {
  addComposition as addCompositionAction,
  hideModal as hideModalAction,
} from "../../../actions/compositionActions";
import Button from "../../atoms/Button/Button";
import HeadingThree from "../../atoms/HeadingThree/HeadingThree";
import { DatePickerField } from "../../atoms/DatePickerField/DatePickerField";
import * as Yup from "yup";

const Modal = styled.div`
  opacity: 0;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  padding: 32px;
  background: ${(props) => `${props.theme.colors.white}`};
  border-radius: 10px;
  box-shadow: ${(props) => `${props.theme.boxShadow}`};
  z-index: -1;
  max-height: 90vh;
  overflow: auto;
  transition: ${(props) => `${props.theme.transition}`};

  @media ${device.tablet} {
    width: 90vw;
  }

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
    font-size: 1rem;
    line-height: 22px;
    font-family: "Open Sans", sans-serif;
    outline: none;

    &:focus {
      border-color: ${(props) => `${props.theme.colors.deepBlack}`};
    }
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  button,
  a {
    margin: 15px 5px 0;
  }
`;

const HideModalButton = styled.button`
  border: 0;
  position: absolute;
  top: 6px;
  right: 6px;
  font-size: 1.6rem;
  cursor: pointer;
  font-weight: 700;
  background: transparent;
`;

const ErrorText = styled.p`
  font-size: 0.7rem;
  color: red;
`;

const StyledInput = styled(Field)``;

const formSchema = Yup.object().shape({
  year: Yup.string().required("Required"),
  title: Yup.string().required("Required"),
  heading: Yup.string().required("Required"),
  content: Yup.string().required("Required"),
  link: Yup.string().url("Enter valid URL").required("Required"),
  video: Yup.number()
    .typeError("Enter ID as a number")
    .integer("ID must be an integer")
    .positive("ID must be greater than zero")
    .required("Required"),
  plays: Yup.string().required("Required"),
  saves: Yup.string().required("Required"),
  shares: Yup.string().required("Required"),
  comments: Yup.string().required("Required"),
});

export const FormFirstStep = (formikProps) => {
  const { errors } = formikProps;
  return (
    <>
      <FormRow>
        <DatePickerField id="year" name="year" placeholderText="Date" />
        <ErrorText>{errors.year ? errors.year : null}</ErrorText>
      </FormRow>
      <FormRow>
        <StyledInput id="title" name="title" placeholder="Title" />
        <ErrorText>{errors.title ? errors.title : null}</ErrorText>
      </FormRow>
      <FormRow>
        <StyledInput id="heading" name="heading" placeholder="Heading" />
        <ErrorText>{errors.heading ? errors.heading : null}</ErrorText>
      </FormRow>
      <FormRow>
        <StyledInput
          component="textarea"
          id="content"
          name="content"
          placeholder="Content"
        />
        <ErrorText>{errors.content ? errors.content : null}</ErrorText>
      </FormRow>
      <FormRow>
        <StyledInput id="link" name="link" placeholder="URL" />
        <ErrorText>{errors.link ? errors.link : null}</ErrorText>
      </FormRow>
      <FormRow>
        <StyledInput id="video" name="video" placeholder="Vimeo ID" />
        <ErrorText>{errors.video ? errors.video : null}</ErrorText>
      </FormRow>
      <FormRow>
        <StyledInput id="plays" name="plays" placeholder="Number of plays" />
        <ErrorText>{errors.plays ? errors.plays : null}</ErrorText>
      </FormRow>
      <FormRow>
        <StyledInput id="saves" name="saves" placeholder="Number of saves" />
        <ErrorText>{errors.saves ? errors.saves : null}</ErrorText>
      </FormRow>
      <FormRow>
        <StyledInput id="shares" name="shares" placeholder="Number of shares" />
        <ErrorText>{errors.shares ? errors.shares : null}</ErrorText>
      </FormRow>
      <FormRow>
        <StyledInput
          id="comments"
          name="comments"
          placeholder="Number of comments"
        />
        <ErrorText>{errors.comments ? errors.comments : null}</ErrorText>
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
        <p>
          <b>Date:</b> {year_string}
        </p>
        <p>
          <b>Title:</b> {title}
        </p>
        <p>
          <b>Heading:</b> {heading}
        </p>
        <p>
          <b>Content:</b> {content}
        </p>
        <p>
          <b>Link:</b> {link}
        </p>
        <p>
          <b>Vimeo ID:</b> {video}
        </p>
        <p>
          <b>Number of plays:</b> {plays}
        </p>
        <p>
          <b>Number of saves:</b> {saves}
        </p>
        <p>
          <b>Number of shares:</b> {shares}
        </p>
        <p>
          <b>Number of comments:</b> {comments}
        </p>
      </div>
    </>
  );
};

const CompForm = ({ addComposition, modalOpen, hideModal }) => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(2);

  const prevStep = () => setStep(1);

  const renderStep = (step, values, errors, touched) => {
    switch (step) {
      case 1:
        return <FormFirstStep errors={errors} touched={touched} />;
      case 2:
        return <FormSuccess values={values} />;
      default:
        return <FormFirstStep errors={errors} touched={touched} />;
    }
  };

  return (
    <Modal isOpen={modalOpen}>
      <HideModalButton onClick={hideModal}>&#10005;</HideModalButton>

      <HeadingThree>Add new composition</HeadingThree>
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
        {({ values, errors, touched }) => (
          <Form>
            {renderStep(step, values, errors, touched)}
            <ButtonsWrapper>
              {step === 2 ? (
                <>
                  <Button onClick={prevStep}>Back</Button>
                </>
              ) : null}

              <Button as="button" type="submit">
                {step === 1 ? "Next step" : "Submit"}
              </Button>
            </ButtonsWrapper>
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
