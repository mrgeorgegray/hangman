import capitalizeFirstLetter from "./capitaliseFirstLetter";

describe("capitalizeFirstLetter()", () => {
  it("uppercase the first letter", () => {
    const result = capitalizeFirstLetter("upper");

    expect(result).toEqual("Upper");
  });
});
