import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";

import Home from ".";
import { GameDispatchContext, GameStateContext } from "../../context/Game";
import { GameAction, initialState } from "../../context/Game/state";
import { THEMES } from "../../config";

describe("<Home />", () => {
  const mockDispatch: React.Dispatch<GameAction> = jest.fn();

  it("renders", () => {
    const { container } = render(
      <GameDispatchContext.Provider value={mockDispatch}>
        <GameStateContext.Provider value={initialState}>
          <ThemeProvider theme={THEMES.lightTheme}>
            <Home />
          </ThemeProvider>
        </GameStateContext.Provider>
      </GameDispatchContext.Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it("starts a game", () => {
    const { getByText } = render(
      <GameDispatchContext.Provider value={mockDispatch}>
        <GameStateContext.Provider value={initialState}>
          <ThemeProvider theme={THEMES.lightTheme}>
            <Home />
          </ThemeProvider>
        </GameStateContext.Provider>
      </GameDispatchContext.Provider>
    );

    fireEvent.click(getByText("Start Game"));

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "start",
    });
  });
});
