/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
interface SolutionProps {
  text: string;
}

const Solution: React.FC<SolutionProps> = ({ text }) => (
  <div
    css={css`
      font-size: 50px;
      letter-spacing: 4px;
      line-height: 1.2;
      margin-bottom: 30px;
    `}
  >
    {text}
  </div>
);

export default Solution;
