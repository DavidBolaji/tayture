import React from "react";
import HeroSection from "../layouts/ui/HeroSection/HeroSection";
import BrandSection from "../layouts/ui/BrandSection/BrandSection";
import Testimonial from "../layouts/ui/TestimonialSection/Testimonial";
import Working from "../layouts/ui/WorkingSection/Working";
import PieButton from "../components/PieButton/PieButton";

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <BrandSection />
      <Testimonial />

      <PieButton />

      <Working />
    </>
  );
};

export default HomePage;
