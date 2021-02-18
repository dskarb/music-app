import React from "react";
import Container from "../../components/atoms/Container/Container";
import CompForm from "../../components/molecules/CompForm/CompForm";

class NewCompView extends React.Component {
  render() {
    return (
      <Container>
        <h1>New Composition View</h1>
        <CompForm />
      </Container>
    );
  }
}

export default NewCompView;
