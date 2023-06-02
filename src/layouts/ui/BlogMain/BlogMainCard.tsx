import React from "react";
import { Space, Typography } from "antd";
import { FiCalendar, FiClock } from "react-icons/fi";

import { Link } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { IBlogPage } from "../../../pages/BlogMainPage";

const BlogMainCard: React.FC<IBlogPage> = ({
  image,
  date,
  content,
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
        <h3 className="my-2 text-2xl">{title}</h3>
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
          {content}
        </Typography.Paragraph>
      </div>
      <div className="">
        {/* <Divider /> */}
        <Space className="flex justify-end items-center w-full mt-5">
          <Link to={`/blog/${_id}`}>Read More</Link>
          <BsBoxArrowUpRight />
        </Space>
      </div>
    </div>
  );
};

export default BlogMainCard;
