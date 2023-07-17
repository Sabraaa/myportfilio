import React from "react";
import "./Layout.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hamburger from "../components/Hamburger/Hamburger";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="layout-header">
        <div className="header-desktop">
          <Header />
        </div>
        <div className="header-hamburger">
      <Hamburger/>
        </div>
      </div>
      <main className="layout-main">
        <Outlet />
      </main>
      <div className="layout-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
