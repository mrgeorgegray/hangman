import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";

import Solution from ".";
import { THEMES } from "../../config";

import { GameStatus } from "../../context/Game/state";

describe("<Solution />", () => {
  it("renders inPlay", () => {
    const { container } = render(
      <ThemeProvider theme={THEMES.light}>
        <Solution text="s_lution" status={GameStatus.Playing} />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it("renders as won", () => {
    const { container } = render(
      <ThemeProvider theme={THEMES.light}>
        <Solution text="solution" status={GameStatus.Won} />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it("renders as lost", () => {
    const { container } = render(
      <ThemeProvider theme={THEMES.light}>
        <Solution text="solution" status={GameStatus.Lost} />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
