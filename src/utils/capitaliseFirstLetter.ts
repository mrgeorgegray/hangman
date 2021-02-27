/**
 * Makes the first letter of a string uppercase
 * @param  {string} input - the text to modify
 */
function capitalizeFirstLetter(input: string) {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

export default capitalizeFirstLetter;
