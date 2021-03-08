/** @jsxImportSource @emotion/react */

import React from "react";
import { css, Global, useTheme } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

import { useGameDispatch, useGameState } from "../../context/Game";
import Game from "../Game";
import Home from "../Home";
import SelectTopic from "../SelectTopic";
import Footer from "../../components/Footer";
import ThemeSwitch from "../../components/ThemeSwitch";

const App = () => {
  const { breakpoints, colors, fontSize, layout, space } = useTheme();
  const { status, theme, topic } = useGameState();
  const dispatch = useGameDispatch();

  function handleThemeChange() {
    if (theme === "dark") {
      dispatch({ type: "setTheme", payload: { theme: "light" } });
    } else {
      dispatch({ type: "setTheme", payload: { theme: "dark" } });
    }
  }

  return (
    <React.Fragment>
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
          {status === "notStarted" && <Home />}
          {status !== "notStarted" && !topic && <SelectTopic />}
          {status !== "notStarted" && topic && <Game />}
        </main>
        <Footer />
        <ThemeSwitch currentTheme={theme} handleChange={handleThemeChange} />
      </div>
    </React.Fragment>
  );
};

export default App;
