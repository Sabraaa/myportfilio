import React from "react";
import "./Layout.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

console.log("Layout component loaded"); 
const Layout = ({children}) => {
  return (
    <div>
      <div className="layout-header">
        <Header />
      </div>
      {/* <div>asdfghjk</div> */}
      <main className="layout-main">
        {children}
      </main>
      <div className="layout-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
