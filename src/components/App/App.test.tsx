import React from "react";
import { render } from "@testing-library/react";

import App from ".";
import GameContext from "../../context/Game";

describe("<App />", () => {
  it("renders home page when 'notStarted' ", () => {
    const { container } = render(
      <GameContext>
        <App />
      </GameContext>
    );

    expect(container).toMatchSnapshot();
  });

  it.todo("renders game");
});
