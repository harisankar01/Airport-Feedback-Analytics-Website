import React from "react";
import DashboardApp from "./Dashboard";
import Ecommerce from "./Dashboard/second_dashboard";
import { Route } from "react-router-dom";
import MainPage from "./Components/headr";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={MainPage} />
      <Route path="/overall/:AirportName" component={Ecommerce} />
      <Route
        path="/category/:type/:AirportName"
        exact
        component={DashboardApp}
      />
    </BrowserRouter>
  );
}

export default App;
