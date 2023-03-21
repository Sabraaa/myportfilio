import React from "react";

import AppRoute from "./routes/AppRouts";
import Layout from "./Layout/Layout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <AppRoute/>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
