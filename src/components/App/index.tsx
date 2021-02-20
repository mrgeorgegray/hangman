import React, { Fragment } from "react";

import { useGameState } from "../../context/Game";
import Game from "../../views/Game";
import Home from "../../views/Home";
import Header from "../Header";
import Footer from "../Footer";

const App: React.FC = () => {
  const { status } = useGameState();

  return (
    <Fragment>
      <Header />
      <main>{status === "notStarted" ? <Home /> : <Game />}</main>
      <Footer />
    </Fragment>
  );
};

export default App;
