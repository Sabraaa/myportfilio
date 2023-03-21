import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import About from "../screen/About/About";
// import Projects from './Projects';
// import resume from './Resume';

const AppRoute = () => {
  return (
    <Router>
      <div className="approutes">
        <Header />
        <Routes>
          <Route exact path="/src/components/Home" component={<Home />} />
          <Route path="/src/screen/About" component={<About />} />
          {/* <Route path="/src/screen/projects" component={<Projects/>} /> */}
          {/* <Route path="/src/screen/resume" component={<resume/>} /> */}
        </Routes>
      <Footer />
      </div>
    </Router>
  );
};

export default AppRoute;
