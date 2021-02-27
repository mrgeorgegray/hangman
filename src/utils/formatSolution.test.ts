import formatSolution from "./formatSolution";

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
