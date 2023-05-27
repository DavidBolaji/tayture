import { Avatar } from "antd";
import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import { UserOutlined } from "@ant-design/icons";

export interface ITestimonials {
  id: string;
  para: string;
  name: string;
  role: string;
}

const TestimonialCard: React.FC<ITestimonials> = ({ id, para, name, role }) => {
  return (
    <div
      className="border shadow p-10 md:col-span-1 col-span-3"
      style={{
        backgroundColor: id === "b" ? "#1d4ed8" : "#fff",
      }}
    >
      <div className="mb-5">
        <ImQuotesLeft size={40} color={`${id === "b" ? "#fff" : "#1d4ed8"}`} />
      </div>
      <p
        className="text-lg mb-5"
        style={{
          color: id === "b" ? "#fff" : "#1d4ed8",
        }}
      >
        {para}
      </p>
      <div className="flex items-center gap-5">
        <div>
          <Avatar
            size={"large"}
            style={{ backgroundColor: id === "b" ? "#fff" : "#1d4ed8" }}
            icon={<UserOutlined color={`${id !== "b" ? "#fff" : "#1d4ed8"}`} />}
          />
        </div>
        <div>
          <h4
            style={{
              color: id !== "b" ? "#1d4ed8" : "#fff",
            }}
          >
            {name}
          </h4>
          <p
            style={{
              color: id !== "b" ? "#1d4ed8" : "#fff",
            }}
          >
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
