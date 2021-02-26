import React, { createContext, useContext, useReducer } from "react";
import { ThemeProvider } from "@emotion/react";
import { Immutable } from "immer";

import {
  initialState,
  curriedGameReducer,
  GameAction,
  GameState,
} from "./state";
import { THEMES } from "../../config";
import useLocalStorage from "../../hooks/useLocalStorage";

// ===============
// Setup
// ===============
export const GameDispatchContext = createContext<React.Dispatch<GameAction> | null>(
  null
);

export const GameStateContext = createContext<ReturnType<
  typeof curriedGameReducer
> | null>(null);

// ===============
// Custom hooks
// ===============
export function useGameDispatch() {
  const dispatch = useContext(GameDispatchContext);

  if (!dispatch) {
    throw new Error(
      "useGameDispatch must be used within a GameDispatchProvider."
    );
  }

  return dispatch;
}

export function useGameState() {
  const state = useContext(GameStateContext);

  if (!state) {
    throw new Error("useGameState must be used within a GameStateProvider.");
  }

  return state;
}

// ===============
// Context
// ===============
const GameContext: React.FC = ({ children }) => {
  const [gameState, setGameState] = useLocalStorage<Immutable<GameState>>(
    "gameState",
    initialState
  );
  const [state, dispatch] = useReducer(curriedGameReducer, gameState);

  React.useEffect(() => {
    setGameState(state);
  }, [state, setGameState]);

  let theme = THEMES.light;

  if (state.theme === "dark") {
    theme = THEMES.dark;
  }

  return (
    <GameDispatchContext.Provider value={dispatch}>
      <GameStateContext.Provider value={state}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </GameStateContext.Provider>
    </GameDispatchContext.Provider>
  );
};

export default GameContext;
