import React from "react";
import { Outlet } from "react-router-dom";
import HeaderUi from "../layouts/HeaderUi";
import Footer from "../layouts/ui/FooterSection/Footer";

const RootPage: React.FC = () => {
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
