import {
  initialState,
  curriedGameReducer,
  GameStatus,
  topicList,
} from "./state";
import { STARTING_CHANCES, TOPICS } from "./../../config";
import { formatSolution } from "../../utils";
import * as sample from "../../utils/sample";

describe("GameState", () => {
  const solution = "solution";
  const playingState = {
    ...initialState,
    chancesRemaining: STARTING_CHANCES,
    guesses: [],
    solution,
    solutionFormatted: formatSolution(solution, []),
    status: GameStatus.Playing,
  };

  it("starts a game", () => {
    const updatedState = curriedGameReducer(initialState, {
      type: "start",
    });

    expect(updatedState).toEqual({
      ...initialState,
      status: GameStatus.Playing,
    });
  });

  it("sets a topic and starts", () => {
    jest.spyOn(sample, "default").mockReturnValue(solution);
    const updatedState = curriedGameReducer(
      {
        ...initialState,
        status: GameStatus.Playing,
      },
      {
        type: "setTopicAndStart",
        payload: { topic: "words" },
      }
    );

    expect(updatedState).toEqual({
      ...initialState,
      chancesRemaining: STARTING_CHANCES,
      solution: solution,
      solutionFormatted: formatSolution(solution, []),
      status: GameStatus.Playing,
      topic: "words",
    });
  });

  it("begins a new game", () => {
    jest.spyOn(sample, "default").mockReturnValue(solution);
    const updatedState = curriedGameReducer(
      {
        ...initialState,
        status: GameStatus.Playing,
        topic: "words",
      },
      {
        type: "new",
      }
    );

    expect(updatedState).toEqual({
      ...initialState,
      chancesRemaining: STARTING_CHANCES,
      solution: solution,
      solutionFormatted: formatSolution(solution, []),
      status: GameStatus.Playing,
      topic: "words",
    });
  });

  it("wont begin a new game without a topic", () => {
    const currentState = {
      ...initialState,
      status: GameStatus.Playing,
    };
    const updatedState = curriedGameReducer(currentState, {
      type: "new",
    });

    expect(updatedState).toEqual(currentState);
  });

  it("quits the game", () => {
    const updatedState = curriedGameReducer(playingState, {
      type: "quit",
    });

    expect(updatedState).toEqual(initialState);
  });

  it("switches theme", () => {
    const updatedState = curriedGameReducer(playingState, {
      type: "setTheme",
      payload: { theme: "dark" },
    });

    expect(updatedState).toEqual({
      ...playingState,
      theme: "dark",
    });
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
      theme: initialState.theme,
      topic: null,
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
        solutionFormatted: formatSolution(solution, [letter]),
      });
    });

    it("handles winning", () => {
      const letter = "s";
      const guesses = solution.split("").slice(1);
      const almostFinishedState = {
        ...playingState,
        guesses: guesses,
        solutionFormatted: formatSolution(solution, guesses),
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
        solutionFormatted: solution,
        status: GameStatus.Lost,
      });
    });
  });
});
