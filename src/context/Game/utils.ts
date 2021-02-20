/**
 * Returns a random string from an array
 */
export function sample(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Obscures the solution against user guesses
 * @param  {string} p1 - The full solution
 * @param  {string[]} p2 - An array of letters
 * @param  {string[]} p3 - An optional value to hide characters with, defaults to "_"
 * @return {string} A formatted string
 */
export function formatSolution(
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
