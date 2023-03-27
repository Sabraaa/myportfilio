import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet
} from "react-router-dom";

import Home from "../components/Home/Home";
import About from "../screen/About/About";
import Layout from "../Layout/Layout";
import NoPath from "../screen/NoPath/NoPath";

const AppRoute = () => {
  return (
    <BrowserRouter>
    <div className="approutes">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPath />} />
        </Route>
      </Routes>
    </div>
  </BrowserRouter>
  );
};

export default AppRoute;
