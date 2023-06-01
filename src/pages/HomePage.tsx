import React from "react";
import HeroSection from "../layouts/ui/HeroSection/HeroSection";
// import BrandSection from "../layouts/ui/BrandSection/BrandSection";
// import Testimonial from "../layouts/ui/TestimonialSection/Testimonial";
// import Working from "../layouts/ui/WorkingSection/Working";
import PieButton from "../components/PieButton/PieButton";
import { Divider } from "antd";
import WhySextion from "../layouts/ui/WhySection/WhySextion";

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      {/* <BrandSection /> */}
      {/* <Testimonial /> */}
      <section className="text-center md:mx-20 mx-5 md:h-screen">
        <Divider>
          <h2 className="uppercase md:text-4xl text-2xl -pt-10 p-2 border md:px-60 rounded-md">
            On a Journey To
          </h2>
        </Divider>
        <PieButton />
      </section>
      <section className="text-center md:mx-20 mx-5 md:h-screen">
        <Divider>
          <h2 className="uppercase md:text-4xl text-3xl -pt-10 p-2 border md:px-60 rounded-md">
            Why Tayture
          </h2>
        </Divider>
        <WhySextion />
      </section>

      {/* <Working /> */}
    </>
  );
};

export default HomePage;
