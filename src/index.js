import React from "react";
import App from "./components/App";
import { createRoot } from "react-dom/client";

import render from "react-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// render(<App />, document.getElementById("root"));
