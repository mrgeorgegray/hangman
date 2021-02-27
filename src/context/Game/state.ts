import produce, { Draft } from "immer";

import { LETTERS, STARTING_CHANCES, SOLUTIONS, THEMES } from "../../config";
import * as utils from "./utils";

export enum GameStatus {
  NotStarted = "notStarted",
  Playing = "playing",
  Lost = "lost",
  Won = "won",
}

export type Theme = keyof typeof THEMES;
export type Topic = keyof typeof SOLUTIONS;

// prettier-ignore
export type GameAction =
  | { type: "giveup" }
  | { type: "guess"; payload: { letter: string }; }
  | { type: "quit" }
  | { type: "new" }
  | { type: "setTheme"; payload: { theme: Theme }; }
  | { type: "setTopic"; payload: { topic: Topic }; }
  | { type: "start" };

export interface GameState {
  chancesRemaining: number;
  guesses: string[];
  letters: string[];
  solution: string;
  solutionFormatted: string;
  status: GameStatus;
  theme: Theme;
  topic: Topic | null;
}

export const initialState: GameState = {
  chancesRemaining: 0,
  guesses: [],
  letters: LETTERS,
  solution: "",
  solutionFormatted: "",
  status: GameStatus.NotStarted,
  theme: "light",
  topic: null,
};

const gameReducer = (draft: Draft<GameState>, action: GameAction) => {
  switch (action.type) {
    case "start": {
      draft.status = GameStatus.Playing;
      return;
    }

    case "new": {
      if (!draft.topic) {
        return;
      }

      const solution = utils.sample(SOLUTIONS[draft.topic]);
      draft.chancesRemaining = STARTING_CHANCES;
      draft.guesses = [];
      draft.solution = solution;
      draft.solutionFormatted = utils.formatSolution(
        draft.solution,
        draft.guesses
      );
      draft.status = GameStatus.Playing;
      return;
    }

    case "quit": {
      draft.chancesRemaining = initialState.chancesRemaining;
      draft.guesses = initialState.guesses;
      draft.letters = initialState.letters;
      draft.solution = initialState.solution;
      draft.solutionFormatted = initialState.solutionFormatted;
      draft.status = initialState.status;
      draft.topic = initialState.topic;
      return;
    }

    case "giveup": {
      draft.chancesRemaining = 0;
      draft.solutionFormatted = draft.solution;
      draft.status = GameStatus.Lost;
      return;
    }

    case "guess": {
      const { letter } = action.payload;

      draft.guesses.push(action.payload.letter);
      draft.solutionFormatted = utils.formatSolution(
        draft.solution,
        draft.guesses
      );
      draft.chancesRemaining = draft.solution.includes(letter)
        ? draft.chancesRemaining
        : draft.chancesRemaining - 1;

      if (draft.solution === draft.solutionFormatted) {
        draft.status = GameStatus.Won;
      }
      if (draft.chancesRemaining === 0) {
        draft.solutionFormatted = draft.solution;
        draft.status = GameStatus.Lost;
      }
      return;
    }

    case "setTheme": {
      draft.theme = action.payload.theme;
      return;
    }

    case "setTopic": {
      draft.topic = action.payload.topic;
      const solution = utils.sample(SOLUTIONS[draft.topic]);
      draft.chancesRemaining = STARTING_CHANCES;
      draft.guesses = [];
      draft.solution = solution;
      draft.solutionFormatted = utils.formatSolution(
        draft.solution,
        draft.guesses
      );
      return;
    }

    default: {
      return;
    }
  }
};

export const curriedGameReducer = produce(gameReducer);
