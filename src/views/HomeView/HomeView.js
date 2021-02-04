import React from "react";
import Container from "../../components/atoms/Container/Container";
import HeroSection from "../../components/organisms/HeroSection/HeroSection";
import DiscographySection from "../../components/organisms/DiscographySection/DiscographySection";
import ToursSection from "../../components/organisms/ToursSection/ToursSection";

class HomeView extends React.Component {
  render() {
    return (
      <>
        <HeroSection />
        <DiscographySection />
        <ToursSection />
      </>
    );
  }
}

export default HomeView;
