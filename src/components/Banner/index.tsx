/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

interface BannerProps {
  action: JSX.Element;
  message: string;
  type: "error" | "success";
}

const Banner: React.FC<BannerProps> = ({ action, message, type }) => (
  <div
    css={css`
      border: 2px solid #30353b;
      padding: 20px;
      margin-top: 20px;
      max-width: 1000px;
      text-align: center;
      ${type === "error" && ` background-color: #FFBABA; `}
      ${type === "success" && ` background-color: #DFF2BF; `}

      @media (min-width: 720px) {
        left: 0;
        margin-left: auto;
        margin-right: auto;
        margin-top: 0px;
        position: absolute;
        right: 0;
        top: 10px;
        width: 90%;
      }
    `}
  >
    <span
      css={css`
        display: block;
        margin-bottom: 20px;

        @media (min-width: 720px) {
          display: inline;
          margin-right: 20px;
          margin-bottom: 0px;
        }
      `}
    >
      {message}
    </span>
    {action}
  </div>
);

export default Banner;
