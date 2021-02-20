import { formatSolution, sample } from "./utils";

describe("sample()", () => {
  beforeEach(() => {
    jest.spyOn(global.Math, "random").mockReturnValue(0.1);
  });

  it("returns a value from the array", () => {
    // not really that random as mocking Math.random.
    const data = ["a", "b", "c", "d"];
    const result = sample(data);

    expect(result).toEqual("a");
  });
});

describe("formatSolution()", () => {
  it("formats with the default hiddenCharacter", () => {
    const solution = "the solution";
    const guesses = ["t", "u", "s"];
    const result = formatSolution(solution, guesses);

    expect(result).toEqual("t__ s__ut___");
  });

  it("formats with a custom hiddenCharacter", () => {
    const solution = "custom";
    const guesses = ["c"];
    const hiddenCharacter = "*";
    const result = formatSolution(solution, guesses, hiddenCharacter);

    expect(result).toEqual("c*****");
  });
});
