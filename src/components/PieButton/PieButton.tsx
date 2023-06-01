import React from "react";
import { GiTeacher } from "react-icons/gi";
import { RiParentFill } from "react-icons/ri";
import { FaSchool } from "react-icons/fa";
import "./PieButton.css";
import { Button, notification } from "antd";

const PieButton: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();

  const d = () => {
    api.open({
      key: "d1",
      message: "Teachers",
      placement: "bottom",
      description:
        " –Turn 300k+ teachers to skilled and progressive models for learners, thereby achieving broadened career opportunities, professional fulfillment in the short and long term and outstanding learners performance.",
      icon: <GiTeacher size={30} color={"white"} />,
    });
  };

  const d2 = () => {
    api.open({
      key: "d2",
      message: "Parents",
      placement: "topLeft",
      description:
        " –Equip 500+ parents to effectively support the academic and general development of learners.",
      icon: <GiTeacher size={30} color={"white"} />,
    });
  };

  const d3 = () => {
    api.open({
      key: "d1",
      message: "Schools",
      placement: "topRight",
      description:
        " –Empower 10k+ school administrators to create an enabling environment for developing academic excellence and high life performance in learners",
      icon: <FaSchool color="white" size={30} />,
    });
  };

  return (
    <div className="flex items-center justify-center md:mx-20 mx-5 py-40 ">
      <div className="relative rounded-full shadow-2xl overflow-hidden bg-pink-600">
        <div
          id=""
          className="w-72 h-72 rounded-full circle bg-[#fafafa] shadow overflow-hidden"
        ></div>
        <div className="absolute bottom-9 right-[110px] cursor-pointer animate__animated animate__flash animate__slow animate__infinite 	infinite">
          <Button onClick={() => d()} className="border-none">
            <GiTeacher size={30} color={"blue"} />
          </Button>
        </div>
        <div className="cursor-pointer trans2 absolute w-3 rotate-[65deg] h-[168px] translate-x-16 -translate-y-[190px] shadow-2xl bg-[#fff]"></div>
        <div className="absolute top-[80px] left-[45px] cursor-pointer  animate__animated animate__flash animate__slow animate__infinite 	infinite">
          <Button onClick={() => d2()} className="border-none">
            <RiParentFill color="blue" size={30} />
          </Button>
        </div>
        <div className="cursor-pointer trans2 bg-[#fff] absolute w-3 h-32 right-0 z-20 rotate-[120deg] -translate-x-16 -translate-y-[165px] shadow-2xl"></div>
        <div className="absolute right-[40px] top-[80px] cursor-pointer  animate__animated animate__flash animate__slow animate__infinite 	infinite">
          <Button onClick={() => d3()} className="border-none">
            {/* // @ts-ignore */}
            <FaSchool color="blue" size={30} />
          </Button>
        </div>
        <div className="cursor-pointer trans2 absolute w-3 h-40 shadow-2xl bg-[#fff] -top-5 left-[48%]"></div>
        <div className="trans w-12 h-12 rounded-full bg-[#fff] absolute top-[120px] left-[120px]  border-none"></div>
      </div>
      {/* <div id="my-pie-chart two"></div>
      <div id="my-pie-chart three"></div> */}
      {contextHolder}
    </div>
  );
};

export default PieButton;
