import styled from "@emotion/styled";
import { ConfigProvider, Divider, Input, Space } from "antd";
import React from "react";
import { FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";

const StyledSearch = styled(Input.Search)`
  button {
    background-color: black;
    font-weight: 700;
    text-transform: uppercase;
  }

  button:hover {
    background-color: black !important;
  }

  input {
    outline: none;
    color: black !important;
  }
`;

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-black">
      <div className="md:mx-20 mx-5">
        <div className="grid grid-cols-2 py-10">
          <h2 className="text-white text-2xl col-span-2 md:col-span-1 md:text-left text-center">
            Want Us To Email You About Special Offers And Updates?
          </h2>
          <div className="bg-white flex items-center h-12 col-span-2 md:col-span-1 md:mt-0 mt-10">
            <ConfigProvider
              theme={{
                token: {
                  borderRadius: 0,
                  colorBorder: "#fff",
                  // colorPrimary: "blue",
                  colorPrimaryBorder: "#000000",
                  colorPrimaryHover: "#fff",
                },
              }}
            >
              <StyledSearch
                className="border border-white"
                prefix={
                  <FiSend
                    // color={"blue"}
                    size={30}
                    style={{
                      marginRight: 10,
                    }}
                  />
                }
                placeholder="Enter yout email"
                size="large"
                enterButton="Subscribe Now"
                width={10}
                title="search"
              />
            </ConfigProvider>
          </div>
        </div>
        {/* <ConfigProvider
          theme={{
            token: {
              colorSplit: "#fff",
            },
          }}
        >
          <Divider className="text-white" />
        </ConfigProvider> */}
        <div className="grid grid-cols-4 py-12">
          <div className="text-white md:col-span-1 col-span-2">
            <Space direction="vertical">
              <h3 className="mb-3 underline text-lg">Site Map</h3>
              <Link to="/">Documentation</Link>
              <Link to="/">Feedback</Link>
              <Link to="/">Plugins</Link>
              <Link to="/">Support Forums</Link>
            </Space>
          </div>
          <div className="text-white md:col-span-1 col-span-2 mb-10 md:mb-0">
            <Space direction="vertical">
              <h3 className="mb-3 underline text-lg">Useful links</h3>
              <Link to="/">Home</Link>
              <Link to="/">About us</Link>
              <Link to="/">Contact</Link>
              <Link to="/">Blog</Link>
            </Space>
          </div>
          <div className="text-white md:col-span-1 col-span-2 mb-10 md:mb-0">
            <Space direction="vertical">
              <h3 className="mb-3 underline text-lg">Social Contact</h3>
              <Link to="/">Facebook</Link>
              <Link to="/">Twitter</Link>
              <Link to="/">Instagram</Link>
              <Link to="/">Youtube</Link>
            </Space>
          </div>
          <div className="text-white md:col-span-1 col-span-2 mb-10 md:mb-0">
            <Space direction="vertical">
              <h3 className="mb-3 underline text-lg">Our Support</h3>
              <Link to="/">Help center</Link>
              <Link to="/">Status</Link>
              <Link to="/">Contact Support</Link>
              <Link to="/">License</Link>
            </Space>
          </div>
        </div>
        <ConfigProvider
          theme={{
            token: {
              colorSplit: "#fff",
            },
          }}
        >
          <Divider className="text-white" />
        </ConfigProvider>
        <div className="w-full  h-[8vh]">
          <h5 className="text-white text-center">© 2023 Tayture</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
