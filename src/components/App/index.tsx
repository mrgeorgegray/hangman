/** @jsxImportSource @emotion/react */

import React, { Fragment } from "react";
import { css, Global, useTheme } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

import { useGameDispatch, useGameState } from "../../context/Game";
import Game from "../../views/Game";
import Home from "../../views/Home";
import Footer from "../Footer";
import ThemeSwitch from "../ThemeSwitch";

const App: React.FC = () => {
  const { breakpoints, colors, fontSize, layout, space } = useTheme();
  const { status, theme } = useGameState();
  const dispatch = useGameDispatch();

  function handleThemeChange() {
    if (theme === "dark") {
      dispatch({ type: "setTheme", payload: { theme: "light" } });
    } else {
      dispatch({ type: "setTheme", payload: { theme: "dark" } });
    }
  }

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
            background-color: ${colors.background};
            color: ${colors.text};
            font-family: monospace;
            font-size: ${fontSize[1]}px;
            line-height: 1.4;
            padding: 0 ${space[1]}px;
          }
          a {
            color: ${colors.link};
            &:hover {
              color: ${colors.linkHover};
            }
          }
        `}
      />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          margin: 0 auto;
          min-height: 100vh;
          max-width: ${layout.maxWidth};

          @media (min-width: ${breakpoints.lg}) {
            padding-top: ${space[5]}px;
          }
        `}
      >
        <main
          role="main"
          css={css`
            flex-grow: 1;
          `}
        >
          {status === "notStarted" ? <Home /> : <Game />}
        </main>
        <Footer />
        <ThemeSwitch currentTheme={theme} handleChange={handleThemeChange} />
      </div>
    </Fragment>
  );
};

export default App;
