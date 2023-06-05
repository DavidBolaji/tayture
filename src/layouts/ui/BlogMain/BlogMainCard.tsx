import React from "react";
import { Space, Typography } from "antd";
import { FiCalendar, FiClock } from "react-icons/fi";

import { Link } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { IBlogPage } from "../../../pages/BlogMainPage";

const BlogMainCard: React.FC<IBlogPage> = ({
  image,
  date,
  description,
  _id,
  title,
  read,
}) => {
  return (
    <div className="md:col-span-1 col-span-3 mb-3 shadow p-3 relative" id={_id}>
      <div className="h-48">
        <img src={image} className="w-full h-full object-cover" />
      </div>
      <div>
        <Typography.Paragraph
          ellipsis={{
            rows: 1,
          }}
          className="mt-5 text-lg font-['Oswald']"
          // className="font-[arial] mt-3"
        >
          {/* <h3 > */}
          {title}
          {/* </h3> */}
          {/* {description} */}
        </Typography.Paragraph>
        <div className="flex items-center gap-5">
          <Space>
            <FiClock />
            <span className="text-sm font-thin tracking-tighter">{read}</span>
          </Space>

          <Space>
            <FiCalendar />
            <span className="text-sm font-thin tracking-tighter">{date}</span>
          </Space>
        </div>
        <Typography.Paragraph
          ellipsis={{
            rows: 3,
          }}
          className="font-[arial] mt-3"
        >
          {description}
        </Typography.Paragraph>
      </div>
      <div className="">
        {/* <Divider /> */}
        <Space className="flex justify-end items-center w-full mt-5">
          <Link to={`/${_id}`}>Read More</Link>
          <BsBoxArrowUpRight />
        </Space>
      </div>
    </div>
  );
};

export default BlogMainCard;
