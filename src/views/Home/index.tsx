/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

import { useGameDispatch } from "../../context/Game";

const HomePage: React.FC = () => {
  const dispatch = useGameDispatch();

  const handleStart = () => {
    dispatch({ type: "start" });
  };

  return (
    <div
      css={css`
        padding-top: 30px;
        text-align: center;

        @media (min-width: 720px) {
          padding-top: 0;
        }
      `}
    >
      <h1
        css={css`
          font-size: 48px;
          line-height: 1;
        `}
      >
        Welcome to Hangman!
      </h1>
      <p
        css={css`
          margin-bottom: 32px;
        `}
      >
        A simple game built with React
      </p>
      <button
        css={css`
          background-color: transparent;
          border: 1px solid #747474;
          border-radius: 3px;
          font-size: 20px;
          padding: 12px 18px;
          transition: all 150ms ease-in;

          &:hover {
            background-color: #6cc070;
            border-color: #6cc070;
            cursor: pointer;
          }
        `}
        onClick={handleStart}
      >
        Start Game
      </button>
    </div>
  );
};

export default HomePage;
