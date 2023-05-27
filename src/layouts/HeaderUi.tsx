import styled from "@emotion/styled";
import { Menu, Button, ConfigProvider, Drawer, Space } from "antd";
import { FiMenu } from "react-icons/fi";
import React, { useState } from "react";
import type { MenuProps } from "antd";

export const StyledMenu = styled(Menu)`
  border: none !important;
  overflow: visible;
  width: 300px;

  @media only screen and (max-width: 960px) {
    width: 100% !important;
  }
`;

export const StyledDrawer = styled(Drawer)`
  .ant-drawer-header {
    display: flex;
    font-weight: 800;

    button {
      position: absolute;
      right: 20px;
    }
  }

  .ant-drawer-body {
    padding-left: 5px;
    border-radius: none;
    padding-right: 5px;
  }
`;

export const LoginButton = styled(Button)`
  &:hover {
    background-color: #fbf9f9;
  }
`;

export const SignupButton = styled(Button)`
  &:hover {
    border-color: #000 !important;
  }
`;

const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "home",
  },
  {
    label: "About",
    key: "about",
  },
  {
    label: "Contact",
    key: "contact",
  },
  {
    label: "Blog",
    key: "blog",
  },
];

const HeaderUi: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <nav className="h-[8vh] bg-white fixed w-full z-30 shadow md:px-[80px] px-5 flex items-center justify-between">
      <div className="font-extrabold">
        <h2 className="text-2xl">Tayture</h2>
      </div>
      <div className="md:flex justify-end items-center hidden">
        <StyledMenu
          mode="horizontal"
          items={items}
          onClick={onClick}
          selectedKeys={[current]}
        />
        <ConfigProvider
          theme={{
            token: {
              colorPrimaryHover: "#000000",
              colorText: "#000",
            },
          }}
        >
          <LoginButton className="font-bold border border-black rounded-none mr-3">
            Login
          </LoginButton>
        </ConfigProvider>
        <ConfigProvider
          theme={{
            token: {
              colorPrimaryBorder: "#000000",
              colorPrimaryHover: "#fff",
            },
          }}
        >
          <SignupButton className="bg-black border border-black text-white font-bold rounded-none hover:text-white">
            Signup
          </SignupButton>
        </ConfigProvider>
      </div>
      <div
        className="hover:cursor-pointer border border-[#fafafa] p-2 rounded-md md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <FiMenu size={24} />
      </div>
      <StyledDrawer
        title="Tayture"
        placement="top"
        height={350}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        footer={[
          <Space key={"nav"} className="ml-3">
            <ConfigProvider
              theme={{
                token: {
                  colorPrimaryHover: "#000000",
                  colorText: "#000",
                },
              }}
            >
              <LoginButton className="font-bold border border-black rounded-none mr-3">
                Login
              </LoginButton>
            </ConfigProvider>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimaryBorder: "#000000",
                  colorPrimaryHover: "#fff",
                },
              }}
            >
              <SignupButton className="bg-black border border-black text-white font-bold rounded-none hover:text-white">
                Signup
              </SignupButton>
            </ConfigProvider>
          </Space>,
        ]}
      >
        <StyledMenu
          mode="vertical"
          className="w-full"
          items={items}
          onClick={onClick}
          selectedKeys={[current]}
        />
      </StyledDrawer>
    </nav>
  );
};

export default HeaderUi;
