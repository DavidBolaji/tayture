import { Avatar } from "antd";
import React from "react";

export interface IWorkingcard {
  id: string;
  count: string;
  headings: string;
  text: string;
  color: string;
}

const WorkingCard: React.FC<IWorkingcard> = ({
  count,
  headings,
  text,
  color,
}) => {
  return (
    <div className="grid grid-cols-6 gap-5">
      <div className="col-span-1">
        <Avatar size={"large"} style={{ backgroundColor: color }}>
          {count}
        </Avatar>
      </div>
      <div className="md:col-span-5 col-span-6 flex-col gap-5">
        <h3>{headings}</h3>
        <p>{text}</p>
      </div>
      <div></div>
    </div>
  );
};

export default WorkingCard;
