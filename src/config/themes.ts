import { Theme } from "@emotion/react";

export const lightTheme: Theme = {
  border: {
    radius: 3,
    width: 2,
  },
  breakpoints: {
    md: "500px",
    lg: "720px",
  },
  colors: {
    background: "#F5F5F5",
    error: "#ff0033",
    link: "#0366d6",
    linkHover: "#0387d6",
    softError: "#FFBABA",
    softSuccess: "#DFF2BF",
    success: "#6cc070",
    text: "#30353b",
    warning: "#ff6633",
  },
  fontSize: [14, 18, 22, 34, 50],
  hangman: {
    stroke: "48, 53, 59",
  },
  layout: {
    maxWidth: "1000px",
  },
  space: [4, 8, 16, 32, 64, 96, 128],
  transitions: [0.15, 0.2],
};
