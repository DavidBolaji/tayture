import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const AuthLayer: React.FC<Props> = ({ children }) => {
  const user: any = useSelector((state: any) => state.user.user);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (typeof user?.name === "undefined") {
  //     return navigate("/");
  //   }

  //   if (!user?.isAdmin) {
  //     return navigate("/");
  //   }
  // }, []);
  return <div>{children}</div>;
};

export default AuthLayer;
