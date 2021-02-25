/** @jsxImportSource @emotion/react */
import React from "react";
import { css, useTheme } from "@emotion/react";
interface SolutionProps {
  text: string;
}

const Solution: React.FC<SolutionProps> = ({ text }) => {
  const { breakpoints, fontSize, space } = useTheme();

  return (
    <div
      css={css`
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
