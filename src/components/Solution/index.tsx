/** @jsxImportSource @emotion/react */
import React from "react";
import { css, useTheme } from "@emotion/react";

import { GameStatus } from "../../context/Game/state";
interface SolutionProps {
  status: GameStatus;
  text: string;
}

const Solution: React.FC<SolutionProps> = ({ status, text }) => {
  const { breakpoints, colors, fontSize, space } = useTheme();
  let textColor: string;

  switch (status) {
    case GameStatus.Won:
      textColor = colors.success;
      break;
    case GameStatus.Lost:
      textColor = colors.error;
      break;
    default:
      textColor = colors.text;
      break;
  }

  return (
    <div
      css={css`
        color: ${textColor};
        font-size: ${fontSize[3]}px;
        letter-spacing: 4px;
        line-height: 1.2;
        margin-bottom: ${space[3]};

        @media (min-width: ${breakpoints.md}) {
          font-size: ${fontSize[4]}px;
        }
      `}
    >
      {text}
    </div>
  );
};

export default Solution;
