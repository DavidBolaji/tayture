import React from "react";
import { Image, Button } from "antd";
import { images } from "../../../constants/image";

const HeroSection: React.FC = () => {
  return (
    <section className="md:grid grid-cols-2 md:bg-blue-700 bg-white md:mx-20 mx-5 flex flex-col-reverse">
      <div className="md:col-span-1 md:p-10 col-span-2 flex items-center md:mt-0 mt-10">
        <div className="bg-white w-42 md:p-5 pb-5">
          <p className="uppercase mb-3">Online education</p>
          <h1 className="capitalize text-3xl mb-3">
            Learn the skills you need to Succeed
          </h1>
          <p className="mb-3">
            Free online Resources from the world’s Leading experts. join 18+
            million Learners today.
          </p>
          <Button size="large">Learn More</Button>
        </div>
      </div>
      <div className="md:col-span-1 col-span-2 md:bg-blue-700 bg-blue-700 md:h-auto h-62">
        <div className="p-10">
          <Image src={images.Hero} preview={false} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
