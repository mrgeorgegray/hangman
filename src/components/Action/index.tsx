/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

interface ActionProps {
  onClick: () => void;
  text: string;
  type: "error" | "success" | "warning";
}

const Action: React.FC<ActionProps> = ({ onClick, text, type }) => (
  <button
    css={css`
        background-color: #f5f5f5;
        border: 1px solid #747474;
        border-radius: 3px;
        font-size: 20px;
        padding: 12px 18px;
        margin-right: 20px;
        transition: all 150ms ease-in;

        &:hover {
          color: white;
          cursor: pointer;
          ${
            type === "error" &&
            `
              background-color: #ff0033;
              border-color: #ff0033;
            `
          }
          ${
            type === "warning" &&
            `
              background-color: #ff6633;
              border-color: #ff6633;
            `
          }
          ${
            type === "success" &&
            `
              background-color: #6cc070;
              border-color: #6cc070;
            `
          }
        },
      `}
    onClick={onClick}
  >
    {text}
  </button>
);

export default Action;
