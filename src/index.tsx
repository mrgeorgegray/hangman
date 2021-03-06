import React from "react";
import ReactDOM from "react-dom";
import App from "./views/App";

import GameContext from "./context/Game";

ReactDOM.render(
  <React.StrictMode>
    <GameContext>
      <App />
    </GameContext>
  </React.StrictMode>,
  document.getElementById("root")
);
