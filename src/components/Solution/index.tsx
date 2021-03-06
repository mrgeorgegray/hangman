/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

import { GameStatus } from "../../context/Game/state";
export interface SolutionProps {
  status: GameStatus;
  text: string;
}

const Solution = ({ status, text }: SolutionProps) => {
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
        padding: 0 ${space[2]}px ${space[1]}px;

        @media (min-width: ${breakpoints.md}) {
          font-size: ${fontSize[4]}px;
          padding: ${space[2]}px 0;
        }
      `}
    >
      {text}
    </div>
  );
};

export default Solution;
