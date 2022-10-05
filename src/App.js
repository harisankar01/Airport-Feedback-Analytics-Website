import React from "react";
import LineChart from "./Components/Line";
import Pie_Chart from "./Components/Pie";
import DashboardApp from "./Dashboard";
import Ecommerce from "./Dashboard/second_dashboard";
import MainPage from "./Components/headr";
import Lounge from "./Dashboard/lounge";
// import { useStateContext } from "../src/Components/context/contextprovider";
import ThemeSettings from "../src/Components/context/themesetting";
function App() {
  return (
    <div>
      {/* <Lounge /> */}
      <Ecommerce />
      {/* <DashboardApp /> */}
      {/* <MainPage /> */}
    </div>
  );
}

export default App;
