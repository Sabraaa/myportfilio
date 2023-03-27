// import React from "react";
// import "./Layout.scss";
// import AppRoute from "../routes/AppRouts";
// import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";
// import { BrowserRouter,Routes } from "react-router-dom";

// // console.log("Layout component loaded");
// const Layout = ({children}) => {
//   return (
//     <BrowserRouter>
//       <div>
//         <div className="layout-header">
//           <Header />
//         </div>
//         <main className="layout-main">
//           <Routes>{children}</Routes>
//         </main>
//         <div className="layout-footer">
//           <Footer />
//         </div>
//       </div>
//     </BrowserRouter>

//   );
// };

// export default Layout;
import React from "react";
import "./Layout.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { BrowserRouter, Outlet } from "react-router-dom";
import AppRoute from "../routes/AppRoute";

const Layout = () => {
  return (
      <div>
        <div className="layout-header">
          <Header />
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
