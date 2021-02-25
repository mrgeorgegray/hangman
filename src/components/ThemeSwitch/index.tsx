/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

import { Theme } from "../../context/Game/state";
import { ReactComponent as MoonIcon } from "./moon.svg";
import { ReactComponent as SunIcon } from "./sun.svg";

interface ThemeSwitchProps {
  currentTheme: Theme;
  handleChange: () => void;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({
  currentTheme,
  handleChange,
}) => {
  const { colors, space, transitions } = useTheme();
  const isDarkEnabled = currentTheme === "dark";

  return (
    <label
      css={css`
        display: block;
        margin: 0 auto ${space[2]}px;
        width: 60px;
      `}
      htmlFor="toggle"
    >
      <div
        css={css`
          cursor: pointer;
          background: ${colors.text};
          border-radius: 50px;
          height: 26px;
          padding: 3px;
          position: relative;
          transition: ${transitions[2]}s;
          width: 56px;

          &::before {
            content: "";
            border-radius: 30px;
            background: ${colors.background};
            display: block;
            height: 20px;
            position: absolute;
            transform: ${isDarkEnabled ? `translate(28px)` : `translate(2px)`};
            transition: transform ${transitions[1]}s,
              background ${transitions[1]}s;
            width: 20px;
            z-index: 2;
          }
        `}
      >
        <span
          css={css`
            clip: rect(0 0 0 0);
            clip-path: inset(50%);
            height: 1px;
            overflow: hidden;
            position: absolute;
            white-space: nowrap;
            width: 1px;
          `}
        >
          {isDarkEnabled ? "Enable Light Mode" : "Enable Dark Mode"}
        </span>
        <div
          css={css`
            align-items: center;
            display: flex;
            height: 100%;
            margin: 0 5px;
            justify-content: space-between;
          `}
        >
          <SunIcon
            css={css`
              fill: ${colors.background};
              height: 18px;
              width: 18px;
              z-index: 0;
            `}
          />
          <MoonIcon
            css={css`
              fill: ${colors.background};
              height: 18px;
              width: 18px;
              z-index: 0;
            `}
          />
        </div>
        <input
          id="toggle"
          name="toggle"
          type="checkbox"
          checked={isDarkEnabled}
          onChange={handleChange}
          css={css`
            opacity: 0;
            position: absolute;
            top: 0;
          `}
        />
      </div>
    </label>
  );
};

export default ThemeSwitch;
