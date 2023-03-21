import React from "react";
import "./Layout.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const appLayout = () => {
  return (
    <div>
      <div className="layout-header">
        <Header />
      </div>
      <div className="layout-footer">
        <Footer />
      </div>
    </div>
  );
};

export default appLayout;
