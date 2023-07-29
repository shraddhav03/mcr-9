import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { SideBar } from "./components/sidebar/Sidebar";
import {
  WatchLaterContext,
  WatchLaterProvider,
} from "./contexts/WatchLaterContext";

export { WatchLaterProvider };

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <WatchLaterProvider>
        <SideBar />
        <App />
      </WatchLaterProvider>
    </Router>
  </StrictMode>
);
