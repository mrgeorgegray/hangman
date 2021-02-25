/** @jsxImportSource @emotion/react */
import React from "react";
import { css, useTheme } from "@emotion/react";

import { useGameDispatch } from "../../context/Game";
import Button from "../../components/Button";

const HomePage: React.FC = () => {
  const { breakpoints, fontSize, space } = useTheme();
  const dispatch = useGameDispatch();

  const handleStart = () => {
    dispatch({ type: "start" });
  };

  return (
    <div
      css={css`
        padding-top: ${space[3]}px;
        text-align: center;

        @media (min-width: ${breakpoints.lg}) {
          padding-top: 0;
        }
      `}
    >
      <h1
        css={css`
          font-size: ${fontSize[4]}px;
          line-height: 1;
        `}
      >
        Welcome to Hangman!
      </h1>
      <p
        css={css`
          margin-bottom: ${space[3]}px;
        `}
      >
        A simple game built with React
      </p>
      <Button
        size="large"
        type="success"
        text="Start Game"
        onClick={handleStart}
      />
    </div>
  );
};

export default HomePage;
