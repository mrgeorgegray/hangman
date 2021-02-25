import { initialState, curriedGameReducer, GameStatus } from "./state";
import { STARTING_CHANCES } from "./../../config";
import * as utils from "./utils";

describe("GameState", () => {
  const solution = "solution";
  const playingState = {
    ...initialState,
    chancesRemaining: STARTING_CHANCES,
    guesses: [],
    solution,
    solutionFormatted: utils.formatSolution(solution, []),
    status: GameStatus.Playing,
  };

  it("starts a game", () => {
    jest.spyOn(utils, "sample").mockReturnValue(solution);
    const updatedState = curriedGameReducer(initialState, {
      type: "start",
    });

    expect(updatedState).toEqual({
      chancesRemaining: STARTING_CHANCES,
      guesses: [],
      letters: initialState.letters,
      solution: solution,
      solutionFormatted: utils.formatSolution(solution, []),
      status: GameStatus.Playing,
    });
  });

  it("quits the game", () => {
    const updatedState = curriedGameReducer(playingState, {
      type: "quit",
    });

    expect(updatedState).toEqual(initialState);
  });

  it("giveups a game", () => {
    const updatedState = curriedGameReducer(playingState, {
      type: "giveup",
    });

    expect(updatedState).toEqual({
      chancesRemaining: 0,
      guesses: playingState.guesses,
      letters: playingState.letters,
      solution: solution,
      solutionFormatted: solution,
      status: GameStatus.Lost,
    });
  });

  describe("guessing", () => {
    it("handles incorrect", () => {
      const letter = "a";
      const updatedState = curriedGameReducer(playingState, {
        type: "guess",
        payload: { letter },
      });

      expect(updatedState).toEqual({
        ...playingState,
        chancesRemaining: STARTING_CHANCES - 1,
        guesses: [letter],
      });
    });

    it("handles correct", () => {
      const letter = "s";
      const updatedState = curriedGameReducer(playingState, {
        type: "guess",
        payload: { letter },
      });

      expect(updatedState).toEqual({
        ...playingState,
        chancesRemaining: STARTING_CHANCES,
        guesses: [letter],
        solutionFormatted: utils.formatSolution(solution, [letter]),
      });
    });

    it("handles winning", () => {
      const letter = "s";
      const guesses = solution.split("").slice(1);
      const almostFinishedState = {
        ...playingState,
        guesses: guesses,
        solutionFormatted: utils.formatSolution(solution, guesses),
      };
      const updatedState = curriedGameReducer(almostFinishedState, {
        type: "guess",
        payload: { letter },
      });

      expect(updatedState).toEqual({
        ...playingState,
        chancesRemaining: STARTING_CHANCES,
        guesses: [...guesses, letter],
        solutionFormatted: solution,
        status: GameStatus.Won,
      });
    });

    it("handles running out of chances", () => {
      const letter = "a";
      const oneChanceState = {
        ...playingState,
        chancesRemaining: 1,
      };
      const updatedState = curriedGameReducer(oneChanceState, {
        type: "guess",
        payload: { letter },
      });

      expect(updatedState).toEqual({
        ...playingState,
        chancesRemaining: 0,
        guesses: [letter],
        status: GameStatus.Lost,
      });
    });
  });
});
