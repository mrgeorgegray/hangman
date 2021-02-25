import { Theme } from "@emotion/react";

const baseTheme: Theme = {
  border: {
    color: "#30353B",
    radius: 3,
    width: 2,
  },
  breakpoints: {
    md: "500px",
    lg: "720px",
  },
  colors: {
    background: "#F5F5F5",
    error: "#FF0033",
    link: "#0366D6",
    linkHover: "#0387D6",
    softError: "#FFBABA",
    softSuccess: "#DFF2BF",
    success: "#6CC070",
    text: "#30353B",
    warning: "#FF6633",
  },
  fontSize: [14, 18, 22, 34, 50],
  hangman: {
    fill: "#30353B",
    stroke: "48, 53, 59",
  },
  layout: {
    maxWidth: "1000px",
  },
  space: [4, 8, 16, 32, 64, 96, 128],
  transitions: [0.15, 0.2],
};

export const lightTheme: Theme = {
  ...baseTheme,
};

export const darkTheme: Theme = {
  ...baseTheme,
  border: {
    ...baseTheme.border,
    color: "transparent",
  },
  colors: {
    background: "#30353B",
    error: "#FF0033",
    link: "#54ACE0",
    linkHover: "#ABE0FF",
    softError: "#FF3E3E",
    softSuccess: "#2B8415",
    success: "#6CC070",
    text: "#F5F5F5",
    warning: "#FF6633",
  },
  hangman: {
    fill: "#ADADAD",
    stroke: "245, 245, 245",
  },
};
