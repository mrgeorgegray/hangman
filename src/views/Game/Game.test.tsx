import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";

import Home from ".";
import { GameDispatchContext, GameStateContext } from "../../context/Game";
import {
  GameAction,
  GameStatus,
  initialState,
  GameState,
} from "../../context/Game/state";
import * as utils from "../../context/Game/utils";
import { STARTING_CHANCES, THEMES } from "../../config";

describe("<Game />", () => {
  const mockDispatch: React.Dispatch<GameAction> = jest.fn();
  const solution = "solution";
  const playingState: GameState = {
    ...initialState,
    chancesRemaining: STARTING_CHANCES,
    guesses: [],
    solution,
    solutionFormatted: utils.formatSolution(solution, []),
    status: GameStatus.Playing,
    topic: "words",
  };

  const buildSubject = (state = playingState) =>
    render(
      <GameDispatchContext.Provider value={mockDispatch}>
        <GameStateContext.Provider value={state}>
          <ThemeProvider theme={THEMES.light}>
            <Home />
          </ThemeProvider>
        </GameStateContext.Provider>
      </GameDispatchContext.Provider>
    );

  it("renders topic selector", () => {
    const { getByText } = buildSubject({
      ...playingState,
      topic: null,
    });

    expect(getByText("Choose a topic")).toBeInTheDocument();
  });

  it("renders in play", () => {
    const { container } = buildSubject();

    expect(container).toMatchSnapshot();
  });

  it("handles giving up", () => {
    const { getByText } = buildSubject();

    fireEvent.click(getByText("Give up!"));

    expect(mockDispatch).toBeCalledWith({ type: "giveup" });
  });

  it("handles quit", () => {
    const { getByText } = buildSubject();

    fireEvent.click(getByText("Quit Game"));

    expect(mockDispatch).toBeCalledWith({ type: "quit" });
  });

  it("handles a guess", () => {
    const { getByText } = buildSubject();

    fireEvent.click(getByText("q"));

    expect(mockDispatch).toBeCalledWith({
      type: "guess",
      payload: {
        letter: "q",
      },
    });
  });

  it("displays a banner on winning", () => {
    const { getByText } = buildSubject({
      ...playingState,
      status: GameStatus.Won,
    });

    expect(getByText("Congratulations! You Won :-)")).toBeInTheDocument();
  });

  it("displays a banner on loosing", () => {
    const { getByText } = buildSubject({
      ...playingState,
      status: GameStatus.Lost,
    });

    expect(getByText("Game over :-(")).toBeInTheDocument();
  });
});
