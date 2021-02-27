/**
 * Returns a random string from an array
 */
function sample(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default sample;
