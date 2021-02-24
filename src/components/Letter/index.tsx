/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
interface LetterProps {
  onClick: (letter: string) => void;
  isCorrect: boolean;
  isDisabled: boolean;
  letter: string;
  shouldHighlight: boolean;
}

const Letter = React.memo<LetterProps>(
  ({ onClick, isCorrect, isDisabled, letter, shouldHighlight }) => (
    <button
      disabled={isDisabled}
      onClick={() => onClick(letter)}
      css={css`
        background-color: transparent;
        border: 1px solid transparent;
        border-radius: 50%;
        color: ${shouldHighlight ? (isCorrect ? `green` : `red`) : undefined};
        display: inline-block;
        font-size: 34px;
        height: 50px;
        margin: 5px;
        outline: none;
        padding: 4px 10px 10px 10px;
        text-align: center;
        transition: border 200ms ease-out;
        width: 50px;
        &:hover:enabled {
          border: 1px solid #30353b;
          cursor: pointer;
        }
      `}
    >
      {letter}
    </button>
  )
);

export default Letter;
