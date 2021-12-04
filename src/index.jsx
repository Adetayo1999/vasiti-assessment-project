import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import StoryProvider from "./context";
import reducer, { initialState } from "./context/reducer";

ReactDOM.render(
  <React.StrictMode>
    <StoryProvider initialState={initialState} reducer={reducer}>
      <App />
    </StoryProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
