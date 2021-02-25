/** @jsxImportSource @emotion/react */
import React from "react";
import { css, useTheme } from "@emotion/react";

interface BannerProps {
  action: JSX.Element;
  message: string;
  type: "error" | "success";
}

const Banner: React.FC<BannerProps> = ({ action, message, type }) => {
  const { border, breakpoints, colors, layout, space } = useTheme();

  return (
    <div
      css={css`
        border: ${border.width}px solid ${border.color};
        border-radius: ${border.radius}px;
        padding: ${space[2]}px;
        margin-top: ${space[2]}px;
        max-width: ${layout.maxWidth};
        text-align: center;
        ${type === "error" && ` background-color: ${colors.softError}; `}
        ${type === "success" && ` background-color: ${colors.softSuccess}; `}

        @media (min-width: ${breakpoints.lg}) {
          left: 0;
          margin-left: auto;
          margin-right: auto;
          margin-top: 0;
          position: absolute;
          right: 0;
          top: ${space[1]}px;
          width: 90%;
        }
      `}
    >
      <span
        css={css`
          display: block;
          margin-bottom: ${space[2]}px;

          @media (min-width: ${breakpoints.lg}) {
            display: inline;
            margin-right: ${space[2]}px;
            margin-bottom: 0;
          }
        `}
      >
        <strong>{message}</strong>
      </span>
      {action}
    </div>
  );
};

export default Banner;
