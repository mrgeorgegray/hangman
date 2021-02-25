/// <reference types="react-scripts" />

import "@emotion/react";
declare module "@emotion/react" {
  function useTheme(): Theme;
  export interface Theme {
    border: {
      radius: number;
      width: number;
    };
    breakpoints: {
      md: string;
      lg: string;
    };
    fontSize: number[];
    colors: {
      background: string;
      error: string;
      link: string;
      linkHover: string;
      softError: string;
      softSuccess: string;
      success: string;
      text: string;
      warning: string;
    };
    hangman: {
      stroke: string;
    };
    layout: {
      maxWidth: string;
    };
    space: number[];
    transitions: number[];
  }
}
