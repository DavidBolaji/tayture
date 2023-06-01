import React from "react";
import { Image, Space } from "antd";
import { images } from "../../../constants/image";

const HeroSection: React.FC = () => {
  return (
    <section className="md:grid grid-cols-2 md:mx-20 mx-5 flex flex-col-reverse">
      <div className="text-center col-span-2 flex items-center ">
        <div className="w-full max-w-[800px] mx-auto md:h-screen h-[400px] flex flex-col items-center justify-center">
          {/* <p className="uppercase mb-3">Online education</p> */}
          <h1
            data-aos="fade-Right"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="capitalize md:text-5xl text-3xl mb-3 animate__animated animate__backInLeft"
          >
            Transforming secondary school learners by enabling the foot Soldiers
          </h1>

          <p className="mb-3 animate__animated animate__backInRight">
            Schools, Teachers and Parents rely on Tayture for training and
            support to achieve excellence in learners' academic and overall life
            performance
          </p>
          <Space className="md:pb-0 py-10 animate__animated animate__bounceInUp">
            <button className="bg-black text-white border-black p-2 px-8">
              Reach Us
            </button>
            <button className="bg-black text-white border-black p-2">
              Stay Informed
            </button>
          </Space>
        </div>
      </div>
      <div className="md:col-span-1 col-span-2 md:bg-blue-700 bg-blue-700 md:h-auto h-62 hidden">
        <div className="p-10">
          <Image src={images.Hero} preview={false} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
