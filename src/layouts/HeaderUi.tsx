import styled from "@emotion/styled";
import {
  Menu,
  Button,
  ConfigProvider,
  Drawer,
  Space,
  Modal,
  Divider,
  Avatar,
  message,
  Input,
  Select,
  SelectProps,
} from "antd";
import { FiLogIn, FiMenu } from "react-icons/fi";
import React, { useRef, useState } from "react";
import type { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userAction";
import { Dispatch } from "redux";

export const StyledMenu = styled(Menu)`
  border: none !important;
  overflow: visible;
  /* width: 300px; */
  width: 140px;
  background-color: #ffffff00;

  .ant-menu-submenu-open .ant-menu-submenu-active {
    background-color: antiquewhite !important;
    border: pink !important;
  }

  @media only screen and (max-width: 960px) {
    width: 100% !important;
  }
`;

export const StyledMenu2 = styled(Menu)`
  border: none !important;
  > * {
    border-color: #fff;
  }
  .ant-menu-submenu-open:hover > .ant-menu-submenu-active:hover {
    border: none !important;
  }
  /* .ant-menu-submenu-active {
    border: none !important;
  } */
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

const options: SelectProps["options"] = [
  {
    label: "Teacher",
    value: "teacher",
  },
  {
    label: "Administrator",
    value: "admin",
  },
  {
    label: "Parent",
    value: "parent",
  },
];

const HeaderUi: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mIsOpen, setMIsOpen] = useState<boolean>(false);
  const [m2IsOpen, setM2IsOpen] = useState<boolean>(false);
  const [extra, setExtra] = useState<boolean>(false);
  const [res, setRes] = useState<{
    id: string;
    phone?: string;
    role?: string[];
  } | null>(null);
  const phoneRef: any = useRef(null);
  const [role, setRole] = useState<string[]>([]);
  const [current, setCurrent] = useState("mail");
  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();
  const userRed = useSelector((state: any) => state.user);
  const { user, error } = userRed;
  const onClick: MenuProps["onClick"] = (e) => {
    setIsOpen(false);
    setCurrent(e.key);
    navigate(e.key);
  };

  const handleChange = (value: string[]) => {
    setRole(value);
  };

  const handleLogin = async (response: any) => {
    setM2IsOpen(false);
    setMIsOpen(false);
    setExtra(true);
    setRes({ id: response.tokenId });
    // dispatch(login(response));
  };

  const handleLogin1 = async (response: any) => {
    setM2IsOpen(false);
    setMIsOpen(false);
    dispatch(login({ id: response.tokenId, phone: "", role: [""] }));
    setExtra(false);
  };

  const submit = () => {
    dispatch(login({ ...res, phone: phoneRef.current.input.value, role }));
    setExtra(false);
  };

  if (error) {
    message.error(error);
  }

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
        {typeof user?.name === "undefined" ? (
          <>
            {/* <ConfigProvider
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
            </ConfigProvider> */}

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
          </>
        ) : (
          <ConfigProvider
            theme={{
              token: {
                colorPrimaryBorder: "#fff !important",
                controlItemBgActive: "#fff !important",
                colorBgContainer: "#ffffff00",
              },
            }}
          >
            <StyledMenu2
              mode="horizontal"
              onClick={onClick}
              className="mt-3"
              items={[
                {
                  label: "",
                  key: "subMenu",
                  icon: <Avatar src={user?.picture} size={28} />,
                  children: [
                    user?.isAdmin && {
                      label: "Admin",
                      key: "admin",
                      icon: <FiLogIn />,
                    },
                    {
                      label: "Logout",
                      key: "logout",
                      icon: <FiLogIn />,
                    },
                  ],
                },
              ]}
            />
          </ConfigProvider>
        )}
      </div>
      {typeof user?.name === "undefined"}
      {typeof user?.name === "undefined" ? null : (
        <div className="md:hidden block translate-x-[85px]">
          <ConfigProvider
            theme={{
              token: {
                colorPrimaryBorder: "#fff !important",
                controlItemBgActive: "#fff !important",
                colorBgContainer: "#ffffff00",
              },
            }}
          >
            <StyledMenu2
              mode="horizontal"
              className="mt-3"
              onClick={onClick}
              items={[
                {
                  label: "",
                  key: "subMenu",
                  icon: <Avatar src={user?.picture} size={28} />,
                  children: [
                    user?.isAdmin && {
                      label: "Admin",
                      key: "admin",
                      icon: <FiLogIn />,
                    },
                    {
                      label: "Logout",
                      key: "logout",
                      icon: <FiLogIn />,
                    },
                  ],
                },
              ]}
            />
          </ConfigProvider>
        </div>
      )}
      <div
        className="cursor-pointer  border border-[#fafafa] p-2 rounded-md md:hidden"
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
            {/* <ConfigProvider
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
            </ConfigProvider> */}

            <ConfigProvider
              theme={{
                token: {
                  colorPrimaryBorder: "#000000",
                  colorPrimaryHover: "#fff",
                },
              }}
            >
              {typeof user?.name === "undefined" ? (
                <SignupButton
                  onClick={() => {
                    setIsOpen(false);
                    setM2IsOpen(true);
                  }}
                  className="bg-black border border-black text-white font-bold rounded-none hover:text-white"
                >
                  Signup
                </SignupButton>
              ) : null}
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
            onSuccess={handleLogin1}
            onFailure={handleLogin1}
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
        open={extra}
        footer={null}
        closable={true}
        onCancel={() => setExtra(false)}
        centered
      >
        <div className="flex flex-col items-center justify-center h-64">
          <h1 className="text-3xl mb-5">You are almost done</h1>

          <Input
            ref={phoneRef}
            type="text"
            placeholder="Enter your phone number"
            className="mb-5"
            required
          />
          <Select
            mode="multiple"
            className="mb-5"
            allowClear
            style={{ width: "100%" }}
            placeholder="Please select"
            onChange={handleChange}
            options={options}
          />

          <button
            className="text-white w-full p-2 bg-black"
            onClick={() => submit()}
          >
            Submit
          </button>
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
