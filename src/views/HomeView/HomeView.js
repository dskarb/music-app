import React from "react";
import ModalButton from "../../components/molecules/ModalButton/ModalButton";
import HeroSection from "../../components/organisms/HeroSection/HeroSection";
import DiscographySection from "../../components/organisms/DiscographySection/DiscographySection";
import ToursSection from "../../components/organisms/ToursSection/ToursSection";
import LatterSection from "../../components/organisms/LatterSection/LatterSection";
import { connect } from "react-redux";
import { showModal as showModalAction } from "../../actions/compositionActions";

const HomeView = ({ showModal }) => (
  <>
    <HeroSection />
    <DiscographySection />
    <ToursSection />
    <LatterSection />
    <ModalButton onClick={showModal}>Add</ModalButton>
  </>
);

const mapDispatchToProps = (dispatch) => ({
  showModal: () => dispatch(showModalAction()),
});

export default connect(null, mapDispatchToProps)(HomeView);
