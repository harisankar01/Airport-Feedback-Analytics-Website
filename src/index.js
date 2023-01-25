import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HelmetProvider } from "react-helmet-async";
import * as serviceWorker from "./serviceWorker";
import { ContextProvider } from "./Components/context/contextprovider";
import { registerLicense } from "@syncfusion/ej2-base";

// Registering Syncfusion license key
registerLicense(
  "ORg4AjUWIQA/Gnt2VVhiQlFadVlJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkxhXH5bcXRUQ2dYUU0="
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider>
    <ContextProvider>
      <App />
    </ContextProvider>
  </HelmetProvider>
);
serviceWorker.unregister();

reportWebVitals();
