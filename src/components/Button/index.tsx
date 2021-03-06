/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

export interface ButtonProps {
  onClick: () => void;
  size?: "large";
  text: string;
  type: "error" | "plain" | "success" | "warning";
}

const Button = ({ onClick, size, text, type }: ButtonProps) => {
  const { border, colors, fontSize, space, transitions } = useTheme();

  return (
    <button
      css={css`
        background-color: ${colors.background};
        border: ${border.width}px solid ${colors.text};
        border-radius: ${border.radius}px;
        color: ${colors.text};
        font-size: ${size === "large" ? fontSize[2] : fontSize[1]}px;
        outline: none;
        padding: ${size === "large" ? `16px 24px` : `12px 18px`};
        margin: 0 ${space[0]}px;
        transition: all ${transitions[0]}s ease-in;

        &:hover {
          color: ${colors.background};
          cursor: pointer;
          ${type === "error" &&
          `
            background-color: ${colors.error};
            border-color: ${colors.error};
          `}
          ${type === "plain" &&
          `
            background-color: ${colors.text};
            border-color: ${colors.text};
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
