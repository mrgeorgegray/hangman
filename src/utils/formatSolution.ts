/**
 * Obscures the solution against user guesses
 * @param  {string} solution - The full solution
 * @param  {string[]} guesses - An array of letters
 * @param  {string[]} hiddenCharacter - An optional value to hide characters with, defaults to "_"
 * @return {string} A formatted string
 */
function formatSolution(
  solution: string,
  guesses: string[],
  hiddenCharacter = "_"
) {
  return Array.from(solution)
    .map((character) => {
      if (character === " ") {
        return " ";
      }
      if (guesses.includes(character)) {
        return character;
      }
      return hiddenCharacter;
    })
    .join("");
}

export default formatSolution;
