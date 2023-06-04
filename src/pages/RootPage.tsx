import React, { useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import HeaderUi from "../layouts/HeaderUi";
import Footer from "../layouts/ui/FooterSection/Footer";
import { useLocation } from "react-router-dom";

const RootPage: React.FC = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <header>
        <HeaderUi />
      </header>
      <main className="pt-[9vh]">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default RootPage;
