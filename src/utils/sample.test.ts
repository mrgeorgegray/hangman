import sample from "./sample";

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
