import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";

import SelectTopic from ".";
import { GameDispatchContext, GameStateContext } from "../../context/Game";
import { GameAction, initialState } from "../../context/Game/state";
import { THEMES } from "../../config";

describe("<SelectTopic />", () => {
  const mockDispatch: React.Dispatch<GameAction> = jest.fn();

  const buildSubject = () =>
    render(
      <GameDispatchContext.Provider value={mockDispatch}>
        <GameStateContext.Provider value={initialState}>
          <ThemeProvider theme={THEMES.light}>
            <SelectTopic />
          </ThemeProvider>
        </GameStateContext.Provider>
      </GameDispatchContext.Provider>
    );

  it("renders", () => {
    const { container } = buildSubject();

    expect(container).toMatchSnapshot();
  });

  it("handles selecting a topic", () => {
    const { getByText } = buildSubject();

    fireEvent.click(getByText("Words"));

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "setTopicAndStart",
      payload: { topic: "words" },
    });
  });
});
