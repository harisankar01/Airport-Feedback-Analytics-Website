import React from "react";
import LineChart from "./Components/Line";
import Pie_Chart from "./Components/Pie";
import DashboardApp from "./Dashboard";
import Ecommerce from "./Dashboard/second_dashboard";
import { Route } from "react-router-dom";
import MainPage from "./Components/headr";
import { BrowserRouter } from "react-router-dom";
// import { useStateContext } from "../src/Components/context/contextprovider";
import ThemeSettings from "../src/Components/context/themesetting";
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
      {/* <Route path="/lounge/:AirportName" exact component={Lounge} /> */}
    </BrowserRouter>
  );
}

export default App;
