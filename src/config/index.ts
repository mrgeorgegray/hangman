import movies from "./movies";
import sport from "./sport";
import words from "./words";
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
TOPICS
=============== */
export const TOPICS = {
  movies,
  sport,
  words,
};

/* ===============
THEMES
=============== */
export const THEMES = {
  dark: darkTheme,
  light: lightTheme,
};
