import { Space } from "antd";
import React from "react";

const WhySextion: React.FC = () => {
  return (
    <div className="text-center col-span-2 flex items-center md:-mt-10 py-10 h-screen">
      <div className="w-full max-w-[800px] mx-auto md:h-screen flex flex-col items-center justify-center">
        {/* <p className="uppercase mb-3">Online education</p> */}
        <h2
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="capitalize md:text-5xl text-2xl mb-5"
        >
          We risk the future of our children when we ignore the foot soldiers
          shaping their lives
        </h2>

        <p
          data-aos="fade-Right"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="mb-3"
        >
          Only 2 African countries namely South Africa and Kenya are featured
          among the first 70 countries in the 2023 global educational ranking at
          33rrd and 68th respectively.
        </p>
        <p
          data-aos="fade-Right"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="mb-3"
        >
          {" "}
          9 of the 10 countries with the lowest -ranked educational systems are
          in Africa. With a population of nearly 1.5 billion people Africa's
          blessing of human capital appears to be a curse because eduction seems
          to fall short in its role of mancipation and as a pedestal for
          innovation
        </p>
        <p
          className="mb-10"
          data-aos="fade-Right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          Are you a school administrator, teacher, parent, or educational
          volunteer? Let's talk today{" "}
        </p>
        <Space
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="800"
          size={40}
          className="md:pb-0 pb-10"
        >
          <button className="bg-black text-white border-black p-2 px-8">
            Reach Us
          </button>
        </Space>
      </div>
    </div>
  );
};

export default WhySextion;
