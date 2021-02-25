/** @jsxImportSource @emotion/react */
import React from "react";
import { css, useTheme } from "@emotion/react";

interface ButtonProps {
  onClick: () => void;
  size?: "large";
  text: string;
  type: "error" | "success" | "warning";
}

const Button: React.FC<ButtonProps> = ({ onClick, size, text, type }) => {
  const { border, colors, fontSize, transitions } = useTheme();

  return (
    <button
      css={css`
        background-color: ${colors.background};
        border: ${border.width}px solid ${colors.text};
        border-radius: ${border.radius}px;
        color: ${colors.text};
        font-size: ${size === "large" ? fontSize[2] : fontSize[1]}px;
        outline: none;
        padding: ${size === "large" ? ` 16px 24px` : `12px 18px`};
        transition: all ${transitions[0]}s ease-in;

        &:hover {
          color: ${colors.background};
          cursor: pointer;
          ${type === "error" &&
          `
            background-color: ${colors.error};
            border-color: ${colors.error};
          `}
          ${type === "warning" &&
          `
            background-color: ${colors.warning};
            border-color: ${colors.warning};
          `}
            ${type === "success" &&
          `
            background-color: ${colors.success};
            border-color: ${colors.success};
          `}
        }
      `}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
