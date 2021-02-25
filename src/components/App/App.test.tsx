import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";

import App from ".";
import GameContext from "../../context/Game";
import { THEMES } from "../../config";

describe("<App />", () => {
  it("renders home page when 'notStarted' ", () => {
    const { container } = render(
      <GameContext>
        <ThemeProvider theme={THEMES.light}>
          <App />
        </ThemeProvider>
      </GameContext>
    );

    expect(container).toMatchSnapshot();
  });

  it.todo("handles a theme change");
  it.todo("renders game");
});
