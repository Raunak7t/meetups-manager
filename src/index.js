import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import {FavContextProvider} from "./store/FavContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavContextProvider>
);
