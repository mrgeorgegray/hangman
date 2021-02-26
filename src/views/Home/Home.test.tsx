import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";

import Home from ".";
import { GameDispatchContext, GameStateContext } from "../../context/Game";
import { GameAction, initialState } from "../../context/Game/state";
import { THEMES } from "../../config";

describe("<Home />", () => {
  const mockDispatch: React.Dispatch<GameAction> = jest.fn();

  const buildSubject = () =>
    render(
      <GameDispatchContext.Provider value={mockDispatch}>
        <GameStateContext.Provider value={initialState}>
          <ThemeProvider theme={THEMES.light}>
            <Home />
          </ThemeProvider>
        </GameStateContext.Provider>
      </GameDispatchContext.Provider>
    );

  it("renders", () => {
    const { container } = buildSubject();

    expect(container).toMatchSnapshot();
  });

  it("starts a game", () => {
    const { getByText } = buildSubject();

    fireEvent.click(getByText("Start Game"));

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "start",
    });
  });
});
