import React, { useRef, useState } from "react";
import { GiTeacher } from "react-icons/gi";
import { RiParentFill } from "react-icons/ri";
import { FaSchool } from "react-icons/fa";
import "./PieButton.css";
import { Button, ConfigProvider, Tour, TourProps } from "antd";
import styled from "@emotion/styled";

export const StyledTour = styled(Tour)``;

const PieButton: React.FC = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useState<boolean>(false);

  const steps: TourProps["steps"] = [
    {
      title: "Teachers",
      description:
        "Turn 300k+ teachers to skilled and progressive models for learners, thereby achieving broadened career opportunities, professional fulfillment in the short and long term and outstanding learners performance.",
      // placement: "right",
      cover: <GiTeacher size={30} color={"white"} />,
      target: () => ref1.current,
    },
    {
      title: "Parents",
      description:
        "Equip 500+ parents to effectively support the academic and general development of learners.",
      // placement: "bottom",
      cover: <RiParentFill color="white" size={30} />,
      target: () => ref2.current,
    },
    {
      title: "Schools",
      // placement: "left",
      cover: <FaSchool ref={ref3} color="white" size={30} />,
      description:
        "Empower 10k+ school administrators to create an enabling environment for developing academic excellence and high life performance in learners",
      target: () => ref3.current,
    },
  ];
  return (
    <div className="flex items-center justify-center bg-[#fafafa] md:mx-20 mx-5 py-40 ">
      <div className="relative rounded-full overflow-clip shadow-2xl">
        <div
          id=""
          className="w-72 h-72 rounded-full circle bg-[#fafafa] shadow"
        ></div>
        <div className="absolute bottom-9 right-[110px] cursor-pointer animate__animated animate__flash animate__slow animate__infinite 	infinite">
          <Button
            onClick={() => setOpen(true)}
            className="border-none"
            ref={ref1}
          >
            <GiTeacher size={30} color={"blue"} />
          </Button>
        </div>
        <div className="cursor-pointer trans2 absolute w-3 rotate-[65deg] h-[168px] translate-x-16 -translate-y-[190px] shadow-2xl bg-[#fff]"></div>
        <div className="absolute top-[80px] left-[45px] cursor-pointer">
          <Button
            onClick={() => setOpen(true)}
            className="border-none"
            ref={ref2}
          >
            <RiParentFill color="blue" size={30} />
          </Button>
        </div>
        <div className="cursor-pointer trans2 bg-[#fff] absolute w-3 h-32 right-0 z-30 rotate-[120deg] -translate-x-16 -translate-y-[165px] shadow-2xl"></div>
        <div className="absolute right-[40px] top-[80px] cursor-pointer">
          <Button
            onClick={() => setOpen(true)}
            className="border-none"
            ref={ref3}
          >
            <FaSchool color="blue" size={30} />
          </Button>
        </div>
        <div className="cursor-pointer trans2 absolute w-3 h-40 shadow-2xl bg-[#fff] -top-5 left-[48%]"></div>
        <div className="trans w-12 h-12 rounded-full bg-[#fff] absolute top-[120px] left-[120px]  border-none"></div>
      </div>
      {/* <div id="my-pie-chart two"></div>
      <div id="my-pie-chart three"></div> */}
      <ConfigProvider
        theme={{
          token: {},
        }}
      >
        <StyledTour
          type="primary"
          open={open}
          onClose={() => setOpen(false)}
          steps={steps}
          // mask={false}
        />
      </ConfigProvider>
    </div>
  );
};

export default PieButton;
