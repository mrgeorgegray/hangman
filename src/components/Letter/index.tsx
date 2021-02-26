/** @jsxImportSource @emotion/react */
import React from "react";
import { css, useTheme } from "@emotion/react";
export interface LetterProps {
  onClick: (letter: string) => void;
  isCorrect: boolean;
  isDisabled: boolean;
  letter: string;
  shouldHighlight: boolean;
}

const Letter = React.memo<LetterProps>(
  ({ onClick, isCorrect, isDisabled, letter, shouldHighlight }) => {
    const { border, breakpoints, colors, fontSize } = useTheme();

    return (
      <button
        disabled={isDisabled}
        onClick={() => onClick(letter)}
        css={css`
          background-color: transparent;
          border: ${border.width}px dashed transparent;
          border-radius: 50%;
          color: ${shouldHighlight
            ? isCorrect
              ? colors.success
              : colors.error
            : colors.text};
          display: inline-block;
          font-size: ${fontSize[2]}px;
          height: 30px;
          margin: 5px;
          outline: none;
          padding: 2px 10px 10px 10px;
          text-align: center;
          transition: border 200ms ease-out;
          width: 30px;

          &:hover:enabled {
            border: ${border.width}px dashed ${colors.grey};
            cursor: pointer;
          }

          @media (min-width: ${breakpoints.md}) {
            font-size: ${fontSize[3]}px;
            height: 50px;
            width: 50px;
          }
        `}
      >
        {letter}
      </button>
    );
  }
);

export default Letter;
