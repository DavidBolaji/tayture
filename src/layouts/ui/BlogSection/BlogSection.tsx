import { Divider, Space } from "antd";
import React from "react";
import { BsHandThumbsUpFill } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  FacebookShareCount,
  //   LinkedinShareButton,
  //   TelegramShareButton,
  //   TwitterShareButton,
  //   WhatsappShareButton,
} from "react-share";
import BlogSidebar from "../BlogSidebar";

const BlogSection: React.FC = () => {
  return (
    <section className="grid grid-cols-7 md:mx-20 mx-5 py-10">
      <div className="col md:col-span-5 col-span-7 md:pr-10">
        <h2 className="text-4xl">
          Thought experiment in the National Library of Thailand
        </h2>
        <div className="md:pr-10">
          <Divider />
          <div className="flex justify-between items-center">
            <Space>
              <div className="flex items-center  cursor-pointer">
                <BsHandThumbsUpFill size={20} />
                <span className="inline-block ml-1 mr-3">5</span>
              </div>
              <div className="flex items-center  cursor-pointer">
                <BiMessageRounded size={20} />
                <span className="inline-block ml-1 mr-3">20</span>
              </div>
            </Space>
            <Space>
              <div className="flex items-center cursor-pointer">
                <EmailShareButton
                  subject="hello"
                  body="nice"
                  children={<EmailIcon size={24} round={true} />}
                  url={""}
                />
              </div>
              <div className="flex items-center cursor-pointer">
                <FacebookShareButton
                  children={<FacebookIcon size={24} round={true} />}
                  url={""}
                />
                <FacebookShareCount url={""} />
              </div>
            </Space>
          </div>
          <Divider />
        </div>
      </div>
      <div className="col md:col-span-2 col-span-7 pt-2 p-5 shadow">
        <BlogSidebar />
      </div>
    </section>
  );
};

export default BlogSection;
