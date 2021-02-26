import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";

import App from ".";
import GameContext, {
  GameDispatchContext,
  GameStateContext,
} from "../../context/Game";
import { initialState, GameStatus } from "../../context/Game/state";
import { THEMES } from "../../config";

describe("<App />", () => {
  it("renders home page when status IS 'notStarted' ", () => {
    const { getByText } = render(
      <GameContext>
        <ThemeProvider theme={THEMES.light}>
          <App />
        </ThemeProvider>
      </GameContext>
    );

    expect(getByText("A simple game built with React")).toBeInTheDocument();
  });

  it("renders the game status is NOT 'notStarted' ", () => {
    const playingState = {
      ...initialState,
      chancesRemaining: 6,
      guesses: [],
      solution: "solution",
      solutionFormatted: "_______",
      status: GameStatus.Playing,
    };

    const { getByText } = render(
      <GameDispatchContext.Provider value={jest.fn()}>
        <GameStateContext.Provider value={playingState}>
          <ThemeProvider theme={THEMES.light}>
            <App />
          </ThemeProvider>
        </GameStateContext.Provider>
      </GameDispatchContext.Provider>
    );

    expect(getByText(`(chances remaining: 6)`)).toBeInTheDocument();
  });

  it("toggles theme changes", () => {
    const mockDispatch = jest.fn();

    const { getByTestId } = render(
      <GameDispatchContext.Provider value={mockDispatch}>
        <GameStateContext.Provider value={initialState}>
          <ThemeProvider theme={THEMES.light}>
            <App />
          </ThemeProvider>
        </GameStateContext.Provider>
      </GameDispatchContext.Provider>
    );

    fireEvent.click(getByTestId("toggleTheme"));

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "setTheme",
      payload: { theme: "dark" },
    });
  });
});
