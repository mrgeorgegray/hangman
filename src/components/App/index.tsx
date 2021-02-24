/** @jsxImportSource @emotion/react */

import React, { Fragment } from "react";
import { Global, css } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

import { useGameState } from "../../context/Game";
import Game from "../../views/Game";
import Home from "../../views/Home";
import Footer from "../Footer";

const App: React.FC = () => {
  const { status } = useGameState();

  return (
    <Fragment>
      <Global
        styles={css`
          ${emotionNormalize}
          * {
            box-sizing: border-box;
            -webkit-font-smoothing: antialiased;
          }
          html,
          body {
            background-color: #f5f5f5;
            color: #30353b;
            font-family: monospace;
            font-size: 18px;
            height: 100%;
            line-height: 1.4;
            padding: 0 10px;
            width: 100%;
          }
        `}
      />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          margin: 0 auto;
          min-height: 100vh;
          max-width: 1000px;

          @media (min-width: 720px) {
            padding-top: 100px;
          }
        `}
      >
        <main
          css={css`
            flex-grow: 1;
          `}
        >
          {status === "notStarted" ? <Home /> : <Game />}
        </main>
        <Footer />
      </div>
    </Fragment>
  );
};

export default App;
