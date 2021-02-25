import movies from "./movies";
import { darkTheme, lightTheme } from "./themes";

/* ===============
STARTING_CHANCES
how many guesses a user
has before the Hangman is dead
must match <Hangman /> setup.
=============== */
export const STARTING_CHANCES = 6;

/* ===============
LETTERS
determine what is displayed
on the keyboard. Make sure
you include all letters that
are in your solutions.
=============== */
// prettier-ignore
export const LETTERS = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i",
  "j", "k", "l", "m", "n", "o", "p", "q", "r",
  "s", "t", "u", "v", "w", "x", "y", "z",
];

/* ===============
SOLUTIONS
@todo topics etc.
=============== */
export const SOLUTIONS = {
  movies,
};

/* ===============
THEME
@todo dark, a11y, etc.
=============== */
export const THEMES = {
  dark: darkTheme,
  light: lightTheme,
};
