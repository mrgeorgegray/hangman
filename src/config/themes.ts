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
    grey: "#949DA5",
    link: "#0366D6",
    linkHover: "#0387D6",
    purple: "#6E40C9",
    softError: "#FFBABA",
    softSuccess: "#9BE9A8",
    success: "#27D545",
    text: "#30353B",
    warning: "#FF7903",
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
  transitions: [0.15, 0.2, 0.5],
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
    ...baseTheme.colors,
    background: "#0D1117",
    link: "#58A6FF",
    linkHover: "#ABE0FF",
    softError: "#DA3733",
    softSuccess: "#02602C",
    text: "#F5F5F5",
  },
  hangman: {
    fill: "#ADADAD",
    stroke: "245, 245, 245",
  },
};
