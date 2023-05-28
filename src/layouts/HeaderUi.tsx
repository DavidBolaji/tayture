import styled from "@emotion/styled";
import {
  Menu,
  Button,
  ConfigProvider,
  Drawer,
  Space,
  Modal,
  Divider,
} from "antd";
import { FiMenu } from "react-icons/fi";
import React, { useState } from "react";
import type { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import Axios from "../api/auth";

export const StyledMenu = styled(Menu)`
  border: none !important;
  overflow: visible;
  /* width: 300px; */
  width: 150px;

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
    key: "/",
  },
  {
    label: "Blog",
    key: "blog",
  },
];

const HeaderUi: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mIsOpen, setMIsOpen] = useState<boolean>(false);
  const [m2IsOpen, setM2IsOpen] = useState<boolean>(false);
  const [current, setCurrent] = useState("mail");
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    setIsOpen(false);
    setCurrent(e.key);
    navigate(e.key);
  };

  const handleLogin = async (response: any) => {
    setM2IsOpen(false);
    setMIsOpen(false);
    const req = await Axios.post("/user/register", {
      token: response.tokenId,
    });
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
          <LoginButton
            onClick={() => setMIsOpen(true)}
            className="font-bold border border-black rounded-none mr-3"
          >
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
          <SignupButton
            onClick={() => setM2IsOpen(true)}
            className="bg-black border border-black text-white font-bold rounded-none hover:text-white"
          >
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
        height={250}
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
              <LoginButton
                onClick={() => {
                  setIsOpen(false);
                  setMIsOpen(true);
                }}
                className="font-bold border border-black rounded-none mr-3"
              >
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
              <SignupButton
                onClick={() => {
                  setIsOpen(false);
                  setM2IsOpen(true);
                }}
                className="bg-black border border-black text-white font-bold rounded-none hover:text-white"
              >
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
      <Modal
        open={mIsOpen}
        footer={null}
        closable={true}
        onCancel={() => setMIsOpen(false)}
        centered
      >
        <div className="flex flex-col items-center justify-center h-64">
          <h1 className="text-3xl mb-20">Welcome Back</h1>

          <GoogleLogin
            clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
            buttonText="Log in with Google"
            onSuccess={handleLogin}
            onFailure={handleLogin}
            cookiePolicy={"single_host_origin"}
          />
          <Divider />
          <p className="text-slate-400 text-sm mt-5">
            Don't have an account{" "}
            <span
              className="text-blue-300 cursor-pointer"
              onClick={() => {
                setMIsOpen(false);
                setM2IsOpen(true);
              }}
            >
              Sign up
            </span>
          </p>
        </div>
      </Modal>
      <Modal
        open={m2IsOpen}
        footer={null}
        closable={true}
        onCancel={() => setM2IsOpen(false)}
        centered
      >
        <div className="flex flex-col items-center justify-center h-64">
          <h1 className="text-3xl mb-20">Join Tayture</h1>

          <GoogleLogin
            clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
            buttonText="Sign up with Google"
            onSuccess={handleLogin}
            onFailure={handleLogin}
            cookiePolicy={"single_host_origin"}
          />
          <Divider />
          <p className="text-slate-400 text-sm mt-5">
            Have an account already{" "}
            <span
              className="text-blue-300 cursor-pointer"
              onClick={() => {
                setM2IsOpen(false);
                setMIsOpen(true);
              }}
            >
              Log in
            </span>
          </p>
        </div>
      </Modal>
    </nav>
  );
};

export default HeaderUi;
