import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Home from ".";
import { GameDispatchContext, GameStateContext } from "../../context/Game";
import { GameAction, initialState } from "../../context/Game/state";

describe("<Home />", () => {
  const mockDispatch: React.Dispatch<GameAction> = jest.fn();

  it("renders", () => {
    const { container } = render(
      <GameDispatchContext.Provider value={mockDispatch}>
        <GameStateContext.Provider value={initialState}>
          <Home />
        </GameStateContext.Provider>
      </GameDispatchContext.Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it("starts a game", () => {
    const { getByText } = render(
      <GameDispatchContext.Provider value={mockDispatch}>
        <GameStateContext.Provider value={initialState}>
          <Home />
        </GameStateContext.Provider>
      </GameDispatchContext.Provider>
    );

    fireEvent.click(getByText("Start Game"));

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "start",
    });
  });
});
